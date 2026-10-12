import { describe, expect, it, vi } from 'vitest';
import {
  getReleaseAssetDownloadUrl,
  getReleaseForTag,
  uploadDraftReleaseAsset
} from './github-release.mjs';

function createOctokit(overrides = {}) {
  return {
    repos: {
      getRelease: vi.fn(),
      getReleaseByTag: vi.fn(),
      listReleases: vi.fn(),
      deleteReleaseAsset: vi.fn(),
      uploadReleaseAsset: vi.fn()
    },
    paginate: vi.fn(),
    ...overrides
  };
}

describe('getReleaseForTag', () => {
  it('uses the workflow release ID so draft releases remain addressable', async () => {
    const octokit = createOctokit();
    octokit.repos.getRelease.mockResolvedValue({
      data: { id: 42, tag_name: 'v2.2.2', draft: true }
    });

    await expect(
      getReleaseForTag({
        octokit,
        owner: 'GigaPuddings',
        repo: 'snippets-code-t',
        tag: 'v2.2.2',
        releaseId: '42'
      })
    ).resolves.toMatchObject({ id: 42, draft: true });
    expect(octokit.repos.getReleaseByTag).not.toHaveBeenCalled();
  });

  it('falls back to the release list when the tag endpoint hides a draft', async () => {
    const octokit = createOctokit();
    octokit.repos.getReleaseByTag.mockRejectedValue({ status: 404 });
    octokit.paginate.mockResolvedValue([
      { id: 41, tag_name: 'v2.2.1', draft: false },
      { id: 42, tag_name: 'v2.2.2', draft: true }
    ]);

    await expect(
      getReleaseForTag({
        octokit,
        owner: 'GigaPuddings',
        repo: 'snippets-code-t',
        tag: 'v2.2.2'
      })
    ).resolves.toMatchObject({ id: 42, draft: true });
  });

  it('rejects a workflow release ID that belongs to another tag', async () => {
    const octokit = createOctokit();
    octokit.repos.getRelease.mockResolvedValue({
      data: { id: 42, tag_name: 'v2.2.1', draft: true }
    });

    await expect(
      getReleaseForTag({
        octokit,
        owner: 'GigaPuddings',
        repo: 'snippets-code-t',
        tag: 'v2.2.2',
        releaseId: '42'
      })
    ).rejects.toThrow('expected v2.2.2, got v2.2.1');
  });
});

describe('uploadDraftReleaseAsset', () => {
  const assetOptions = {
    owner: 'GigaPuddings',
    repo: 'snippets-code-t',
    release: {
      id: 42,
      tag_name: 'v2.2.10',
      draft: true,
      assets: [{ id: 7, name: 'setup.exe', size: 4 }]
    },
    name: 'setup.exe',
    data: Buffer.from('new build'),
    contentType: 'application/octet-stream'
  };

  it('replaces a previous draft build instead of skipping the new installer', async () => {
    const octokit = createOctokit();
    await uploadDraftReleaseAsset({ ...assetOptions, octokit });
    expect(octokit.repos.deleteReleaseAsset).toHaveBeenCalledWith({
      owner: assetOptions.owner,
      repo: assetOptions.repo,
      asset_id: 7
    });
    expect(octokit.repos.uploadReleaseAsset).toHaveBeenCalledWith(
      expect.objectContaining({
        release_id: 42,
        name: 'setup.exe',
        data: assetOptions.data
      })
    );
    expect(
      octokit.repos.deleteReleaseAsset.mock.invocationCallOrder[0]
    ).toBeLessThan(
      octokit.repos.uploadReleaseAsset.mock.invocationCallOrder[0]
    );
  });

  it('uploads a missing draft asset and calculates UTF-8 byte length', async () => {
    const octokit = createOctokit();
    const data = JSON.stringify({ notes: '发布说明' });
    await uploadDraftReleaseAsset({
      ...assetOptions,
      octokit,
      name: 'latest.json',
      data,
      contentType: 'application/json'
    });
    expect(octokit.repos.deleteReleaseAsset).not.toHaveBeenCalled();
    expect(octokit.repos.uploadReleaseAsset).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: {
          'content-type': 'application/json',
          'content-length': Buffer.byteLength(data)
        }
      })
    );
  });

  it('refuses to modify installers or metadata on a published release', async () => {
    const octokit = createOctokit();
    await expect(
      uploadDraftReleaseAsset({
        ...assetOptions,
        octokit,
        release: { ...assetOptions.release, draft: false }
      })
    ).rejects.toThrow('published release');
    expect(octokit.repos.deleteReleaseAsset).not.toHaveBeenCalled();
    expect(octokit.repos.uploadReleaseAsset).not.toHaveBeenCalled();
  });

  it('stops when removing an old asset fails', async () => {
    const octokit = createOctokit();
    octokit.repos.deleteReleaseAsset.mockRejectedValue(
      new Error('delete failed')
    );
    await expect(
      uploadDraftReleaseAsset({ ...assetOptions, octokit })
    ).rejects.toThrow('delete failed');
    expect(octokit.repos.uploadReleaseAsset).not.toHaveBeenCalled();
  });

  it('propagates upload failure so the workflow cannot publish incomplete assets', async () => {
    const octokit = createOctokit();
    octokit.repos.uploadReleaseAsset.mockRejectedValue(
      new Error('upload failed')
    );
    await expect(
      uploadDraftReleaseAsset({ ...assetOptions, octokit })
    ).rejects.toThrow('upload failed');
  });
});

describe('getReleaseAssetDownloadUrl', () => {
  it('builds the stable tagged URL even while the release is still a draft', () => {
    expect(
      getReleaseAssetDownloadUrl({
        owner: 'GigaPuddings',
        repo: 'snippets-code-t',
        tag: 'v2.2.2',
        assetName: 'snippets-code_2.2.2_x64-setup.exe'
      })
    ).toBe(
      'https://github.com/GigaPuddings/snippets-code-t/releases/download/v2.2.2/snippets-code_2.2.2_x64-setup.exe'
    );
  });
});

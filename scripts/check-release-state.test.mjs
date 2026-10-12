import { describe, expect, it, vi } from 'vitest';
import { checkReleaseState } from './check-release-state.mjs';

const options = {
  owner: 'GigaPuddings',
  repo: 'snippets-code-t',
  tag: 'v2.2.10',
  version: '2.2.10'
};

function publishedRelease() {
  return {
    tag_name: options.tag,
    draft: false,
    prerelease: false,
    assets: [
      'snippets-code_2.2.10_x64-setup.exe',
      'snippets-code_2.2.10_x64-setup.exe.sig',
      'latest.json'
    ].map((name) => ({ name, state: 'uploaded', size: 100 }))
  };
}

function client(release) {
  return {
    repos: { getReleaseByTag: vi.fn().mockResolvedValue({ data: release }) }
  };
}

describe('checkReleaseState', () => {
  it('skips a second run after the first run published the same version', async () => {
    const release = publishedRelease();
    release.draft = true;
    const octokit = client(release);
    await expect(checkReleaseState({ ...options, octokit })).resolves.toBe(
      false
    );
    release.draft = false;
    await expect(checkReleaseState({ ...options, octokit })).resolves.toBe(
      true
    );
  });

  it('continues when the release has not been created or the draft is hidden', async () => {
    const octokit = client(null);
    octokit.repos.getReleaseByTag.mockRejectedValue({ status: 404 });
    await expect(checkReleaseState({ ...options, octokit })).resolves.toBe(
      false
    );
  });

  it('does not treat authentication or API failures as a missing release', async () => {
    const octokit = client(null);
    const error = Object.assign(new Error('Forbidden'), { status: 403 });
    octokit.repos.getReleaseByTag.mockRejectedValue(error);
    await expect(checkReleaseState({ ...options, octokit })).rejects.toBe(
      error
    );
  });

  it.each([
    'snippets-code_2.2.10_x64-setup.exe',
    'snippets-code_2.2.10_x64-setup.exe.sig',
    'latest.json'
  ])(
    'stops rather than overwriting a published release missing %s',
    async (name) => {
      const release = publishedRelease();
      release.assets = release.assets.filter((asset) => asset.name !== name);
      await expect(
        checkReleaseState({ ...options, octokit: client(release) })
      ).rejects.toThrow('is incomplete');
    }
  );

  it.each([
    { state: 'starter', size: 100 },
    { state: 'uploaded', size: 0 }
  ])(
    'requires each published asset to be fully uploaded and nonempty: %j',
    async (assetState) => {
      const release = publishedRelease();
      Object.assign(release.assets[0], assetState);
      await expect(
        checkReleaseState({ ...options, octokit: client(release) })
      ).rejects.toThrow('is incomplete');
    }
  );

  it('rejects running the manual workflow against main instead of the version tag', async () => {
    const octokit = client(publishedRelease());
    await expect(
      checkReleaseState({ ...options, tag: 'main', octokit })
    ).rejects.toThrow('expected v2.2.10, got main');
    expect(octokit.repos.getReleaseByTag).not.toHaveBeenCalled();
  });

  it('does not skip or promote a prerelease as the stable release', async () => {
    const release = publishedRelease();
    release.prerelease = true;
    await expect(
      checkReleaseState({ ...options, octokit: client(release) })
    ).rejects.toThrow('is a prerelease');
  });
});

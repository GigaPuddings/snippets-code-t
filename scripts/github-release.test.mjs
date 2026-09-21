import { describe, expect, it, vi } from 'vitest';
import { getReleaseForTag } from './github-release.mjs';

function createOctokit(overrides = {}) {
  return {
    repos: {
      getRelease: vi.fn(),
      getReleaseByTag: vi.fn(),
      listReleases: vi.fn()
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

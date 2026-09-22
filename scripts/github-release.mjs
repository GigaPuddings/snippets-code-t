function parseReleaseId(value) {
  if (value === undefined || value === null || value === '') return null;

  const releaseId = Number(value);
  if (!Number.isSafeInteger(releaseId) || releaseId <= 0) {
    throw new Error(`Invalid GitHub release ID: ${value}`);
  }
  return releaseId;
}

function assertReleaseTag(release, tag) {
  if (release.tag_name !== tag) {
    throw new Error(
      `GitHub release tag mismatch: expected ${tag}, got ${release.tag_name}`
    );
  }
  return release;
}

export function getReleaseAssetDownloadUrl({ owner, repo, tag, assetName }) {
  const path = [owner, repo, 'releases', 'download', tag, assetName]
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `https://github.com/${path}`;
}

export async function getReleaseForTag({
  octokit,
  owner,
  repo,
  tag,
  releaseId
}) {
  const parsedReleaseId = parseReleaseId(releaseId);
  if (parsedReleaseId !== null) {
    const { data: release } = await octokit.repos.getRelease({
      owner,
      repo,
      release_id: parsedReleaseId
    });
    return assertReleaseTag(release, tag);
  }

  try {
    const { data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag
    });
    return release;
  } catch (error) {
    if (error?.status !== 404) throw error;
  }

  // GitHub's release-by-tag endpoint does not return draft releases. Listing
  // releases with a write-capable token does, which keeps local/manual retries
  // functional even when the workflow release ID is unavailable.
  const releases = await octokit.paginate(octokit.repos.listReleases, {
    owner,
    repo,
    per_page: 100
  });
  const release = releases.find((candidate) => candidate.tag_name === tag);
  if (!release) {
    throw new Error(`GitHub release not found for tag ${tag}`);
  }
  return release;
}

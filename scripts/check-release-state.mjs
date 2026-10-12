import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { Octokit } from '@octokit/rest';

// Duplicate tag pushes and retries must not rebuild an already published version.
export async function checkReleaseState({
  octokit,
  owner,
  repo,
  tag,
  version
}) {
  if (tag !== `v${version}`) {
    throw new Error(`Release tag mismatch: expected v${version}, got ${tag}`);
  }

  let release;
  try {
    ({ data: release } = await octokit.repos.getReleaseByTag({
      owner,
      repo,
      tag
    }));
  } catch (error) {
    // No release, or a draft hidden by this endpoint: continue the release job.
    if (error?.status === 404) return false;
    throw error;
  }
  if (release.draft) return false;
  if (release.prerelease) {
    throw new Error(
      `Release ${tag} is a prerelease; cannot publish it as latest`
    );
  }

  const setupName = `snippets-code_${version}_x64-setup.exe`;
  const missingAssets = [setupName, `${setupName}.sig`, 'latest.json'].filter(
    (name) =>
      !release.assets.some(
        (asset) =>
          asset.name === name && asset.state === 'uploaded' && asset.size > 0
      )
  );
  if (missingAssets.length) {
    throw new Error(
      `Published release ${tag} is incomplete (${missingAssets.join(', ')}). ` +
        'Refusing to overwrite a published installer.'
    );
  }
  return true;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    const require = createRequire(import.meta.url);
    const { version } = require('../src-tauri/tauri.conf.json');
    const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
    if (!owner || !repo)
      throw new Error('GITHUB_REPOSITORY must be owner/repo');
    const skip = await checkReleaseState({
      octokit: new Octokit({ auth: process.env.GITHUB_TOKEN }),
      owner,
      repo,
      tag: process.env.GITHUB_REF_NAME,
      version
    });
    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `skip=${skip}\n`);
    }
    console.log(
      skip
        ? '✅ Release already published; skipping duplicate release job'
        : '📦 Continue creating or resuming the draft release'
    );
  } catch (error) {
    console.error('❌ Release preflight failed:', error.message);
    process.exitCode = 1;
  }
}

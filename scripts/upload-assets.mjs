import { createRequire } from 'module';
import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';
import {
  getReleaseForTag,
  uploadDraftReleaseAsset
} from './github-release.mjs';

const require = createRequire(import.meta.url);
const tauriConfig = require('../src-tauri/tauri.conf.json');

// 从环境变量获取 GitHub token
const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

// GitHub 仓库信息
const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
const tag = process.env.GITHUB_REF_NAME;
const releaseId = process.env.GITHUB_RELEASE_ID;

async function uploadFile(release, filePath, fileName) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const contentType = fileName.endsWith('.sig')
      ? 'text/plain'
      : 'application/octet-stream';

    await uploadDraftReleaseAsset({
      octokit,
      owner,
      repo,
      release,
      name: fileName,
      data: fileContent,
      contentType
    });

    console.log(`✅ 已上传: ${fileName}`);
  } catch (error) {
    console.error(`❌ 上传失败 ${fileName}:`, error.message);
    throw error;
  }
}

async function main() {
  try {
    const expectedTag = `v${tauriConfig.version}`;
    if (tag !== expectedTag) {
      throw new Error(
        `Release tag mismatch: expected ${expectedTag}, got ${tag}`
      );
    }
    // 获取 release
    const release = await getReleaseForTag({
      octokit,
      owner,
      repo,
      tag,
      releaseId
    });

    if (!release.draft) {
      throw new Error(
        `Refusing to upload a new build to published release ${tag}`
      );
    }

    console.log(`📦 正在上传资产到 Release: ${release.name}`);

    // 构建文件路径 - 本地构建的文件本来就不带 _windows 后缀
    const basePath = path.resolve('./src-tauri/target/release/bundle/nsis');
    const setupFileName = `snippets-code_${tauriConfig.version}_x64-setup.exe`;
    const setupFilePath = path.join(basePath, setupFileName);
    const sigFilePath = `${setupFilePath}.sig`;

    // Validate both files before changing remote assets. A missing signature
    // must not leave a new installer paired with the old build's signature.
    for (const filePath of [setupFilePath, sigFilePath]) {
      if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
        throw new Error(`构建文件不存在或为空: ${filePath}`);
      }
    }

    // Remove draft metadata before replacing the installer/signature pair.
    const existingMetadata = release.assets.find(
      (asset) => asset.name === 'latest.json'
    );
    if (existingMetadata) {
      await octokit.repos.deleteReleaseAsset({
        owner,
        repo,
        asset_id: existingMetadata.id
      });
    }

    await uploadFile(release, setupFilePath, setupFileName);
    await uploadFile(release, sigFilePath, `${setupFileName}.sig`);

    console.log('✨ 所有文件上传完成');
  } catch (error) {
    console.error('❌ 错误:', error);
    process.exit(1);
  }
}

main();

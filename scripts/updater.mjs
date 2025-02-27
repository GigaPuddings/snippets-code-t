// 注意要安装@actions/github依赖
import { context, getOctokit } from "@actions/github";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is required");
  }

  const octokit = getOctokit(token);
  
  try {
    // 获取最新发布的版本信息
    const { data: release } = await octokit.rest.repos.getLatestRelease({
      owner: context.repo.owner,
      repo: context.repo.repo,
    });

    // 读取 tauri.conf.json 获取当前版本
    const tauriConfig = JSON.parse(
      readFileSync(resolve("src-tauri", "tauri.conf.json"), "utf8")
    );

    // 构建更新信息
    const platforms = {};

    // 遍历 release 资源，获取各平台安装包和签名信息
    for (const asset of release.assets) {
      if (asset.name.endsWith(".msi.zip")) {
        platforms["windows-x86_64"] = {
          url: asset.browser_download_url,
          signature: ""
        };
      } else if (asset.name.endsWith(".app.tar.gz")) {
        platforms["darwin-x86_64"] = {
          url: asset.browser_download_url,
          signature: ""
        };
        // 同时支持 M1 芯片
        platforms["darwin-aarch64"] = {
          url: asset.browser_download_url,
          signature: ""
        };
      } else if (asset.name.endsWith(".AppImage.tar.gz")) {
        platforms["linux-x86_64"] = {
          url: asset.browser_download_url,
          signature: ""
        };
      } else if (asset.name.endsWith(".msi.zip.sig")) {
        if (platforms["windows-x86_64"]) {
          platforms["windows-x86_64"].signature = await downloadSignature(asset.browser_download_url);
        }
      } else if (asset.name.endsWith(".app.tar.gz.sig")) {
        if (platforms["darwin-x86_64"]) {
          const signature = await downloadSignature(asset.browser_download_url);
          platforms["darwin-x86_64"].signature = signature;
          platforms["darwin-aarch64"].signature = signature;
        }
      } else if (asset.name.endsWith(".AppImage.tar.gz.sig")) {
        if (platforms["linux-x86_64"]) {
          platforms["linux-x86_64"].signature = await downloadSignature(asset.browser_download_url);
        }
      }
    }

    // 生成更新信息文件
    const updateData = {
      version: tauriConfig.version,
      notes: release.body || "See the assets to download this version and install.",
      pub_date: new Date().toISOString(),
      platforms
    };

    writeFileSync("latest.json", JSON.stringify(updateData, null, 2));

    // 上传 latest.json 到 release
    await octokit.rest.repos.uploadReleaseAsset({
      owner: context.repo.owner,
      repo: context.repo.repo,
      release_id: release.id,
      name: "latest.json",
      data: JSON.stringify(updateData, null, 2)
    });

    console.log("Successfully generated and uploaded latest.json");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

async function downloadSignature(url) {
  const response = await fetch(url);
  return await response.text();
}

main();

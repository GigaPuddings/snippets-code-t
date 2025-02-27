// 注意要安装@actions/github依赖
import { context, getOctokit } from "@actions/github";
import { readFile } from "node:fs/promises";

// 在容器中可以通过env环境变量来获取参数
const octokit = getOctokit(process.env.GITHUB_TOKEN);

const updateRelease = async () => {
  try {
    // 获取最新的 release
    const { data: release } = await octokit.rest.repos.getLatestRelease({
      owner: context.repo.owner,
      repo: context.repo.repo
    });

    // 删除旧的 latest.json 文件（如果存在）
    for (const asset of release.assets) {
      if (asset.name === "latest.json") {
        await octokit.rest.repos.deleteReleaseAsset({
          owner: context.repo.owner,
          repo: context.repo.repo,
          asset_id: asset.id
        });
      }
    }

    // 读取并上传新的 latest.json
    const fileContent = await readFile("latest.json", { encoding: "utf-8" });
    
    await octokit.rest.repos.uploadReleaseAsset({
      owner: context.repo.owner,
      repo: context.repo.repo,
      release_id: release.id,
      name: "latest.json",
      data: fileContent
    });

    console.log("Successfully updated latest.json");
  } catch (error) {
    console.error("Error updating release:", error);
    process.exit(1);
  }
};

updateRelease();

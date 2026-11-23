# VIVID Project Page

目标地址：https://qiuzyc.github.io/VIVID/

这是可以直接部署的纯静态网页，无需 npm、Node.js 或编译。

## 上传方法

1. 解压 `VIVID-github.zip`。
2. 打开 GitHub 上 `qiuzyc/VIVID` 仓库；如果还没有，创建名为 `VIVID` 的公开仓库。
3. 将解压得到的全部文件和 `assets` 文件夹上传到仓库根目录。确保仓库首页直接能看到 `index.html`，不要再套一层 `VIVID` 或 `dist` 文件夹，也不要只上传 ZIP 文件。
4. 打开仓库的 Settings → Pages。在 Build and deployment 下，将 Source 设为 Deploy from a branch，选择 `main` 分支和 `/ (root)` 目录并保存。
5. 等待 GitHub Pages 部署完成后，打开 https://qiuzyc.github.io/VIVID/ 。实际发布状态以 GitHub 仓库的 Pages / Actions 结果为准。

GitHub 官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 文件结构

```
index.html          页面正文
style.css           样式和手机适配
script.js           两张图的点击放大
.nojekyll           关闭 Jekyll 处理
README.md           本说明
assets/
  favicon.svg       网页图标
  paper.pdf         用户提供的论文
  layerwise.png     Layer-wise 实验图
  layerwise.pdf     实验图原始 PDF
  method.png        VIVID 方法图
  method.pdf        方法图原始 PDF
```

## 预览与修改

- 本地双击 `index.html` 即可预览，不需要启动服务器。
- 修改文字：编辑 `index.html`；修改颜色和排版：编辑 `style.css`。
- 页面使用相对资源路径，适配 GitHub Pages 的 `/VIVID/` 项目路径。
- 页面含论文标题、作者、机构、Abstract、Key Insight、两张图及原始 PDF 链接。
- Abstract 来自用户提供的论文，省略了结尾重复的 project page 地址句。
- Paper 按钮打开本地论文 PDF；之后可自行将链接替换为真实 arXiv 地址。
- 未加入尚未提供的 arXiv 编号、Code 链接或会议录用信息。

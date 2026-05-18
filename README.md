# AIGlance - Vercel 部署版本

一个简洁的 AI 新闻聚合应用，完全免费，无需服务器！

## 🚀 部署步骤

### 1. 推送到 GitHub

```bash
cd /Users/bytedance/Documents/上海交通大学/AIGlance-deploy
git init
git add .
git commit -m "Initial commit for AIGlance"
```

然后在 GitHub 创建一个新仓库，并按照提示推送到远程。

### 2. 在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **Add New Project**
3. 选择你刚才创建的 GitHub 仓库
4. 点击 **Deploy**（不需要改任何配置）

完成！部署成功后会给你一个类似 `https://aiglance-xxxxx.vercel.app` 的链接。

## 📁 项目结构

```
├── api/
│   ├── timeline.js       # 时间线 API
│   └── personalities.js  # 人物列表 API
├── index.html            # 主页面
├── vercel.json           # Vercel 配置
└── package.json          # 依赖配置
```

## ✨ 特性

- 🤖 免费数据：AI 新闻数据库 + Hacker News API
- 🎨 科技感界面：深色主题，动态效果
- 💡 AI 摘要：每条新闻都有智能中文摘要
- 🔄 实时更新：每次刷新获取最新数据

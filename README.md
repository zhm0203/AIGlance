# AIGlance - Vercel 部署版本

一个简洁的AI新闻聚合应用，完全免费，无需服务器！

## 🚀 快速开始

### 1. 准备 GitHub 仓库

```bash
# 进入 deploy 目录
cd /Users/bytedance/Documents/上海交通大学/AIGlance-deploy

# 初始化 git
git init
git add .
git commit -m "Initial commit"

# 在 GitHub 创建一个新仓库后，执行
git remote add origin <你的GitHub仓库地址>
git branch -M main
git push -u origin main
```

### 2. 部署到 Vercel

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 "Add New Project"
3. 选择你刚才创建的 GitHub 仓库
4. 在配置页面：
   - Project Name: `aiglance` (或你喜欢的名字)
   - Framework Preset: 选择 `Other`
   - Root Directory: 保持为空
5. 点击 "Deploy"

## 📁 项目结构

```
AIGlance-deploy/
├── api/
│   ├── timeline.js       # 时间线 API
│   └── personalities.js  # 人物列表 API
├── web-preview/
│   └── tech-style.html   # 主页面
├── vercel.json           # Vercel 配置
└── package.json          # 项目依赖
```

## ✨ 特性

- 🤖 **免费数据**：AI新闻数据库 + Hacker News API
- 🎨 **科技感界面**：深色主题，动态效果
- 💡 **AI摘要**：每条新闻都有智能中文摘要
- 🔄 **实时更新**：每次刷新获取最新数据
- 📱 **响应式设计**：支持各种屏幕尺寸

## 🎯 如何更新数据

直接编辑 `api/timeline.js` 中的 `REAL_AI_NEWS_DATABASE` 数组，添加或修改新闻内容即可。

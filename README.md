# Smart Translation VSCode 插件

Smart Translation 是一款为 VSCode 开发的智能翻译插件，提供便捷的代码注释和文档翻译功能。

## 功能特性

- **高质量的 AI 翻译**：
  - 智谱 GLM-4 翻译（默认，免费使用，提供免密钥体验版）
  - DeepSeek AI 翻译（需要 API 密钥和充值）
  - 支持中英文互译，准确度高

- **便捷翻译操作**：
  - 编辑器中选择文本后使用快捷键翻译
  - 编辑器右键菜单快速访问翻译功能
  - 自定义快捷键支持

- **个性化设置**：
  - 中文和英文互译
  - 配置 API 密钥
  - 可调整连接和读取超时设置
  - 选择首选翻译引擎

## 安装方法

### 从 VSCode 插件市场安装

1. 在 VSCode 中打开扩展视图（Ctrl+Shift+X 或 Cmd+Shift+X）
2. 搜索 "Smart Translation"
3. 点击安装按钮
4. 重启 VSCode

### 手动安装

1. 从 [Releases](https://github.com/jaychenthinkfast/SmartTranslationVscode/releases) 页面下载最新版本的插件 VSIX 文件
2. 在 VSCode 中打开扩展视图
3. 点击 "..." 菜单，选择 "从 VSIX 安装..."
4. 选择下载的 VSIX 文件
5. 重启 VSCode

## 使用方法

### 快速翻译

1. 在编辑器中选择要翻译的文本
2. 使用默认快捷键 `Ctrl+Alt+T`（Windows/Linux）或 `⌘⌥T`（macOS）
3. 或者右键点击选中文本，选择 "Smart Translation"

### 配置插件

1. 在 VSCode 中打开设置（Ctrl+, 或 Cmd+,）
2. 搜索 "Smart Translation"
3. 配置以下选项：
   - 选择首选的翻译引擎（默认为智谱 GLM-4）
   - 智谱 GLM-4 API 密钥（首选，免费使用）
   - DeepSeek API 密钥（可选）
   - 连接超时和读取超时设置
   - 自定义快捷键

## 支持的语言

插件支持多种语言翻译，主要针对中文和英文互译进行了优化。

## 翻译引擎

### 智谱 GLM-4（推荐）
- 提供免密钥体验版，无需注册即可使用
- 支持 API 密钥模式，注册后获取密钥可享受更稳定的服务
- 基于智谱 GLM-4-Flash 大型语言模型
- 翻译质量高，速度快
- [注册获取 API 密钥](https://www.bigmodel.cn/invite?icode=k7Ec6USMTbEd4du4ZxULXpmwcr074zMJTpgMb8zZZvg%3D)

### DeepSeek
- 需要 API 密钥和充值
- 基于 DeepSeek 大型语言模型
- 支持多种语言翻译
- [注册获取 API 密钥](https://platform.deepseek.com/)

## 开发指南

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn
- VSCode 1.85.0 或更高版本

### 构建项目

```bash
# 克隆仓库
git clone https://github.com/jaychenthinkfast/SmartTranslationVscode.git
cd SmartTranslationVscode

# 安装依赖
npm install

# 构建插件
npm run compile
```

### 运行和调试

1. 在 VSCode 中打开项目
2. 按 F5 启动调试
3. 在扩展开发主机中测试插件

### 发布插件

```bash
# 安装 vsce
npm install -g @vscode/vsce

# 打包插件
vsce package

# 发布到 VSCode 插件市场
vsce publish
```

## API 密钥获取

### 智谱 GLM-4 API 密钥（推荐）

1. 访问 [智谱 AI 官网](https://www.bigmodel.cn/invite?icode=k7Ec6USMTbEd4du4ZxULXpmwcr074zMJTpgMb8zZZvg%3D)
2. 注册/登录您的账户
3. 导航至 API 密钥管理页面
4. 创建新的 API 密钥
5. 将生成的密钥复制到插件设置中
6. 无需充值，免费使用

### DeepSeek API 密钥

1. 访问 [DeepSeek 官网](https://platform.deepseek.com/)
2. 注册/登录您的账户
3. 导航至 API 密钥管理页面
4. 创建新的 API 密钥
5. 将生成的密钥复制到插件设置中
6. 需要充值后才能使用

## 注意事项

- 翻译长文本时可能需要较长时间，建议增加超时设置
- 确保网络连接稳定，尤其是当连接到国际API时
- 推荐优先使用智谱 GLM-4 服务，提供免密钥体验版，注册后使用 API 密钥可获得更稳定的服务

## 许可证

[MIT License](LICENSE) 
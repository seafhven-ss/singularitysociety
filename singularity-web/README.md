# Singularity Society 主网站

这是 `www.singularity-society.com` 的 Next.js App Router 主网站。

当前网站定位：面向全品类中小型成长型企业，提供 AI 搜索增长与 GEO 赋能服务，帮助企业在 AI 搜索时代建立品牌可见性、内容资产和询盘转化系统。

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

打开：

```text
http://localhost:3000
```

发布前检查：

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## 线索提交通道配置

`/contact` 页面用于接收“AI 可见性诊断”预约申请。

当前提交流程：

```text
/contact 表单
-> 浏览器 localStorage 备份
-> POST /api/leads
-> 飞书群机器人 Webhook 通知
```

### 创建飞书群机器人

1. 打开飞书，进入用于接收线索的群聊。
2. 进入群设置，找到“群机器人”或“机器人”。
3. 添加“自定义机器人”。
4. 复制机器人 Webhook URL。
5. 建议在机器人安全设置中开启“签名校验”，复制飞书生成的签名密钥。

### 本地配置

在项目根目录创建 `.env.local`：

```bash
FEISHU_WEBHOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/your-webhook-token
FEISHU_WEBHOOK_SECRET=your-feishu-signature-secret
```

配置后需要重启开发服务：

```bash
npm run dev
```

### 部署配置

部署到 Vercel、Cloudflare Pages、阿里云服务器或其他平台时，在平台环境变量中配置：

```bash
FEISHU_WEBHOOK_URL=你的飞书机器人 Webhook URL
FEISHU_WEBHOOK_SECRET=你的飞书机器人签名密钥
```

不要把真实 Webhook URL 写入源码，也不要提交到 Git。

### 飞书机器人安全设置

飞书自定义机器人支持签名校验。开启后，站内 API 会在发送消息时自动生成 `timestamp` 和 `sign`，用于降低 Webhook URL 泄露后被滥用的风险。

配置方式：

1. 在飞书群机器人设置中进入自定义机器人详情。
2. 打开安全设置，选择“签名校验”。
3. 复制飞书生成的签名密钥。
4. 在 `.env.local` 或部署平台环境变量中配置 `FEISHU_WEBHOOK_SECRET`。
5. 重启服务后再提交 `/contact` 表单测试。

如果只配置 `FEISHU_WEBHOOK_URL`，消息仍可发送，但安全性较弱；正式获客环境建议同时配置 `FEISHU_WEBHOOK_SECRET`。

### 未配置 Webhook 时的降级行为

如果没有配置 `FEISHU_WEBHOOK_URL`：

- `/api/leads` 仍返回 `success: true`
- `delivered` 返回 `false`
- 服务端日志输出 `Feishu webhook not configured`
- 前端仍显示提交成功提示
- 浏览器 `localStorage` 继续保留一份本地备份

### 本地飞书实测步骤

1. 在飞书群中创建自定义机器人，并复制 Webhook URL。
2. 建议开启“签名校验”，复制签名密钥。
3. 在项目根目录创建 `.env.local`，写入 `FEISHU_WEBHOOK_URL=...` 和 `FEISHU_WEBHOOK_SECRET=...`。
4. 重启开发服务：`npm run dev`。
5. 打开 `http://localhost:3000/contact`。
6. 填写测试企业信息并提交表单。
7. 页面出现“已收到你的诊断申请”提示。
8. 检查飞书群是否收到“新的 AI 可见性诊断申请”消息。

## 主要页面

- `/` 首页
- `/services` 服务方案
- `/geo-diagnosis` AI 可见性诊断
- `/demo` GEO Growth Lab 工具演示
- `/contact` 预约 AI 可见性诊断
- `/cases` 案例
- `/about` 关于
- `/products` 旧产品页，暂时保留

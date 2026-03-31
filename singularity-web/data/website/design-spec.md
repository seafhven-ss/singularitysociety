# 奇点社官网设计规范 v1.4

> singularity-society.com 改造设计规范
> 对标融合：Resend（首屏留白节奏+开发者克制美学）· Linear（文案自信度+截图处理精度）· Metalab/Suno（案例叙事视觉节奏）
> 技术栈：Next.js 16 + TypeScript + Tailwind v4 + Framer Motion + next-intl 双语
> 视觉方向：「安静的工作台」，不是「AI发布会」。克制、精确、服务内容。

---

## 1. 页面结构（Site Map）

```
/                   → 首页（Hero + 产品概览 + 社会证明）
/products           → 产品总览页（所有产品卡片，含概念阶段）
/products/nexus     → Nexus 产品详情页
/products/prism     → Prism 产品详情页
/products/probrief  → ProBrief 产品详情页
/products/taoxiaofeng → 淘小枫桌面 AI 互动手办 产品详情页
/cases              → 案例总览页
/cases/[slug]       → 案例详情页（动态路由）
/about              → 关于页（创始人故事 + 团队 + 使命）
/contact            → 联系页（表单 + 社交链接）
```

**砍掉的页面：** 当前首页的"能力展示"和"定价"板块全部移除，能力通过产品页体现，定价通过联系/咨询入口替代。

**路由实现：** 使用 Next.js App Router，`app/[locale]/` 下按路径组织，next-intl 替代当前的 LanguageContext 手动方案。

---

## 2. 首屏设计（Hero Section）

### 2.1 视觉结构（参考 Resend 留白节奏）

```
┌─────────────────────────────────────────┐
│  Nav: Logo(左) · Products Cases About · Lang Toggle · CTA(右)  │
├─────────────────────────────────────────┤
│                                         │
│              [大面积留白]                │
│                                         │
│     真实业务问题 × 轻量 AI 产品 × 公开构建     │
│     一个人的 AI 产品实验室，公开构建中          │
│                                         │
│         [ 了解更多 ]   [ 联系我们 ]        │
│                                         │
└─────────────────────────────────────────┘
```

### 2.2 首屏视觉规范（去装饰化）

- **核心原则：** 无3D装饰物，用留白和字体层级建立高级感（参考 Resend 首屏）
- **禁止元素：** 发光立方体、全息渐变几何体、霓虹网格、粒子效果、科幻光效
- **允许元素：** 品牌色细线装饰、极简图标、产品截图/文档卡片
- **主视觉语义：** 「构建现场」——文档卡片、项目截图、版本记录、白板痕迹，不是科幻特效
- **移动端：** 首屏只保留一个核心标题 + 简短说明 + 一个主按钮，删除所有装饰元素

### 2.3 品牌声明区

- **主标题：** 真实业务问题 × 轻量 AI 产品 × 公开构建 / Real Problems · Lean AI Products · Built in Public
- **副标题：** 一个人的 AI 产品实验室，公开构建中 / One-person AI product lab. Building in public.
- **调性规则（来源：personality.md）：**
  - 主调性（80%）：专业克制——数据说话，不堆形容词，信息密度高，情绪密度低
  - 副调性（15%）：前沿学习者——分享过程包括弯路，不扮演专家
  - 底色（5%）：真实有温度——文学底色偶尔透出，承认不确定性
  - 官网人称：无主语或"奇点社"做主语，不用"我们"
  - 英文版用短句 builder 圈调性，中文版克制文学感
  - 禁用词：赋能、抓手、降维打击、闭环、打法、颠覆、革命性

### 2.4 产品卡片入口

- **数量：** 4 张（Nexus / Prism / ProBrief / 淘小枫）
- **前 3 张：** 已交付产品，正常样式
- **第 4 张（淘小枫）：** 带 `开发中` Badge，卡片右上角显示状态标签，视觉上稍降一级（opacity 0.85 或虚线边框）以区分开发中状态，但保持可点击
- **卡片结构：** 图标 + 产品名 + 一句话定位 + 箭头链接
- **hover 效果：** 卡片边框显现品牌主色描边 `--accent-indigo`，轻微上浮 `translateY(-4px)`
- **移动端：** 横向滚动卡片，或 2×2 网格

---

## 3. 产品展示区设计（Product Sections）

### 3.1 首页产品概览（参考 Linear）

每个产品一个 section，全屏宽度，交替布局：

```
Section 1: Nexus
┌──────────────────────────────────────┐
│  左侧文案区(40%)    右侧截图区(60%)   │
│  · 产品名                            │
│  · 一句话定位                         │
│  · 三个关键特性(图标+短句)             │
│  · [查看详情 →]       [产品截图/录屏]  │
└──────────────────────────────────────┘

Section 2: Prism（左右互换）
Section 3: ProBrief（同 Section 1）
Section 4: 淘小枫桌面 AI 互动手办（左右互换，带"开发中"标签）
```

### 3.2 截图展示规范（参考 Linear）

- **容器：** 圆角 `16px`，背景 `#16161F`，内边距 `24px`
- **截图处理：** 实际产品截图，暗色模式，加轻微阴影 `0 24px 48px rgba(0,0,0,0.4)`
- **动画：** 滚动进入时从底部渐入 `opacity: 0→1, translateY: 40px→0`，持续 `600ms`，`ease-out`
- **移动端：** 截图区在文案区下方，全宽显示

### 3.3 产品详情页结构（/products/[slug]）

```
1. Hero: 产品名 + 一句话定位 + 全屏产品截图
2. Features: 3-6个关键特性，每个特性=图标+标题+2行描述+截图
3. How it works: 3步流程图解
4. CTA: 联系咨询 / 查看案例
```

### 3.4 产品文案结构

| 字段 | 规范 |
|------|------|
| 产品名 | 英文名，Display 字号 |
| 一句话定位 | ≤15 个中文字 / ≤10 个英文词 |
| 关键特性 | 3 个，每个=动词开头的短句 |
| CTA | 主按钮 + 次按钮（ghost） |

**产品定位（来源：taglines.md）：**

| 产品 | 定位 | 状态 |
|------|------|------|
| Nexus | 你的 Telegram AI 执行助手，带记忆，能编码，会生图 | 内部使用中 · 持续迭代 |
| Prism | 给普通人的 QQ AI 助手，一键安装，开箱即用 | 内测中 |
| ProBrief | AI 驱动的提案结构化工具，把模糊需求变成专业 Brief | 已交付 · 开源 |
| 淘小枫桌面 AI 互动手办 | 淘小枫 × 奇点社：国内首个能听懂你说话的 AI 桌面手办 | 开发中 · 最高优先级 |

**淘小枫产品展示规范：**

- **叙事定位：** AI 技术让经典角色获得新的交互生命——淘小枫从屏幕里走到你的桌面上，能听、能说、能陪伴。奇点社（AI 产品+软件）× 淘小枫 IP（角色授权）联合打造。
- **文案原则：** 「淘小枫」和「奇点社」始终并列出现，使用"联合打造""共同推出"等平等表述，避免从属表述。
- **关键特性：**
  1. 知名 IP 形象 — 2013 年创作，多个动漫 IP 奖项认证
  2. AI 对话能力 — 基于 Prism 引擎，能听懂、能回应
  3. 实体桌面陪伴 — 从屏幕走到桌面，硬件+软件一体化
- **截图/视觉：** 因产品开发中，使用概念渲染图 + 进度状态面板（体现"公开构建"调性）
- **CTA：** "关注开发进度" / "Follow Development"（而非"立即购买"）

---

## 4. 案例页设计（Case Studies）

### 4.1 案例总览页（/cases）

- 网格布局：2列（桌面）/ 1列（移动）
- 每张卡片：封面图 + 客户行业标签 + 项目标题 + 一句话结果
- hover：图片轻微放大 `scale(1.03)`，叠加半透明暗色遮罩 `rgba(10,10,10,0.3)`

### 4.2 案例详情页模板（参考 Metalab/Suno）

叙事结构：

```
┌─────────────────────────────────┐
│ HERO: 全宽项目封面图              │
│ 项目名 · 客户行业 · 年份          │
├─────────────────────────────────┤
│ OVERVIEW                        │
│ 项目概述（2-3 句话）              │
│ ┌────────┬────────┬────────┐   │
│ │ 周期    │ 服务类型 │ 关键数据 │   │
│ └────────┴────────┴────────┘   │
├─────────────────────────────────┤
│ 背景 CONTEXT                    │
│ 客户是谁 + 面临什么问题           │
│ （2段，配图可选）                 │
├─────────────────────────────────┤
│ 挑战 CHALLENGE                  │
│ 核心难点 + 约束条件               │
│ （1-2段）                        │
├─────────────────────────────────┤
│ 方案 APPROACH                   │
│ 我们做了什么 + 为什么这么做        │
│ （配大图/截图/流程图）             │
├─────────────────────────────────┤
│ 结果 RESULTS                    │
│ 量化数据 + 客户评价（可选）        │
│ ┌────────┬────────┬────────┐   │
│ │ 数据1   │ 数据2   │ 数据3  │   │
│ └────────┴────────┴────────┘   │
├─────────────────────────────────┤
│ CTA: 查看更多案例 / 联系我们       │
└─────────────────────────────────┘
```

### 4.3 案例页约束

- 必须使用真实项目数据，不造假
- 客户名称需授权后才能展示全称
- 关键数据用数字（如 "3周交付" "成本降低40%"），不用模糊描述

---

## 5. 导航与布局

### 5.1 顶部导航栏

- **固定置顶**，背景 `#0A0A0A` + `backdrop-filter: blur(12px)` + 底部 1px `#2A2A3A` 分割线
- **高度：** 桌面 `64px` / 移动 `56px`
- **结构：** Logo(左) · 导航链接(中) · 语言切换+CTA按钮(右)
- **导航项：** Products · Cases · About · Contact
- **移动端：** 汉堡菜单，全屏暗色浮层展开
- **滚动行为：** 向下滚动隐藏，向上滚动显现

### 5.2 页脚（Footer）

```
┌─────────────────────────────────────┐
│  品牌色细分隔线 1px (--gradient-brand)   │
├──────────┬──────────┬───────────────┤
│ 品牌区    │ 导航链接   │ 社交/联系              │
│ Logo     │ Products  │ GitHub                │
│ 一句话    │ Cases     │ X @Seafhven           │
│          │ About     │ Telegram              │
│          │ Contact   │ seafhven@gmail.com    │
├──────────┴──────────┴───────────────────┤
│  © 2026 奇点社 · 苏州工业园区独墅湖数字经济产业园  │
└─────────────────────────────────────┘
```

---

## 6. 设计 Token（Design Tokens）

### 6.1 色彩系统（继承 VI 手册）

```css
/* 背景 */
--bg-primary:       #0A0A0A;    /* 页面主背景 */
--bg-secondary:     #111118;    /* 交替 section 背景 */
--bg-panel:         #16161F;    /* 卡片/面板背景 */
--bg-elevated:      #1C1C28;    /* hover 态面板 */

/* 文字 */
--text-primary:     #F5F5F5;    /* 标题/主文案 */
--text-secondary:   #B0B0C0;    /* 正文/描述 */
--text-tertiary:    #6B6B80;    /* 辅助说明/时间戳 */

/* 品牌强调（克制使用，仅用于标题文字、CTA、细分隔线） */
--accent-indigo:    #7B7FFF;    /* 主强调/链接/CTA */
--accent-teal:      #4DD9D5;    /* 次强调/高亮（少量使用） */
--accent-violet:    #A78BFA;    /* 标签/装饰线（极少量使用） */

/* 边框/分割 */
--border-default:   #2A2A3A;    /* 默认边框 */
--border-hover:     #3A3A50;    /* hover 边框 */

/* 品牌渐变（仅用于品牌锚点：标题文字、CTA按钮、细分隔线，禁止大面积填充） */
--gradient-brand:   linear-gradient(135deg, #7B7FFF, #4DD9D5, #A78BFA);
--gradient-subtle:  linear-gradient(135deg, #7B7FFF15, #4DD9D515);
```

### 6.2 字体系统

```css
/* 字体族 */
--font-sans-cn:  'Noto Sans SC', sans-serif;      /* 中文 */
--font-sans-en:  'Inter', 'Helvetica Neue', sans-serif;  /* 英文 */
--font-mono:     'JetBrains Mono', 'Fira Code', monospace;  /* 代码 */

/* Google Fonts 加载 */
/* Noto Sans SC: 300,400,500,700 */
/* Inter: 300,400,500,600,700 */
```

### 6.3 字号层级（rem, 基于 16px）

| Token | 桌面 | 移动 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|------|
| `--text-display` | 4rem (64px) | 2.5rem (40px) | 1.1 | 700 | 首屏主标题 |
| `--text-h1` | 3rem (48px) | 2rem (32px) | 1.2 | 700 | 页面标题 |
| `--text-h2` | 2rem (32px) | 1.5rem (24px) | 1.3 | 600 | Section 标题 |
| `--text-h3` | 1.25rem (20px) | 1.125rem (18px) | 1.4 | 600 | 卡片/小节标题 |
| `--text-body` | 1.125rem (18px) | 1rem (16px) | 1.7 | 400 | 正文 |
| `--text-small` | 0.875rem (14px) | 0.875rem (14px) | 1.5 | 400 | 辅助文字 |
| `--text-caption` | 0.75rem (12px) | 0.75rem (12px) | 1.4 | 400 | 标签/脚注 |

### 6.4 间距系统（8px 网格）

```css
--space-1:   4px;     /* 微间距 */
--space-2:   8px;     /* 元素内间距 */
--space-3:   12px;    /* 紧凑间距 */
--space-4:   16px;    /* 默认间距 */
--space-6:   24px;    /* 组件间距 */
--space-8:   32px;    /* Section 内间距 */
--space-12:  48px;    /* Section 间 padding */
--space-16:  64px;    /* Section 间 gap（桌面） */
--space-24:  96px;    /* 大 Section 间 gap（桌面） */
--space-32:  128px;   /* 首屏 padding-top */
```

**Section 内边距规范：**
- 桌面：`padding: 96px 0`（每个 section 上下）
- 移动：`padding: 64px 0`
- 内容最大宽度：`max-width: 1200px; margin: 0 auto; padding: 0 24px;`

### 6.5 圆角

```css
--radius-sm:   6px;    /* 标签/小按钮 */
--radius-md:   12px;   /* 卡片/输入框 */
--radius-lg:   16px;   /* 大卡片/截图容器 */
--radius-xl:   24px;   /* Hero 区块 */
--radius-full: 9999px; /* 胶囊按钮 */
```

### 6.6 阴影

```css
--shadow-card:     0 4px 24px rgba(0, 0, 0, 0.3);
--shadow-elevated: 0 8px 40px rgba(0, 0, 0, 0.4);
/* 禁止使用 glow/辉光类阴影 */
```

---

## 7. 动画规范

### 7.1 基础缓动

```css
--ease-default:  cubic-bezier(0.25, 0.1, 0.25, 1);    /* 通用 */
--ease-out:      cubic-bezier(0, 0, 0.2, 1);           /* 进入 */
--ease-in:       cubic-bezier(0.4, 0, 1, 1);           /* 退出 */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);    /* 弹性 */
```

### 7.2 滚动进入动画（Framer Motion）

所有 section 和卡片统一使用 viewport 触发：

```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }
};

const staggerChildren = {
  whileInView: { transition: { staggerChildren: 0.1 } }
};
```

### 7.3 交互动画

| 元素 | 触发 | 效果 | 时长 |
|------|------|------|------|
| 按钮 | hover | `scale(1.02)` + 背景色变亮 | 200ms |
| 卡片 | hover | `translateY(-4px)` + 边框品牌色描边 | 300ms |
| 链接 | hover | 下划线从左到右展开 | 300ms |
| 导航栏 | scroll | 向下隐藏/向上显现 | 300ms |
| 截图 | viewport | 从下渐入 + 微放大 | 600ms |

### 7.4 交互动效三站融合规则（v1.4 新增）

> 交互特效参考已选定的三个网站，整体原则：**克制、精确、服务内容**。

#### Resend 方向（首屏 + 全局节奏）
- 动效克制，重点是首屏焦点元素轻微入场（fade-up），不做大面积炫光扩散
- 页面滚动节奏宽松，section 间留白充足，不急于填满屏幕
- 背景纯色，不加网格纹理、不加粒子

#### Linear 方向（产品区 + 信息层级）
- 信息层级优先，滚动出现干净利落
- 产品截图比特效更抢眼——截图容器精致（圆角+阴影），但容器本身不动
- 文案自信、短句、高密度，不靠动画补视觉

#### Metalab/Suno 方向（案例区 + 叙事节奏）
- 保留一点精致感——图片入场可以有轻微 scale 或 parallax
- 不做游戏化、漂浮感过强的粒子和光晕
- 案例叙事用「滚动推进」节奏，每屏一个信息焦点

#### 禁止的交互特效
- ❌ 大面积发光扩散 / 脉冲发光
- ❌ 鼠标跟随光效 / 光标拖尾
- ❌ 粒子系统 / 漂浮元素
- ❌ 强视差滚动（超过 20px 的偏移量）
- ❌ 霓虹/全息色彩的动态渐变背景
- ❌ 3D 旋转几何体

#### 允许的交互特效
- ✓ scroll-in fade-up（opacity 0→1, translateY 30→0），stagger 间隔 80-120ms
- ✓ 卡片 hover 微上浮 + 边框色变化
- ✓ 按钮 hover scale + 背景色过渡
- ✓ 导航栏滚动隐显
- ✓ 截图容器 viewport 进入时轻微 scale(0.98→1)
- ✓ 品牌色细线作为 section 分隔，可以有极缓的渐变流动（≤ 0.5px/s 视觉速度）

### 7.4 性能约束

- 仅使用 `transform` 和 `opacity` 做动画（GPU 加速）
- 移动端关闭 `mousemove` 跟随
- 3D 元素在低性能设备降级为静态图片（`prefers-reduced-motion` 检测）
- 动画总预算：首屏 LCP < 2.5s

---

## 8. 组件清单

### 8.1 新建组件

| 组件 | 路径 | 说明 |
|------|------|------|
| `Navbar` | `components/layout/Navbar.tsx` | 固定导航栏，滚动隐显，移动端汉堡菜单 |
| `Footer` | `components/layout/Footer.tsx` | 三栏页脚 + 全息渐变顶部分割线 |
| `HeroBrand` | `components/home/HeroBrand.tsx` | 首屏品牌声明区（留白+字体层级+CTA，无3D装饰） |
| `ProductCard` | `components/home/ProductCard.tsx` | 首页产品入口卡片（图标+名称+描述+箭头） |
| `ProductSection` | `components/home/ProductSection.tsx` | 首页产品详情段（文案左/右+截图） |
| `ProductHero` | `components/products/ProductHero.tsx` | 产品详情页 Hero（名称+定位+全屏截图） |
| `FeatureGrid` | `components/products/FeatureGrid.tsx` | 产品特性网格（图标+标题+描述） |
| `CaseCard` | `components/cases/CaseCard.tsx` | 案例卡片（封面+标签+标题） |
| `CaseSection` | `components/cases/CaseSection.tsx` | 案例详情页的叙事段落模板 |
| `StatRow` | `components/shared/StatRow.tsx` | 横排数据展示（3列数字+标签） |
| `SectionWrapper` | `components/shared/SectionWrapper.tsx` | 通用 section 容器（max-width + padding + 滚动动画） |
| `BrandDivider` | `components/shared/BrandDivider.tsx` | 品牌色细分隔线（1px，使用 --gradient-brand） |
| `Button` | `components/ui/Button.tsx` | 按钮（primary/secondary/ghost 变体） |
| `Badge` | `components/ui/Badge.tsx` | 标签/胶囊（行业分类、状态） |
| `LanguageSwitch` | `components/ui/LanguageSwitch.tsx` | 语言切换按钮（next-intl） |

### 8.2 复用/改造现有组件

| 现有组件 | 处理方式 |
|----------|----------|
| `IntroAnimation.tsx` | **移除**，用 `HeroBrand` 替代（粒子/3D动画全部删除，改为纯文字+留白） |
| `LanguageContext.tsx` | **移除**，迁移至 next-intl 的路由方案 `[locale]/` |
| `translations.ts` | **重构**，拆分为 next-intl 的 JSON messages 文件 |

### 8.3 目录结构

```
app/
├── [locale]/
│   ├── layout.tsx              # 带 locale 的根布局
│   ├── page.tsx                # 首页
│   ├── products/
│   │   ├── page.tsx            # 产品总览
│   │   └── [slug]/
│   │       └── page.tsx        # 产品详情
│   ├── cases/
│   │   ├── page.tsx            # 案例总览
│   │   └── [slug]/
│   │       └── page.tsx        # 案例详情
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── home/                   # Hero3D, ProductCard, ProductSection
│   ├── products/               # ProductHero, FeatureGrid
│   ├── cases/                  # CaseCard, CaseSection
│   ├── shared/                 # SectionWrapper, StatRow, GradientDivider
│   └── ui/                     # Button, Badge, LanguageSwitch
├── messages/
│   ├── zh.json                 # 中文翻译
│   └── en.json                 # 英文翻译
└── globals.css                 # Design tokens + Tailwind base
```

---

## 9. 响应式断点

```css
/* Tailwind v4 默认断点，不自定义 */
sm:  640px    /* 大手机横屏 */
md:  768px    /* 平板竖屏 */
lg:  1024px   /* 平板横屏/小桌面 */
xl:  1280px   /* 标准桌面 */
2xl: 1536px   /* 大桌面 */
```

**移动端优先规则：**
- 所有样式先写移动端，用 `md:` `lg:` 向上覆盖
- 产品截图：移动端全宽堆叠，`lg:` 以上才左右分栏
- 导航：`lg:` 以下为汉堡菜单
- 首屏 3D 元素：`md:` 以下缩小到 60% 并简化动画
- 字号全部用响应式 token（见 6.3）

---

## 10. 关于页 & 联系页

### 10.1 关于页（/about）

```
1. 品牌声明: 使命 + 愿景（来自 VI 手册）
2. 创始人故事: 照片 + 简介（15年空间设计→AI转型，拾海笔记风格的真实叙事）
3. IP 合作: 淘小枫合作展示（强调双向价值：AI 交互能力 × 情感连接和用户基础）
4. 方法论: 3个核心原则（AI增强/克制设计/全栈交付）
4. 时间线: 关键里程碑（可选）
```

### 10.2 联系页（/contact）

```
1. 标题: 简洁号召性文案
2. 联系表单: 姓名 + 邮箱 + 需求类型(下拉) + 描述
3. 直接联系:
   - 邮箱: seafhven@gmail.com
   - Telegram: 二维码图片（资产: data/website/photo_2026-03-26_18-11-24.jpg）
   - X: @Seafhven（链接到 https://x.com/Seafhven）
   - 不放个人微信二维码
4. 办公地点: 中国（江苏）自由贸易试验区苏州片区 苏州工业园区独墅湖数字经济产业园
   （文字展示，不嵌地图）
```

---

## 11. 文案调性规则

> 正式版。来源：`data/brand/personality.md` + `data/brand/taglines.md`

### 做

- 用动词开头的短句（"构建"、"交付"、"让…成为可能"）
- 用具体数字代替模糊描述（"3周" 而非 "快速"，"40 分钟出图" 而非 "高效"）
- 中文保留拾海笔记的克制文学感，英文用 builder 圈短句调性
- 产品名保持英文（Nexus / Prism / ProBrief）
- 从问题出发（"这个产品解决的问题是……"），过程透明
- 承认不完美（"这个功能目前还不稳定，预计下周修复"）

### 不做

- 不用"赋能""助力""一站式""全方位""抓手""闭环""颠覆""革命性"
- 不用感叹号，不用超过一个感叹号
- 不用第一人称复数"我们"做主语（官网用品牌名/产品名/无主语）
- 不写空洞的愿景式文案，每句话必须有信息量
- 不贩卖焦虑（"再不学 AI 就被淘汰"）
- 不卖资历（不把"XX 年经验"当核心卖点）
- 不做虚假承诺

### 文案填充状态

所有文案位置已从品牌 Pipeline 回填完毕：

| 位置 | 正式文案 | 来源 |
|------|----------|------|
| 首屏主标题 | 真实业务问题 × 轻量 AI 产品 × 公开构建 | taglines.md |
| 首屏副标题 | 一个人的 AI 产品实验室，公开构建中 | taglines.md |
| Nexus 定位 | 你的 Telegram AI 执行助手，带记忆，能编码，会生图 | taglines.md |
| Prism 定位 | 给普通人的 QQ AI 助手，一键安装，开箱即用 | taglines.md |
| ProBrief 定位 | AI 驱动的提案结构化工具，把模糊需求变成专业 Brief | taglines.md |
| 淘小枫定位 | 淘小枫 × 奇点社：国内首个能听懂你说话的 AI 桌面手办 | taglines.md |
| 关于页品牌声明 | 奇点社是一个人的 AI 产品实验室，公开构建有意思的产品，持续学习，持续发布 | personality.md |
| Footer 一句话 | 真实业务问题 × 轻量 AI 产品 × 公开构建 | taglines.md |
| 联系邮箱 | seafhven@gmail.com | 用户指定 |
| 办公地址 | 中国（江苏）自由贸易试验区苏州片区 苏州工业园区独墅湖数字经济产业园 | 用户指定 |
| Telegram 二维码 | data/website/photo_2026-03-26_18-11-24.jpg | 用户提供 |
| X 账号 | @Seafhven | 用户指定 |

---

## 12. 性能目标

| 指标 | 目标 |
|------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance | ≥ 90 |
| 首屏 JS Bundle | < 150KB (gzipped) |

**策略：**
- 3D 组件 `dynamic import` + `loading` skeleton
- 图片全部用 `next/image` + WebP + lazy loading
- 字体用 `next/font` 加载 Inter，Noto Sans SC 用 `display: swap`
- 案例页图片按需加载，不在首屏预加载

---

## 13. 开发执行顺序建议

```
Phase 1: 基础架构
  ├── 配置 next-intl 路由
  ├── 建立 design tokens (globals.css)
  ├── Navbar + Footer + SectionWrapper
  └── Button + Badge 基础 UI

Phase 2: 首页
  ├── HeroBrand (留白+字体层级，无3D)
  ├── ProductCard × 4 (含淘小枫 "开发中" 状态卡片)
  └── ProductSection × 4

Phase 3: 产品页
  ├── /products 总览
  └── /products/[slug] 详情模板

Phase 4: 案例页 + 其余页面
  ├── /cases 总览 + 详情模板
  ├── /about
  └── /contact

Phase 5: 打磨
  ├── 动画细节
  ├── 移动端适配检查
  ├── 性能优化
  └── SEO meta tags
```

---

*本文档为开发执行规范 v1.4。v1.3→v1.4 变更：视觉系统去模板化——删除全息渐变/3D几何体/发光特效，改为克制工作台风格；品牌渐变降级为仅用于锚点；新增§7.4交互动效三站融合规则（Resend克制+Linear信息优先+Metalab叙事节奏），明确禁止/允许的特效清单。*

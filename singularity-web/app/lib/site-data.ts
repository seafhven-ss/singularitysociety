import { Bot, Boxes, Cpu, GitBranch, MessageSquareText, PackageSearch, Sparkles, Workflow } from "lucide-react";
import type { Lang } from "../constants/translations";

export type ProductSlug = "tebot" | "nexus" | "probrief" | "prism";
export type CaseSlug = "prism-launch";

export type ProductFeature = {
  title: string;
  description: string;
  detail: string;
};

export type ProductAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type ProductArchitectureNode = {
  label: string;
  note: string;
};

export type ProductRecord = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  status: string;
  positioning: string;
  summary: string;
  heroEyebrow: string;
  heroLabel: string;
  metrics: Array<{ label: string; value: string }>;
  features: ProductFeature[];
  architectureTitle: string;
  architectureDescription: string;
  architectureNodes: ProductArchitectureNode[];
  actions: ProductAction[];
  icon: typeof Bot;
  visual: {
    title: string;
    lines: string[];
  };
};

export type CaseSection = {
  title: string;
  body: string[];
};

export type CaseRecord = {
  slug: CaseSlug;
  name: string;
  category: string;
  year: string;
  summary: string;
  stats: Array<{ label: string; value: string }>;
  coverTitle: string;
  coverLines: string[];
  background: CaseSection;
  challenge: CaseSection;
  approach: CaseSection;
  results: CaseSection;
  cta: ProductAction[];
};

// ── Shared non-translatable fields ──

const productIcons = {
  tebot: Sparkles,
  nexus: Bot,
  probrief: Workflow,
  prism: MessageSquareText,
} as const;

const productVisuals: Record<ProductSlug, ProductRecord["visual"]> = {
  tebot: {
    title: "Workbench Snapshot",
    lines: ["Audio module online", "Character layer aligned", "Hardware test in progress", "Public build log enabled"],
  },
  nexus: {
    title: "Execution Thread",
    lines: ["Task accepted", "Repo inspected", "Patch applied", "Verification returned"],
  },
  probrief: {
    title: "Brief Pipeline",
    lines: ["Raw request captured", "Rules validated", "Sections generated", "Delivery doc exported"],
  },
  prism: {
    title: "Launch Snapshot",
    lines: ["QQ connected", "Runtime online", "Model selected", "Installer packaged"],
  },
};

// ── Chinese products ──

const productsZh: ProductRecord[] = [
  {
    slug: "tebot",
    name: "TEBOT",
    shortName: "淘小枫 × 奇点社",
    status: "开发中 · 最高优先级",
    positioning: "淘小枫 × 奇点社：携手打造国内首个能听懂你说话的 AI 桌面手办",
    summary: "把经典角色从屏幕带到桌面。不是摆件加语音包，而是持续在线的互动终端。",
    heroEyebrow: "Product / Desktop Companion",
    heroLabel: "联合打造 · IP + AI + 硬件",
    metrics: [
      { label: "合作形态", value: "IP 授权 + 软件 + 硬件" },
      { label: "当前阶段", value: "硬件测试中" },
      { label: "交互方式", value: "听、说、陪伴" },
    ],
    features: [
      {
        title: "保留角色辨识度",
        description: "淘小枫与奇点社携手呈现，视觉与语气都服务角色生命力，而不是套一个 AI 壳。",
        detail: "角色信息、语气约束、对话边界写入交互层，避免失真。",
      },
      {
        title: "接入 Prism 对话引擎",
        description: "把可部署的 IM 对话能力迁移到桌面终端，降低硬件侧实现复杂度。",
        detail: "语音输入、意图识别、回复生成拆成独立环节，便于后续换模组。",
      },
      {
        title: "公开展示构建进度",
        description: "概念图、版本记录、硬件联调状态直接呈现，让开发中这件事本身成为产品叙事。",
        detail: "不隐藏限制，不用预售话术替代真实进度。",
      },
    ],
    architectureTitle: "技术架构简图",
    architectureDescription: "当前以语音交互链路为核心，硬件外壳与内容人格分层处理，便于快速验证。",
    architectureNodes: [
      { label: "桌面终端", note: "麦克风 / 扬声器 / 状态灯" },
      { label: "Prism 引擎", note: "意图理解 / 回复生成" },
      { label: "角色层", note: "淘小枫设定 / 语气约束" },
      { label: "构建日志", note: "进度面板 / 开发记录" },
    ],
    actions: [
      { label: "关注开发进度", href: "/contact", variant: "primary" },
      { label: "联系咨询合作", href: "/contact", variant: "secondary" },
    ],
    icon: productIcons.tebot,
    visual: productVisuals.tebot,
  },
  {
    slug: "nexus",
    name: "Nexus",
    shortName: "Telegram 执行助手",
    status: "内部使用中 · 持续迭代",
    positioning: "你的 Telegram AI 执行助手，带记忆，能编码，会生图",
    summary: "把研究、改代码、事实核查和生图调度放进同一个上下文，减少切换损耗。",
    heroEyebrow: "Product / Execution Console",
    heroLabel: "Telegram + CLI + Memory",
    metrics: [
      { label: "主入口", value: "Telegram Bot" },
      { label: "任务类型", value: "代码 / 检索 / 生图" },
      { label: "上下文", value: "单线程持续记忆" },
    ],
    features: [
      {
        title: "持续记忆任务上下文",
        description: "记录长期约束、当前主线和最近操作，不把每次执行都重置成新对话。",
        detail: "适合需要连续推进的产品开发与运维工作。",
      },
      {
        title: "直接落到代码与系统",
        description: "不是只给建议，而是能改文件、跑命令、验证结果，再把结果回报回 Telegram。",
        detail: "执行链路短，适合快节奏迭代。",
      },
      {
        title: "把远程能力收进同一条线",
        description: "ComfyUI、生图工作站和多种 CLI 模型通过统一调度暴露给同一个助手。",
        detail: "用户只需要描述任务，不需要记住工具切换。",
      },
      {
        title: "保留执行痕迹",
        description: "计划、修改、验证、失败点都能回溯，便于公开构建和阶段性复盘。",
        detail: "执行记录本身就是信任资产。",
      },
    ],
    architectureTitle: "技术架构简图",
    architectureDescription: "Nexus 的核心不是一个模型，而是一条可执行的任务总线，把对话、记忆和外部工具绑定在一起。",
    architectureNodes: [
      { label: "Telegram", note: "用户入口 / 任务描述" },
      { label: "Memory Layer", note: "长期记忆 / 重启恢复" },
      { label: "CLI Agents", note: "Codex / Claude / Kimi" },
      { label: "Remote Tools", note: "ComfyUI / 局域网工作站" },
    ],
    actions: [
      { label: "联系咨询", href: "/contact", variant: "primary" },
      { label: "查看案例", href: "/cases/prism-launch", variant: "secondary" },
    ],
    icon: productIcons.nexus,
    visual: productVisuals.nexus,
  },
  {
    slug: "probrief",
    name: "ProBrief",
    shortName: "提案结构化工具",
    status: "已交付 · 开源",
    positioning: "AI 驱动的提案结构化工具，把模糊需求变成专业 Brief",
    summary: "让前期沟通不再靠长聊天记录拼凑，把需求整理成可评估、可拆分、可继续执行的文档。",
    heroEyebrow: "Product / Structured Intake",
    heroLabel: "Open Source Delivery Tool",
    metrics: [
      { label: "状态", value: "已部署 / 开源" },
      { label: "输出", value: "6 模块 Brief" },
      { label: "架构", value: "规则引擎 + LLM" },
    ],
    features: [
      {
        title: "把输入压成结构",
        description: "把碎片化描述映射到固定模块，避免需求在聊天里不断漂移。",
        detail: "先收束边界，再讨论解决方案。",
      },
      {
        title: "用规则兜住行业常识",
        description: "不把所有判断交给模型，关键字段和冲突检查由规则层负责。",
        detail: "在实际提案场景里，稳定性比创造性更重要。",
      },
      {
        title: "输出能直接进入交付",
        description: "生成的 Brief 不是展示文案，而是能给设计、开发、客户共同使用的工作文件。",
        detail: "减少二次整理和重复确认。",
      },
    ],
    architectureTitle: "技术架构简图",
    architectureDescription: "ProBrief 采用轻量混合架构，先用规则压住结构，再让模型生成高信息密度文本。",
    architectureNodes: [
      { label: "Input Form", note: "项目背景 / 目标 / 约束" },
      { label: "Rule Engine", note: "字段校验 / 冲突过滤" },
      { label: "LLM Layer", note: "结构化生成 / 语言润色" },
      { label: "Brief Export", note: "可共享输出文档" },
    ],
    actions: [
      { label: "在线体验", href: "https://probrief.singularity-society.com", variant: "primary" },
      { label: "查看 GitHub", href: "https://github.com/seafhven-ss/brief-builder", variant: "secondary" },
    ],
    icon: productIcons.probrief,
    visual: productVisuals.probrief,
  },
  {
    slug: "prism",
    name: "Prism",
    shortName: "QQ AI 助手",
    status: "内测中",
    positioning: "给普通人的 QQ AI 助手，一键安装，开箱即用",
    summary: "把本来需要懂模型、懂环境、懂部署的事，压缩成一个普通用户也能上手的 IM 入口。",
    heroEyebrow: "Product / IM Assistant",
    heroLabel: "QQ Native · Low Setup",
    metrics: [
      { label: "平台", value: "QQ" },
      { label: "目标用户", value: "普通用户 / 代搭建者" },
      { label: "部署门槛", value: "一键安装" },
    ],
    features: [
      {
        title: "沿用 QQ 使用习惯",
        description: "不要求用户迁移到新界面，直接在熟悉的 IM 场景里使用 AI。",
        detail: "入口越熟悉，采用成本越低。",
      },
      {
        title: "把复杂安装压到最少",
        description: "普通用户看到的是安装与启动，环境准备、引擎切换和配置被藏在后面。",
        detail: "降低首轮试用的失败率。",
      },
      {
        title: "保留可扩展的代理能力",
        description: "Prism 不是单轮聊天壳，后续能继续叠加工作流、记忆和外部工具。",
        detail: "先做可用入口，再做更深能力。",
      },
      {
        title: "适合代搭建交付",
        description: "对不会配置的人提供开箱即用版本，对会服务客户的人提供可复制的交付形态。",
        detail: "兼顾 C 端使用和轻服务场景。",
      },
    ],
    architectureTitle: "技术架构简图",
    architectureDescription: "Prism 以本地可部署和低配置为优先，把 QQ 入口、模型引擎和安装流程拆开处理。",
    architectureNodes: [
      { label: "QQ Client", note: "用户消息入口" },
      { label: "Prism Runtime", note: "消息编排 / 会话管理" },
      { label: "Model Engine", note: "Kimi / OpenCode" },
      { label: "Installer", note: "一键安装 / 更新" },
    ],
    actions: [
      { label: "查看案例", href: "/cases/prism-launch", variant: "primary" },
      { label: "联系体验", href: "/contact", variant: "secondary" },
    ],
    icon: productIcons.prism,
    visual: productVisuals.prism,
  },
];

// ── English products ──

const productsEn: ProductRecord[] = [
  {
    slug: "tebot",
    name: "TEBOT",
    shortName: "Taoxiaofeng × Singularity Society",
    status: "In Development · Top Priority",
    positioning: "Taoxiaofeng × Singularity Society: Building China's first AI desktop figurine that understands your voice",
    summary: "Bringing a beloved character from screen to desktop. Not a figurine with voice packs — a continuously online interactive terminal.",
    heroEyebrow: "Product / Desktop Companion",
    heroLabel: "Co-built · IP + AI + Hardware",
    metrics: [
      { label: "Partnership", value: "IP License + Software + Hardware" },
      { label: "Current Phase", value: "Hardware Testing" },
      { label: "Interaction", value: "Listen, Speak, Companion" },
    ],
    features: [
      {
        title: "Preserving Character Identity",
        description: "Taoxiaofeng and Singularity Society presented together — visuals and tone serve the character's vitality, not just an AI shell.",
        detail: "Character info, tone constraints, and conversation boundaries are built into the interaction layer.",
      },
      {
        title: "Powered by Prism Engine",
        description: "Migrating deployable IM conversation capabilities to the desktop terminal, reducing hardware-side complexity.",
        detail: "Voice input, intent recognition, and response generation are split into independent stages for modular upgrades.",
      },
      {
        title: "Public Build Progress",
        description: "Concept art, version logs, and hardware integration status are shown directly — the build process itself becomes the product narrative.",
        detail: "No hidden limitations, no pre-sale rhetoric replacing real progress.",
      },
    ],
    architectureTitle: "Architecture Overview",
    architectureDescription: "Currently centered on the voice interaction pipeline, with hardware shell and content personality handled in separate layers for rapid validation.",
    architectureNodes: [
      { label: "Desktop Terminal", note: "Mic / Speaker / Status LED" },
      { label: "Prism Engine", note: "Intent / Response" },
      { label: "Character Layer", note: "Persona / Tone Rules" },
      { label: "Build Log", note: "Progress / Dev Records" },
    ],
    actions: [
      { label: "Follow Progress", href: "/contact", variant: "primary" },
      { label: "Get in Touch", href: "/contact", variant: "secondary" },
    ],
    icon: productIcons.tebot,
    visual: productVisuals.tebot,
  },
  {
    slug: "nexus",
    name: "Nexus",
    shortName: "Telegram Execution Assistant",
    status: "Internal Use · Continuous Iteration",
    positioning: "Your Telegram AI execution assistant — with memory, coding, and image generation",
    summary: "Research, code changes, fact-checking, and image generation in one context — reducing the cost of switching tools.",
    heroEyebrow: "Product / Execution Console",
    heroLabel: "Telegram + CLI + Memory",
    metrics: [
      { label: "Entry Point", value: "Telegram Bot" },
      { label: "Task Types", value: "Code / Search / Image Gen" },
      { label: "Context", value: "Persistent Memory" },
    ],
    features: [
      {
        title: "Persistent Task Context",
        description: "Records long-term constraints, current focus, and recent actions — every execution isn't reset to a blank conversation.",
        detail: "Ideal for continuous product development and operations work.",
      },
      {
        title: "Direct Code & System Access",
        description: "Not just advice — it can modify files, run commands, verify results, and report back to Telegram.",
        detail: "Short execution chain, built for fast-paced iteration.",
      },
      {
        title: "Unified Remote Capabilities",
        description: "ComfyUI, image generation workstations, and multiple CLI models exposed through unified dispatch.",
        detail: "Users describe tasks, not tool switches.",
      },
      {
        title: "Execution Trail",
        description: "Plans, modifications, verifications, and failure points are all traceable — supporting public builds and periodic reviews.",
        detail: "The execution record itself is a trust asset.",
      },
    ],
    architectureTitle: "Architecture Overview",
    architectureDescription: "Nexus isn't a model — it's an executable task bus that binds conversation, memory, and external tools together.",
    architectureNodes: [
      { label: "Telegram", note: "User Entry / Task Input" },
      { label: "Memory Layer", note: "Long-term / Restart Recovery" },
      { label: "CLI Agents", note: "Codex / Claude / Kimi" },
      { label: "Remote Tools", note: "ComfyUI / LAN Workstation" },
    ],
    actions: [
      { label: "Contact Us", href: "/contact", variant: "primary" },
      { label: "View Case", href: "/cases/prism-launch", variant: "secondary" },
    ],
    icon: productIcons.nexus,
    visual: productVisuals.nexus,
  },
  {
    slug: "probrief",
    name: "ProBrief",
    shortName: "Structured Proposal Tool",
    status: "Delivered · Open Source",
    positioning: "AI-powered structured proposal tool — turning vague requirements into professional briefs",
    summary: "No more piecing together requirements from long chat threads. Organize needs into assessable, splittable, actionable documents.",
    heroEyebrow: "Product / Structured Intake",
    heroLabel: "Open Source Delivery Tool",
    metrics: [
      { label: "Status", value: "Deployed / Open Source" },
      { label: "Output", value: "6-Module Brief" },
      { label: "Architecture", value: "Rule Engine + LLM" },
    ],
    features: [
      {
        title: "Compress Input into Structure",
        description: "Maps fragmented descriptions to fixed modules, preventing requirements from drifting in chat.",
        detail: "Narrow the boundaries first, then discuss solutions.",
      },
      {
        title: "Rules Guard Industry Knowledge",
        description: "Critical field validation and conflict checks are handled by the rule layer, not the model.",
        detail: "In real proposal scenarios, stability matters more than creativity.",
      },
      {
        title: "Output Ready for Delivery",
        description: "The generated brief isn't marketing copy — it's a working document for designers, developers, and clients alike.",
        detail: "Reduces redundant formatting and repeated confirmations.",
      },
    ],
    architectureTitle: "Architecture Overview",
    architectureDescription: "ProBrief uses a lightweight hybrid architecture — rules lock down structure, then the model generates high-density text.",
    architectureNodes: [
      { label: "Input Form", note: "Background / Goals / Constraints" },
      { label: "Rule Engine", note: "Validation / Conflict Filter" },
      { label: "LLM Layer", note: "Structured Gen / Polish" },
      { label: "Brief Export", note: "Shareable Document" },
    ],
    actions: [
      { label: "Try Online", href: "https://probrief.singularity-society.com", variant: "primary" },
      { label: "View GitHub", href: "https://github.com/seafhven-ss/brief-builder", variant: "secondary" },
    ],
    icon: productIcons.probrief,
    visual: productVisuals.probrief,
  },
  {
    slug: "prism",
    name: "Prism",
    shortName: "QQ AI Assistant",
    status: "In Beta",
    positioning: "A QQ AI assistant for everyday users — one-click install, ready to go",
    summary: "Compressing what used to require understanding models, environments, and deployment into an IM entry point anyone can use.",
    heroEyebrow: "Product / IM Assistant",
    heroLabel: "QQ Native · Low Setup",
    metrics: [
      { label: "Platform", value: "QQ" },
      { label: "Target Users", value: "Everyday Users / Resellers" },
      { label: "Setup Barrier", value: "One-Click Install" },
    ],
    features: [
      {
        title: "Native QQ Experience",
        description: "No migration to a new interface — use AI directly in the familiar IM environment.",
        detail: "The more familiar the entry point, the lower the adoption cost.",
      },
      {
        title: "Minimal Setup Complexity",
        description: "Users see install and launch. Environment prep, engine switching, and config are hidden behind the scenes.",
        detail: "Reducing first-trial failure rate.",
      },
      {
        title: "Extensible Agent Capabilities",
        description: "Prism isn't a single-turn chat shell — workflows, memory, and external tools can be layered on.",
        detail: "Start with a usable entry point, then deepen capabilities.",
      },
      {
        title: "Ready for Reseller Delivery",
        description: "Out-of-the-box for end users, replicable delivery format for service providers.",
        detail: "Balancing consumer use and lightweight service scenarios.",
      },
    ],
    architectureTitle: "Architecture Overview",
    architectureDescription: "Prism prioritizes local deployability and low config, separating the QQ entry, model engine, and installer logic.",
    architectureNodes: [
      { label: "QQ Client", note: "Message Entry" },
      { label: "Prism Runtime", note: "Orchestration / Sessions" },
      { label: "Model Engine", note: "Kimi / OpenCode" },
      { label: "Installer", note: "One-Click / Updates" },
    ],
    actions: [
      { label: "View Case", href: "/cases/prism-launch", variant: "primary" },
      { label: "Get in Touch", href: "/contact", variant: "secondary" },
    ],
    icon: productIcons.prism,
    visual: productVisuals.prism,
  },
];

// ── Chinese cases ──

const casesZh: CaseRecord[] = [
  {
    slug: "prism-launch",
    name: "Prism 首个公开案例",
    category: "案例 / Consumer AI",
    year: "2026",
    summary: "把面向普通用户的 AI 助手，从需要解释环境与模型的技术产品，重做成能在 QQ 场景里直接落地的轻量入口。",
    stats: [
      { label: "交付目标", value: "QQ 原生入口" },
      { label: "核心约束", value: "一键安装" },
      { label: "当前状态", value: "内测中" },
    ],
    coverTitle: "Prism Case Narrative",
    coverLines: ["Audience: non-technical users", "Constraint: keep QQ native", "Approach: hide setup complexity", "Outcome: ready-for-beta package"],
    background: {
      title: "背景",
      body: [
        "目标不是再做一个面向技术用户的 AI 聊天壳，而是把普通人已经在用的 QQ 变成 AI 入口。",
        "如果用户还需要理解模型差异、环境配置和命令行，产品就还没有真正进入大众使用场景。",
      ],
    },
    challenge: {
      title: "挑战",
      body: [
        "QQ 是熟悉入口，但也意味着实现必须足够克制。任何额外配置、复杂说明和新概念，都会直接拉高流失率。",
        "同时，产品还需要给未来的代理能力留下扩展余地，不能把所有能力都做死在一次性安装包里。",
      ],
    },
    approach: {
      title: "方案",
      body: [
        "方案拆成三层：先保留 QQ 原生交互，再把运行时和模型引擎分层，最后单独设计安装与更新逻辑。",
        "视觉表达上不强调 AI 炫技，而是把「可安装、可启动、可持续迭代」作为主叙事，让产品更像一个安静可靠���工具。",
      ],
    },
    results: {
      title: "结果",
      body: [
        "Prism 已形成可进入内测的产品形态，具备 QQ 入口、一键安装和可继续扩展的运行时架构。",
        "这个案例证明的不是某个模型效果，而是奇点社处理消费级 AI 产品时的交付方法：先降低采用门槛，再逐步抬高能力上限。",
      ],
    },
    cta: [
      { label: "查看 Prism 产品页", href: "/products/prism", variant: "primary" },
      { label: "联系咨询", href: "/contact", variant: "secondary" },
    ],
  },
];

// ── English cases ──

const casesEn: CaseRecord[] = [
  {
    slug: "prism-launch",
    name: "Prism: First Public Case",
    category: "Case / Consumer AI",
    year: "2026",
    summary: "Rebuilding an AI assistant for everyday users — from a technical product requiring environment and model explanations to a lightweight QQ-native entry point.",
    stats: [
      { label: "Delivery Goal", value: "QQ Native Entry" },
      { label: "Core Constraint", value: "One-Click Install" },
      { label: "Current Status", value: "In Beta" },
    ],
    coverTitle: "Prism Case Narrative",
    coverLines: ["Audience: non-technical users", "Constraint: keep QQ native", "Approach: hide setup complexity", "Outcome: ready-for-beta package"],
    background: {
      title: "Background",
      body: [
        "The goal wasn't to build another AI chat shell for technical users — it was to turn QQ, which ordinary people already use, into an AI entry point.",
        "If users still need to understand model differences, environment configuration, and command lines, the product hasn't truly entered the mass-market scenario.",
      ],
    },
    challenge: {
      title: "Challenge",
      body: [
        "QQ is a familiar entry point, but that also means the implementation must be restrained. Any extra configuration, complex instructions, or new concepts will directly increase churn.",
        "At the same time, the product needs to leave room for future agent capabilities — you can't bake everything into a one-time installer.",
      ],
    },
    approach: {
      title: "Approach",
      body: [
        "The solution was split into three layers: preserve QQ-native interaction first, separate runtime and model engine second, and design installation and update logic independently.",
        "Visual expression avoids AI showmanship — the core narrative is 'installable, launchable, and continuously iterable', making the product feel like a quiet, reliable tool.",
      ],
    },
    results: {
      title: "Results",
      body: [
        "Prism has reached a beta-ready product form with QQ entry, one-click install, and an extensible runtime architecture.",
        "This case proves not the effectiveness of any single model, but Singularity Society's delivery method for consumer AI: lower the adoption barrier first, then gradually raise the capability ceiling.",
      ],
    },
    cta: [
      { label: "View Prism Product", href: "/products/prism", variant: "primary" },
      { label: "Contact Us", href: "/contact", variant: "secondary" },
    ],
  },
];

// ── Localized accessors ──

const productsMap: Record<Lang, ProductRecord[]> = { zh: productsZh, en: productsEn };
const casesMap: Record<Lang, CaseRecord[]> = { zh: casesZh, en: casesEn };

export function getLocalizedProducts(lang: Lang): ProductRecord[] {
  return productsMap[lang];
}

export function getLocalizedCases(lang: Lang): CaseRecord[] {
  return casesMap[lang];
}

// Backward compat — default to Chinese
export const products = productsZh;
export const cases = casesZh;

export function getProduct(slug: string, lang: Lang = "zh") {
  return productsMap[lang].find((p) => p.slug === slug);
}

export function getCase(slug: string, lang: Lang = "zh") {
  return casesMap[lang].find((item) => item.slug === slug);
}

export const globalCards = [
  {
    title: "母品牌优先",
    description: "产品是方法论的不同交付节点。先说明问题如何被拆解，再进入具体工具。",
    icon: Boxes,
  },
  {
    title: "构建现场感",
    description: "页面主视觉使用工作台、状态面板和版本记录语义，不做科幻装饰。",
    icon: PackageSearch,
  },
  {
    title: "公开方法与结果",
    description: "案例页按背景、挑战、方案、结果展开，强调过程透明和结果可追溯。",
    icon: GitBranch,
  },
  {
    title: "轻量技术栈",
    description: "把模型、运行时和交付入口分层处理，确保每个产品都能快速演进。",
    icon: Cpu,
  },
];

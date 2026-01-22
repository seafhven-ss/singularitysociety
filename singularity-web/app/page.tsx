"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Check, Cloud, Server, Workflow, Database, RefreshCcw,
  Phone, Mail, MapPin, ChevronDown
} from "lucide-react";

// 引入刚才重写的粒子组件
import IntroAnimation from "./components/IntroAnimation";

// --- 数据部分 (保持不变) ---
const galleryFiles = [
  "3D创作.png", "产品宣传1.png", "产品宣传2.png", "动画制作.png", "参数化模板.png",
  "广告设计.gif", "插画设计.png", "新媒体IP.gif", "新媒体IP.png", "空间创意1.png",
  "空间创意2.png", "空间创意3.png", "素材拍摄.png", "艺术创造1.png", "艺术创造2.png",
  "艺术创造3.png", "艺术创造4.png",
];

const getCleanLabel = (filename: string) => {
  return filename.replace(/\.(png|jpg|jpeg|gif)$/i, "").replace(/[0-9_\s\(\)]+$/, "");
};

const pricingData = {
  caas: [
    {
      title: "体验版 (信任建立)", price: "¥299", unit: "/ 次",
      features: ["3张 4K级 Imagen 4 Ultra 场景渲染图", "1篇 配套种草文案 (小红书/朋友圈)", "交付周期: 24小时内"],
      target: "个人 IP / 小微商户", highlight: false,
    },
    {
      title: "标准版 (月度订阅)", price: "¥2,999", unit: "/ 月",
      features: ["20张 精修场景图 (可指定产品)", "10篇 深度种草笔记 (含选题策划)", "1个 专属风格模型预设", "交付周期: 每周交付一次"],
      target: "独立站 / 卖家 / 工作室", highlight: true,
    },
    {
      title: "尊享版 (全案托管)", price: "¥9,999", unit: "/ 月",
      features: ["每日更新 (约30篇/月, 图文并茂)", "热点跟进: Agent 1 实时监控策划", "专属 AE: 1对1 服务群, 优先响应", "赠送: 1条由 Agent 6 脚本生成的短视频"],
      target: "珠宝 / 奢侈品 / 品牌官号", highlight: false,
    },
  ],
  saas: [
    {
      title: "咨询诊断 (轻量切入)", price: "¥1,980", unit: "/ 一次性",
      features: ["业务流诊断: 分析内容生产痛点", "可行性报告: ROI 测算", "样稿演示: 针对产品产出 5 套高质样稿", "(注: 不包含代码交付)"],
      target: "想转型但不懂 AI 的老板", highlight: false,
    },
    {
      title: "标准部署 (核心主推)", price: "¥19,800", unit: "/ 一次性",
      features: ["系统部署: 全套代码(去敏版) 本地化/云端", "大脑构建: 搭建 1 个行业知识库 (RAG)", "风格定制: 配置 1 套专属心法", "员工培训: 1 天操作培训"],
      target: "MCN / 垂直媒体 / 文案团队", highlight: true,
    },
    {
      title: "企业定制 (深度开发)", price: "¥49,800", unit: "/ 起",
      features: ["源码交付: 包含所有 Agent 源代码", "深度定制: 开发新 Agent (如数据分析员)", "私有化模型: 接入 DeepSeek/Flux 等", "年度维护: 含 ¥2,999/年 技术支持"],
      target: "大型国企 / 上市公司", highlight: false,
    },
  ],
};

// --- Main Component ---
export default function Home() {
  const [pricingMode, setPricingMode] = useState<"caas" | "saas">("caas");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(1);
  const [scrollProgressValue, setScrollProgressValue] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 监听滚动值传给 Canvas
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      setScrollProgressValue(v);
    });
  }, [scrollYProgress]);

  // 动画控制：Hero 内容滑入
  // 粒子文字显示 (0 - 0.5)
  // Hero 内容滑入 (0.4 - 0.9)
  const heroTranslateY = useTransform(scrollYProgress, [0.4, 0.9], ["100vh", "0vh"]);
  const navBgOpacity = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  const scrollToSection = (id: string) => {
    // 价值观特殊处理：滚动到动画容器的特定位置，让 Hero 内容完整显示
    if (id === "values") {
      // 容器高度 180vh，Hero 在 scrollProgress 0.9 时完全显示
      // 滚动到约 85% 的位置，让价值观内容居中显示
      const targetScroll = window.innerHeight * 0.8;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-blue-500/30">

      {/* 1. Navbar (固定在顶部) */}
      <motion.nav
        style={{ backgroundColor: useTransform(navBgOpacity, (v) => `rgba(0,0,0,${v * 0.9})`) }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/5 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-semibold tracking-tight">Singularity Society</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button onClick={() => scrollToSection("values")} className="hover:text-white transition-colors">价值观</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">服务</button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-white transition-colors">作品</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-white transition-colors">价格</button>
            <button onClick={() => scrollToSection("footer")} className="hover:text-white transition-colors">联系</button>
          </div>
        </div>
      </motion.nav>

      {/* 2. 动画舞台 (180vh 高度，更紧凑的滚动体验) */}
      <div ref={containerRef} className="relative h-[180vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* A. 粒子层 (Canvas) */}
          {/* 它自己负责画"奇点社"三个字，并在 scrollProgressValue 变大时散开 */}
          <div className="absolute inset-0 z-10">
            <IntroAnimation scrollProgress={scrollProgressValue} />
          </div>

          {/* B. Hero 内容 (从下方滑上来) */}
          <motion.div
            style={{ y: heroTranslateY }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 w-full pointer-events-none"
          // pointer-events-none 防止挡住上面的交互，具体内容由于是文字可以 auto
          >
            <div className="max-w-6xl mx-auto text-center pointer-events-auto">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                  重塑内容生产力的<br />奇点时刻
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
                部署你的下一代数字员工。<br />
                将顶尖的逻辑大脑与视觉引擎封装进你的业务流，让创造力无限扩容。
              </p>

              {/* 价值观卡片 */}
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  { title: "代码即杠杆", sub: "Code as Leverage", desc: "用自动化的工作流，撬动指数级的增长", icon: Workflow, color: "text-blue-400" },
                  { title: "数据即资产", sub: "Data as Asset", desc: "每一次修正都在训练系统更懂你 (Memory System)", icon: Database, color: "text-emerald-400" },
                  { title: "全栈闭环", sub: "Full-Stack Loop", desc: "从策划到视觉，从审核到分发，一站式解决", icon: RefreshCcw, color: "text-purple-400" },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md hover:bg-zinc-800 transition-colors shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                      <h3 className="font-bold">{item.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-500 font-mono mb-2">{item.sub}</p>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 底部提示箭头 (只在开始时显示，随滚动消失) */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 z-30"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>

        </div>
      </div>

      {/* 3. 后续内容区 (Services, Gallery, etc.) */}

      {/* Services Section */}
      <section id="services" className="py-32 bg-zinc-950 relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">双轮驱动业务模式</h2>
            <p className="text-xl text-zinc-400">从创意执行到技术赋能，全方位满足需求</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CaaS */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">云端设计部</h3>
                  <p className="text-zinc-400">CaaS · Creativity as a Service</p>
                </div>
              </div>
              <ul className="grid gap-4">
                {[
                  "品牌视觉设计 & 营销物料生产",
                  "产品包装 & 电商详情页制作",
                  "社媒内容 & 短视频创意素材",
                  "数据驱动的 A/B 创意测试",
                  "企业 SI 系统设计",
                  "企业展厅及展会设计"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SaaS */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <Server className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">企业级 AI 部署</h3>
                  <p className="text-zinc-400">SaaS · Software as a Service</p>
                </div>
              </div>
              <ul className="grid gap-4">
                {[
                  "私有化部署 & 混合云架构",
                  "企业级数据安全与合规保障",
                  "API 集成 & 定制化工作流",
                  "团队协作 & 资产管理平台",
                  "专人全程跟进服务",
                  "保障系统稳定运行"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI 生成作品集</h2>
          </div>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {galleryFiles.map((file, i) => (
              <div key={i} className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-zinc-900">
                <img src={`/gallery/${file}`} alt={getCleanLabel(file)} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm font-medium text-white px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">{getCleanLabel(file)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">服务与定价</h2>
            <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-white/10 relative">
              <div className={`absolute inset-y-1 w-[140px] rounded-full bg-white/10 transition-all duration-300 ${pricingMode === 'caas' ? 'left-1' : 'left-[148px]'}`} />
              <button onClick={() => setPricingMode("caas")} className={`relative z-10 w-[140px] py-3 rounded-full font-medium transition-colors ${pricingMode === 'caas' ? 'text-white' : 'text-zinc-500'}`}>CaaS 云端设计</button>
              <button onClick={() => setPricingMode("saas")} className={`relative z-10 w-[140px] py-3 rounded-full font-medium transition-colors ${pricingMode === 'saas' ? 'text-white' : 'text-zinc-500'}`}>SaaS 系统部署</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingData[pricingMode].map((plan, index) => (
              <div
                key={plan.title}
                onClick={() => setSelectedPlanIndex(index)}
                className={`relative p-8 rounded-3xl border flex flex-col cursor-pointer transition-all duration-300 ${selectedPlanIndex === index ? "bg-zinc-800/80 border-white/20 shadow-2xl scale-105 z-10" : "bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60"}`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-sm text-zinc-400">{plan.target}</p>
                </div>
                <div className="mb-8 pb-8 border-b border-white/5">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-zinc-500">{plan.unit}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="w-4 h-4 mt-1 text-white" /> <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection("footer");
                  }}
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
                >
                  联系咨询
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-20 bg-black border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Logo" width={48} height={48} className="rounded-xl" />
              <h2 className="text-2xl font-bold">奇点社智能科技（苏州）有限公司</h2>
            </div>
            <div className="flex flex-col gap-4 text-zinc-400">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5" /><span>施先生 18360473881</span></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5" /><span>Seafhven@gmail.com</span></div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /><span>中国（江苏）自由贸易试验区苏州片区 苏州工业园区</span></div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
              <div className="text-right"><div className="text-sm font-bold text-white mb-1">微信咨询</div><div className="text-xs text-zinc-500">扫码添加专属顾问</div></div>
              <div className="w-24 h-24 bg-white p-1 rounded-lg"><Image src="/wechat-qr.jpg" alt="WeChat" width={96} height={96} className="w-full h-full object-cover" /></div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
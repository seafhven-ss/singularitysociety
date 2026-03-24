"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Check, Cloud, Server, Workflow, Database, RefreshCcw,
  Phone, Mail, MapPin, ChevronDown, Zap, Clock, Tag, Globe
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./constants/translations";

// 引入刚才重写的粒子组件
import IntroAnimation from "./components/IntroAnimation";

// --- Data Interfaces & Definition ---

interface PortfolioItem {
  id: number;
  title: { zh: string; en: string };
  category: { zh: string; en: string };
  src: string;
  stats: { zh: string; en: string };
  tags: string[];
}

export const newPortfolioData: PortfolioItem[] = [
  {
    id: 1,
    src: "/lumina-case.png",
    title: { zh: "LUMINA 极简护肤宣发", en: "LUMINA Skincare Campaign" },
    category: { zh: "商业产品摄影", en: "Product Photography" },
    stats: { zh: "⏳ 3天 → ⚡️ 10分钟", en: "⏳ 3 Days → ⚡️ 10 Mins" },
    tags: ["CaaS", "High-End"]
  },
  {
    id: 2,
    src: "/spatial-case.png",
    title: { zh: "新零售未来概念店", en: "Neo-Retail Space Design" },
    category: { zh: "商业空间设计", en: "Spatial Design" },
    stats: { zh: "⏳ 1周 → ⚡️ 30分钟", en: "⏳ 1 Week → ⚡️ 30 Mins" },
    tags: ["Architecture", "Concept"]
  },
  {
    id: 3,
    src: "/character-case.png",
    title: { zh: "赛博兔 IP 矩阵", en: "Cyber-Bunny IP Matrix" },
    category: { zh: "角色 IP 设计", en: "Character Design" },
    stats: { zh: "⏳ 5天 → ⚡️ 20分钟", en: "⏳ 5 Days → ⚡️ 20 Mins" },
    tags: ["IP", "3D Render"]
  },
  {
    id: 4,
    src: "/creative-case.png",
    title: { zh: "夏日激爽创意海报", en: "Summer Splash Ad" },
    category: { zh: "创意广告视觉", en: "Creative Advertising" },
    stats: { zh: "⏳ 2天 → ⚡️ 15分钟", en: "⏳ 2 Days → ⚡️ 15 Mins" },
    tags: ["Visual Effect", "Ads"]
  }
];

// --- Main Component ---
export default function Home() {
  const [pricingMode, setPricingMode] = useState<"caas" | "saas">("caas");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(1);
  const [scrollProgressValue, setScrollProgressValue] = useState(0);

  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];

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
  const heroTranslateY = useTransform(scrollYProgress, [0.4, 0.9], ["100vh", "0vh"]);
  const navBgOpacity = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  const scrollToSection = (id: string) => {
    if (id === "values") {
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
            <button onClick={() => scrollToSection("values")} className="hover:text-white transition-colors cursor-pointer">{t.nav.values}</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors cursor-pointer">{t.nav.services}</button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-white transition-colors cursor-pointer">{t.nav.work}</button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-white transition-colors cursor-pointer">{t.nav.pricing}</button>
            <button onClick={() => scrollToSection("footer")} className="hover:text-white transition-colors cursor-pointer">{t.nav.contact}</button>

            <button
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/5 cursor-pointer"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-xs">{lang === 'zh' ? 'En' : '中'}</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 2. 动画舞台 */}
      <div ref={containerRef} className="relative h-[180vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* A. 粒子层 (Canvas) */}
          <div className="absolute inset-0 z-10">
            <IntroAnimation scrollProgress={scrollProgressValue} />
          </div>

          {/* B. Hero 内容 */}
          <motion.div
            style={{ y: heroTranslateY }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 w-full pointer-events-none"
          >
            <div className="max-w-6xl mx-auto text-center pointer-events-auto">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500"
                  dangerouslySetInnerHTML={{ __html: t.hero.title }}
                />
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mt-4 mb-12"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* 价值观卡片 */}
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  { ...t.hero.values.v1, icon: Workflow, color: "text-blue-400" },
                  { ...t.hero.values.v2, icon: Database, color: "text-emerald-400" },
                  { ...t.hero.values.v3, icon: RefreshCcw, color: "text-purple-400" },
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

          {/* 底部提示箭头 */}
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

      {/* 3. 后续内容区 */}

      {/* Services Section */}
      <section id="services" className="py-32 bg-zinc-950 relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.services.title}</h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mt-4 mb-12"
            >
              {t.services.subtitle}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CaaS */}
            <div className="p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t.services.caas_title}</h3>
                  <p className="text-zinc-400">{t.services.caas_sub}</p>
                </div>
              </div>
              <ul className="grid gap-4">
                {t.services.caas_list.map((item, i) => (
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
                  <h3 className="text-2xl font-bold">{t.services.saas_title}</h3>
                  <p className="text-zinc-400">{t.services.saas_sub}</p>
                </div>
              </div>
              <ul className="grid gap-4">
                {t.services.saas_list.map((item, i) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.gallery.title}</h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mt-4 mb-12"
            >
              {t.gallery.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 md:px-0">
            {newPortfolioData.map((item) => (
              <motion.div
                key={item.id}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/5"
              >
                <Image
                  src={item.src}
                  alt={item.title[lang]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Glassmorphism Overlay */}
                <motion.div
                  variants={{
                    rest: { y: "100%" },
                    hover: { y: "0%" }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute inset-x-0 bottom-0 p-8 bg-black/60 backdrop-blur-xl border-t border-white/10 flex flex-col gap-4 text-white"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{item.title[lang]}</h3>
                      <p className="text-emerald-400 text-sm font-medium">{item.category[lang]}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-300 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>{item.stats[lang]}</span>
                  </div>

                  <div className="flex gap-2 mt-1">
                    {item.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.pricing.title}</h2>
            <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-white/10 relative">
              <div className={`absolute inset-y-1 w-[140px] rounded-full bg-white/10 transition-all duration-300 ${pricingMode === 'caas' ? 'left-1' : 'left-[148px]'}`} />
              <button onClick={() => setPricingMode("caas")} className={`relative z-10 w-[140px] py-3 rounded-full font-medium transition-colors cursor-pointer ${pricingMode === 'caas' ? 'text-white' : 'text-zinc-500'}`}>{t.pricing.toggle_caas}</button>
              <button onClick={() => setPricingMode("saas")} className={`relative z-10 w-[140px] py-3 rounded-full font-medium transition-colors cursor-pointer ${pricingMode === 'saas' ? 'text-white' : 'text-zinc-500'}`}>{t.pricing.toggle_saas}</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.pricing[pricingMode].map((plan: any, index: number) => (
              <div
                key={plan.title}
                onClick={() => setSelectedPlanIndex(index)}
                className={`relative p-8 rounded-3xl border flex flex-col cursor-pointer transition-all duration-300 
                  ${/* 基础样式 + 选中态 */ ""}
                  ${selectedPlanIndex === index ? "bg-zinc-800/80 scale-105 z-10" : "bg-zinc-900/40 hover:bg-zinc-900/60"}
                  ${/* Highlight 逻辑: 如果是 highlight 为 true (如 SaaS 企业定制), 添加紫色流光边框 + 阴影 */ ""}
                  ${/* 注意：这里原代码通过 plan.highlight 判断，现在我们需要在翻译里也加上 highlight 字段或者保留原 pricingData 结构但内容替换 */ ""}
                  ${/* 或者简化逻辑，假设索引 1 和 2 高亮？原代码：CaaS[1] high, SaaS[2] high */ ""}
                  ${(pricingMode === 'caas' && index === 1) || (pricingMode === 'saas' && index === 2) ? "border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]" : (selectedPlanIndex === index ? "border-white/20 shadow-2xl" : "border-white/5")}
                `}
              >
                {/* Most Popular Badge */}
                {((pricingMode === 'caas' && index === 1) || (pricingMode === 'saas' && index === 2)) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg border border-purple-400">
                    {t.pricing.popular}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-sm text-zinc-400">{plan.target}</p>
                </div>
                <div className="mb-8 pb-8 border-b border-white/5">
                  <span className="text-3xl font-bold text-white">
                    {lang === 'zh' ? '¥' : '$'}{plan.price}
                  </span>
                  <span className="text-sm text-zinc-500">{plan.unit}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat: string, i: number) => (
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
                  className={`w-full py-4 rounded-xl font-semibold transition-colors ${((pricingMode === 'caas' && index === 1) || (pricingMode === 'saas' && index === 2)) ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-white text-black hover:bg-zinc-200'}`}
                >
                  {t.pricing.contact_btn}
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
              <h2 className="text-2xl font-bold">Singularity Society</h2>
            </div>
            <div className="flex flex-col gap-4 text-zinc-400">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5" /><span>Mr Seaf (+86) 18360473881</span></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5" /><span>hello@seaf.design</span></div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /><span>{t.footer.location}</span></div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
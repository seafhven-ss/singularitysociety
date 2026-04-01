export const translations = {
  zh: {
    nav: {
      products: "产品",
      cases: "案例",
      about: "关于",
      contact: "联系",
    },
    hero: {
      eyebrow: "奇点社 / 公开构建中",
      title: "真实业务问题  轻量 AI 产品  公开构建",
      subtitle: "一个人的 AI 产品实验室，公开构建中",
      cta_primary: "了解更多",
      cta_secondary: "联系咨询",
    },
    products: {
      section_eyebrow: "Case Studies",
      section_title: "实践案例",
      section_desc: "案例结构固定为背景、挑战、方案、结果，强调叙事推进而不是数据墙。",
      view_detail: "查看详情",
      open_case: "打开案例",
      status_dev: "开发中",
    },
    footer: {
      tagline: "真实业务问题  轻量 AI 产品  公开构建",
      location: "中国（江苏）自由贸易试验区苏州片区 苏州工业园区独墅湖数字经济产业园",
    },
    contact: {
      title: "联系我们",
      subtitle: "产品合作、技术咨询、IP 授权、内容联创——有什么想法，直接聊。",
      email_label: "邮件联系",
      email_desc: "最直接的方式，通常 24 小时内回复",
      location_label: "办公地点",
      social_title: "其他渠道",
      social_eyebrow: "Social",
    },
  },
  en: {
    nav: {
      products: "Products",
      cases: "Cases",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Singularity Society / Built in Public",
      title: "Real Business Problems  Lightweight AI Products  Built in Public",
      subtitle: "A solo AI product lab, building in public.",
      cta_primary: "Explore Products",
      cta_secondary: "Get in Touch",
    },
    products: {
      section_eyebrow: "Case Studies",
      section_title: "Case Studies",
      section_desc: "Each case follows a fixed structure: background, challenge, approach, results — story-driven, not a data wall.",
      view_detail: "Learn More",
      open_case: "Open Case",
      status_dev: "In Development",
    },
    footer: {
      tagline: "Real Business Problems  Lightweight AI Products  Built in Public",
      location: "Dushu Lake Digital Economy Industrial Park, SIP, Suzhou, Jiangsu FTZ, China",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Product collaboration, technical consulting, IP licensing, content co-creation — let's talk.",
      email_label: "Email",
      email_desc: "Most direct way to reach us, usually replied within 24 hours",
      location_label: "Office",
      social_title: "Other Channels",
      social_eyebrow: "Social",
    },
  },
};

export type Lang = "zh" | "en";
export type Translations = typeof translations.zh;

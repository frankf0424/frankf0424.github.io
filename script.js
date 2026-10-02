const copy = {
  zh: {
    skip:"跳到主要内容",navLabel:"主导航",languageLabel:"语言",navAbout:"关于",navFocus:"方向",navProjects:"作品",navContact:"联系",
    eyebrow:"个人开发者主页",tagline:"构建后端系统，探索数据处理与 AI 应用。",heroDescription:"我喜欢把想法做成可运行、可解释的项目，并在这里记录实现过程、技术取舍和学到的东西。",viewGitHub:"查看 GitHub",heroIndex:"后端 · 数据 · AI",artCaption:"后端 / 数据 / AI",explore:"继续了解 ↓",
    aboutTitle:"关于我",aboutOne:"我主要关注后端服务、已有系统的改造和数据处理，也在实践 AI 应用与 Agent 工具的工程化。我做过 Go 和 Java 服务开发，接触过 Kafka、Flink、Redis、MySQL，以及模型服务接入和 MCP 工具开发。",aboutTwo:"我重视弄清问题与边界，做出可以运行的实现，再通过测试、观察和复盘逐步改进。这个网站用于分享我独立完成的公开项目及其设计过程。",
    focusTitle:"关注方向",focusIntro:"围绕真实问题，持续学习、构建和验证。",backendTitle:"后端工程",backendDescription:"使用 Go 和 Java 构建服务，关注接口设计、系统集成、已有系统改造和运行问题排查。",dataTitle:"数据处理",dataDescription:"关注异步数据链路、Kafka、Flink，以及统计结果的验证和核对。",aiTitle:"AI 应用",aiDescription:"探索模型服务接入、Agent 与 MCP 工具，关注资料来源、工具调用、失败处理和能力边界。",
    contactTitle:"保持联系",contactDescription:"欢迎通过 GitHub 查看我的项目，或通过邮箱与我交流。",emailLabel:"邮箱",backToTop:"返回顶部 ↑",
    pageTitle:"Longjun Fu — 开发者主页",pageDescription:"Longjun Fu 的个人开发者主页。关注后端工程、数据处理与 AI 应用。"
  },
  en: {
    skip:"Skip to main content",navLabel:"Main navigation",languageLabel:"Language",navAbout:"About",navFocus:"Focus",navProjects:"Projects",navContact:"Contact",
    eyebrow:"PERSONAL DEVELOPER SITE",tagline:"Building backend systems and exploring data processing and AI applications.",heroDescription:"I enjoy turning ideas into working, explainable projects. Here I share how I build them, the trade-offs I make, and what I learn along the way.",viewGitHub:"View GitHub",heroIndex:"BACKEND · DATA · AI",artCaption:"BACKEND / DATA / AI",explore:"Explore more ↓",
    aboutTitle:"About me",aboutOne:"I focus on backend services, modernizing existing systems, and data processing. I also explore the engineering side of AI applications and Agent tools. My experience includes Go and Java services, Kafka, Flink, Redis, MySQL, model service integration, and MCP tools.",aboutTwo:"I care about understanding a problem and its boundaries, building something that works, and improving it through testing, observation, and reflection. This site is a place to share independent public projects and the thinking behind them.",
    focusTitle:"Areas of focus",focusIntro:"Learning, building, and validating around real problems.",backendTitle:"Backend Engineering",backendDescription:"Building services with Go and Java, with an interest in API design, system integration, modernizing existing systems, and investigating production issues.",dataTitle:"Data Processing",dataDescription:"Exploring asynchronous data pipelines, Kafka, Flink, and ways to validate and compare processing results.",aiTitle:"AI Applications",aiDescription:"Exploring model integration, Agents, and MCP tools, with attention to data sources, tool calls, failure handling, and clear capability boundaries.",
    contactTitle:"Get in touch",contactDescription:"You can find my projects on GitHub or reach me by email.",emailLabel:"Email",backToTop:"Back to top ↑",
    pageTitle:"Longjun Fu — Developer",pageDescription:"Longjun Fu's developer site. Backend engineering, data processing, and AI applications."
  }
};

function setLanguage(language) {
  const strings = copy[language];
  if (!strings) return;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = strings[element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", strings[element.dataset.i18nAria]); });
  document.querySelectorAll("[data-lang]").forEach((button) => { button.setAttribute("aria-pressed", String(button.dataset.lang === language)); });
  document.title = strings.pageTitle;
  document.querySelector('meta[name="description"]').content = strings.pageDescription;
  try { localStorage.setItem("site-language", language); } catch { /* Storage is optional. */ }
}

document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
let savedLanguage = null;
try { savedLanguage = localStorage.getItem("site-language"); } catch { /* Use Chinese by default. */ }
if (savedLanguage === "en") setLanguage("en");
document.getElementById("year").textContent = new Date().getFullYear();

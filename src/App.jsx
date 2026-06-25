import React from 'react';
import {
  feeCards,
  galleryImages,
  heroStats,
  industryCards,
  lifeImages,
  majors,
  navItems,
  pathways,
} from './data/siteData.js';
const GlowCard = ({ className = '', children }) => (
  <div className={`sxlg-card ${className}`}>{children}</div>
);

const SectionHeader = ({ eyebrow, title, text }) => (
  <div className="section-header">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text ? <p>{text}</p> : null}
  </div>
);

const ImageRail = ({ images, compact = false }) => (
  <div className={compact ? 'image-rail compact' : 'image-rail'}>
    {images.map((image, index) => (
      <figure key={image} className="rail-card">
        <img
          src={image}
          alt={`校园展示 ${index + 1}`}
          loading="lazy"
          decoding="async"
        />
      </figure>
    ))}
  </div>
);

const Navigation = () => (
  <header className="site-nav">
    <nav aria-label="页面导航">
      {navItems.slice(0, 8).map((item) => (
        <a key={item.id} href={`#${item.id}`}>
          {item.label}
        </a>
      ))}
    </nav>
    <a className="nav-cta" href="#contact">报名咨询</a>
  </header>
);

const Hero = () => (
  <section id="top" data-section="hero" className="hero">
    <img
      className="hero-bg"
      src="/images/hero.webp"
      alt="中山市沙溪理工学校校园"
      fetchPriority="high"
      decoding="async"
    />
    <div className="hero-overlay" />
    <div className="hero-rays" aria-hidden="true" />
    <div className="hero-content page-shell">
      <div className="hero-copy">
        <span className="eyebrow light">ADMISSION 2026</span>
        <h1>中山市沙溪理工学校<br />2026年招生简介</h1>
        <p>寻梦求学路，沙理绘蓝图。这里不仅是知识的殿堂，更是梦想起航的港湾。2026，我们在沙理等您。</p>
        <div className="hero-actions">
          <a href="#plan" className="primary-btn">查看招生计划</a>
          <a href="#contact" className="ghost-btn">报名咨询</a>
        </div>
      </div>
      <GlowCard className="hero-panel">
        {heroStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </GlowCard>
    </div>
  </section>
);

const About = () => (
  <section id="about" data-section="about" className="section">
    <div className="page-shell split">
      <SectionHeader
        eyebrow="ABOUT SCHOOL"
        title="市直属公办学校，扎根中山的职业教育平台"
        text="中山市沙溪理工学校隶属于中山市教育和体育局，是市直属公办学校。学校创办于1991年，位于中山市沙溪镇。"
      />
      <GlowCard className="feature-card">
        <p>学校围绕学生升学、技能成长与职业发展，构建兼具文化基础、专业实训和综合素养培养的育人环境。</p>
        <div className="mini-grid">
          <span>公办直属</span>
          <span>国家级重点</span>
          <span>省高水平中职</span>
          <span>升学通道多</span>
        </div>
      </GlowCard>
    </div>
    <div className="page-shell">
      <ImageRail images={galleryImages.slice(0, 3)} />
    </div>
  </section>
);

const Honor = () => (
  <section id="honor" data-section="honor" className="section blue-band">
    <div className="page-shell split reverse">
      <div className="honor-board">
        {['国家级重点中等职业学校', '国家中等职业教育改革发展示范学校', '全国教育系统先进集体', '广东省高水平中职学校'].map((item) => (
          <GlowCard key={item} className="honor-item" dark>{item}</GlowCard>
        ))}
      </div>
      <SectionHeader
        eyebrow="RECOGNITION"
        title="办学积淀清晰，学校发展成果持续沉淀"
        text="学校在职业教育改革、专业建设、学生培养和校园治理方面形成了稳健的办学基础。"
      />
    </div>
  </section>
);

const AdmissionPlan = () => (
  <section id="plan" data-section="plan" className="section">
    <div className="page-shell">
      <SectionHeader
        eyebrow="ADMISSION PLAN"
        title="招生计划"
        text="招生专业与人数以官方最终发布为准。页面先以清晰表格承载信息，方便后续替换精确数据。"
      />
      <div className="plan-layout">
        <div className="image-frame tall">
          <img src="/images/admission-plan.webp" alt="招生计划图片" loading="lazy" decoding="async" />
        </div>
        <GlowCard className="table-card">
          <table>
            <thead>
              <tr>
                <th>专业方向</th>
                <th>英文标签</th>
                <th>招生人数</th>
              </tr>
            </thead>
            <tbody>
              {majors.map((major) => (
                <tr key={major.name}>
                  <td>{major.name}</td>
                  <td>{major.tag}</td>
                  <td>{major.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlowCard>
      </div>
    </div>
  </section>
);

const Majors = () => (
  <section id="majors" data-section="majors" className="section blue-band soft">
    <div className="page-shell">
      <SectionHeader
        eyebrow="MAJORS"
        title="专业设置"
        text="面向智能制造、数字技术、现代服务和创意设计等方向，形成多元专业选择。"
      />
      <div className="major-grid">
        {majors.map((major, index) => (
          <GlowCard key={major.name} className="major-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{major.name}</h3>
            <p>{major.tag}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>
);

const Pathways = () => (
  <section id="pathways" data-section="pathways" className="section">
    <div className="page-shell path-layout">
      <div>
        <SectionHeader
          eyebrow="FUTURE PATHWAYS"
          title="升学路径多元，给学生更多向上选择"
          text="学校构建从中职到高职、本科的多通道成长路径，支持学生以适合自己的方式继续深造。"
        />
        <div className="path-list">
          {pathways.map((item) => (
            <div key={item} className="path-pill">{item}</div>
          ))}
        </div>
      </div>
      <div className="image-frame">
        <img src="/images/pathways.webp" alt="升学路径图片" loading="lazy" decoding="async" />
      </div>
    </div>
  </section>
);

const Industry = () => (
  <section id="industry" data-section="industry" className="section blue-band">
    <div className="page-shell">
      <SectionHeader
        eyebrow="INDUSTRY INTEGRATION"
        title="产教融合"
        text="通过校企合作、实训平台和工作室教学，让专业学习更贴近产业现场。"
      />
      <div className="industry-grid">
        {industryCards.map((card) => (
          <GlowCard key={card.title} className="glass-card" dark>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>
);

const Career = () => (
  <section id="career" data-section="career" className="section">
    <div className="page-shell split">
      <SectionHeader
        eyebrow="STUDY & CAREER"
        title="升学与就业并重"
        text="大量毕业生升入高职、本科院校；同时学校持续链接企业招聘资源，帮助学生建立清晰成长路径。"
      />
      <div className="metric-strip">
        <GlowCard><strong>升学</strong><span>高职、本科院校通道</span></GlowCard>
        <GlowCard><strong>就业</strong><span>企业资源与岗位连接</span></GlowCard>
        <GlowCard><strong>技能</strong><span>竞赛与实训成果支撑</span></GlowCard>
      </div>
    </div>
  </section>
);

const Campus = () => (
  <section id="campus" data-section="campus" className="section">
    <div className="page-shell">
      <SectionHeader
        eyebrow="CAMPUS LIFE"
        title="校园环境 / 学习生活"
        text="学校拥有实训中心、文化场馆和学生社团，教室与宿舍配套持续完善。"
      />
      <ImageRail images={galleryImages.concat('/images/campus-6.webp')} compact />
    </div>
  </section>
);

const Life = () => (
  <section id="life" data-section="life" className="section blue-band soft">
    <div className="page-shell split reverse">
      <div className="life-collage">
        {lifeImages.map((image) => (
          <img key={image} src={image} alt="生活保障展示" loading="lazy" decoding="async" />
        ))}
      </div>
      <SectionHeader
        eyebrow="LIVING SUPPORT"
        title="衣食住行配套完整"
        text="宿舍配备空调，生活区管理规范，食堂和校园服务设施为学生在校学习生活提供稳定保障。"
      />
    </div>
  </section>
);

const FeesAndRules = () => (
  <>
    <section id="fees" data-section="fees" className="section">
      <div className="page-shell">
        <SectionHeader
          eyebrow="FEES"
          title="收费标准与助学政策"
          text="以官方招生政策为准，页面保留清晰的信息入口，方便家长快速查看。"
        />
        <div className="fee-grid">
          {feeCards.map((card) => (
            <GlowCard key={card.title} className="fee-card">
              <span>{card.title}</span>
              <strong>{card.value}</strong>
              <p>{card.text}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
    <section id="rules" data-section="rules" className="section compact-section">
      <GlowCard className="page-shell rule-card">
        <SectionHeader
          eyebrow="ADMISSION RULES"
          title="录取规则"
          text="根据《中山市2026年高中阶段学校考试招生工作方案》执行。具体批次、志愿填报和录取要求以中山市教育招生主管部门发布为准。"
        />
      </GlowCard>
    </section>
  </>
);

const Contact = () => (
  <footer id="contact" data-section="contact" className="contact">
    <div className="page-shell contact-layout">
      <div>
        <span className="eyebrow light">CONTACT</span>
        <h2>2026，我们在沙理等您</h2>
        <p>地址：中山市沙溪镇理工路13号</p>
      </div>
      <GlowCard className="contact-card" dark>
        <span>招生热线</span>
        <strong>0760-86238101</strong>
        <a href="http://www.zsedu.cn/sxlg" target="_blank" rel="noreferrer">访问学校官网</a>
      </GlowCard>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Honor />
        <AdmissionPlan />
        <Majors />
        <Pathways />
        <Industry />
        <Career />
        <Campus />
        <Life />
        <FeesAndRules />
      </main>
      <Contact />
    </>
  );
}

export default App;

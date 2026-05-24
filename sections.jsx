// sections.jsx — all major page sections

// ────────── NAV ──────────
const Nav = () =>
<nav className="nav" id="top">
    <div className="wrap nav-inner">
      <BrandMark />
      <div className="nav-links">
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#services">Services</a>
        <a className="nav-link" href="#testimonial">Testimonial</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
      <div className="nav-cta">
        <a className="btn btn-wa btn-sm" href="https://wa.me/6588877800" target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={14} /> WhatsApp
        </a>
        <a className="btn btn-primary btn-sm" href="#contact">
          Book consultation <Icon name="arrow-right" size={14} className="arr" />
        </a>
      </div>
    </div>
  </nav>;


// ────────── HERO ──────────
const Hero = ({ layout }) => {
  return (
    <section className="hero">
      <div className="hero-ornament" aria-hidden="true" />
      <div className="wrap">
        <div className={`hero-grid layout-${layout}`}>
          <div className="hero-copy">
            <div className="eyebrow fade-in">Singapore Property Advisor · Educator</div>
            <h1 className="h-display hero-headline fade-in d1">
              Real <em>advise.</em><br />Real result.
            </h1>
            <p className="hero-sub fade-in d2">
              Measured, educational insights for HDB upgraders, condo owners, and investors —
              by Shi Yao, Senior Marketing Director at PropNex. Honest advice before any decision.
            </p>
          </div>

          <div className="hero-image-wrap fade-in d2">
            <div className="hero-image-card">
              <img src="assets/agent-half.png" alt="Shi Yao, Senior Marketing Director at PropNex" />
            </div>
          </div>

          <div className="hero-meta fade-in d4">
            <div>
              <div className="n"><em>150+</em></div>
              <div className="lbl">Transactions closed</div>
            </div>
            <div>
              <div className="n">10 yrs</div>
              <div className="lbl">Singapore market</div>
            </div>
            <div>
              <div className="n">PropNex</div>
              <div className="lbl">Senior Marketing Director</div>
            </div>
          </div>
        </div>

        {/* Centered CTAs */}
        <div className="hero-cta-row fade-in d3">
          <a className="btn btn-primary" href="#contact">
            Book free strategy session <Icon name="arrow-right" size={14} className="arr" />
          </a>
          <a className="btn btn-ghost" href="#insights">
            Watch insights <Icon name="play" size={11} />
          </a>
        </div>
      </div>
    </section>);

};

// ────────── ABOUT ──────────
const About = () =>
<section className="section" id="about">
    <div className="wrap">
      <Reveal className="about-img about-img-clean">
        <img src="assets/agent-stand.png" alt="Shi Yao portrait" />
      </Reveal>
      <Reveal delay={120} className="about-copy">
        <div className="eyebrow">About Shi Yao</div>
        <h2 className="h-section" style={{ margin: "20px 0 22px" }}>
          An advisor, not a <em>salesperson.</em>
        </h2>
        <p className="lede">
          I entered Singapore real estate in 2016 with the belief that clients needed more than salespeople — they needed honest guidance and clear advice.
        </p>
        <p className="lede" style={{ marginTop: 16 }}>
          Today, I work closely with families and investors who value clarity: on timing, financials, market positioning, and the trade-offs others often overlook.
        </p>
        <p className="lede" style={{ marginTop: 16 }}>
          Every conversation starts with one simple question: <em style={{ fontFamily: "var(--display)", color: "var(--gold)" }}>“What’s truly the right move for you?”</em> From there, we build a strategy grounded in data, aligned with your lifestyle goals, and focused on long-term wealth growth.
        </p>

        <div className="about-creds">
          <div className="about-cred">
            <div>
              <b>Senior Marketing Director — PropNex Realty</b>
              <span>Leading a team focused on upgrader and investor advisory.</span>
            </div>
          </div>
          <div className="about-cred">
            <div>
              <b>Top 5% Producer, PropNex</b>
              <span>Recognised for consistent client satisfaction and sales volume.</span>
            </div>
          </div>
          <div className="about-cred">
            <div>
              <b>CEA Registered Salesperson · R057878B</b>
              <span>Full-time in residential resale, new launch, and investment advisory.</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;


// ────────── SERVICES ──────────
const services = [
{ icon: "i-valuation", title: "Home valuation", body: "An honest read on what your property is worth today — backed by recent transactions, not gut feel." },
{ icon: "i-strategy", title: "Selling strategy", body: "Pricing, staging, and marketing plans designed for the realities of your block, project, and buyer pool." },
{ icon: "i-invest", title: "Investment consultation", body: "Yield, capital growth, holding power — the unsentimental view before you commit any deposit." },
{ icon: "i-timeline", title: "Timeline planning", body: "Sell-first or buy-first, bridging loans, ABSD, MOP — mapped to your finances and family calendar." },
{ icon: "i-portfolio", title: "Portfolio restructuring", body: "For owners of one or several properties — whether to decouple, sell, hold, or pivot, and exactly when." },
{ icon: "i-upgrader", title: "Upgrader roadmap", body: "From HDB to private — a 12 to 24-month plan with funds-on-hand projections at every milestone." }];

const Services = () =>
<section className="section section-alt" id="services">
    <div className="wrap">
      <Reveal className="section-head center">
        <div className="eyebrow">Services</div>
        <h2 className="h-section one-line">Six conversations, one <em>clear path</em>.</h2>
        <p>Each engagement starts with where you are and what you want — then we agree on the smallest, smartest next move. No hard sells, no hidden quotas.</p>
      </Reveal>
      <div className="svc-grid">
        {services.map((s, i) =>
      <Reveal key={s.title} delay={i * 70} as="article" className="svc-card">
            <div className="svc-num">0{i + 1}</div>
            <div className="svc-icon"><Icon name={s.icon} size={32} stroke={1.2} /></div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <a className="arrow" href="#contact">
              Discuss this <Icon name="arrow-right" size={14} />
            </a>
          </Reveal>
      )}
      </div>
    </div>
  </section>;


// ────────── WHY WORK WITH ME ──────────
const why = [
{ tag: "Method", title: "Data-driven first", body: "Every recommendation is backed by URA caveats, project comps, and rental data — not opinions." },
{ tag: "Outcome", title: "Calm, firm negotiation", body: "I prepare the case, walk you through the numbers, and let evidence — not pressure — close the gap." },
{ tag: "Reach", title: "Marketing that actually works", body: "Project-specific listings, professional photography, and a Singapore audience built from years of content." },
{ tag: "Pace", title: "Client-first, never quota-first", body: "I'd rather you wait six months for the right move than rush into the wrong one this quarter." },
{ tag: "Trust", title: "Transparent end-to-end", body: "Every fee, every assumption, every risk — written down before you sign anything." },
{ tag: "Depth", title: "Local market fluency", body: "From mass-market HDB heartlands to prime district condos and landed enclaves \u2014 I read each submarket on its own terms, with the comps, project pipeline, and demand signals that actually move price." }];

const WhyMe = () =>
<section className="section" id="why">
    <div className="wrap">
      <div className="why-wrap">
        <Reveal>
          <div className="eyebrow">Why work with me</div>
          <h2 className="h-section" style={{ marginTop: 20 }}>Slow advice, <br /><em>compounded results.</em></h2>
          <p className="lede" style={{ marginTop: 22 }}>
            What sets the work apart isn't any one thing — it's the discipline of doing six small things well, every time.
          </p>
        </Reveal>
        <div className="why-list">
          {why.map((w, i) =>
        <Reveal key={w.title} delay={i * 60} className="why-row">
              <div className="num">0{i + 1}</div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.body}</p>
              </div>
              <div className="tag">{w.tag}</div>
            </Reveal>
        )}
        </div>
      </div>
    </div>
  </section>;


// ────────── INSIGHTS / YOUTUBE ──────────
const videos = [
{ tag: "Upgrader 101", title: "Sell first or buy first? A 2026 framework", duration: "12:24", desc: "Walking through cashflow, ABSD, and bridging loan options for HDB upgraders." },
{ tag: "Market view", title: "Where are Singapore condo prices heading?", duration: "08:51", desc: "A measured look at supply, demand, and what URA caveats are telling us right now." },
{ tag: "Investing", title: "The hidden costs nobody warns you about", duration: "10:07", desc: "From legal fees to property tax — what most first-time investors miss in their projections." }];

const Insights = () =>
<section className="section section-alt" id="insights">
    <div className="wrap">
      <Reveal className="section-head">
        <div className="eyebrow">Educational insights</div>
        <h2 className="h-section">Learn before you <em>commit.</em></h2>
        <p>New videos every week on YouTube — frameworks, market reads, and conversations with clients about real decisions.</p>
      </Reveal>
      <div className="yt-grid">
        {videos.map((v, i) =>
      <Reveal key={v.title} delay={i * 90} as="a" href="https://youtube.com/@itsmeshiyao" target="_blank" rel="noreferrer" className="yt-card">
            <div className="yt-thumb">
              <YtPlaceholder index={i} />
              <span className="yt-thumb-tag">{v.tag}</span>
              <span className="yt-thumb-len">{v.duration}</span>
              <span className="yt-play"><Icon name="play" size={22} /></span>
            </div>
            <div className="yt-meta">YouTube · @itsmeshiyao</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </Reveal>
      )}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a className="btn btn-ghost" href="https://youtube.com/@itsmeshiyao" target="_blank" rel="noreferrer">
          See all videos on YouTube <Icon name="arrow-up-right" size={14} />
        </a>
      </div>
    </div>
  </section>;


// Subtle generative thumbnail placeholder — preserves "creator brand" feel without dummy stock imagery
const YtPlaceholder = ({ index }) => {
  const variants = [
  // Skyline
  <svg key="a" className="yt-thumb-bg" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ytga" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2317" /><stop offset="1" stopColor="#0d0c0a" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#ytga)" />
      <g fill="#bd9859" opacity="0.55">
        <rect x="20" y="120" width="22" height="60" />
        <rect x="48" y="90" width="28" height="90" />
        <rect x="82" y="60" width="24" height="120" />
        <rect x="112" y="100" width="30" height="80" />
        <rect x="148" y="40" width="22" height="140" />
        <rect x="176" y="80" width="26" height="100" />
        <rect x="208" y="110" width="20" height="70" />
        <rect x="234" y="70" width="28" height="110" />
        <rect x="268" y="100" width="22" height="80" />
        <rect x="294" y="130" width="18" height="50" />
      </g>
      <circle cx="260" cy="46" r="12" fill="#e6b86d" opacity="0.7" />
    </svg>,
  // Chart
  <svg key="b" className="yt-thumb-bg" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#161410" />
      <g stroke="#3a352a" strokeWidth="1">
        <line x1="0" y1="50" x2="320" y2="50" />
        <line x1="0" y1="100" x2="320" y2="100" />
        <line x1="0" y1="150" x2="320" y2="150" />
      </g>
      <path d="M0 160 L40 150 L80 130 L120 140 L160 110 L200 90 L240 100 L280 70 L320 50"
    stroke="#bd9859" strokeWidth="2" fill="none" />
      <path d="M0 160 L40 150 L80 130 L120 140 L160 110 L200 90 L240 100 L280 70 L320 50 L320 200 L0 200 Z"
    fill="#bd9859" opacity="0.15" />
      <circle cx="200" cy="90" r="5" fill="#e6b86d" />
    </svg>,
  // Floorplan
  <svg key="c" className="yt-thumb-bg" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#1f1c16" />
      <g stroke="#bd9859" strokeWidth="1.5" fill="none" opacity="0.7">
        <rect x="40" y="30" width="240" height="140" />
        <line x1="160" y1="30" x2="160" y2="170" />
        <line x1="40" y1="100" x2="160" y2="100" />
        <line x1="160" y1="80" x2="280" y2="80" />
        <line x1="220" y1="80" x2="220" y2="170" />
      </g>
      <g fill="#e6b86d" opacity="0.5">
        <circle cx="90" cy="60" r="10" />
        <rect x="180" y="120" width="30" height="20" />
        <rect x="240" y="40" width="20" height="20" />
      </g>
    </svg>];

  return variants[index % variants.length];
};

// ────────── TESTIMONIALS ──────────
const testimonials = [
{ name: "Kelvin & Amanda", role: "HDB upgraders", initials: "KA",
  title: "Clear strategy from start to finish",
  quote: "Before engaging Shi Yao, we were unsure whether to sell first or buy first. He mapped out multiple scenarios, explained the risks clearly, and helped us structure our finances properly. Because of his planning, we sold at a comfortable price and upgraded smoothly without timeline stress. We always felt informed and in control throughout the process.", src: "Verified" },
{ name: "Ben & Serene", role: "First-time buyers", initials: "BS",
  title: "Honest advice that built trust",
  quote: "Shi Yao was straightforward and never pushy. He highlighted both strengths and weaknesses of the properties we viewed, and even advised against certain options when the numbers didn\u2019t make sense. That honesty gave us confidence that he truly prioritised our interests.", src: "Verified" },
{ name: "Mr & Mrs Tan", role: "Sellers", initials: "MT",
  title: "Structured, detailed and results-driven",
  quote: "From pricing strategy to negotiation, everything was systematic. Shi Yao positioned our unit well, managed buyer expectations carefully, and handled the negotiation professionally. We achieved a strong outcome and the entire journey felt well managed.", src: "Verified" }];

const Testimonials = ({ style }) => {
  const trackRef = React.useRef(null);
  const scrollBy = (dir) => {
    const el = trackRef.current;if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };
  return (
    <section className={`section testi-wrap testi-style-${style}`} id="testimonial">
      <div className="wrap">
        <Reveal className="section-head center" style={{ marginBottom: 56 }}>
          <div className="eyebrow">Testimonial</div>
          <h2 className="h-section">In their <em>own words.</em></h2>
          <p>Hand-picked from verified clients and direct referrals.</p>
        </Reveal>
        <div className="testi-controls">
          <button className="testi-ctrl" aria-label="Previous" onClick={() => scrollBy(-1)}>
            <Icon name="arrow-right" size={16} stroke={1.6} color="currentColor" />
            <span style={{ display: "none" }}>prev</span>
          </button>
          <button className="testi-ctrl" aria-label="Next" onClick={() => scrollBy(1)}>
            <Icon name="arrow-right" size={16} stroke={1.6} color="currentColor" />
          </button>
        </div>
        <div className="testi-track" ref={trackRef}>
          {testimonials.map((t, i) =>
          <article key={t.name} className="testi-card">
              <div className="stars">★★★★★</div>
              {t.title && <h4 className="testi-title">{t.title}</h4>}
              <p className="quote">{t.quote}</p>
              <div className="source">
                <div className="avatar">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </div>
              </div>
              <span className="src-mark">{t.src}</span>
            </article>
          )}
        </div>
      </div>
    </section>);

};

// Flip first button arrow for prev
const _testiCtrlStyle = document.createElement("style");
_testiCtrlStyle.textContent = ".testi-controls .testi-ctrl:first-child svg { transform: rotate(180deg); }";
document.head.appendChild(_testiCtrlStyle);

// ────────── FAQ ──────────
const faqs = [
{ q: "Is now a good time to upgrade?", a: "It depends on your finances, your MOP timing, and the gap between selling and buying. I'll walk you through three timing scenarios — now, in 6 months, in 18 months — with projected numbers for each, before we decide anything." },
{ q: "Should I sell first or buy first?", a: "Both are valid. Sell-first lowers your ABSD exposure and gives you certainty on funds; buy-first lets you move on your own terms but requires bridging strategy. The right choice depends on your equity position and risk appetite — we map it out on a single page together." },
{ q: "How much is my property worth?", a: "I provide a complimentary valuation based on recent transactions in your block or development, current listings on the market, and adjustments for unit attributes (level, facing, layout). Most reports take 48 hours." },
{ q: "What are the hidden costs of selling or upgrading?", a: "Legal fees, agent commission, valuation differential, BSD/ABSD on the new property, renovation float, and rental gap if applicable. I'll prepare a one-page total cost view so nothing surprises you on completion day." },
{ q: "How long does the full process take?", a: "For a typical upgrader: 3–6 months for the planning phase, 4–8 weeks to find a buyer, 10–12 weeks to completion. For investors, timelines vary. We'll agree a realistic schedule at our first meeting." }];

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section section-alt" id="faq">
      <div className="wrap">
        <Reveal className="section-head center">
          <div className="eyebrow">Frequently asked</div>
          <h2 className="h-section">Questions, <em>answered honestly.</em></h2>
          <p className="faq-tagline">If yours isn’t here, message it on WhatsApp — I reply personally within an hour.</p>
        </Reveal>
        <div className="faq-wrap">
          {faqs.map((f, i) =>
          <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="plus"><Icon name="plus" size={14} /></span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

// ────────── LEAD CAPTURE ──────────
const Lead = () => {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {e.preventDefault();setSent(true);};
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="lead-wrap">
          <div className="lead-grid">
            <div className="lead-copy lead-copy-centered">
              <div className="eyebrow" style={{ color: "var(--gold-light)" }}>Contact</div>
              <h2 className="h-section" style={{ marginTop: 20 }}>
                Get a free property <em>strategy consultation.</em>
              </h2>
              <p>
                A 30-minute conversation — no obligations, no pitch. Tell me what you're weighing,
                and I'll come prepared with the numbers, scenarios, and questions to ask.
              </p>
              <div className="lead-features">
                <div className="lead-feat"><span className="check"><Icon name="check" size={12} /></span> 30 minutes, online or in person</div>
                <div className="lead-feat"><span className="check"><Icon name="check" size={12} /></span> Prepared comps for your property or target area</div>
                <div className="lead-feat"><span className="check"><Icon name="check" size={12} /></span> Written summary sent after we speak</div>
                <div className="lead-feat"><span className="check"><Icon name="check" size={12} /></span> Reply within 1 hour, Mon–Sun</div>
              </div>
            </div>
            {sent ?
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--display)", fontSize: 40, color: "var(--gold-light)" }}>Thank you.</div>
                  <p style={{ color: "rgba(245,239,225,.7)", marginTop: 16 }}>I'll be in touch on WhatsApp within the hour.</p>
                </div>
              </div> :

            <form className="lead-form" onSubmit={submit}>
                <a className="wa-cta" href="https://wa.me/6588877800" target="_blank" rel="noreferrer">
                  <span className="wa-cta-ic"><Icon name="whatsapp" size={18} color="#fff" /></span>
                  <span className="wa-cta-text">
                    <b>WhatsApp Surya</b>
                    <small>Fastest — a real reply within the hour</small>
                  </span>
                  <Icon name="arrow-up-right" size={16} />
                </a>
                <div className="wa-or"><span>or fill in below</span></div>
                <div>
                  <label>Your name</label>
                  <input required type="text" placeholder="e.g. Daniel Tan" />
                </div>
                <div>
                  <label>Mobile (WhatsApp)</label>
                  <input required type="tel" placeholder="+65 9XXX XXXX" />
                </div>
                <div className="field-row">
                  <div>
                    <label>Property type</label>
                    <select required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>HDB</option>
                      <option>Condominium</option>
                      <option>Landed</option>
                      <option>Looking to buy</option>
                    </select>
                  </div>
                  <div>
                    <label>Timeline</label>
                    <select required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>Just exploring</option>
                      <option>Within 3 months</option>
                      <option>3–12 months</option>
                      <option>12+ months</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Main concern (optional)</label>
                  <textarea placeholder="e.g. We've MOP'd and are weighing whether to upgrade to a condo or hold and invest separately." />
                </div>
                <button type="submit">
                  Send my request <Icon name="arrow-right" size={14} />
                </button>
              </form>
            }
          </div>
        </Reveal>
      </div>
    </section>);

};

// ────────── FOOTER ──────────
const Footer = () =>
<footer className="footer">
    <div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <BrandMark />
          <p>Trusted property advisor and educator. Honest counsel for Singapore homeowners, upgraders, and investors.</p>
        </div>
        <div>
          <h5>Navigate</h5>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Direct line</h5>
          <ul>
            <li><a href="https://wa.me/6588877800">WhatsApp · +65 8887 7800</a></li>
            <li><a href="tel:+6588877800">Call · +65 8887 7800</a></li>
            <li><a href="mailto:itsmeshiyao@gmail.com">itsmeshiyao@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h5>Follow</h5>
          <ul>
            <li><a href="https://instagram.com/suryawij" target="_blank" rel="noreferrer"><Icon name="instagram" size={14} /> &nbsp;Instagram · @suryawij</a></li>
            <li><a href="https://tiktok.com/@suryawij" target="_blank" rel="noreferrer"><Icon name="tiktok" size={14} /> &nbsp;TikTok · @suryawij</a></li>
            <li><a href="https://youtube.com/@itsmeshiyao" target="_blank" rel="noreferrer"><Icon name="youtube" size={14} /> &nbsp;YouTube · @itsmeshiyao</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© 2026 Shi Yao · Property Scout. All rights reserved.</small>
        <p className="footer-disclaimer">
          CEA Registered Salesperson (R057878B) under PropNex Realty Pte Ltd. Information on this site
          is for general guidance only and does not constitute financial or legal advice. Past performance
          is not indicative of future results.
        </p>
      </div>
    </div>
  </footer>;


// ────────── Floating WhatsApp ──────────
const WhatsAppFloat = () =>
<a className="wa-float" href="https://wa.me/6588877800" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
    <span className="wa-pulse" aria-hidden="true" />
    <Icon name="whatsapp" size={28} color="#fff" />
  </a>;


Object.assign(window, {
  Nav, Hero, About, Services, WhyMe, Insights,
  Testimonials, FAQ, Lead, Footer, WhatsAppFloat
});
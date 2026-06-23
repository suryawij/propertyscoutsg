// sections.jsx — all major page sections
const __R = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

// ────────── NAV ──────────
// Calculator menu
const CALCULATORS = [
  { label: "New Launch Calculator", href: "New Launch Calculator.html", live: true },
  { label: "Stamp Duty Calculator", href: "#stamp-duty", live: true },
  { label: "Loan Eligibility Calculator", href: "calculators.html", live: false },
];

const CalcDropdown = () =>
  <div className="nav-dropdown" tabIndex={0}>
    <span className="nav-link nav-dropdown-trigger">
      Calculators <Icon name="chevron-down" size={14} className="nav-chev" />
    </span>
    <div className="nav-dropdown-menu">
      <a className="nav-dd-item" href="calculators.html">
        <span>All calculators</span>
      </a>
      <div className="nav-dd-sep" />
      {CALCULATORS.map((c) =>
        <a key={c.label} className={`nav-dd-item${c.live ? "" : " is-soon"}`} href={c.href}>
          <span>{c.label}</span>
          {!c.live && <em className="nav-dd-soon">Soon</em>}
        </a>
      )}
    </div>
  </div>;

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="nav" id="top">
      <div className="wrap nav-inner">
        <BrandMark />
        <div className="nav-links">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#services">Services</a>
          <CalcDropdown />
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
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <span className={`burger-icon${open ? " open" : ""}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${open ? " open" : ""}`} onClick={close}>
        <div className="mobile-menu-body" onClick={e => e.stopPropagation()}>
          <div className="mobile-menu-links">
            <a className="mobile-link" href="#about" onClick={close}>About</a>
            <a className="mobile-link" href="#services" onClick={close}>Services</a>
            <div className="mobile-link-group">
              <div className="mobile-link-label">Calculators</div>
              <a className="mobile-sublink" href="New Launch Calculator.html">New Launch Calculator</a>
              <a className="mobile-sublink" href="#stamp-duty" onClick={close}>Stamp Duty Calculator</a>
              <a className="mobile-sublink mobile-sublink-soon" href="calculators.html">Loan Eligibility <em>Soon</em></a>
            </div>
            <a className="mobile-link" href="#testimonial" onClick={close}>Testimonial</a>
            <a className="mobile-link" href="#contact" onClick={close}>Contact</a>
          </div>
          <div className="mobile-menu-cta">
            <a className="btn btn-wa" href="https://wa.me/6588877800" target="_blank" rel="noreferrer" onClick={close}>
              <Icon name="whatsapp" size={16} /> WhatsApp Shi Yao
            </a>
            <a className="btn btn-primary" href="#contact" onClick={close}>
              Book free consultation <Icon name="arrow-right" size={14} className="arr" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};


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
            <div className="hero-meta fade-in d4">
              <div>
                <div className="n"><em>200+</em></div>
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

          <div className="hero-image-wrap fade-in d2">
            <div className="hero-image-card">
              <img src={__R("agentHero", "assets/agent-half.png")} alt="Shi Yao, Senior Marketing Director at PropNex" />
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
      <div className="about-grid">
        <Reveal className="about-img about-img-clean">
          <img src={__R("agentAbout", "assets/agent-stand.png")} alt="Shi Yao portrait" />
        </Reveal>
        <Reveal delay={120}>
          <div className="eyebrow">About Shi Yao</div>
          <h2 className="h-section" style={{ margin: "20px 0 22px" }}>
            An advisor,<br />not a <em>Salesperson.</em>
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
// Real uploads from youtube.com/@itsmeshiyao. Titles are pulled live via
// YouTube oEmbed on mount; the editorial fallback shows if the fetch is blocked.
const ytVideos = [
{ id: "5yRysXg-YDQ", tag: "Latest", fallback: "Property insight from Shi Yao" },
{ id: "t0WJAF12gCY", tag: "Market view", fallback: "A measured read on the Singapore market" },
{ id: "4g9YH65by4k", tag: "Upgrader", fallback: "Frameworks for upgraders & investors" }];

const YtCard = ({ video, index }) => {
  const [playing, setPlaying] = React.useState(false);
  const [title, setTitle] = React.useState("");
  React.useEffect(() => {
    let alive = true;
    fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`).
    then((r) => r.ok ? r.json() : null).
    then((d) => {if (alive && d && d.title) setTitle(d.title);}).
    catch(() => {});
    return () => {alive = false;};
  }, [video.id]);

  return (
    <Reveal delay={index * 90} className="yt-card">
      <div className={`yt-thumb ${playing ? "playing" : ""}`}>
        {playing ?
        <iframe
          className="yt-iframe"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0" /> :

        <button className="yt-thumb-btn" onClick={() => setPlaying(true)} aria-label={`Play: ${title || "video"}`}>
            <img className="yt-thumb-bg" src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt={title || "YouTube video by Shi Yao"} loading="lazy" />
            <span className="yt-thumb-tag">{video.tag}</span>
            <span className="yt-play"><Icon name="play" size={22} /></span>
          </button>
        }
      </div>
      <div className="yt-meta">YouTube · @itsmeshiyao</div>
      <h4>{title || video.fallback}</h4>
      <a className="yt-watch" href={`https://youtu.be/${video.id}`} target="_blank" rel="noreferrer">
        Watch on YouTube <Icon name="arrow-up-right" size={14} />
      </a>
    </Reveal>);

};

const Insights = () =>
<section className="section section-alt" id="insights">
    <div className="wrap">
      <Reveal className="section-head">
        <div className="eyebrow">Educational insights</div>
        <h2 className="h-section">Learn before you <em>commit.</em></h2>
        <p>New videos every week on YouTube — frameworks, market reads, and conversations with clients about real decisions.</p>
      </Reveal>
      <div className="yt-grid">
        {ytVideos.map((v, i) => <YtCard key={v.id} video={v} index={i} />)}
      </div>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <a className="btn btn-ghost" href="https://youtube.com/@itsmeshiyao" target="_blank" rel="noreferrer">
          See all videos on YouTube <Icon name="arrow-up-right" size={14} />
        </a>
      </div>
    </div>
  </section>;

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
// Contact + WhatsApp settings
const WA_NUMBER = "6588877800";
// Web3Forms emails each submission to the address tied to this key.
// Get a free key at https://web3forms.com (enter your email, copy the access key).
const WEB3FORMS_KEY = "f11c76ec-4f42-4ae9-94a7-15bed0413bc1";

const Lead = () => {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const mobile = (fd.get("mobile") || "").toString().trim();
    const ptype = (fd.get("propertyType") || "").toString();
    const timeline = (fd.get("timeline") || "").toString();
    const concern = (fd.get("concern") || "").toString().trim() || "—";

    if (window.fbq) fbq("track", "Lead", { content_name: "Strategy consultation form" });

    // 1) Open WhatsApp with the enquiry pre-filled to Surya
    const msg = `Hi Shi Yao, I'd like a free property strategy consultation.\n\nName: ${name}\nMobile: ${mobile}\nProperty type: ${ptype}\nTimeline: ${timeline}\nMain concern: ${concern}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

    // 2) Email a copy via Web3Forms (skips silently until a real key is set)
    if (WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith("YOUR_")) {
      fd.append("access_key", WEB3FORMS_KEY);
      fd.append("subject", `Property Scout - New Consultation Lead - ${name || "Website"}`);
      fd.append("from_name", "Property Scout");
      fetch("https://api.web3forms.com/submit", { method: "POST", body: fd }).catch(() => {});
    }

    setSent(true);
  };
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="lead-wrap">
          <div className="lead-grid">
            <div className="lead-copy">
              <div className="eyebrow" style={{ color: "var(--gold-light)" }}>Contact</div>
              <h2 className="h-section" style={{ marginTop: 20 }}>
                Get a free property <em>strategy consultation.</em>
              </h2>
              <p>
                A 30-minute conversation — no obligations, no pitch. Tell me what you're weighing,
                and I'll come prepared with the numbers, scenarios, and questions to ask.
              </p>
              <div className="lead-features" style={{ marginTop: 48 }}>
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
                  <p style={{ color: "rgba(245,239,225,.7)", marginTop: 16 }}>A WhatsApp message has opened with your details — just tap send and I'll reply within the hour.</p>
                  <p style={{ color: "rgba(245,239,225,.7)", marginTop: 14 }}>If it didn't open, message me at +65 8887 7800</p>
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
                  <input name="name" required type="text" placeholder="e.g. Daniel Tan" />
                </div>
                <div>
                  <label>Mobile (WhatsApp)</label>
                  <input name="mobile" required type="tel" placeholder="+65 9XXX XXXX" />
                </div>
                <div className="field-row">
                  <div>
                    <label>Property type</label>
                    <select name="propertyType" required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option>HDB</option>
                      <option>Condominium</option>
                      <option>Landed</option>
                      <option>Looking to buy</option>
                    </select>
                  </div>
                  <div>
                    <label>Timeline</label>
                    <select name="timeline" required defaultValue="">
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
                  <textarea name="concern" placeholder="e.g. We've MOP'd and are weighing whether to upgrade to a condo or hold and invest separately." />
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
          <h5>Calculators</h5>
          <ul>
            <li><a href="New Launch Calculator.html">New Launch Calculator</a></li>
            <li><a href="calculators.html" style={{ opacity: 0.55 }}>Loan Eligibility · Soon</a></li>
            <li><a href="#stamp-duty">Stamp Duty Calculator</a></li>
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
            <li><a href="https://instagram.com/suryawij" target="_blank" rel="noreferrer"><Icon name="instagram" size={14} /><span>Instagram · @suryawij</span></a></li>
            <li><a href="https://tiktok.com/@suryawij" target="_blank" rel="noreferrer"><Icon name="tiktok" size={14} /><span>TikTok · @suryawij</span></a></li>
            <li><a href="https://youtube.com/@itsmeshiyao" target="_blank" rel="noreferrer"><Icon name="youtube" size={14} /><span>YouTube · @itsmeshiyao</span></a></li>
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


// ────────── STAMP DUTY CALCULATOR ──────────
// BSD tiers: [band size, rate] — effective 15 Feb 2023 (residential)
const BSD_TIERS = [
  { band: 180000,   rate: 0.01 },
  { band: 180000,   rate: 0.02 },
  { band: 640000,   rate: 0.03 },
  { band: 500000,   rate: 0.04 },
  { band: 1500000,  rate: 0.05 },
  { band: Infinity, rate: 0.06 },
];

// ABSD rates by buyer type, indexed [1st, 2nd, 3rd+] — effective 27 Apr 2023
const ABSD_RATES = {
  sc:        [0,    0.20, 0.30],
  spr:       [0.05, 0.30, 0.35],
  foreigner: [0.60],
  entity:    [0.65],
};

function calcBSD(price) {
  let rem = price; let total = 0;
  const rows = [];
  for (const { band, rate } of BSD_TIERS) {
    if (rem <= 0) break;
    const taxable = band === Infinity ? rem : Math.min(rem, band);
    const tax = taxable * rate;
    rows.push({ taxable, rate, tax });
    rem -= taxable; total += tax;
  }
  return { total, rows };
}

function getAbsdRate(type, count) {
  const rates = ABSD_RATES[type] || [0];
  return rates[Math.min(count - 1, rates.length - 1)];
}

const fmtSGD = (n) => "S$" + Math.round(n).toLocaleString("en-SG");
const fmtPct = (r) => (r * 100 % 1 === 0 ? (r * 100).toFixed(0) : (r * 100).toFixed(1)) + "%";

const StampDutyCalc = () => {
  const [price, setPrice] = React.useState(1500000);
  const [rawVal, setRawVal] = React.useState("1,500,000");
  const [buyerType, setBuyerType] = React.useState("sc");
  const [propCount, setPropCount] = React.useState(1);

  const MIN = 100000; const MAX = 10000000;

  const commitPrice = (num) => {
    const clamped = Math.max(0, num);
    setPrice(clamped);
    setRawVal(clamped > 0 ? clamped.toLocaleString("en-SG") : "");
  };

  const handleTextChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setRawVal(raw ? Number(raw).toLocaleString("en-SG") : "");
    setPrice(parseInt(raw, 10) || 0);
  };

  const handleSlider = (e) => commitPrice(parseInt(e.target.value, 10));
  const showCount = buyerType === "sc" || buyerType === "spr";

  const bsd = calcBSD(price);
  const absdRate = getAbsdRate(buyerType, showCount ? propCount : 1);
  const absdAmt  = price * absdRate;
  const total    = bsd.total + absdAmt;
  const pct      = price > 0 ? total / price : 0;

  const sliderPct = price <= 0 ? 0 :
    ((Math.min(Math.max(price, MIN), MAX) - MIN) / (MAX - MIN) * 100).toFixed(2);
  const sliderBg = `linear-gradient(to right,var(--gold) ${sliderPct}%,var(--line) ${sliderPct}%)`;

  return (
    <section className="section" id="stamp-duty">
      <div className="wrap">
        <Reveal className="section-head center">
          <div className="eyebrow">Calculators</div>
          <h2 className="h-section">Stamp duty <em>calculator.</em></h2>
          <p>Estimate BSD and ABSD based on current IRAS rates.<br />Figures are indicative — verify with your lawyer before committing.</p>
        </Reveal>

        <Reveal>
          <div className="sdc-grid">

            {/* ── INPUTS ── */}
            <div className="sdc-inputs">

              <div className="sdc-field">
                <label className="sdc-label">Property price</label>
                <div className="sdc-price-wrap">
                  <span className="sdc-prefix">S$</span>
                  <input className="sdc-price-input" type="text" inputMode="numeric"
                    value={rawVal} onChange={handleTextChange} placeholder="e.g. 1,500,000" />
                </div>
                <input type="range" className="sdc-slider"
                  min={MIN} max={MAX} step={50000}
                  value={Math.min(Math.max(price, MIN), MAX)}
                  onChange={handleSlider}
                  style={{ background: sliderBg }} />
                <div className="sdc-slider-labels"><span>S$100K</span><span>S$10M</span></div>
              </div>

              <div className="sdc-field">
                <label className="sdc-label">Buyer profile</label>
                <div className="sdc-seg">
                  {[
                    { val: "sc",        label: "Citizen" },
                    { val: "spr",       label: "PR" },
                    { val: "foreigner", label: "Foreigner" },
                    { val: "entity",    label: "Entity" },
                  ].map(o =>
                    <button key={o.val}
                      className={`sdc-seg-btn${buyerType === o.val ? " active" : ""}`}
                      onClick={() => { setBuyerType(o.val); setPropCount(1); }}>
                      {o.label}
                    </button>
                  )}
                </div>
              </div>

              {showCount && (
                <div className="sdc-field">
                  <label className="sdc-label">Property count</label>
                  <div className="sdc-seg">
                    {[
                      { val: 1, label: "1st" },
                      { val: 2, label: "2nd" },
                      { val: 3, label: "3rd +" },
                    ].map(o =>
                      <button key={o.val}
                        className={`sdc-seg-btn${propCount === o.val ? " active" : ""}`}
                        onClick={() => setPropCount(o.val)}>
                        {o.label}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Rate reference card */}
              <div style={{
                padding: "18px 20px", borderRadius: 10,
                background: "var(--gold-soft)", border: "1px solid var(--gold-line)",
                fontSize: 12, lineHeight: 1.7, color: "var(--ink-2)"
              }}>
                <div style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 6, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Current rates used
                </div>
                <div>BSD: 1–6% progressive (from 15 Feb 2023)</div>
                {buyerType === "sc" && <div>ABSD: 0% / 20% / 30% (1st / 2nd / 3rd+)</div>}
                {buyerType === "spr" && <div>ABSD: 5% / 30% / 35% (1st / 2nd / 3rd+)</div>}
                {buyerType === "foreigner" && <div>ABSD: 60% (any property)</div>}
                {buyerType === "entity" && <div>ABSD: 65% (any property)</div>}
                <div style={{ marginTop: 6, color: "var(--mute)", fontSize: 11 }}>
                  Effective 27 Apr 2023 ·{" "}
                  <a href="https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/additional-buyer%27s-stamp-duty-(absd)"
                    target="_blank" rel="noreferrer"
                    style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: 2 }}>
                    IRAS source
                  </a>
                </div>
              </div>
            </div>

            {/* ── RESULTS ── */}
            <div className="sdc-results">

              <div className="sdc-res-block">
                <div className="sdc-res-head">
                  <span>Buyer's Stamp Duty (BSD)</span>
                  <span className="sdc-res-amt">{price > 0 ? fmtSGD(bsd.total) : "—"}</span>
                </div>
                {price > 0 && (
                  <div className="sdc-breakdown">
                    {bsd.rows.map((row, i) =>
                      <div key={i} className="sdc-bd-row">
                        <span>{fmtPct(row.rate)} × {fmtSGD(row.taxable)}</span>
                        <span>{fmtSGD(row.tax)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="sdc-res-block">
                <div className="sdc-res-head">
                  <span>Additional BSD (ABSD) · {fmtPct(absdRate)}</span>
                  <span className={`sdc-res-amt${absdAmt > 0 ? " sdc-absd-amt" : ""}`}>
                    {price > 0 ? fmtSGD(absdAmt) : "—"}
                  </span>
                </div>
                {price > 0 && absdRate === 0 && (
                  <p className="sdc-absd-nil">No ABSD payable on this property for your profile.</p>
                )}
              </div>

              <div className="sdc-total">
                <div>
                  <div className="sdc-total-label">Total stamp duty</div>
                  {price > 0 && <div className="sdc-total-pct">{fmtPct(pct)} of purchase price</div>}
                </div>
                <div className="sdc-total-amt">{price > 0 ? fmtSGD(total) : "—"}</div>
              </div>

              <p className="sdc-disclaimer">
                BSD rates effective 15 Feb 2023 · ABSD rates effective 27 Apr 2023.{" "}
                <a href="https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/buyer%27s-stamp-duty-(bsd)"
                  target="_blank" rel="noreferrer">BSD source</a>{" · "}
                <a href="https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/additional-buyer%27s-stamp-duty-(absd)"
                  target="_blank" rel="noreferrer">ABSD source</a>
                <br />
                Figures are indicative only. Always verify with IRAS or your conveyancing lawyer before signing any option to purchase.
              </p>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

Object.assign(window, {
  Nav, Hero, About, Services, WhyMe, Insights,
  Testimonials, StampDutyCalc, FAQ, Lead, Footer, WhatsAppFloat
});
// components.jsx — small shared building blocks + icons

const Icon = ({ name, size = 20, stroke = 1.5, color = "currentColor" }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: color, strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "arrow-right":
      return (<svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrow-up-right":
      return (<svg {...props}><path d="M7 17L17 7M8 7h9v9"/></svg>);
    case "play":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M8 5v14l11-7z"/></svg>);
    case "check":
      return (<svg {...props}><path d="M5 12l5 5L20 7"/></svg>);
    case "plus":
      return (<svg {...props}><path d="M12 5v14M5 12h14"/></svg>);
    case "star":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>);
    case "whatsapp":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.84 11.84 0 005.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.38-8.43zM12.04 21.8h-.01a9.84 9.84 0 01-5.02-1.37l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.86 9.86 0 01-1.51-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 012.89 6.98c0 5.45-4.43 9.88-9.85 9.88zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.34z"/></svg>);
    case "instagram":
      return (<svg {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37a4 4 0 11-7.86 1.27 4 4 0 017.86-1.27z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
    case "tiktok":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.79a8.16 8.16 0 005.21 1.88V8.21a4.82 4.82 0 01-2.28-1.52z"/></svg>);
    case "youtube":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>);
    // service icons
    case "i-valuation":
      return (<svg {...props}><path d="M3 21h18M5 21V10.5L12 4l7 6.5V21"/><path d="M10 21v-6h4v6"/><circle cx="12" cy="11" r="1.2"/></svg>);
    case "i-strategy":
      return (<svg {...props}><path d="M3 17l5-5 4 4 7-9"/><path d="M14 7h5v5"/></svg>);
    case "i-invest":
      return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10h4.5a1.5 1.5 0 010 3H10a1.5 1.5 0 000 3h5"/></svg>);
    case "i-timeline":
      return (<svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/><circle cx="8" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="14" r="1" fill="currentColor" stroke="none"/></svg>);
    case "i-portfolio":
      return (<svg {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18"/></svg>);
    case "i-upgrader":
      return (<svg {...props}><path d="M3 21V11l5-4M21 21V7l-6-4-2 1.3"/><path d="M3 21h18M8 21v-5h3v5M16 21v-7h3v7"/></svg>);
    default: return null;
  }
};

// Reveal-on-scroll helper
const Reveal = ({ children, delay = 0, as: As = "div", ...rest }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.add("in"), delay);
        obs.unobserve(el);
      }
    }, { threshold: 0.12, rootMargin: "-40px 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <As ref={ref} className={`reveal ${rest.className || ""}`} {...rest}>{children}</As>;
};

// Brand mark — uses the Property Scout logo image
const BrandMark = ({ variant = "nav" }) => (
  <a href="#top" className={`brand brand-${variant}`} aria-label="Property Scout — home">
    <img className="brand-logo" src="assets/property-scout-logo.png" alt="Property Scout" />
    {variant === "nav" && <div className="brand-sub-aside">Shi Yao · PropNex</div>}
  </a>
);

Object.assign(window, { Icon, Reveal, BrandMark });

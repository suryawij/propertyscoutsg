// app.jsx — root component + Tweaks panel

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme + density + gold intensity + font to <html>
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-dark", !!t.dark);
    root.classList.remove("dens-compact", "dens-spacious");
    if (t.density === "compact") root.classList.add("dens-compact");
    if (t.density === "spacious") root.classList.add("dens-spacious");
    root.classList.remove("gold-subtle", "gold-bold");
    if (t.goldIntensity === "subtle") root.classList.add("gold-subtle");
    if (t.goldIntensity === "bold") root.classList.add("gold-bold");
    root.classList.toggle("font-sans-display", t.displayFont === "sans");
  }, [t.dark, t.density, t.goldIntensity, t.displayFont]);

  // Meta Pixel — track WhatsApp / call / email clicks as Contact events
  React.useEffect(() => {
    // Pre-fill a friendly starter message on any bare WhatsApp link
    const defaultMsg = "Hi Shi Yao, I'd like to find out more about my property options.";
    document.querySelectorAll('a[href*="wa.me"]').forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (!/[?&]text=/.test(href)) {
        a.setAttribute("href", href + (href.includes("?") ? "&" : "?") + "text=" + encodeURIComponent(defaultMsg));
      }
    });

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || !window.fbq) return;
      const href = a.getAttribute("href") || "";
      if (href.includes("wa.me") || href.startsWith("tel:")) {
        fbq("track", "Contact", { method: href.includes("wa.me") ? "whatsapp" : "phone" });
      } else if (href.startsWith("mailto:")) {
        fbq("track", "Contact", { method: "email" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero layout={t.heroLayout} />
        <About />
        <Services />
        <WhyMe />
        <Insights />
        <StampDutyCalc />
        <Testimonials style={t.testimonialStyle} />
        <FAQ />
        <Lead />
      </main>
      <Footer />
      <WhatsAppFloat />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={t.dark}
          onChange={(v) => setTweak("dark", v)} />
        <TweakRadio label="Gold accent" value={t.goldIntensity}
          options={["subtle", "medium", "bold"]}
          onChange={(v) => setTweak("goldIntensity", v)} />
        <TweakRadio label="Display font" value={t.displayFont}
          options={["serif", "sans"]}
          onChange={(v) => setTweak("displayFont", v)} />

        <TweakSection label="Layout" />
        <TweakSelect label="Hero layout" value={t.heroLayout}
          options={[
            { value: "split", label: "Split · portrait + copy" },
            { value: "portrait", label: "Portrait · centered" },
            { value: "skyline", label: "Skyline · copy only" },
          ]}
          onChange={(v) => setTweak("heroLayout", v)} />
        <TweakRadio label="Section padding" value={t.density}
          options={["compact", "regular", "spacious"]}
          onChange={(v) => setTweak("density", v)} />

        <TweakSection label="Sections" />
        <TweakSelect label="Testimonial cards" value={t.testimonialStyle}
          options={[
            { value: "card", label: "Card · classic" },
            { value: "editorial", label: "Editorial · top-line" },
            { value: "google", label: "Google review style" },
          ]}
          onChange={(v) => setTweak("testimonialStyle", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

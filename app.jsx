// app.jsx — Café Andino S.A.S landing
// Composición principal + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "ctaStyle": "rounded",
  "fontPair": "dm-jakarta",
  "palette": "tierra",
  "dark": false
}/*EDITMODE-END*/;

const PALETTES = {
  tierra: {
    label: 'Tierra (default)',
    light: { bg: '#f5efe4', bgWarm: '#ede4d3', paper: '#faf6ed', ink: '#2a1a10', inkSoft: '#4a3527', inkMute: '#8a7563', line: '#d8c8b0', lineSoft: '#e6dac2', accent: '#7a4a2b', accentDeep: '#4a2818', cream: '#d9b382', roast: '#3a2418' },
    dark:  { bg: '#1a120c', bgWarm: '#221710', paper: '#2a1d14', ink: '#f4e8d4', inkSoft: '#d4c2a4', inkMute: '#9a8770', line: '#4a3527', lineSoft: '#382518', accent: '#d9b382', accentDeep: '#c9a06a', cream: '#f4e8d4', roast: '#f4e8d4' },
  },
  esmeralda: {
    label: 'Esmeralda andina',
    light: { bg: '#f1ede2', bgWarm: '#e6e0d0', paper: '#f8f4ea', ink: '#1a2a1e', inkSoft: '#34453a', inkMute: '#788473', line: '#c8d0bc', lineSoft: '#dde1d3', accent: '#3d5a3a', accentDeep: '#1f3220', cream: '#c9b079', roast: '#0f1a14' },
    dark:  { bg: '#0f1a14', bgWarm: '#152119', paper: '#1c2922', ink: '#e8e8d4', inkSoft: '#c5cab2', inkMute: '#8a9080', line: '#3a4a3c', lineSoft: '#283128', accent: '#c9b079', accentDeep: '#b59a60', cream: '#e8dcc4', roast: '#e8dcc4' },
  },
  brick: {
    label: 'Ladrillo & nata',
    light: { bg: '#fbf7f0', bgWarm: '#f4ebd8', paper: '#ffffff', ink: '#2d2418', inkSoft: '#5a4a3a', inkMute: '#9a8770', line: '#dccfb6', lineSoft: '#ebe0c8', accent: '#b8541f', accentDeep: '#7a2f10', cream: '#f0d9b0', roast: '#2d2418' },
    dark:  { bg: '#1f1a14', bgWarm: '#28201a', paper: '#2e2620', ink: '#fbf3e2', inkSoft: '#d8c8a8', inkMute: '#9a8770', line: '#4a3a2a', lineSoft: '#382c20', accent: '#e07a3a', accentDeep: '#b8541f', cream: '#f0d9b0', roast: '#fbf3e2' },
  },
  midnight: {
    label: 'Café & nata',
    light: { bg: '#f4efe6', bgWarm: '#e8e0d0', paper: '#fbf7f0', ink: '#1f1f1f', inkSoft: '#3d3d3d', inkMute: '#7a7066', line: '#cfc4ad', lineSoft: '#e0d6c0', accent: '#8a6f4a', accentDeep: '#5a4530', cream: '#d9bf8a', roast: '#1f1f1f' },
    dark:  { bg: '#141210', bgWarm: '#1c1916', paper: '#23201c', ink: '#f4efe6', inkSoft: '#cfc4ad', inkMute: '#8a7e70', line: '#3d362e', lineSoft: '#2a241e', accent: '#d9bf8a', accentDeep: '#b89a60', cream: '#f4efe6', roast: '#f4efe6' },
  },
};

const FONT_PAIRS = {
  'dm-jakarta': {
    label: 'DM Serif × Jakarta',
    display: "'DM Serif Display', Georgia, serif",
    serif: "'Cormorant Garamond', Georgia, serif",
    sans: "'Plus Jakarta Sans', ui-sans-serif, sans-serif",
    script: "'Caveat', cursive",
  },
  'cormorant-jakarta': {
    label: 'Cormorant × Jakarta',
    display: "'Cormorant Garamond', Georgia, serif",
    serif: "'Cormorant Garamond', Georgia, serif",
    sans: "'Plus Jakarta Sans', ui-sans-serif, sans-serif",
    script: "'Caveat', cursive",
  },
  'instrument-bricolage': {
    label: 'Instrument × Bricolage',
    display: "'Instrument Serif', Georgia, serif",
    serif: "'Instrument Serif', Georgia, serif",
    sans: "'Bricolage Grotesque', ui-sans-serif, sans-serif",
    script: "'Caveat', cursive",
  },
};

function applyTokens(palette, dark, fontPair) {
  const p = PALETTES[palette] || PALETTES.tierra;
  const tokens = dark ? p.dark : p.light;
  const r = document.documentElement;
  r.style.setProperty('--c-bg', tokens.bg);
  r.style.setProperty('--c-bg-warm', tokens.bgWarm);
  r.style.setProperty('--c-paper', tokens.paper);
  r.style.setProperty('--c-ink', tokens.ink);
  r.style.setProperty('--c-ink-soft', tokens.inkSoft);
  r.style.setProperty('--c-ink-mute', tokens.inkMute);
  r.style.setProperty('--c-line', tokens.line);
  r.style.setProperty('--c-line-soft', tokens.lineSoft);
  r.style.setProperty('--c-accent', tokens.accent);
  r.style.setProperty('--c-accent-deep', tokens.accentDeep);
  r.style.setProperty('--c-cream', tokens.cream);
  r.style.setProperty('--c-roast', tokens.roast);

  const fp = FONT_PAIRS[fontPair] || FONT_PAIRS['dm-jakarta'];
  r.style.setProperty('--t-display', fp.display);
  r.style.setProperty('--t-serif', fp.serif);
  r.style.setProperty('--t-sans', fp.sans);
  r.style.setProperty('--t-script', fp.script);

  r.dataset.theme = dark ? 'dark' : 'light';
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    applyTokens(t.palette, t.dark, t.fontPair);
  }, [t.palette, t.dark, t.fontPair]);

  const Hero =
    t.heroVariant === 'fullbleed' ? HeroFullBleed :
    t.heroVariant === 'split' ? HeroSplit :
    HeroEditorial;

  return (
    <React.Fragment>
      <Header
        ctaStyle={t.ctaStyle}
        theme={t.dark ? 'dark' : 'light'}
        onToggleTheme={() => setTweak('dark', !t.dark)}
      />
      <main>
        <Hero ctaStyle={t.ctaStyle} />
        <Nosotros />
        <Valores />
        <Productos ctaStyle={t.ctaStyle} />
        <Proceso />
        <Tienda />
        <Contacto ctaStyle={t.ctaStyle} />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio
          label="Variante" value={t.heroVariant}
          options={[
            { value: 'editorial', label: 'Editorial' },
            { value: 'fullbleed', label: 'Imagen' },
            { value: 'split', label: 'Split' },
          ]}
          onChange={v => setTweak('heroVariant', v)}
        />

        <TweakSection label="Tipografía" />
        <TweakSelect
          label="Familia" value={t.fontPair}
          options={Object.entries(FONT_PAIRS).map(([value, v]) => ({ value, label: v.label }))}
          onChange={v => setTweak('fontPair', v)}
        />

        <TweakSection label="Color" />
        <TweakSelect
          label="Paleta" value={t.palette}
          options={Object.entries(PALETTES).map(([value, v]) => ({ value, label: v.label }))}
          onChange={v => setTweak('palette', v)}
        />
        <TweakToggle
          label="Modo oscuro" value={t.dark}
          onChange={v => setTweak('dark', v)}
        />

        <TweakSection label="Botones (CTA)" />
        <TweakRadio
          label="Esquinas" value={t.ctaStyle}
          options={[
            { value: 'sharp', label: 'Recto' },
            { value: 'rounded', label: 'Suave' },
            { value: 'pill', label: 'Píldora' },
          ]}
          onChange={v => setTweak('ctaStyle', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

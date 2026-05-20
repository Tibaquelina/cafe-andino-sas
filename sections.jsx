// Secciones del landing — Café Andino S.A.S
// Cada sección exporta una función React. Se exponen vía window al final.

// Imágenes — referencia diferida vía window.__resources para empaquetado standalone.
const R = (typeof window !== 'undefined' && window.__resources) || {};
const UNSPLASH = {
  hero1: R.hero1 || 'https://images.unsplash.com/photo-1515697061774-2399f90c2b77?w=1200&q=70',
  hero2: R.hero2 || 'https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=1200&q=70',
  hero3: R.hero3 || 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&q=70',
  beans: R.beans || 'img/cafe_tradicional.jpg',
  hands: R.hands || 'https://images.unsplash.com/photo-1746623691157-c4c7a3bad0c4?w=900&q=70',
  pour:  R.pour  || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=70',
  farm:  R.farm  || 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1600&q=70',
  jar:   R.jar   || 'img/cafe_instantaneo.jpg',
  bag:   R.bag   || 'img/cafe_premium.jpg',
  cup:   R.cup   || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=70',
  process1: R.process1 || 'https://images.unsplash.com/photo-1672851612794-6687bf0bf1a3?w=800&q=70',
  process2: R.process2 || 'https://images.unsplash.com/photo-1775434657007-549ae5d21bd4?w=800&q=70',
  process3: R.process3 || 'https://images.unsplash.com/photo-1624644566816-3c0061f2451d?w=800&q=70',
  process4: R.process4 || 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=70',
};

// ─── Pequeños átomos ────────────────────────────────────────────────
function Eyebrow({ children, style }) {
  return (
    <span style={{
      fontFamily: 'var(--t-sans)',
      fontSize: 11,
      letterSpacing: '.32em',
      textTransform: 'uppercase',
      color: 'var(--c-accent)',
      fontWeight: 600,
      ...style,
    }}>{children}</span>
  );
}

function Script({ children, size = 32, style }) {
  return (
    <span style={{
      fontFamily: 'var(--t-script)',
      fontSize: size,
      color: 'var(--c-accent)',
      lineHeight: 1,
      ...style,
    }}>{children}</span>
  );
}

function CTA({ children, variant = 'solid', ctaStyle = 'rounded', size = 'md', as = 'button', href, onClick }) {
  const radius = ctaStyle === 'pill' ? 999 : ctaStyle === 'square' ? 0 : ctaStyle === 'sharp' ? 4 : 10;
  const pad = size === 'lg' ? '16px 28px' : size === 'sm' ? '8px 16px' : '13px 22px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 12 : 13.5;

  const base = {
    fontFamily: 'var(--t-sans)',
    fontWeight: 600,
    fontSize: fs,
    letterSpacing: '.02em',
    padding: pad,
    borderRadius: radius,
    border: '1.5px solid var(--c-ink)',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'all .2s ease',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const variants = {
    solid: { background: 'var(--c-ink)', color: 'var(--c-paper)' },
    outline: { background: 'transparent', color: 'var(--c-ink)' },
    cream: { background: 'var(--c-cream)', color: 'var(--c-roast)', border: '1.5px solid var(--c-cream)' },
    ghost: { background: 'transparent', color: 'var(--c-ink)', border: '1.5px solid transparent', textDecoration: 'underline', textUnderlineOffset: 4 },
  };

  const Tag = as;
  return (
    <Tag href={href} onClick={onClick} style={{ ...base, ...variants[variant] }}>
      {children}
    </Tag>
  );
}

// ─── 1. Header / Nav ────────────────────────────────────────────────
function Header({ ctaStyle, onToggleTheme, theme }) {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Productos', href: '#productos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Tienda', href: '#tienda' },
    { label: 'Contacto', href: '#contacto' },
  ];
  return (
    <header data-screen-label="Header" style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in srgb, var(--c-bg) 86%, transparent)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--c-line-soft)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href="#inicio"><Logo size={44} /></a>

        <nav style={{ display: 'flex', gap: 28, fontFamily: 'var(--t-sans)', fontSize: 13.5, fontWeight: 500 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'var(--c-ink-soft)', position: 'relative', padding: '4px 0',
            }}>{l.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button onClick={onToggleTheme} aria-label="Cambiar tema" style={{
            background: 'transparent', border: '1px solid var(--c-line)', borderRadius: 999,
            width: 36, height: 36, display: 'grid', placeItems: 'center', color: 'var(--c-ink-soft)',
          }}>
            {theme === 'dark' ? '☾' : '☀'}
          </button>
          <CTA variant="solid" ctaStyle={ctaStyle} size="sm" as="a" href="#tienda">
            Comprar café →
          </CTA>
        </div>
      </div>
    </header>
  );
}

// ─── 2. Hero — 3 variantes ──────────────────────────────────────────
function HeroEditorial({ ctaStyle }) {
  return (
    <section data-screen-label="Hero · Editorial" id="inicio" style={{
      maxWidth: 1280, margin: '0 auto',
      padding: '48px 32px 80px',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 48, alignItems: 'center',
      }}>
        <div>
          <Eyebrow>Origen Colombia · Desde la cordillera</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--t-display)', fontSize: 'clamp(56px, 8vw, 112px)',
            fontWeight: 400, lineHeight: .92, letterSpacing: '-.015em',
            margin: '20px 0 0', color: 'var(--c-ink)', textWrap: 'balance',
          }}>
            De nuestra<br/>
            tierra <Script size={92} style={{ color: 'var(--c-accent)' }}>&amp;</Script> raíces<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--c-accent-deep)' }}>a tu mesa.</em>
          </h1>
          <p style={{
            fontFamily: 'var(--t-serif)', fontSize: 21, lineHeight: 1.5,
            color: 'var(--c-ink-soft)', maxWidth: 520, margin: '28px 0 36px',
            fontStyle: 'italic',
          }}>
            Producimos y comercializamos café de alta calidad para los hogares colombianos —
            especial, tradicional e instantáneo. Lo mejor de nuestra tierra, raíces y gastronomía.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <CTA variant="solid" ctaStyle={ctaStyle} size="lg" as="a" href="#tienda">Conocer la cosecha</CTA>
            <CTA variant="ghost" ctaStyle={ctaStyle} size="lg" as="a" href="#nosotros">Nuestra historia</CTA>
          </div>

          <div style={{
            marginTop: 64, paddingTop: 28, borderTop: '1px solid var(--c-line)',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
          }}>
            {[
              ['100%', 'Café colombiano'],
              ['1.300+', 'Caficultores aliados'],
              ['Federación', 'Nacional de Cafeteros'],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--t-display)', fontSize: 32, lineHeight: 1, color: 'var(--c-ink)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--t-sans)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--c-ink-mute)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '4/5', borderRadius: 'var(--r-lg)', overflow: 'hidden',
            background: `url(${UNSPLASH.hero1}) center/cover`,
            boxShadow: '0 30px 80px -30px rgba(74,40,24,.45)',
            transform: 'rotate(1.5deg)',
          }} />
          <div style={{
            position: 'absolute', bottom: -28, left: -32,
            width: 180, aspectRatio: '1/1', borderRadius: 'var(--r-lg)', overflow: 'hidden',
            background: `url(${UNSPLASH.hands}) center/cover`,
            boxShadow: '0 20px 50px -20px rgba(74,40,24,.4)',
            transform: 'rotate(-4deg)',
            border: '6px solid var(--c-bg)',
          }} />
          <div style={{
            position: 'absolute', top: 24, right: -16,
            background: 'var(--c-paper)',
            padding: '14px 18px', borderRadius: 'var(--r-md)',
            border: '1px solid var(--c-line)', maxWidth: 200,
            boxShadow: '0 10px 30px -10px rgba(74,40,24,.3)',
            transform: 'rotate(3deg)',
          }}>
            <Script size={28}>finca en Fusagasugá</Script>
            <div style={{ fontFamily: 'var(--t-sans)', fontSize: 11, color: 'var(--c-ink-mute)', marginTop: 4 }}>
              Cundinamarca · 1.700 m.s.n.m
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFullBleed({ ctaStyle }) {
  return (
    <section data-screen-label="Hero · Full bleed" id="inicio" style={{
      position: 'relative',
      minHeight: '88vh',
      backgroundImage: `linear-gradient(rgba(26,16,8,.55), rgba(26,16,8,.7)), url(${UNSPLASH.farm})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      color: '#f4e8d4',
      display: 'flex', alignItems: 'flex-end',
    }}>
      <div style={{
        maxWidth: 1280, width: '100%', margin: '0 auto', padding: '120px 32px 64px',
      }}>
        <Eyebrow style={{ color: 'var(--c-cream)' }}>Café 100% colombiano</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--t-display)', fontSize: 'clamp(64px, 10vw, 156px)',
          fontWeight: 400, lineHeight: .9, margin: '24px 0 0', letterSpacing: '-.02em',
          color: '#f4e8d4', maxWidth: 1100,
        }}>
          De nuestra tierra<br/>
          <em style={{ fontStyle: 'italic', color: 'var(--c-cream)' }}>a tu mesa.</em>
        </h1>
        <p style={{
          fontFamily: 'var(--t-serif)', fontStyle: 'italic',
          fontSize: 22, maxWidth: 580, margin: '32px 0 40px', lineHeight: 1.5,
          color: 'rgba(244,232,212,.85)',
        }}>
          Café especial, tradicional e instantáneo, cultivado en las montañas de Colombia
          por más de 1.300 caficultores aliados.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <CTA variant="cream" ctaStyle={ctaStyle} size="lg" as="a" href="#tienda">Comprar nuestro café</CTA>
          <CTA variant="outline" ctaStyle={ctaStyle} size="lg" as="a" href="#proceso"
               style={{ color: '#f4e8d4', borderColor: 'rgba(244,232,212,.6)' }}>
            Ver el proceso
          </CTA>
        </div>
      </div>
    </section>
  );
}

function HeroSplit({ ctaStyle }) {
  return (
    <section data-screen-label="Hero · Split" id="inicio" style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '88vh',
    }}>
      <div style={{
        background: 'var(--c-paper)',
        padding: '80px 64px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <Eyebrow>Est. en Colombia</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--t-display)', fontSize: 'clamp(48px, 6.5vw, 88px)',
          fontWeight: 400, lineHeight: .95, letterSpacing: '-.015em',
          margin: '24px 0 0', color: 'var(--c-ink)',
        }}>
          Café que<br/>
          <em style={{ color: 'var(--c-accent-deep)' }}>cuenta una historia.</em>
        </h1>

        <div style={{
          margin: '40px 0', padding: '24px 28px',
          borderLeft: '2px solid var(--c-accent)',
          fontFamily: 'var(--t-serif)', fontStyle: 'italic',
          fontSize: 19, lineHeight: 1.55, color: 'var(--c-ink-soft)',
        }}>
          “Apoyamos a quienes cultivan la tierra. Cada taza preserva los oficios,
          la biodiversidad y la herencia cafetera de Colombia.”
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 8, flexWrap: 'wrap' }}>
          <CTA variant="solid" ctaStyle={ctaStyle} size="lg" as="a" href="#tienda">Probar la cosecha</CTA>
          <CTA variant="outline" ctaStyle={ctaStyle} size="lg" as="a" href="#nosotros">Quiénes somos</CTA>
        </div>

        <div style={{
          marginTop: 64, display: 'flex', alignItems: 'center', gap: 16,
          fontFamily: 'var(--t-sans)', fontSize: 12, letterSpacing: '.18em',
          textTransform: 'uppercase', color: 'var(--c-ink-mute)',
        }}>
          <div style={{ width: 40, height: 1, background: 'var(--c-line)' }}></div>
          Aliado de la Federación Nacional de Cafeteros
        </div>
      </div>

      <div style={{
        background: `url(${UNSPLASH.hero2}) center/cover`,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', bottom: 32, left: 32,
          background: 'var(--c-paper)', padding: '20px 24px', maxWidth: 280,
          borderRadius: 'var(--r-md)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,.3)',
        }}>
          <Script size={26}>cosecha 2026</Script>
          <div style={{ fontFamily: 'var(--t-serif)', fontSize: 16, color: 'var(--c-ink)', marginTop: 6, lineHeight: 1.4 }}>
            Granos seleccionados a mano, tostados artesanalmente en lotes pequeños.
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Quiénes somos ───────────────────────────────────────────────
function Nosotros() {
  return (
    <section data-screen-label="Nosotros" id="nosotros" style={{
      background: 'var(--c-bg-warm)',
      padding: '120px 32px',
      borderTop: '1px solid var(--c-line-soft)',
      borderBottom: '1px solid var(--c-line-soft)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <Eyebrow>Quiénes somos</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--t-display)', fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 400, lineHeight: 1, letterSpacing: '-.01em',
              margin: '20px 0 0', color: 'var(--c-ink)',
            }}>
              Una empresa<br/>
              <em style={{ color: 'var(--c-accent-deep)' }}>que no olvida</em><br/>
              de dónde viene.
            </h2>

            <div style={{
              marginTop: 32, aspectRatio: '4/5',
              borderRadius: 'var(--r-lg)', overflow: 'hidden',
              background: `url(${UNSPLASH.hands}) center/cover`,
            }} />
          </div>

          <div>
            <article style={{ marginBottom: 64 }}>
              <Script size={32}>nuestra misión</Script>
              <h3 style={{
                fontFamily: 'var(--t-display)', fontSize: 36, fontWeight: 400,
                margin: '8px 0 18px', color: 'var(--c-ink)', lineHeight: 1.1,
              }}>Producir y comercializar café de alta calidad a nivel nacional.</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--c-ink-soft)', maxWidth: 620 }}>
                Brindamos a los hogares colombianos lo mejor de nuestra tierra, raíces y
                gastronomía. Cada grano que llega a su taza ha pasado por las manos cuidadosas
                de caficultores que aman su oficio.
              </p>
            </article>

            <article style={{ marginBottom: 64 }}>
              <Script size={32}>nuestra visión</Script>
              <h3 style={{
                fontFamily: 'var(--t-display)', fontSize: 36, fontWeight: 400,
                margin: '8px 0 18px', color: 'var(--c-ink)', lineHeight: 1.1,
              }}>En 2030, presentes en cada ciudad principal de Colombia.</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--c-ink-soft)', maxWidth: 620 }}>
                Nos expandiremos a nivel nacional con sedes en las principales ciudades del
                país, aspirando a un reconocimiento global como la mejor empresa de producción
                y comercialización de café en Colombia — siempre apoyando a nuestros caficultores.
              </p>
            </article>

            <article>
              <Script size={32}>objetivo general</Script>
              <h3 style={{
                fontFamily: 'var(--t-display)', fontSize: 36, fontWeight: 400,
                margin: '8px 0 18px', color: 'var(--c-ink)', lineHeight: 1.1,
              }}>Crecer junto a quienes hacen posible cada taza.</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--c-ink-soft)', maxWidth: 620 }}>
                Productores, colaboradores, comercializadores y consumidores: nuestro
                crecimiento es el de toda la cadena.
              </p>

              <ul style={{
                listStyle: 'none', padding: 0, margin: '32px 0 0',
                display: 'grid', gap: 14,
              }}>
                {[
                  'Mejorar la rentabilidad, producción y oferta-demanda de la empresa.',
                  'Mejorar el bienestar de nuestros productores y colaboradores.',
                  'Posicionar diferentes sedes en ciudades principales de Colombia.',
                  'Tener relación comercial y social con la Federación Nacional de Cafeteros.',
                ].map((obj, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: 16, alignItems: 'baseline',
                    paddingBottom: 14, borderBottom: '1px solid var(--c-line-soft)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--t-display)', fontSize: 24,
                      color: 'var(--c-accent)', minWidth: 40,
                    }}>0{i + 1}</span>
                    <span style={{ fontSize: 16, color: 'var(--c-ink-soft)', lineHeight: 1.5 }}>{obj}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Valores ─────────────────────────────────────────────────────
function Valores() {
  const valores = [
    { word: 'Vida', desc: 'Apoyamos el bienestar de nuestros colaboradores, clientes internos y externos.', icon: 'V' },
    { word: 'Honestidad', desc: 'Somos una empresa transparente y clara con nuestro país.', icon: 'H' },
    { word: 'Humildad', desc: 'No olvidamos de dónde venimos y representamos lo que somos.', icon: 'H' },
    { word: 'Respeto', desc: 'Buen trato con las personas, la naturaleza y la vida — entendiendo sus necesidades.', icon: 'R' },
    { word: 'Biodiversidad', desc: 'De la semilla a su mesa, seguimos las buenas prácticas de la Federación Nacional de Cafeteros, respetando el ciclo de la vida.', icon: 'B' },
  ];

  return (
    <section data-screen-label="Valores" style={{
      padding: '120px 32px',
      background: 'var(--c-roast)',
      color: 'var(--c-paper)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* sello decorativo */}
      <svg style={{ position: 'absolute', top: -120, right: -120, opacity: .07 }}
           width="500" height="500" viewBox="0 0 500 500" aria-hidden="true">
        <circle cx="250" cy="250" r="240" stroke="var(--c-cream)" strokeWidth="1" fill="none" />
        <circle cx="250" cy="250" r="200" stroke="var(--c-cream)" strokeWidth="1" fill="none" />
        <text x="250" y="80" textAnchor="middle" fill="var(--c-cream)"
              style={{ fontFamily: 'var(--t-display)', fontSize: 22, letterSpacing: '.4em' }}>
          CAFÉ ANDINO · S.A.S
        </text>
      </svg>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 720, marginBottom: 80 }}>
          <Eyebrow style={{ color: 'var(--c-cream)' }}>Nuestros valores</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--t-display)', fontSize: 'clamp(40px, 5vw, 72px)',
            fontWeight: 400, lineHeight: 1, margin: '20px 0 24px',
            color: 'var(--c-paper)', letterSpacing: '-.01em',
          }}>
            Cinco palabras que<br/>
            <em style={{ color: 'var(--c-cream)' }}>guían cada cosecha.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--t-serif)', fontStyle: 'italic', fontSize: 20,
            lineHeight: 1.55, color: 'rgba(244,232,212,.78)',
          }}>
            No son sólo palabras impresas en una pared. Son el filtro por el que pasa cada
            decisión de Café Andino — desde la siembra hasta el último sorbo.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 0, borderTop: '1px solid rgba(244,232,212,.18)',
        }}>
          {valores.map((v, i) => (
            <article key={v.word} style={{
              padding: '40px 28px',
              borderBottom: '1px solid rgba(244,232,212,.18)',
              borderRight: i < valores.length - 1 ? '1px solid rgba(244,232,212,.18)' : 'none',
              position: 'relative',
            }}>
              <div style={{
                fontFamily: 'var(--t-display)', fontSize: 12,
                color: 'var(--c-cream)', opacity: .6, letterSpacing: '.2em',
                marginBottom: 24,
              }}>0{i + 1} / 0{valores.length}</div>

              <h3 style={{
                fontFamily: 'var(--t-display)', fontSize: 44, fontWeight: 400,
                margin: '0 0 4px', color: 'var(--c-cream)',
              }}>{v.word}</h3>
              <Script size={22} style={{ color: 'var(--c-cream)', opacity: .55 }}>
                — {v.word.toLowerCase()}
              </Script>
              <p style={{
                fontFamily: 'var(--t-sans)', fontSize: 14, lineHeight: 1.6,
                color: 'rgba(244,232,212,.75)', marginTop: 24,
              }}>{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Productos ───────────────────────────────────────────────────
function Productos() {
  const productos = [
    {
      tag: 'Línea Premium', name: 'Café Especial', sub: 'Andino Origen',
      desc: 'Granos seleccionados a mano de las fincas más altas. Notas a chocolate negro, panela y cítricos.',
      img: UNSPLASH.bag, pos: 'center bottom', price: '$70.000', vol: '1 kg · molido o en grano',
      meta: { label: 'Notas', value: 'Chocolate · Cítricos' },
    },
    {
      tag: 'Hogares colombianos', name: 'Café Tradicional', sub: 'Andino Casa',
      desc: 'El sabor de siempre. Tueste medio, balanceado, perfecto para la cafetera de la abuela.',
      img: UNSPLASH.beans, pos: 'center bottom', price: '$30.000', vol: '1 kg · molido',
      meta: { label: 'Tueste', value: 'Medio' },
    },
    {
      tag: 'Práctico y rápido', name: 'Café Instantáneo', sub: 'Andino Express',
      desc: 'Café instantáneo soluble, equilibrado y aromático. La calidad de Café Andino, lista en segundos.',
      img: UNSPLASH.jar, pos: 'center bottom', price: '$58.000', vol: '1 kg · soluble',
      meta: { label: 'Formato', value: 'Liofilizado' },
    },
  ];

  return (
    <section data-screen-label="Productos" id="productos" style={{ padding: '72px 32px 120px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 96 }}>
          <Eyebrow>Nuestros productos</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--t-display)', fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400, lineHeight: 1, margin: '20px 0 0',
            color: 'var(--c-ink)', maxWidth: 700, letterSpacing: '-.01em',
          }}>
            Tres formas de tomar<br/>
            <em style={{ color: 'var(--c-accent-deep)' }}>el mismo amor por Colombia.</em>
          </h2>
        </div>

        <div style={{
          display: 'grid', gap: 32,
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
          {productos.map((p, i) => (
            <article key={p.name} style={{
              background: 'var(--c-paper)',
              border: '1px solid var(--c-line-soft)',
              borderRadius: 'var(--r-lg)',
              overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              transition: 'transform .3s ease, box-shadow .3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px -20px rgba(74,40,24,.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{
                aspectRatio: '4/3',
                background: `url(${p.img}) ${p.pos || 'center'}/${p.size || p.fit || 'cover'} no-repeat`,
                backgroundColor: 'var(--c-bg-warm)',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'var(--c-paper)', padding: '6px 12px',
                  fontFamily: 'var(--t-sans)', fontSize: 10, letterSpacing: '.18em',
                  textTransform: 'uppercase', fontWeight: 600, color: 'var(--c-ink-soft)',
                  borderRadius: 999, whiteSpace: 'nowrap',
                }}>{p.tag}</span>
              </div>
              <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Script size={22} style={{ color: 'var(--c-accent)' }}>{p.sub}</Script>
                <h3 style={{
                  fontFamily: 'var(--t-display)', fontSize: 30, fontWeight: 400,
                  margin: '4px 0 10px', color: 'var(--c-ink)',
                }}>{p.name}</h3>
                <p style={{
                  fontSize: 14.5, lineHeight: 1.55, color: 'var(--c-ink-soft)',
                  margin: 0, flex: 1,
                }}>{p.desc}</p>

                <div style={{
                  marginTop: 24, paddingTop: 20,
                  borderTop: '1px dashed var(--c-line)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--t-display)', fontSize: 26, color: 'var(--c-ink)' }}>{p.price}</div>
                    <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--c-ink-mute)', marginTop: 4 }}>{p.vol}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'var(--t-sans)', fontSize: 10, letterSpacing: '.2em',
                      textTransform: 'uppercase', fontWeight: 600,
                      color: 'var(--c-ink-mute)',
                    }}>{p.meta.label}</div>
                    <div style={{
                      fontFamily: 'var(--t-display)', fontSize: 17,
                      color: 'var(--c-accent-deep)', marginTop: 4, lineHeight: 1.15,
                    }}>{p.meta.value}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <a href="#tienda" style={{
            fontFamily: 'var(--t-sans)', fontSize: 13, letterSpacing: '.18em',
            textTransform: 'uppercase', color: 'var(--c-accent)', fontWeight: 600,
            borderBottom: '1px solid var(--c-accent)', paddingBottom: 4,
          }}>
            Ver toda la tienda →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Proceso / Galería ───────────────────────────────────────────
function Proceso() {
  const pasos = [
    { n: '01', titulo: 'Siembra', desc: 'A más de 1.500 m.s.n.m. en suelos volcánicos.', img: UNSPLASH.process1 },
    { n: '02', titulo: 'Recolección', desc: 'Cereza por cereza, a mano, en su punto exacto.', img: UNSPLASH.process2 },
    { n: '03', titulo: 'Selección y control', desc: 'Granos revisados grano a grano, descartando defectos.', img: UNSPLASH.process3 },
    { n: '04', titulo: 'Tueste artesanal', desc: 'Lotes pequeños, perfil controlado, frescura garantizada.', img: UNSPLASH.process4 },
  ];

  return (
    <section data-screen-label="Proceso" id="proceso" style={{
      background: 'var(--c-bg-warm)',
      padding: '120px 32px',
      borderTop: '1px solid var(--c-line-soft)',
      borderBottom: '1px solid var(--c-line-soft)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow>De la semilla a tu mesa</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--t-display)', fontSize: 'clamp(40px, 5vw, 72px)',
            fontWeight: 400, lineHeight: 1, letterSpacing: '-.01em',
            margin: '20px auto 0', color: 'var(--c-ink)', maxWidth: 900,
          }}>
            <em style={{ color: 'var(--c-accent-deep)' }}>Cuatro pasos,</em> mil historias detrás.
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
        }}>
          {pasos.map((p, i) => (
            <article key={p.n} style={{
              transform: i % 2 === 0 ? 'translateY(0)' : 'translateY(48px)',
            }}>
              <div style={{
                aspectRatio: '3/4',
                background: `url(${p.img}) center/cover`,
                borderRadius: 'var(--r-lg)',
                marginBottom: 20,
                boxShadow: '0 20px 40px -20px rgba(74,40,24,.3)',
              }} />
              <div style={{
                fontFamily: 'var(--t-display)', fontSize: 14, color: 'var(--c-accent)',
                letterSpacing: '.2em', marginBottom: 8,
              }}>PASO {p.n}</div>
              <h3 style={{
                fontFamily: 'var(--t-display)', fontSize: 28, fontWeight: 400,
                margin: '0 0 8px', color: 'var(--c-ink)',
              }}>{p.titulo}</h3>
              <p style={{ fontSize: 14, color: 'var(--c-ink-soft)', lineHeight: 1.55, margin: 0 }}>
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. Tienda destacada ────────────────────────────────────────────
function Tienda() {
  return (
    <section data-screen-label="Tienda" id="tienda" style={{
      padding: '120px 32px', background: 'var(--c-bg)',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        background: 'var(--c-paper)',
        borderRadius: 'var(--r-lg)',
        padding: '72px 64px',
        border: '1px solid var(--c-line)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
      }}>
        <div>
          <Eyebrow>Tienda online</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--t-display)', fontSize: 'clamp(36px, 4.5vw, 56px)',
            fontWeight: 400, lineHeight: 1, margin: '20px 0 24px',
            color: 'var(--c-ink)', letterSpacing: '-.01em',
          }}>
            Recibe Café Andino<br/>
            <em style={{ color: 'var(--c-accent-deep)' }}>en tu puerta.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--t-serif)', fontStyle: 'italic', fontSize: 20,
            lineHeight: 1.55, color: 'var(--c-ink-soft)', marginBottom: 32, maxWidth: 460,
          }}>
            Suscripciones mensuales, regalos corporativos y compras al por mayor.
            Envíos a toda Colombia con pedido mínimo de $300.000.
          </p>

          <a href="#contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--t-sans)', fontSize: 13, letterSpacing: '.18em',
            textTransform: 'uppercase', color: 'var(--c-accent)', fontWeight: 600,
            borderBottom: '1px solid var(--c-accent)', paddingBottom: 4,
            marginBottom: 36,
          }}>
            Realiza tu pedido →
          </a>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
            {[
              'Pedido mínimo $300.000',
              'Frescura: tostamos el día del envío',
              'Pago contraentrega disponible',
            ].map(b => (
              <li key={b} style={{
                fontFamily: 'var(--t-sans)', fontSize: 13,
                color: 'var(--c-ink-soft)', display: 'flex', gap: 10, alignItems: 'center',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--c-accent)' }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            aspectRatio: '1/1',
            background: 'url(img/cafe_premium.jpg) center/cover',
            borderRadius: 'var(--r-lg)',
          }} />
          <div style={{
            position: 'absolute', bottom: -24, right: -24,
            background: 'var(--c-roast)', color: 'var(--c-cream)',
            padding: '20px 24px', borderRadius: 'var(--r-md)',
            transform: 'rotate(-3deg)',
          }}>
            <Script size={26} style={{ color: 'var(--c-cream)' }}>nuevo</Script>
            <div style={{ fontFamily: 'var(--t-display)', fontSize: 22, marginTop: 4 }}>Cosecha 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 9. Contacto / Newsletter ───────────────────────────────────────
function Contacto({ ctaStyle }) {
  return (
    <section data-screen-label="Contacto" id="contacto" style={{
      background: 'var(--c-accent-deep)',
      color: 'var(--c-cream)',
      padding: '120px 32px',
    }}>
      <div style={{
        maxWidth: 900, margin: '0 auto', textAlign: 'center',
      }}>
        <Script size={36} style={{ color: 'var(--c-cream)' }}>únete a la mesa</Script>
        <h2 style={{
          fontFamily: 'var(--t-display)', fontSize: 'clamp(40px, 5.5vw, 80px)',
          fontWeight: 400, lineHeight: 1, margin: '12px 0 24px',
          color: 'var(--c-cream)', letterSpacing: '-.01em',
        }}>
          Recibe nuestras<br/>
          <em>cosechas en primicia.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--t-serif)', fontStyle: 'italic', fontSize: 20,
          lineHeight: 1.55, color: 'rgba(217,179,130,.8)', marginBottom: 40,
          maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
        }}>
          Notas de cata, lanzamientos y descuentos exclusivos. Una carta al mes — nada más.
        </p>

        <form style={{
          display: 'flex', gap: 0, maxWidth: 480, margin: '0 auto',
          background: 'var(--c-paper)', borderRadius: ctaStyle === 'pill' ? 999 : 10,
          padding: 6, boxShadow: '0 20px 40px -10px rgba(0,0,0,.4)',
        }} onSubmit={e => e.preventDefault()}>
          <input
            type="email" placeholder="tu@correo.com"
            style={{
              flex: 1, border: 0, background: 'transparent', outline: 0,
              padding: '12px 18px', fontFamily: 'var(--t-sans)', fontSize: 14,
              color: 'var(--c-ink)',
            }}
          />
          <CTA variant="solid" ctaStyle={ctaStyle} size="md" as="button">
            Suscribirme →
          </CTA>
        </form>
      </div>
    </section>
  );
}

// ─── 10. Footer ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer data-screen-label="Footer" style={{
      background: 'var(--c-roast)', color: 'rgba(244,232,212,.7)',
      padding: '64px 32px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48,
          paddingBottom: 48, borderBottom: '1px solid rgba(244,232,212,.15)',
        }}>
          <div>
            <Logo size={48} color="var(--c-cream)" />
            <p style={{
              fontFamily: 'var(--t-serif)', fontStyle: 'italic',
              fontSize: 16, lineHeight: 1.55, marginTop: 20, maxWidth: 320,
              color: 'rgba(244,232,212,.6)',
            }}>
              Café 100% colombiano. De nuestra tierra, raíces y gastronomía a tu mesa.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {['IG', 'FB', 'YT', 'TT', 'WA'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 999,
                  border: '1px solid rgba(244,232,212,.3)',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--t-sans)', fontSize: 11, fontWeight: 600,
                  color: 'var(--c-cream)', letterSpacing: '.05em',
                  transition: 'all .2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--c-cream)'; e.currentTarget.style.color = 'var(--c-roast)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--c-cream)'; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {[
            { titulo: 'Empresa', items: ['Nosotros', 'Misión y visión', 'Caficultores', 'Sostenibilidad'] },
            { titulo: 'Productos', items: ['Café especial', 'Café tradicional', 'Café instantáneo', 'Suscripciones'] },
            { titulo: 'Contacto', items: ['ventas@cafeandino.co', '+57 (1) 234 5678', 'Bogotá · Colombia', 'Atención: Lun-Sáb'] },
          ].map(col => (
            <div key={col.titulo}>
              <div style={{
                fontFamily: 'var(--t-sans)', fontSize: 11, letterSpacing: '.2em',
                textTransform: 'uppercase', color: 'var(--c-cream)', fontWeight: 600,
                marginBottom: 18,
              }}>{col.titulo}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {col.items.map(it => (
                  <li key={it} style={{ fontFamily: 'var(--t-sans)', fontSize: 13.5 }}>
                    <a href="#" style={{ color: 'rgba(244,232,212,.7)' }}>{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 28, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 16,
          fontFamily: 'var(--t-sans)', fontSize: 12, color: 'rgba(244,232,212,.5)',
        }}>
          <div>© 2026 Café Andino S.A.S — NIT 901.234.567-8 — Hecho con cariño en Colombia.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: 'inherit' }}>Términos</a>
            <a href="#" style={{ color: 'inherit' }}>Privacidad</a>
            <a href="#" style={{ color: 'inherit' }}>Política de envíos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Header, HeroEditorial, HeroFullBleed, HeroSplit,
  Nosotros, Valores, Productos, Proceso, Tienda, Contacto, Footer,
});

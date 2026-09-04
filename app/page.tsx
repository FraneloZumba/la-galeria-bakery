'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const MENU_URL = 'https://drive.google.com/file/d/1ls0hQb3w1-Ce8AuGYXF2MDpHCQmtuslw/view?usp=drive_link'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=La+Galeria+Bakery+Plaza+33+Cuenca+Ecuador'
const INSTAGRAM_URL = 'https://www.instagram.com/la_galeria_bakery/'
const FACEBOOK_URL = 'https://www.facebook.com/PanArteBakery'
const WHATSAPP_URL = 'https://wa.me/593995741785'


const heroSlides = [
  {
    id: 'arte',
    theme: 'cream',
    eyebrow: 'Panadería artesanal + pastelería',
    title: [
      { text: 'EL ARTE', tone: 'ink' },
      { text: 'DE HACER', tone: 'accent' },
      { text: 'PAN.', tone: 'accent' },
    ],
    description: 'Panadería artesanal y pastelería hecha con pasión. Desde 2014, horneando antojos en Cuenca.',
    vertical: 'PAN · MASA MADRE · PASTELERÍA · CAFÉ',
    outline: 'PAN ARTESANAL',
    stamp: ['100%', 'ARTESANAL', 'EST. 2014'],
    madeIn: 'HECHO EN CUENCA · DESDE 2014',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=88',
    alt: 'Pan artesanal recién horneado',
  },
  {
    id: 'recien',
    theme: 'red',
    eyebrow: 'Del horno a la mesa',
    title: [
      { text: 'RECIÉN', tone: 'light' },
      { text: 'HORNEADO.', tone: 'light' },
    ],
    description: 'Croissants, panadería y pastelería para convertir cualquier pausa en un buen antojo.',
    vertical: 'CROISSANTS · PAN · PASTELERÍA · CAFÉ',
    outline: 'RECIÉN HORNEADO',
    stamp: ['PAN', 'Y PASIÓN', 'EST. 2014'],
    madeIn: 'LA GALERÍA BAKERY · CUENCA',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=88',
    alt: 'Croissants recién horneados',
  },
  {
    id: 'masa',
    theme: 'cream',
    eyebrow: 'Un vistazo a lo nuestro',
    title: [
      { text: 'MASA', tone: 'ink' },
      { text: 'MADRE.', tone: 'accent' },
      { text: 'CROISSANTS.', tone: 'accent' },
    ],
    description: 'Pan artesanal, croissants y pastelería: distintas formas de hacer bien lo que más nos gusta.',
    vertical: 'MASA MADRE · PAN ARTESANAL · CROISSANTS',
    outline: 'HECHO CON PASIÓN',
    stamp: ['DESDE', '2014', 'CUENCA'],
    madeIn: 'PANADERÍA ARTESANAL · PASTELERÍA',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1400&q=88',
    alt: 'Selección de panes artesanales',
  },
  {
    id: 'desde',
    theme: 'red',
    eyebrow: 'Una historia que sigue creciendo',
    title: [
      { text: 'DESDE', tone: 'light' },
      { text: '2014.', tone: 'light' },
      { text: 'EN CUENCA.', tone: 'light' },
    ],
    description: 'Más de una década haciendo del pan, la pastelería y el oficio parte de nuestra historia.',
    vertical: 'LA GALERÍA · EST. 2014 · CUENCA',
    outline: 'EL ARTE DE HACER PAN',
    stamp: ['100%', 'ARTESANAL', 'CUENCA'],
    madeIn: 'PLAZA 33 · LOS PINOS · CUENCA',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1400&q=88',
    alt: 'Panadería artesanal en preparación',
  },
] as const

const featureImages = [
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=88',
    alt: 'Croissants artesanales recién horneados',
  },
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=88',
    alt: 'Pan artesanal recién horneado',
  },
  {
    src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=88',
    alt: 'Pan de masa madre artesanal',
  },
  {
    src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=88',
    alt: 'Pastelería artesanal recién hecha',
  },
] as const

const menu = {
  Tostones: [
    {
      name: 'Tostón con burrata',
      detail: 'Pan de masa madre, salsa pesto, queso burrata, tomates confitados y nuez troceada.',
      price: '$8,00',
    },
    {
      name: 'Tostón con salmón ahumado',
      detail: 'Pan de masa madre, lechuga morada, salsa de queso crema, queso brie y tomates confitados.',
      price: '$8,50',
    },
    {
      name: 'Tostón con jamón serrano',
      detail: 'Pan de masa madre, pasta de tomate, queso provolone, aceituna, tomates confitados, cebolla caramelizada y salsa de queso crema.',
      price: '$8,00',
    },
    {
      name: 'Tostón con huevo revuelto',
      detail: 'Tocino, queso provolone, salsa de queso crema, tomates confitados, cebolla caramelizada y miel de maple.',
      price: '$6,00',
    },
  ],
  Sánduches: [
    {
      name: 'Panino croissant',
      detail: 'Relleno de queso, jamón, tomates confitados y mayonesa.',
      price: '$2,75',
    },
    {
      name: 'Pan suave',
      detail: 'Mayonesa, jamón, mortadela de Italia, pepperoni, queso holandés, lechuga y tomate confitado.',
      price: '$3,75',
    },
    {
      name: 'Focaccia',
      detail: 'Jamón york, mortadela de Italia, doble queso, lechuga, tomate confitado y mayonesa.',
      price: '$7,00',
    },
    {
      name: 'Croissant de pollo',
      detail: 'Mix de pechuga de pollo, apio, manzana, mayonesa y tomate confitado.',
      price: '$3,75',
    },
    {
      name: 'Croissant roast beef',
      detail: 'Salsa mostaza, queso provolone, pepinillos rebanados, cebolla caramelizada y tomates confitados.',
      price: '$7,00',
    },
    {
      name: 'Croissant crema con frutas',
      detail: 'Croissant relleno de crema con frutas.',
      price: '$3,75',
    },
    {
      name: 'Croissant manzana & caramelo',
      detail: 'Crema pastelera, manzanas bañadas en salsa de caramelo y nuez.',
      price: '$3,75',
    },
  ],
  'Bollería fina y dulces': [
    {
      name: 'Croissant clásico',
      detail: 'Croissant artesanal clásico.',
      price: '$1,30',
    },
    {
      name: 'Croissant sabores',
      detail: 'Chocolate, frutos rojos, limón o manjar.',
      price: '$1,55',
    },
    {
      name: 'Croissant con pistacho',
      detail: 'Croissant artesanal con pistacho.',
      price: '$2,50',
    },
    {
      name: 'Roll grande',
      detail: 'Canela, pistacho, blueberry, avellana o Kinder.',
      price: '$3,00',
    },
    {
      name: 'Roll pequeño',
      detail: 'Canela, pistacho, blueberry, avellana o Kinder.',
      price: '$2,00',
    },
  ],
  Postres: [
    {
      name: 'Galletas',
      detail: 'Choco chips, chocolate, Kinder o Red Velvet.',
      price: '$1,30',
    },
    {
      name: 'Brownie',
      detail: 'Brownie de la casa.',
      price: '$1,30',
    },
    {
      name: 'Brownie con helado',
      detail: 'Brownie acompañado de helado.',
      price: '$2,50',
    },
    {
      name: 'Muffin blueberry con chocolate',
      detail: 'Muffin de blueberry con chocolate.',
      price: '$1,30',
    },
    {
      name: 'Torta mojada de chocolate',
      detail: 'Porción de torta.',
      price: '$3,00',
    },
    {
      name: 'Torta de zanahoria',
      detail: 'Porción de torta.',
      price: '$3,00',
    },
    {
      name: 'Torta de tres leches',
      detail: 'Porción de torta.',
      price: '$3,00',
    },
    {
      name: 'Torta de limón y blueberry',
      detail: 'Porción de torta.',
      price: '$3,00',
    },
  ],
  Bebidas: [
    {
      name: 'Bebidas calientes · Mediano',
      detail: 'Americano, capuccino, capuccino vainilla, capuccino de canela, mokaccino, mokaccino de vainilla, mokaccino de canela, café con leche, chai tea latte o chocolate caliente.',
      price: '$2,00',
    },
    {
      name: 'Bebidas calientes · Grande',
      detail: 'Americano, capuccino, capuccino vainilla, capuccino de canela, mokaccino, mokaccino de vainilla, mokaccino de canela, café con leche, chai tea latte o chocolate caliente.',
      price: '$2,75',
    },
    {
      name: 'Espresso simple',
      detail: 'Espresso simple.',
      price: '$1,50',
    },
    {
      name: 'Espresso doble',
      detail: 'Espresso doble.',
      price: '$2,25',
    },
    {
      name: 'Bebidas frías',
      detail: 'Americano frío, French vainilla latte, caramel latte, chai tea latte o chocolate frío.',
      price: '$2,80',
    },
  ],
  Adicionales: [
    {
      name: 'Porción de huevos',
      detail: 'Adicional para acompañar tu pedido.',
      price: '$1,00',
    },
    {
      name: 'Porción de helado',
      detail: 'Adicional para acompañar tu pedido.',
      price: '$1,20',
    },
  ],
} as const

type MenuCategory = keyof typeof menu

const categories: MenuCategory[] = [
  'Tostones',
  'Sánduches',
  'Bollería fina y dulces',
  'Postres',
  'Bebidas',
  'Adicionales',
]

function Rule({ dark = false }: { dark?: boolean }) {
  return <div className={`rule ${dark ? 'rule-dark' : ''}`} aria-hidden="true" />
}

function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img className={`food-photo ${className}`} src={src} alt={alt} />
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState<MenuCategory>('Tostones')
  const [heroIndex, setHeroIndex] = useState(0)
  const [featureIndex, setFeatureIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length)
    }, 5600)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFeatureIndex((current) => (current + 1) % featureImages.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [])

  const heroSlide = heroSlides[heroIndex]

  return (
    <main className="poster-site">
      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="Inicio — La Galería Bakery">
          <img className="header-logo" src="/logo_completo.png" alt="La Galería Bakery" />
        </a>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegación principal">
          <a href="#menu" onClick={() => setMenuOpen(false)}>Carta</a>
          <a href="#nuestra-historia" onClick={() => setMenuOpen(false)}>Nuestra historia</a>
          <a href="#visitanos" onClick={() => setMenuOpen(false)}>Visítanos</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <span className="header-note">PLAZA 33 · LOS PINOS · CUENCA</span>
      </header>

      <section id="top" className={`hero hero--${heroSlide.theme} hero--${heroSlide.id}`}>
        <div className="hero-watermark" aria-hidden="true" />

        <div className="hero-copy" key={`copy-${heroIndex}`}>
          <p className="eyebrow">{heroSlide.eyebrow} <span>✦</span></p>

          <h1 className="hero-title-brand">
            {heroSlide.title.map((line) => (
              <span className={`hero-title-line tone-${line.tone}`} key={line.text}>
                {line.text}
              </span>
            ))}
          </h1>

          <p className="hero-description">{heroSlide.description}</p>

          <a className="round-link hero-menu-link" href="#menu">
            Ver la carta <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="hero-art">
          <div className="vertical-type">{heroSlide.vertical}</div>

          <div className="hero-photo-stack" aria-live="polite">
            {heroSlides.map((slide, index) => (
              <Photo
                key={slide.image}
                src={slide.image}
                alt={index === heroIndex ? slide.alt : ''}
                className={`hero-bread hero-bread-layer ${index === heroIndex ? 'is-active' : ''}`}
              />
            ))}
          </div>

          <div className="hero-made-in">{heroSlide.madeIn}</div>
          <div className="dots" aria-hidden="true" />
        </div>

        <div className="hero-slider-nav" aria-label="Cambiar campaña del hero">
          <span className="hero-counter">{String(heroIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
          <div className="hero-slider-dots">
            {heroSlides.map((slide, index) => (
              <button
                key={`${slide.outline}-${index}`}
                type="button"
                className={index === heroIndex ? 'is-active' : ''}
                onClick={() => setHeroIndex(index)}
                aria-label={`Ver campaña ${index + 1}`}
                aria-current={index === heroIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="red-section marquee-section" aria-label="Franja animada">
        <div className="marquee-row marquee-row-solid">
          <div className="marquee-track">
            <span>PAN FRESCO · CROISSANTS · MASA MADRE · PASTELERÍA · PAN FRESCO · CROISSANTS · MASA MADRE · PASTELERÍA · </span>
            <span>PAN FRESCO · CROISSANTS · MASA MADRE · PASTELERÍA · PAN FRESCO · CROISSANTS · MASA MADRE · PASTELERÍA · </span>
          </div>
        </div>

        <div className="marquee-row-outline marquee-row">
          <div className="marquee-track marquee-track-reverse">
            <span>HECHO CON PASIÓN · HECHO CON PASIÓN · HECHO CON PASIÓN · HECHO CON PASIÓN · </span>
            <span>HECHO CON PASIÓN · HECHO CON PASIÓN · HECHO CON PASIÓN · HECHO CON PASIÓN · </span>
          </div>
        </div>
      </section>

      <section className="cream-section story-section" id="nuestra-historia">
        <div className="story-topline">
          <span>01 / NUESTRA HISTORIA</span>
          <span>CUENCA · EST. 2014</span>
        </div>

        <div className="story-main">
          <div className="story-heading">
            <p className="eyebrow">Conócenos mejor <span>✦</span></p>
            <h2>
              EL PAN
              <br />
              <span>ES NUESTRO</span>
              <br />
              <span>ARTE.</span>
            </h2>

            <p className="story-intro">
              La Galería nació en Cuenca con una idea sencilla: hacer las cosas con oficio,
              cuidado y mucho cariño. Desde 2014, el pan, la pastelería y cada detalle
              forman parte de nuestra historia.
            </p>

            <a className="text-link" href="#visitanos">
              Ven a conocernos <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="story-visual">
            <Photo
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=88"
              alt="Panadería y pastelería artesanal"
              className="story-main-photo"
            />

            <div className="story-photo-label">
              <span>LA GALERÍA</span>
              <small>CUENCA · ECUADOR</small>
            </div>

            <span className="story-big-star" aria-hidden="true">✦</span>
          </div>
        </div>

        <div className="story-cards">
          <article className="story-card story-card--red">
            <span className="story-card-number">01</span>
            <div>
              <p className="story-card-label">NUESTRO INICIO</p>
              <h3>DESDE 2014.</h3>
            </div>
            <p className="story-card-text">
              Una historia que comenzó en Cuenca y que ha crecido alrededor del pan,
              la pastelería y las ganas de hacer cada día algo mejor.
            </p>
            <span className="story-card-mark" aria-hidden="true">✦</span>
          </article>

          <article className="story-card">
            <span className="story-card-number">02</span>
            <div>
              <p className="story-card-label">NUESTRA FORMA DE HACERLO</p>
              <h3>OFICIO ARTESANAL.</h3>
            </div>
            <p className="story-card-text">
              Detrás de cada producto hay trabajo, técnica y atención a los detalles.
              Lo artesanal es parte de nuestra manera de trabajar.
            </p>
            <span className="story-card-mark" aria-hidden="true">✦</span>
          </article>

          <article className="story-card">
            <span className="story-card-number">03</span>
            <div>
              <p className="story-card-label">NUESTRA CASA</p>
              <h3>HECHO EN CUENCA.</h3>
            </div>
            <p className="story-card-text">
              Somos parte de una ciudad que nos ha visto crecer. Aquí horneamos,
              compartimos y seguimos construyendo la historia de La Galería.
            </p>
            <span className="story-card-mark" aria-hidden="true">✦</span>
          </article>
        </div>
      </section>

      <section className="red-section feature-section feature-poster">
        <div className="feature-top">
          <span>RECIÉN SALIDO DEL HORNO</span>
          <span>EST. 2014 / CUENCA</span>
        </div>

        <div className="feature-poster-grid feature-poster-grid--clean">
          <div className="feature-poster-copy">
            <p className="feature-poster-kicker">
              PAN · PASTELERÍA · CAFÉ <span>✦</span>
            </p>

            <h2 className="feature-poster-title">
              RECIÉN
              <br />
              <span>HORNEADO.</span>
            </h2>

            <p className="feature-poster-lead">
              Croissants, pan de masa madre y pastelería artesanal recién salidos
              del horno para acompañar cualquier pausa del día.
            </p>

            <div className="feature-poster-meta">
              <span>HECHO A DIARIO</span>
              <span>OFICIO ARTESANAL</span>
              <span>DESDE 2014</span>
            </div>
          </div>

          <div className="feature-poster-visual" aria-live="polite">
            <div className="feature-photo-stack">
              {featureImages.map((photo, index) => (
                <Photo
                  key={photo.src}
                  src={photo.src}
                  alt={index === featureIndex ? photo.alt : ''}
                  className={`feature-poster-photo feature-poster-photo-layer ${index === featureIndex ? 'is-active' : ''}`}
                />
              ))}
            </div>

            <div className="feature-photo-note">
              DORADO · CRUJIENTE · RECIÉN HECHO
            </div>
          </div>
        </div>

        <div className="feature-bottom">
          <span>MASA MADRE</span>
          <span>→</span>
          <span>CROISSANTS</span>
          <span>→</span>
          <span>FOCACCIA</span>
          <span>→</span>
          <span>PASTELERÍA</span>
        </div>
      </section>

      <section id="menu" className="cream-section menu-section">
        <div className="menu-heading">
          <p className="eyebrow">Un vistazo a lo nuestro</p>
          <h2>LA<br /><span>CARTA</span></h2>
          <div className="tiny-stars">✦ ✦ ✦</div>
        </div>

        <div className="menu-list">
          <div className="tabs" role="tablist">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}
                role="tab"
                aria-selected={category === item}
              >
                {item}
              </button>
            ))}
          </div>

          {menu[category].map((item) => (
            <div className="menu-row" key={item.name}>
              <div className="menu-row-copy">
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>

              <div className="menu-row-meta">
                <strong>{item.price}</strong>
                <span aria-hidden="true">✦</span>
              </div>
            </div>
          ))}

          {category === 'Postres' && (
            <p className="menu-season-note">* Pregunta por nuestros especiales de temporada.</p>
          )}

        </div>
      </section>

      <section id="visitanos" className="visit-section visit-section--split">
        <div className="visit-panel visit-panel--location">
          <div className="visit-panel-head">
            <p className="eyebrow">Encuéntranos</p>
            <span className="visit-index">01 / CUENCA</span>
          </div>

          <h2 className="visit-title">VEN<br /><em>CON HAMBRE.</em></h2>

          <p className="visit-intro">
            Pan, café y algo dulce. Estamos en Plaza 33, en Los Pinos.
          </p>

          <div className="visit-info">
            <div className="visit-info-row">
              <span className="visit-info-number">01</span>
              <div>
                <small>Dirección</small>
                <strong>Plaza 33 · Los Pinos</strong>
                <p>Paseo 3 de Noviembre y Los Cipreses<br />Cuenca, Ecuador</p>
              </div>
            </div>

            <div className="visit-info-row">
              <span className="visit-info-number">02</span>
              <div className="visit-hours-block">
                <small>Horarios</small>
                <div className="visit-hours-row">
                  <strong>Lunes — Viernes</strong>
                  <span>08:00 — 20:00</span>
                </div>
                <div className="visit-hours-row">
                  <strong>Sábado — Domingo</strong>
                  <span>09:00 — 19:00</span>
                </div>
              </div>
            </div>
          </div>

          <a className="visit-map-button" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            Cómo llegar <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="visit-panel visit-panel--social">
          <div className="visit-panel-head">
            <p className="eyebrow">Sigamos conectados</p>
            <span className="visit-index">02 / REDES</span>
          </div>

          <h2 className="visit-title visit-title--social">SÍGUENOS<br /><em>POR AQUÍ.</em></h2>

          <p className="visit-social-intro">
            Lo recién horneado, novedades de la casa y esos antojos que aparecen justo cuando no deberían.
          </p>

          <div className="visit-social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="visit-social-link">
              <span className="visit-social-number">01</span>
              <div>
                <small>Instagram</small>
                <strong>@la_galeria_bakery</strong>
              </div>
              <ArrowUpRight size={22} />
            </a>

            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="visit-social-link">
              <span className="visit-social-number">02</span>
              <div>
                <small>Facebook</small>
                <strong>La Galería Bakery</strong>
              </div>
              <ArrowUpRight size={22} />
            </a>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="visit-social-link">
              <span className="visit-social-number">03</span>
              <div>
                <small>WhatsApp</small>
                <strong>099 574 1785</strong>
              </div>
              <ArrowUpRight size={22} />
            </a>
          </div>

          <div className="visit-social-footer">
            <span>LA GALERÍA BAKERY</span>
            <span>EST. 2014 · CUENCA</span>
          </div>
        </div>
      </section>

      <footer className="site-footer cream-section">
        <div className="footer-big">NOS VEMOS<br /><em>PRONTO.</em></div>
        <Rule />
        <div className="footer-bottom">
          <span>LA GALERÍA BAKERY © 2026</span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">◎ @LA_GALERIA_BAKERY</a>
          <span>CUENCA / EC</span>
        </div>
      </footer>
    </main>
  )
}

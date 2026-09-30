"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    title: "TEHNIKA",
    text: "Rad na tehnici svih stilova, efikasnosti i osećaju za vodu.",
    image: "/technique.jpg",
    icon: "≈",
  },
  {
    number: "02",
    title: "IZDRŽLJIVOST",
    text: "Strukturirani treninzi koji grade formu i sigurnost u vodi.",
    image: "/endurance.jpg",
    icon: "♡",
  },
  {
    number: "03",
    title: "BRZINA",
    text: "Intervali, tempo i rad na brzini za plivače koji žele napredak.",
    image: "/speed.jpg",
    icon: "◔",
  },
  {
    number: "04",
    title: "ZAJEDNICA",
    text: "Ekipa koja trenira zajedno, takmiči se zajedno i uživa u plivanju.",
    image: "/community.jpg",
    icon: "♧",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">

        <a
          className="brand"
          href="#top"
          aria-label="DR SWIM Vladimir Antonijević"
          onClick={closeMenu}
        >
          <img
            src="/drswim-logo.png"
            alt="DR SWIM Vladimir Antonijević"
          />
        </a>


        {/* DESKTOP NAVIGATION */}

        <nav className="desktop-nav">
          <a href="#klub">O KLUBU</a>
          <a href="#trening">TRENING</a>
          <a href="#takmicenja">TAKMIČENJA</a>
          <a href="#plivaci">PLIVAČI</a>
          <a href="#kontakt">KONTAKT</a>
        </nav>


        {/* DESKTOP CTA */}

        <a
          className="header-cta desktop-cta"
          href="#kontakt"
        >
          PRIDRUŽI SE →
        </a>


        {/* MOBILE HAMBURGER */}

        <button
          className={`mobile-menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Zatvori meni"
              : "Otvori meni"
          }
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* MOBILE MENU */}

        <div
          className={`mobile-menu ${
            menuOpen ? "show" : ""
          }`}
        >

          <a
            href="#klub"
            onClick={closeMenu}
          >
            O KLUBU
          </a>

          <a
            href="#trening"
            onClick={closeMenu}
          >
            TRENING
          </a>

          <a
            href="#takmicenja"
            onClick={closeMenu}
          >
            TAKMIČENJA
          </a>

          <a
            href="#plivaci"
            onClick={closeMenu}
          >
            PLIVAČI
          </a>

          <a
            href="#kontakt"
            onClick={closeMenu}
          >
            KONTAKT
          </a>

          <a
            className="mobile-menu-cta"
            href="#kontakt"
            onClick={closeMenu}
          >
            PRIDRUŽI SE →
          </a>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="hero"
        id="top"
      >

        <div className="hero-copy">

          <div className="eyebrow">
            DR SWIM / MASTERS SWIMMING
          </div>


          <h1>
            <span>SWIM.</span>
            <strong>TRAIN.</strong>
            <span>RACE.</span>
          </h1>


          <p>
            Ozbiljan trening. Dobra ekipa. Ista ljubav prema vodi.
            Masters plivanje za one koji žele više od običnog treninga.
          </p>


          <div className="hero-actions">

            <a
              className="primary-btn"
              href="#kontakt"
            >
              PRIDRUŽI SE →
            </a>

            <a
              className="secondary-btn"
              href="#trening"
            >
              POGLEDAJ TRENINGE
            </a>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-visual">

          <div className="hero-image"></div>

          <div className="hero-overlay"></div>

          <div className="vertical-word">
            DR SWIM
          </div>

          <div className="hero-index">
            01 / MASTERS
          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURE IMAGE STRIP
      ===================================================== */}

      <section
        className="feature-strip"
        id="trening"
      >

        {features.map((feature) => (
          <article
            className="feature feature-image-only"
            key={feature.number}
          >

            <img
              src={feature.image}
              alt={`DR SWIM ${feature.title.toLowerCase()}`}
            />

          </article>
        ))}

      </section>


      {/* =====================================================
          ABOUT DR SWIM
      ===================================================== */}

      <section
        className="about"
        id="klub"
      >

        <div>

          <div className="eyebrow">
            ABOUT DR SWIM
          </div>

          <h2>
            Više od treninga.
            <br />

            <span>
              Zajednica u vodi.
            </span>
          </h2>

        </div>


        <p>
          DR SWIM Masters okuplja odrasle plivače različitog
          iskustva — od povratnika u bazen do takmičara.
          Fokus je na kvalitetnom treningu, tehnici, napretku
          i uživanju u plivanju.
        </p>

      </section>


      {/* =====================================================
          TAKMIČENJA
      ===================================================== */}

      <section
        className="bottom-section"
        id="takmicenja"
      >

        <div>

          <span>
            01
          </span>

          <h3>
            MASTERS TAKMIČENJA
          </h3>

          <p>
            Priprema za domaća i međunarodna masters
            takmičenja, mitinge i open water izazove.
          </p>

        </div>


        <div id="plivaci">

          <span>
            02
          </span>

          <h3>
            ZA SVE NIVOE
          </h3>

          <p>
            Trening prilagođen iskustvu, cilju i ritmu
            svakog plivača.
          </p>

        </div>


        <div id="kontakt">

          <span>
            03
          </span>

          <h3>
            PRIDRUŽI NAM SE
          </h3>

          <p>
            Javi nam se i napravi prvi korak ka svom
            sledećem plivačkom cilju.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <p>
          © 2026 DR SWIM Masters · Vladimir Antonijević
        </p>

      </footer>

    </main>
  );
}
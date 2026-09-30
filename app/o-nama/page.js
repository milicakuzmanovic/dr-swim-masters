"use client";

import { useState } from "react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="about-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">
        <a
          className="brand"
          href="/"
          aria-label="DR SWIM Vladimir Antonijević"
          onClick={closeMenu}
        >
          <img
            src="/drswim-logo.png"
            alt="DR SWIM Vladimir Antonijević"
          />
        </a>

        <nav className="desktop-nav">
          <a href="/">POČETNA</a>

          <a
            href="/o-nama"
            className="active-nav"
          >
            O NAMA
          </a>

          <a href="/#trening">
            TRENING
          </a>

          <a href="/#takmicenja">
            TAKMIČENJA
          </a>

          <a href="/#plivaci">
            PLIVAČI
          </a>

          <a href="/#kontakt">
            KONTAKT
          </a>
        </nav>

        <a
          className="header-cta desktop-cta"
          href="/#kontakt"
        >
          PRIDRUŽI SE →
        </a>

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

        <div
          className={`mobile-menu ${
            menuOpen ? "show" : ""
          }`}
        >
          <a
            href="/"
            onClick={closeMenu}
          >
            POČETNA
          </a>

          <a
            href="/o-nama"
            onClick={closeMenu}
          >
            O NAMA
          </a>

          <a
            href="/#trening"
            onClick={closeMenu}
          >
            TRENING
          </a>

          <a
            href="/#takmicenja"
            onClick={closeMenu}
          >
            TAKMIČENJA
          </a>

          <a
            href="/#plivaci"
            onClick={closeMenu}
          >
            PLIVAČI
          </a>

          <a
            href="/#kontakt"
            onClick={closeMenu}
          >
            KONTAKT
          </a>

          <a
            className="mobile-menu-cta"
            href="/#kontakt"
            onClick={closeMenu}
          >
            PRIDRUŽI SE →
          </a>
        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-copy">

          <div className="eyebrow">
            DR SWIM / MASTERS
          </div>

          <h1>
            VIŠE OD
            <span>PLIVANJA.</span>
          </h1>

          <p>
            DR SWIM Masters okuplja plivače koji treniraju,
            takmiče se i zajedno grade svoju plivačku priču.
          </p>

          <div className="about-hero-meta">
            <span>TRAIN</span>
            <span>RACE</span>
            <span>COMMUNITY</span>
          </div>

        </div>

        <div className="about-hero-image">

          <img
            src="/about-championship.jpg"
            alt="DR SWIM na takmičenju u Beogradu 2024"
          />

          <div className="about-hero-image-overlay"></div>

          <div className="about-hero-label">
            <span>EUROPEAN AQUATICS</span>
            <strong>CHAMPIONSHIPS</strong>
            <b>BELGRADE 2024</b>
          </div>

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="about-story">

        <div className="about-story-copy">

          <div className="eyebrow">
            NAŠA PRIČA
          </div>

          <h2>
            LJUDI
            <span>ČINE KLUB.</span>
          </h2>

          <p>
            DR SWIM Masters nije samo bazen, trening i rezultat.
            To su ljudi koji zajedno treniraju, putuju,
            takmiče se i provode vreme van bazena.
          </p>

          <p>
            Svako dolazi sa svojim ciljem, iskustvom i tempom.
            Ono što nas povezuje jeste ljubav prema plivanju,
            treningu i zajedničkom napretku.
          </p>

          <div className="about-line"></div>

        </div>

        <div className="about-story-image">

          <img
            src="/about-team.jpg"
            alt="DR SWIM Masters ekipa"
          />

        </div>

      </section>


      {/* =====================================================
          COMPETITIVE SPIRIT
      ===================================================== */}

      <section className="about-competition">

        <div className="about-competition-image">

          <img
            src="/about-athlete.jpg"
            alt="DR SWIM takmičarski plivač"
          />

          <div className="about-competition-caption">
            <span>DR SWIM</span>
            <strong>COMPETE WITH PURPOSE</strong>
          </div>

        </div>

        <div className="about-competition-copy">

          <div className="eyebrow">
            TAKMIČARSKI DUH
          </div>

          <h2>
            TRAIN.
            <br />
            RACE.
            <br />
            <span>REPEAT.</span>
          </h2>

          <p>
            Trening je osnova.
            Takmičenje je prilika da proverimo gde smo,
            postavimo novi cilj i pomerimo sopstvene granice.
          </p>

          <div className="about-competition-rule"></div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values">

        <div className="about-values-header">

          <div className="eyebrow">
            ŠTA NAS POVEZUJE
          </div>

          <h2>
            JEDAN KLUB.
            <span>RAZLIČITI CILJEVI.</span>
          </h2>

        </div>


        <div className="about-values-grid">

          <article className="about-value-card">
            <img
              src="/technique.jpg"
              alt="DR SWIM Tehnika"
            />
          </article>

          <article className="about-value-card">
            <img
              src="/endurance.jpg"
              alt="DR SWIM Izdržljivost"
            />
          </article>

          <article className="about-value-card">
            <img
              src="/speed.jpg"
              alt="DR SWIM Brzina"
            />
          </article>

          <article className="about-value-card">
            <img
              src="/community.jpg"
              alt="DR SWIM Zajednica"
            />
          </article>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final">

        <div className="about-final-overlay"></div>

        <div className="about-final-content">

          <div className="about-final-copy">

            <div className="eyebrow">
              DR SWIM MASTERS
            </div>

            <h2>
              SVAKI TRENING
              <span>JE KORAK DALJE.</span>
            </h2>

          </div>

          <div className="about-final-action">

            <p>
              Bilo da se vraćaš plivanju, treniraš rekreativno
              ili se spremaš za sledeće takmičenje —
              mesto je u našoj ekipi.
            </p>

            <a
              className="primary-btn"
              href="/#kontakt"
            >
              PRIDRUŽI SE →
            </a>

          </div>

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
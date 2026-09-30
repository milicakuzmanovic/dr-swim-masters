export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="logo">
          <span className="logoMark">DR</span>
          <span className="logoText">SWIM<small>MASTERS</small></span>
        </div>
        <nav>
          <a href="#about">O KLUBU</a>
          <a href="#training">TRENING</a>
          <a href="#races">TAKMICENJA</a>
          <a href="#team">PLIVACI</a>
          <a href="#contact">KONTAKT</a>
        </nav>
        <a className="navCta" href="#contact">PRIDRUŽI SE</a>
      </header>

      <section className="hero">
        <div className="heroGlow one" />
        <div className="heroGlow two" />
        <div className="heroContent">
          <p className="eyebrow">DR SWIM / MASTERS SWIMMING</p>
          <h1>SWIM.<br /><em>TRAIN.</em><br />RACE.</h1>
          <p className="heroCopy">
            Ozbiljan trening. Dobra ekipa. Ista ljubav prema vodi.
            Masters plivanje za one koji žele više od običnog treninga.
          </p>
          <div className="heroButtons">
            <a className="primary" href="#contact">PRIDRUŽI SE <span>↗</span></a>
            <a className="secondary" href="#training">POGLEDAJ TRENINGE</a>
          </div>
        </div>

        <div className="swimmerCard">
          <div className="waterLines" />
          <div className="swimmer">
            <div className="head" />
            <div className="body" />
            <div className="arm arm1" />
            <div className="arm arm2" />
            <div className="leg leg1" />
            <div className="leg leg2" />
          </div>
          <div className="cardLabel">01 / MASTERS</div>
          <div className="verticalWord">WATER</div>
        </div>
      </section>

      <section className="ticker">
        <span>TECHNIQUE</span><b>•</b><span>ENDURANCE</span><b>•</b>
        <span>SPEED</span><b>•</b><span>OPEN WATER</span><b>•</b>
        <span>COMPETITION</span><b>•</b><span>COMMUNITY</span>
      </section>

      <section className="intro" id="about">
        <div className="sectionNumber">01</div>
        <div>
          <p className="eyebrow blue">ABOUT DR SWIM</p>
          <h2>Više od treninga.<br /><span>Zajednica u vodi.</span></h2>
        </div>
        <p className="introText">
          DR SWIM Masters okuplja odrasle plivače različitog iskustva —
          od povratnika u bazen do takmičara. Fokus je na kvalitetnom
          treningu, tehnici, napretku i uživanju u plivanju.
        </p>
      </section>

      <section className="stats">
        <div><strong>10+</strong><span>GODINA ISKUSTVA</span></div>
        <div><strong>100+</strong><span>PLIVAČA</span></div>
        <div><strong>50+</strong><span>TAKMIČENJA</span></div>
        <div><strong>∞</strong><span>DUŽINA BAZENA KOJU VOLIMO</span></div>
      </section>

      <section className="training" id="training">
        <div className="sectionHead">
          <div><p className="eyebrow blue">02 / TRAINING</p><h2>TRI MODE.<br /><span>ONE GOAL.</span></h2></div>
          <p>Programi koji prate tvoj nivo, cilj i ritam života.</p>
        </div>
        <div className="trainingGrid">
          <article><span>01</span><h3>TECHNIQUE</h3><p>Rad na tehnici svih stilova, efikasnosti i osećaju za vodu.</p></article>
          <article><span>02</span><h3>ENDURANCE</h3><p>Izdržljivost, tempo i strukturirani intervali za ozbiljan napredak.</p></article>
          <article><span>03</span><h3>RACE</h3><p>Priprema za masters mitinge, prvenstva i open water izazove.</p></article>
        </div>
      </section>

      <section className="races" id="races">
        <div className="sectionNumber">03</div>
        <div>
          <p className="eyebrow">COMPETE WITH US</p>
          <h2>TRAIN FOR<br /><span>THE MOMENT.</span></h2>
          <p className="lightText">Takmičenja, masters prvenstva, mitinzi i open water trke.</p>
          <a className="outlineLight" href="#contact">NAŠI CILJEVI ↗</a>
        </div>
      </section>

      <section className="team" id="team">
        <p className="eyebrow blue">04 / OUR SWIMMERS</p>
        <div className="teamHead"><h2>ONE LANE.<br /><span>MANY STORIES.</span></h2><p>Plivači koji treniraju zajedno, napreduju zajedno i putuju zajedno.</p></div>
        <div className="teamCards">
          <div>01 <strong>REKREATIVCI</strong></div>
          <div>02 <strong>MASTERS</strong></div>
          <div>03 <strong>TAKMIČARI</strong></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">05 / JOIN DR SWIM</p>
        <h2>READY TO<br /><span>SWIM?</span></h2>
        <p>Pošalji nam poruku i saznaj koji trening odgovara tvom nivou.</p>
        <a className="primary" href="mailto:info@drswim.rs">KONTAKTIRAJ NAS ↗</a>
      </section>

      <footer>
        <div className="logo footerLogo"><span className="logoMark">DR</span><span className="logoText">SWIM<small>MASTERS</small></span></div>
        <p>TRAIN HARD. SWIM SMART. RACE STRONG.</p>
        <span>© 2026 DR SWIM Masters</span>
      </footer>
    </main>
  );
}

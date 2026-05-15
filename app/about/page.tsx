export default function AboutPage() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; color: #111; }
        a { text-decoration: none; color: inherit; }
        .navbar { background: #fff; border-bottom: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 100; }
        .navbar-inner { max-width: 1280px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; height: 64px; }
        .logo-icon { position: relative; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-dot { width: 10px; height: 10px; border-radius: 50%; background: #cc0000; position: absolute; }
        .logo-ring1 { width: 22px; height: 22px; border-radius: 50%; border: 2px solid #cc0000; opacity: 0.7; position: absolute; }
        .logo-ring2 { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #cc0000; opacity: 0.3; position: absolute; }
        .logo-text-main { color: #111; font-size: 24px; font-weight: 900; letter-spacing: 3px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 8px; font-weight: 700; letter-spacing: 8px; }
        .hero { background: linear-gradient(135deg, #111 0%, #cc0000 100%); padding: 80px 16px; text-align: center; }
        .hero h1 { color: #fff; font-size: 42px; font-weight: 900; letter-spacing: 2px; margin-bottom: 16px; }
        .hero p { color: rgba(255,255,255,0.8); font-size: 18px; max-width: 600px; margin: 0 auto; line-height: 1.7; }
        .hero-bar { width: 60px; height: 4px; background: #fff; margin: 20px auto; border-radius: 2px; }
        .page-wrap { max-width: 1000px; margin: 48px auto; padding: 0 16px; }
        .section { background: #fff; border-radius: 12px; padding: 40px; margin-bottom: 28px; border: 1px solid #eee; }
        .section-tag { color: #cc0000; font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
        .section h2 { font-size: 26px; font-weight: 900; color: #111; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 2px solid #f0f0f0; }
        .section p { font-size: 15px; line-height: 1.9; color: #444; margin-bottom: 16px; }
        .section p:last-child { margin-bottom: 0; }
        .values-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin-top: 24px; }
        .value-card { background: #f9f9f9; border-radius: 10px; padding: 24px; border-left: 4px solid #cc0000; }
        .value-icon { font-size: 28px; margin-bottom: 12px; }
        .value-title { font-size: 15px; font-weight: 900; color: #111; margin-bottom: 8px; }
        .value-text { font-size: 13px; color: #666; line-height: 1.7; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px; margin-top: 24px; }
        .stat-card { background: #cc0000; border-radius: 10px; padding: 24px; text-align: center; }
        .stat-num { font-size: 32px; font-weight: 900; color: #fff; }
        .stat-label { font-size: 12px; color: rgba(255,255,255,0.8); margin-top: 4px; font-weight: 600; }
        .coverage-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-top: 20px; }
        .coverage-item { display: flex; align-items: center; gap: 10px; padding: 12px; background: #f9f9f9; border-radius: 8px; font-size: 13px; font-weight: 600; color: #333; }
        .coverage-dot { width: 8px; height: 8px; border-radius: 50%; background: #cc0000; flex-shrink: 0; }
        .ethics-list { list-style: none; margin-top: 16px; }
        .ethics-list li { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; color: #444; line-height: 1.7; }
        .ethics-list li:last-child { border-bottom: none; }
        .ethics-check { color: #cc0000; font-size: 18px; flex-shrink: 0; margin-top: 2px; }
        .advertise-box { background: linear-gradient(135deg, #111, #333); border-radius: 12px; padding: 40px; text-align: center; margin-bottom: 28px; }
        .advertise-box h2 { color: #fff; font-size: 24px; font-weight: 900; margin-bottom: 12px; }
        .advertise-box p { color: #aaa; font-size: 14px; margin-bottom: 24px; line-height: 1.7; }
        .advertise-btn { display: inline-block; background: #cc0000; color: #fff; padding: 14px 32px; border-radius: 6px; font-size: 14px; font-weight: 700; }
        .advertise-btn:hover { background: #aa0000; }
        .back-link { color: #cc0000; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 28px; }
        .footer { background: #111; padding: 28px 16px; margin-top: 48px; text-align: center; }
        .footer p { color: #555; font-size: 12px; }
        @media (max-width: 600px) {
          .hero h1 { font-size: 28px; }
          .section { padding: 24px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="logo-icon">
              <div className="logo-dot"></div>
              <div className="logo-ring1"></div>
              <div className="logo-ring2"></div>
            </div>
            <div>
              <div className="logo-text-main">BAIDOA</div>
              <div className="logo-text-sub">ONLINE</div>
            </div>
          </a>
        </div>
      </nav>

      <div className="hero">
        <h1>About Baidoa Online</h1>
        <div className="hero-bar"></div>
        <p>Somalia's most trusted bilingual news source — reporting the truth, serving the people, bridging communities across the world.</p>
      </div>

      <div className="page-wrap">
        <a href="/" className="back-link">← Home</a>

        <div className="section">
          <div className="section-tag">Who We Are</div>
          <h2>Independent. Trusted. Somali.</h2>
          <p>Baidoa Online is an independent digital news outlet based in Baidoa, the capital of South West State of Somalia. We are dedicated to delivering accurate, impartial, and timely news to Somali communities both at home and across the diaspora worldwide.</p>
          <p>Founded with a mission to fill the gap in credible, ground-level reporting from South West Somalia and the broader Horn of Africa, Baidoa Online has grown into a trusted voice for hundreds of thousands of readers across Somalia, East Africa, the Middle East, Europe, and North America.</p>
          <p>We are proudly non-partisan. We do not represent any political party, government, clan, or special interest. Our only allegiance is to the truth and to the people we serve.</p>
        </div>

        <div className="section">
          <div className="section-tag">Our Reach</div>
          <h2>Trusted by Readers Worldwide</h2>
          <div className="stats-grid">
            {[
              { num: "500K+", label: "Monthly Readers" },
              { num: "50+", label: "Countries Reached" },
              { num: "2", label: "Languages" },
              { num: "24/7", label: "News Coverage" },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-tag">Our Mission</div>
          <h2>Truth. Accuracy. Impact.</h2>
          <p>Our mission is simple — to keep the Somali people informed. In a media landscape often dominated by misinformation, propaganda, and political bias, Baidoa Online stands apart as a beacon of factual, independent journalism.</p>
          <p>We believe that access to accurate information is a fundamental right. Whether you are in Baidoa, Mogadishu, Minneapolis, London, or Dubai — you deserve news you can trust, in the language you understand.</p>
          <p>We are particularly committed to amplifying voices from South West State and the wider Rahanweyn community, whose stories have historically been underrepresented in Somali media. The Af-Maay dialect, the culture, and the history of this region are central to our identity and our coverage.</p>
        </div>

        <div className="section">
          <div className="section-tag">Our Coverage</div>
          <h2>From Baidoa to the World</h2>
          <p>We cover news at every level — local, national, and international — with a focus on stories that matter most to our readers.</p>
          <div className="coverage-list">
            {[
              "South West State", "Banadir (Mogadishu)", "Puntland", "Hirshabelle",
              "Jubaland", "Galmudug", "North East", "Somaliland",
              "Africa", "Middle East", "Europe", "Americas",
              "Politics & Governance", "Security & Conflict", "Business & Economy",
              "Sports", "Af-Maay Culture", "Opinion & Analysis"
            ].map(item => (
              <div key={item} className="coverage-item">
                <div className="coverage-dot"></div>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-tag">Our Values</div>
          <h2>What We Stand For</h2>
          <div className="values-grid">
            {[
              { icon: "🎯", title: "Accuracy First", text: "Every story we publish is verified before it goes live. We correct errors quickly and transparently." },
              { icon: "⚖️", title: "Non-Partisan", text: "We report on all political parties, governments, and clans equally. No favoritism. No agenda." },
              { icon: "🌍", title: "Community First", text: "We serve the Somali people — at home and in the diaspora. Your trust is our greatest asset." },
              { icon: "🗣️", title: "Bilingual", text: "We publish in both Somali and English so every reader can access our content." },
              { icon: "🔒", title: "Independence", text: "We are funded by our readers and advertisers — not governments, political parties, or clans." },
              { icon: "📍", title: "Local Roots", text: "We are proudly from Baidoa. Our reporters are on the ground across Somalia every day." },
            ].map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-text">{v.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section-tag">Code of Ethics</div>
          <h2>How We Work</h2>
          <ul className="ethics-list">
            {[
              "We verify all information with multiple sources before publishing.",
              "We clearly label opinion and analysis pieces separately from news reporting.",
              "We do not accept payment to publish or suppress any story.",
              "We protect the identity of sources who request confidentiality.",
              "We correct mistakes promptly and transparently.",
              "We do not publish content that incites violence, hatred, or discrimination.",
              "We treat all communities, regions, and political groups with equal fairness.",
              "We respect the privacy and dignity of individuals in our reporting.",
            ].map(item => (
              <li key={item}>
                <span className="ethics-check">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="advertise-box">
          <h2>📢 Advertise with Baidoa Online</h2>
          <p>Reach hundreds of thousands of Somali readers across the globe. Our audience spans Somalia, East Africa, the Middle East, Europe, and North America. Connect your brand with a trusted, engaged community.</p>
          <a href="/contact" className="advertise-btn">Get in Touch →</a>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Baidoa Online · info@baidoaonline.com · Baidoa, South West State, Somalia</p>
      </footer>
    </>
  )
}

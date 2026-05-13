"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const articles = [
    { id: 1, category: "Somalia", title: "Federal Government Announces New Infrastructure Plan for Baidoa Region", time: "2 hours ago", image: "https://placehold.co/400x250/cc0000/ffffff?text=Somalia" },
    { id: 2, category: "Africa", title: "African Union Summit Addresses Regional Security Challenges Across the Horn", time: "4 hours ago", image: "https://placehold.co/400x250/111111/ffffff?text=Africa" },
    { id: 3, category: "World", title: "International Aid Organizations Increase Support for Displaced Families", time: "5 hours ago", image: "https://placehold.co/400x250/cc0000/ffffff?text=World" },
    { id: 4, category: "Politics", title: "Parliamentary Debate Heats Up Over New Electoral Commission Appointments", time: "6 hours ago", image: "https://placehold.co/400x250/111111/ffffff?text=Politics" },
    { id: 5, category: "Sport", title: "Somali National Football Team Qualifies for CECAFA Championship Finals", time: "8 hours ago", image: "https://placehold.co/400x250/cc0000/ffffff?text=Sport" },
    { id: 6, category: "Business", title: "New Trade Agreement Opens Market Opportunities for Somali Exporters", time: "10 hours ago", image: "https://placehold.co/400x250/111111/ffffff?text=Business" },
  ];

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #fff; color: #111; }
        a { text-decoration: none; }

        .top-bar { background: #cc0000; padding: 6px 16px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 2px; }
        .top-bar span { color: #fff; font-size: 11px; }

        .navbar { background: #fff; border-bottom: 3px solid #cc0000; box-shadow: 0 2px 6px rgba(0,0,0,0.08); position: sticky; top: 0; z-index: 100; }
        .navbar-inner { max-width: 1200px; margin: 0 auto; padding: 0 16px; display: flex; justify-content: space-between; align-items: center; height: 64px; }
        .logo { display: flex; align-items: center; gap: 12px; }
        .logo-icon { position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-dot { width: 10px; height: 10px; border-radius: 50%; background: #cc0000; position: absolute; }
        .logo-ring1 { width: 22px; height: 22px; border-radius: 50%; border: 2.5px solid #cc0000; opacity: 0.7; position: absolute; }
        .logo-ring2 { width: 36px; height: 36px; border-radius: 50%; border: 2px solid #cc0000; opacity: 0.3; position: absolute; }
        .logo-text-main { color: #111; font-size: 22px; font-weight: 900; letter-spacing: 3px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 10px; font-weight: 600; letter-spacing: 7px; line-height: 1.4; }

        .desktop-nav { display: flex; gap: 24px; }
        .desktop-nav a { color: #111; font-size: 14px; font-weight: 600; }
        .desktop-nav a:hover { color: #cc0000; }

        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; flex-direction: column; gap: 5px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #111; border-radius: 2px; }

        .mobile-menu { display: none; background: #fff; border-top: 1px solid #eee; padding: 8px 16px 16px; }
        .mobile-menu.open { display: block; }
        .mobile-menu a { display: block; color: #111; font-size: 15px; font-weight: 600; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
        .mobile-search { margin-top: 12px; display: flex; align-items: center; background: #f5f5f5; border-radius: 4px; padding: 8px 12px; gap: 8px; }
        .mobile-search input { background: transparent; border: none; outline: none; color: #111; font-size: 14px; width: 100%; }

        .breaking { background: #f5f5f5; border-bottom: 2px solid #cc0000; padding: 8px 16px; display: flex; align-items: flex-start; gap: 10px; }
        .breaking-label { background: #cc0000; color: #fff; padding: 2px 8px; font-size: 11px; font-weight: bold; border-radius: 2px; white-space: nowrap; margin-top: 2px; }
        .breaking-text { font-size: 12px; color: #333; line-height: 1.5; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }

        .hero { padding: 24px 16px; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 24px; }
        .hero-image { width: 100%; border-radius: 4px; display: block; }
        .hero-category { background: #cc0000; color: #fff; padding: 3px 10px; font-size: 11px; font-weight: bold; border-radius: 2px; display: inline-block; margin-top: 14px; }
        .hero-title { font-size: 22px; font-weight: bold; line-height: 1.3; margin-top: 10px; color: #111; }
        .hero-desc { color: #555; font-size: 14px; margin-top: 8px; line-height: 1.6; }
        .hero-meta { color: #999; font-size: 12px; margin-top: 6px; display: block; }

        .side-articles { display: flex; flex-direction: column; gap: 16px; }
        .side-article { display: flex; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid #eee; cursor: pointer; }
        .side-article img { width: 90px; height: 65px; object-fit: cover; border-radius: 3px; flex-shrink: 0; }
        .side-article-cat { color: #cc0000; font-size: 11px; font-weight: bold; }
        .side-article-title { font-size: 13px; font-weight: 600; line-height: 1.4; margin-top: 3px; color: #111; }
        .side-article-time { color: #999; font-size: 11px; }

        .section-label { background: #cc0000; padding: 10px 16px; }
        .section-label h2 { max-width: 1200px; margin: 0 auto; color: #fff; font-size: 14px; font-weight: bold; letter-spacing: 1px; }

        .article-grid { max-width: 1200px; margin: 24px auto; padding: 0 16px; display: grid; grid-template-columns: 1fr; gap: 24px; }
        .article-card { cursor: pointer; border-bottom: 2px solid #eee; padding-bottom: 16px; }
        .article-card img { width: 100%; height: 200px; object-fit: cover; border-radius: 3px; }
        .article-cat { color: #cc0000; font-size: 11px; font-weight: bold; letter-spacing: 0.5px; display: block; margin-top: 10px; }
        .article-title { font-size: 16px; font-weight: bold; line-height: 1.4; margin-top: 6px; color: #111; }
        .article-time { color: #999; font-size: 12px; margin-top: 6px; display: block; }

        .footer { background: #111; padding: 32px 16px; margin-top: 32px; }
        .footer-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .footer-logo-text-main { color: #fff; font-size: 16px; font-weight: 900; letter-spacing: 2px; line-height: 1; }
        .footer-logo-text-sub { color: #cc0000; font-size: 9px; letter-spacing: 5px; }
        .footer-desc { color: #aaa; font-size: 12px; line-height: 1.6; margin-top: 8px; }
        .footer-col h4 { color: #cc0000; font-size: 12px; font-weight: bold; letter-spacing: 1px; margin-bottom: 12px; }
        .footer-col a { display: block; color: #aaa; font-size: 12px; margin-bottom: 8px; }
        .footer-col a:hover { color: #fff; }
        .footer-bottom { max-width: 1200px; margin: 24px auto 0; padding-top: 16px; border-top: 1px solid #333; text-align: center; }
        .footer-bottom p { color: #666; font-size: 11px; }

        @media (min-width: 768px) {
          .hamburger { display: none !important; }
          .desktop-nav { display: flex !important; }
          .hero { grid-template-columns: 2fr 1fr; }
          .hero-title { font-size: 28px; }
          .article-grid { grid-template-columns: repeat(3, 1fr); }
          .footer-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#fff" }}>

        {/* Top bar */}
        <div className="top-bar">
          <span>📍 Baidoa, Somalia — May 13, 2026</span>
          <span>X · Facebook · YouTube</span>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-inner">
            <div className="logo">
              <div className="logo-icon">
                <div className="logo-dot"></div>
                <div className="logo-ring1"></div>
                <div className="logo-ring2"></div>
              </div>
              <div>
                <div className="logo-text-main">BAIDOA</div>
                <div className="logo-text-sub">ONLINE</div>
              </div>
            </div>

            <div className="desktop-nav">
              {["Somalia", "Africa", "World", "Politics", "Sport", "Business"].map(cat => (
                <a key={cat} href="#">{cat}</a>
              ))}
            </div>

            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>

          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            {["Somalia", "Africa", "World", "Politics", "Sport", "Business"].map(cat => (
              <a key={cat} href="#" onClick={() => setMenuOpen(false)}>{cat}</a>
            ))}
            <div className="mobile-search">
              <span>🔍</span>
              <input placeholder="Search news..." />
            </div>
          </div>
        </nav>

        {/* Breaking */}
        <div className="breaking">
          <span className="breaking-label">BREAKING</span>
          <span className="breaking-text">Federal forces report major advances in southwest Somalia · AU extends peacekeeping mission · Baidoa airport to receive international flights by Q3 2026</span>
        </div>

        {/* Hero */}
        <div className="hero">
          <div>
            <img className="hero-image" src="https://placehold.co/800x450/cc0000/ffffff?text=Top+Story" alt="Top Story" />
            <span className="hero-category">SOMALIA</span>
            <h1 className="hero-title">Historic Peace Talks Begin in Baidoa as Regional Leaders Gather for Three-Day Summit</h1>
            <p className="hero-desc">Senior officials from across the region convened in Baidoa today to discuss a comprehensive framework for lasting peace and regional stability in Southwest Somalia.</p>
            <span className="hero-meta">1 hour ago · By Baidoa Online Staff</span>
          </div>

          <div className="side-articles">
            {articles.slice(0, 3).map(article => (
              <div key={article.id} className="side-article">
                <img src={article.image} alt={article.title} />
                <div>
                  <div className="side-article-cat">{article.category}</div>
                  <div className="side-article-title">{article.title}</div>
                  <div className="side-article-time">{article.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest news */}
        <div className="section-label">
          <h2>LATEST NEWS</h2>
        </div>

        {/* Article grid */}
        <div className="article-grid">
          {articles.map(article => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} />
              <span className="article-cat">{article.category}</span>
              <div className="article-title">{article.title}</div>
              <span className="article-time">{article.time}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{ position: "relative", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#cc0000", position: "absolute" }}></div>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", border: "1.5px solid #cc0000", opacity: 0.7, position: "absolute" }}></div>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "1px solid #cc0000", opacity: 0.35, position: "absolute" }}></div>
                </div>
                <div>
                  <div className="footer-logo-text-main">BAIDOA</div>
                  <div className="footer-logo-text-sub">ONLINE</div>
                </div>
              </div>
              <p className="footer-desc">Somalia&apos;s trusted source for breaking news and in-depth reporting.</p>
            </div>
            {[
              { title: "Sections", links: ["Somalia", "Africa", "World", "Politics"] },
              { title: "More", links: ["Sport", "Business", "Opinion", "About Us"] },
              { title: "Follow Us", links: ["X (Twitter)", "Facebook", "YouTube", "Contact"] },
            ].map(col => (
              <div key={col.title} className="footer-col">
                <h4>{col.title.toUpperCase()}</h4>
                {col.links.map(link => <a key={link} href="#">{link}</a>)}
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2026 Baidoa Online. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}
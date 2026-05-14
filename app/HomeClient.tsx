"use client";
import { useState } from "react";
import { urlFor } from "@/lib/sanity";

export default function HomeClient({ posts }: { posts: any[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"so" | "en">("so");

  const nav = ["Home", "Wararka", "Adduunka", "Siyaasadda", "Ciyaaraha", "Muuqaallo", "Articles", "English", "Naga Soo Xiriir"];

  const breakingText = {
    so: "Ciidamada Federaalka oo horumar weyn ka sameeyay koonfurta Soomaaliya · Shirka Xalane oo ku soo idlaaday ballan cusub · Garoonka Baydhabo oo helaya dulimaadyo caalamiya",
    en: "Federal forces report major advances in southwest Somalia · Xalane talks conclude with new meeting scheduled · Baidoa airport to receive international flights by Q3 2026",
  };

  const hero = posts[0];
  const sideArticles = posts.slice(1, 5);
  const gridArticles = posts.slice(1);

  function getImage(post: any) {
    if (post?.mainImage) return urlFor(post.mainImage).width(600).url();
    return "https://placehold.co/400x250/cc0000/ffffff?text=Baidoa+Online";
  }

  function timeAgo(dateStr: string) {
    if (!dateStr) return "";
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 60000);
    if (diff < 60) return lang === "so" ? `${diff} daqiiqo ka hor` : `${diff} min ago`;
    const h = Math.floor(diff / 60);
    if (h < 24) return lang === "so" ? `${h} saacadood ka hor` : `${h} hours ago`;
    const d = Math.floor(h / 24);
    return lang === "so" ? `${d} maalmood ka hor` : `${d} days ago`;
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f7f7f7; color: #111; }
        a { text-decoration: none; color: inherit; }
        .topbar { background: #f0f0f0; border-bottom: 1px solid #ddd; padding: 5px 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 4px; }
        .topbar-date { color: #555; font-size: 12px; }
        .topbar-social { display: flex; gap: 12px; }
        .topbar-social a { color: #555; font-size: 12px; font-weight: 600; }
        .topbar-social a:hover { color: #cc0000; }
        .lang-toggle { display: flex; border: 1px solid #ccc; border-radius: 20px; overflow: hidden; }
        .lang-btn { padding: 4px 12px; font-size: 11px; font-weight: 700; cursor: pointer; border: none; }
        .lang-btn.active { background: #cc0000; color: #fff; }
        .lang-btn.inactive { background: transparent; color: #555; }
        .navbar { background: #fff; border-bottom: 1px solid #e0e0e0; box-shadow: 0 1px 4px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 100; }
        .navbar-inner { max-width: 1200px; margin: 0 auto; padding: 0 16px; display: flex; justify-content: space-between; align-items: center; }
        .logo-wrap { display: flex; align-items: center; gap: 12px; padding: 12px 0; }
        .logo-icon { position: relative; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-dot { width: 9px; height: 9px; border-radius: 50%; background: #cc0000; position: absolute; }
        .logo-ring1 { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #cc0000; opacity: 0.7; position: absolute; }
        .logo-ring2 { width: 33px; height: 33px; border-radius: 50%; border: 1.5px solid #cc0000; opacity: 0.3; position: absolute; }
        .logo-text-main { color: #111; font-size: 22px; font-weight: 900; letter-spacing: 2px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 9px; font-weight: 700; letter-spacing: 7px; line-height: 1.5; }
        .desktop-nav { display: flex; }
        .desktop-nav a { color: #333; font-size: 12px; font-weight: 600; padding: 18px 9px; display: block; border-bottom: 3px solid transparent; white-space: nowrap; }
        .desktop-nav a:hover { color: #cc0000; border-bottom: 3px solid #cc0000; }
        .nav-search { display: flex; align-items: center; background: #f5f5f5; border: 1px solid #e0e0e0; border-radius: 20px; padding: 6px 14px; gap: 6px; }
        .nav-search input { background: transparent; border: none; outline: none; color: #333; font-size: 12px; width: 110px; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; flex-direction: column; gap: 5px; }
        .hamburger span { display: block; width: 22px; height: 2px; background: #333; border-radius: 2px; }
        .mobile-menu { display: none; background: #fff; border-top: 1px solid #eee; }
        .mobile-menu.open { display: block; }
        .mobile-menu a { display: block; color: #333; font-size: 15px; font-weight: 600; padding: 12px 16px; border-bottom: 1px solid #f5f5f5; }
        .mobile-search { margin: 12px 16px 16px; display: flex; align-items: center; background: #f5f5f5; border-radius: 20px; padding: 8px 14px; gap: 8px; }
        .mobile-search input { background: transparent; border: none; outline: none; font-size: 14px; width: 100%; }
        .breaking { background: #fff; border-top: 3px solid #cc0000; border-bottom: 1px solid #eee; padding: 8px 16px; display: flex; align-items: center; gap: 12px; overflow: hidden; }
        .breaking-label { background: #cc0000; color: #fff; padding: 3px 12px; font-size: 11px; font-weight: 900; border-radius: 3px; white-space: nowrap; letter-spacing: 1px; flex-shrink: 0; }
        .breaking-text { font-size: 13px; color: #222; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .page-wrap { max-width: 1200px; margin: 20px auto; padding: 0 16px; }
        .hero-section { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 24px; }
        .hero-main { position: relative; border-radius: 8px; overflow: hidden; cursor: pointer; display: block; }
        .hero-main img { width: 100%; height: 460px; object-fit: cover; display: block; }
        .hero-breaking-badge { position: absolute; top: 16px; left: 16px; background: #cc0000; color: #fff; padding: 6px 16px; font-size: 13px; font-weight: 900; border-radius: 4px; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.3); }
        .blink-dot { width: 8px; height: 8px; background: #fff; border-radius: 50%; animation: blink 1s infinite; flex-shrink: 0; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .hero-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 24px; background: linear-gradient(transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.92) 100%); }
        .hero-cat { background: #cc0000; color: #fff; padding: 3px 10px; font-size: 11px; font-weight: 900; border-radius: 3px; display: inline-block; margin-bottom: 10px; letter-spacing: 1px; }
        .hero-title { color: #fff; font-size: 26px; font-weight: 900; line-height: 1.3; margin-bottom: 8px; }
        .hero-desc { color: rgba(255,255,255,0.88); font-size: 14px; line-height: 1.6; margin-bottom: 8px; }
        .hero-meta { color: rgba(255,255,255,0.6); font-size: 12px; }
        .hero-side { display: flex; flex-direction: column; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #eee; }
        .hero-side-item { display: flex; gap: 12px; padding: 14px; border-bottom: 1px solid #f0f0f0; cursor: pointer; transition: background 0.15s; }
        .hero-side-item:last-child { border-bottom: none; }
        .hero-side-item:hover { background: #fafafa; }
        .hero-side-item img { width: 85px; height: 62px; object-fit: cover; border-radius: 4px; flex-shrink: 0; }
        .side-cat { color: #cc0000; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; }
        .side-title { font-size: 13px; font-weight: 700; line-height: 1.4; margin-top: 3px; color: #111; }
        .side-time { color: #999; font-size: 11px; margin-top: 3px; }
        .content-sidebar { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .news-section { background: #fff; border-radius: 8px; padding: 20px; border: 1px solid #eee; }
        .section-hdr { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #f0f0f0; }
        .section-hdr-bar { width: 4px; height: 20px; background: #cc0000; border-radius: 2px; flex-shrink: 0; }
        .section-hdr h2 { font-size: 15px; font-weight: 900; color: #111; letter-spacing: 0.5px; }
        .article-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
        .article-card { cursor: pointer; display: block; text-decoration: none; color: inherit; }
        .article-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 4px; display: block; }
        .article-card:hover img { opacity: 0.88; }
        .article-card:hover .a-title { color: #cc0000; }
        .a-cat { color: #cc0000; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; display: block; margin-top: 10px; text-transform: uppercase; }
        .a-title { font-size: 14px; font-weight: 700; line-height: 1.4; margin-top: 5px; color: #111; transition: color 0.15s; }
        .a-time { color: #999; font-size: 11px; margin-top: 5px; display: block; }
        .sidebar { display: flex; flex-direction: column; gap: 16px; }
        .sb-box { background: #fff; border-radius: 8px; border: 1px solid #eee; overflow: hidden; }
        .sb-hdr { font-size: 12px; font-weight: 900; color: #111; background: #f8f8f8; padding: 10px 14px; letter-spacing: 1px; border-bottom: 2px solid #cc0000; }
        .sb-body { padding: 0 14px; }
        .social-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f5f5f5; }
        .social-row:last-child { border-bottom: none; }
        .s-icon { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; color: #fff; flex-shrink: 0; }
        .s-info { flex: 1; }
        .s-name { font-size: 13px; font-weight: 700; color: #111; }
        .s-count { font-size: 11px; color: #888; }
        .s-btn { background: #f0f0f0; color: #333; padding: 5px 12px; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; border: 1px solid #ddd; white-space: nowrap; }
        .s-btn:hover { background: #cc0000; color: #fff; border-color: #cc0000; }
        .trend-item { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f5f5f5; cursor: pointer; text-decoration: none; color: inherit; }
        .trend-item:last-child { border-bottom: none; }
        .trend-num { font-size: 22px; font-weight: 900; color: #e8e8e8; min-width: 28px; line-height: 1.1; }
        .trend-title { font-size: 13px; font-weight: 600; color: #111; line-height: 1.4; }
        .trend-title:hover { color: #cc0000; }
        .trend-time { font-size: 11px; color: #aaa; margin-top: 3px; }
        .must-item { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f5f5f5; cursor: pointer; align-items: center; text-decoration: none; color: inherit; }
        .must-item:last-child { border-bottom: none; }
        .must-item img { width: 70px; height: 52px; object-fit: cover; border-radius: 4px; flex-shrink: 0; }
        .must-title { font-size: 13px; font-weight: 600; color: #111; line-height: 1.4; }
        .must-title:hover { color: #cc0000; }
        .footer { background: #1a1a1a; padding: 36px 16px 20px; margin-top: 32px; }
        .footer-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 28px; }
        .f-logo-main { color: #fff; font-size: 18px; font-weight: 900; letter-spacing: 2px; }
        .f-logo-sub { color: #cc0000; font-size: 9px; letter-spacing: 5px; margin-bottom: 10px; }
        .f-desc { color: #888; font-size: 12px; line-height: 1.7; }
        .f-col h4 { color: #fff; font-size: 12px; font-weight: 900; letter-spacing: 1px; margin-bottom: 14px; text-transform: uppercase; border-bottom: 1px solid #333; padding-bottom: 8px; }
        .f-col a { display: block; color: #888; font-size: 12px; margin-bottom: 9px; }
        .f-col a:hover { color: #cc0000; }
        .footer-bottom { max-width: 1200px; margin: 24px auto 0; padding-top: 16px; border-top: 1px solid #2a2a2a; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .footer-bottom p { color: #555; font-size: 11px; }
        @media (min-width: 900px) {
          .hamburger { display: none !important; }
          .desktop-nav { display: flex !important; }
          .hero-section { grid-template-columns: 2fr 1fr; }
          .content-sidebar { grid-template-columns: 2fr 1fr; }
          .hero-main img { height: 500px; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .nav-search { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-main img { height: 260px; }
          .hero-title { font-size: 18px !important; }
          .hero-desc { display: none; }
          .topbar-date { display: none; }
        }
      `}</style>

      <div style={{ minHeight: "100vh" }}>
        {/* TOP BAR */}
        <div className="topbar">
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span className="topbar-date">📅 {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
            <div className="topbar-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://x.com/BaidoaOnline" target="_blank" rel="noreferrer">X</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
          <div className="lang-toggle">
            <button className={`lang-btn ${lang === "so" ? "active" : "inactive"}`} onClick={() => setLang("so")}>🇸🇴 SO</button>
            <button className={`lang-btn ${lang === "en" ? "active" : "inactive"}`} onClick={() => setLang("en")}>🇬🇧 EN</button>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-inner">
            <a href="/" className="logo-wrap">
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
            <div className="desktop-nav">
              {nav.map(item => <a key={item} href="#">{item}</a>)}
            </div>
            <div className="nav-search">
              <span style={{ color: "#999" }}>🔍</span>
              <input placeholder={lang === "so" ? "Raadi wararka..." : "Search news..."} />
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            {nav.map(item => <a key={item} href="#" onClick={() => setMenuOpen(false)}>{item}</a>)}
            <div className="mobile-search">
              <span>��</span>
              <input placeholder={lang === "so" ? "Raadi wararka..." : "Search news..."} />
            </div>
          </div>
        </nav>

        {/* BREAKING */}
        <div className="breaking">
          <span className="breaking-label">{lang === "so" ? "WAR DEGDEG AH" : "BREAKING"}</span>
          <span className="breaking-text">{breakingText[lang]}</span>
        </div>

        <div className="page-wrap">
          {/* HERO */}
          {hero && (
            <div className="hero-section">
              <a href={`/news/${hero.slug?.current}`} className="hero-main">
                <img
                  src={getImage(hero)}
                  alt={lang === "en" {hero.title}{hero.title} hero.titleEn ? hero.titleEn : hero.title}
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/900x500/cc0000/ffffff?text=Baidoa+Online"; }}
                />
                <div className="hero-overlay">
                  <h1 className="hero-title">{lang === "en" {hero.title}{hero.title} hero.titleEn ? hero.titleEn : hero.title}</h1>
                  <span className="hero-meta">{timeAgo(hero.publishedAt)} · Baidoa Online</span>
                </div>
              </a>

              <div className="hero-side">
                {sideArticles.map((a: any) => (
                  <a key={a._id} className="hero-side-item" href={`/news/${a.slug?.current}`}>
                    <img src={getImage(a)} alt=""
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x150/333/fff?text=News"; }} />
                    <div>
                      <div className="side-cat">{a.category || "News"}</div>
                      <div className="side-title">{lang === "en" {a.title}{a.title} a.titleEn ? a.titleEn : a.title}</div>
                      <div className="side-time">{timeAgo(a.publishedAt)}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* CONTENT + SIDEBAR */}
          <div className="content-sidebar">
            <div className="news-section">
              <div className="section-hdr">
                <div className="section-hdr-bar"></div>
                <h2>{lang === "so" ? "WARARKA UGU DAMBEEYAY" : "LATEST NEWS"}</h2>
              </div>
              <div className="article-grid">
                {gridArticles.map((a: any) => (
                  <a key={a._id} className="article-card" href={`/news/${a.slug?.current}`}>
                    <img src={getImage(a)} alt=""
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x250/cc0000/fff?text=News"; }} />
                    <span className="a-cat">{a.category || "News"}</span>
                    <div className="a-title">{lang === "en" {a.title}{a.title} a.titleEn ? a.titleEn : a.title}</div>
                    <span className="a-time">{timeAgo(a.publishedAt)}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="sidebar">
              <div className="sb-box">
                <div className="sb-hdr">STAY CONNECTED</div>
                <div className="sb-body">
                  {[
                    { name: "Facebook", count: "12,400 Fans", color: "#1877f2", icon: "f", link: "https://facebook.com" },
                    { name: "X (Twitter)", count: "13,200 Followers", color: "#000", icon: "𝕏", link: "https://x.com/BaidoaOnline" },
                    { name: "YouTube", count: "8,500 Subs", color: "#ff0000", icon: "▶", link: "https://youtube.com" },
                  ].map(s => (
                    <div key={s.name} className="social-row">
                      <div className="s-icon" style={{ background: s.color }}>{s.icon}</div>
                      <div className="s-info">
                        <div className="s-name">{s.name}</div>
                        <div className="s-count">{s.count}</div>
                      </div>
                      <a href={s.link} target="_blank" rel="noreferrer">
                        <button className="s-btn">FOLLOW</button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sb-box">
                <div className="sb-hdr">TRENDING NOW</div>
                <div className="sb-body">
                  {posts.slice(0, 4).map((a: any, i: number) => (
                    <a key={a._id} className="trend-item" href={`/news/${a.slug?.current}`}>
                      <div className="trend-num">0{i + 1}</div>
                      <div>
                        <div className="trend-title">{lang === "en" {a.title}{a.title} a.titleEn ? a.titleEn : a.title}</div>
                        <div className="trend-time">{timeAgo(a.publishedAt)}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="sb-box">
                <div className="sb-hdr">MUST READ</div>
                <div className="sb-body">
                  {posts.slice(0, 3).map((a: any) => (
                    <a key={a._id} className="must-item" href={`/news/${a.slug?.current}`}>
                      <img src={getImage(a)} alt=""
                        onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x150/333/fff?text=News"; }} />
                      <div className="must-title">{lang === "en" {a.title}{a.title} a.titleEn ? a.titleEn : a.title}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <div style={{ position: "relative", width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#cc0000", position: "absolute" }}></div>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", border: "1.5px solid #cc0000", opacity: 0.7, position: "absolute" }}></div>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", border: "1px solid #cc0000", opacity: 0.35, position: "absolute" }}></div>
                </div>
                <div>
                  <div className="f-logo-main">BAIDOA</div>
                  <div className="f-logo-sub">ONLINE</div>
                </div>
              </div>
              <p className="f-desc">{lang === "so" ? "Ilo wareedka ugu la-aamin badan ee Soomaaliya." : "Somalia's most trusted news source."}</p>
              <p style={{ color: "#666", fontSize: "12px", marginTop: "8px" }}>�� info@baidoaonline.com</p>
            </div>
            {[
              { title: "Sections", links: lang === "so" ? ["Soomaaliya", "Afrika", "Adduunka", "Siyaasadda"] : ["Somalia", "Africa", "World", "Politics"] },
              { title: "More", links: lang === "so" ? ["Ciyaaraha", "Ganacsiga", "Maqaallo", "Naga Waydii"] : ["Sport", "Business", "Articles", "About Us"] },
              { title: "Contact", links: ["info@baidoaonline.com", "X (Twitter)", "Facebook", "YouTube"] },
            ].map(col => (
              <div key={col.title} className="f-col">
                <h4>{col.title}</h4>
                {col.links.map(link => <a key={link} href="#">{link}</a>)}
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2026 Baidoa Online. {lang === "so" ? "Xuquuqda oo dhan way ilaalisan yihiin." : "All rights reserved."}</p>
            <p>Baidoa, Somalia · info@baidoaonline.com</p>
          </div>
        </footer>
      </div>
    </>
  );
}

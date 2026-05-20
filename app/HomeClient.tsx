"use client";
import { useState, useRef, useEffect } from "react";
import { urlFor } from "@/lib/sanity";

export default function HomeClient({ posts }: { posts: any[] }) {
  const [lang, setLang] = useState<"so" | "en">("so");
  const [menuOpen, setMenuOpen] = useState(false);
  const [somaliaOpen, setSomaliaOpen] = useState(false);
  const [worldOpen, setWorldOpen] = useState(false);

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
    if (diff < 60) return `${diff} min ago`;
    const h = Math.floor(diff / 60);
    if (h < 24) return `${h} hours ago`;
    return `${Math.floor(h / 24)} days ago`;
  }

  function getTitle(post: any) {
    return lang === "en" && post.titleEn ? post.titleEn : post.title;
  }

  const breakingItems = posts.filter((p: any) => p.isBreaking);
  const breakingTicker = breakingItems.length > 0
    ? breakingItems.map((p: any) => getTitle(p)).join(" · ")
    : posts.slice(0, 5).map((p: any) => getTitle(p)).join(" · ");

  const somaliaStates = [
    { label: "Banadir (Mogadishu)", href: "/category/banadir" },
    { label: "South West", href: "/category/south-west" },
    { label: "Puntland", href: "/category/puntland" },
    { label: "Hirshabelle", href: "/category/hirshabelle" },
    { label: "Jubaland", href: "/category/jubaland" },
    { label: "Galmudug", href: "/category/galmudug" },
    { label: "North East", href: "/category/north-east" },
    { label: "Somaliland", href: "/category/somaliland" },
  ];

  const worldRegions = [
    { label: "Africa", href: "/category/africa" },
    { label: "Middle East", href: "/category/middle-east" },
    { label: "Europe", href: "/category/europe" },
    { label: "Americas", href: "/category/americas" },
    { label: "Asia Pacific", href: "/category/asia-pacific" },
  ];

  const navLinks = [
    { label: lang === "so" ? "Hoyga" : "Home", href: "/" },
    { label: "Sports", href: "/category/ciyaaraha" },
    { label: "Business", href: "/category/ganacsiga" },
    { label: "Videos", href: "/category/muuqaallo" },
    { label: "Af-Maay", href: "/category/af-maay" },
    { label: "Opinion", href: "/category/opinion" },
    { label: lang === "so" ? "Xiriir" : "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; color: #111; }
        a { text-decoration: none; color: inherit; }

        /* TOP BAR */
        .topbar { background: #111; padding: 6px 16px; display: flex; justify-content: space-between; align-items: center; }
        .topbar-date { color: #aaa; font-size: 11px; }
        .topbar-social { display: flex; gap: 14px; }
        .topbar-social a { color: #aaa; font-size: 11px; font-weight: 600; transition: color 0.2s; }
        .topbar-social a:hover { color: #cc0000; }

        /* NAVBAR */
        .navbar { background: #fff; border-bottom: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 1000; }
        .navbar-top { max-width: 1280px; margin: 0 auto; padding: 0 16px; display: flex; justify-content: space-between; align-items: center; height: 64px; }
        .logo-wrap { display: flex; align-items: center; gap: 10px; }
        .logo-text { display: flex; flex-direction: column; }
        .logo-text-main { color: #111; font-size: 24px; font-weight: 900; letter-spacing: 3px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 8px; font-weight: 700; letter-spacing: 8px; }
        .navbar-right { display: flex; align-items: center; gap: 12px; }
        .search-box { display: flex; align-items: center; background: #f5f5f5; border: 1px solid #e0e0e0; border-radius: 24px; padding: 7px 16px; gap: 8px; }
        .search-box input { background: transparent; border: none; outline: none; font-size: 12px; width: 130px; color: #333; }
        .lang-btns { display: flex; border: 1px solid #ddd; border-radius: 6px; overflow: hidden; }
        .lang-btn { padding: 7px 16px; font-size: 12px; font-weight: 700; cursor: pointer; border: none; background: transparent; color: #555; transition: all 0.2s; }
        .lang-btn.active { background: #111; color: #fff; }
        .lang-btn:hover:not(.active) { background: #f5f5f5; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; flex-direction: column; gap: 5px; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #333; border-radius: 2px; transition: all 0.3s; }

        /* NAV LINKS */
        .navbar-links { background: #cc0000; }
        .navbar-links-inner { max-width: 1280px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; gap: 0; }
        .nav-item { position: relative; }
        .nav-link { display: flex; align-items: center; gap: 4px; color: #fff; font-size: 13px; font-weight: 600; padding: 12px 14px; white-space: nowrap; cursor: pointer; transition: background 0.2s; border: none; background: transparent; }
        .nav-link:hover { background: rgba(255,255,255,0.15); }
        .nav-link.active { background: rgba(255,255,255,0.2); }
        .nav-arrow { font-size: 9px; opacity: 0.8; }

        /* DROPDOWN */
        .dropdown { position: absolute; top: 100%; left: 0; background: #fff; border: 1px solid #e0e0e0; border-top: 3px solid #cc0000; box-shadow: 0 8px 24px rgba(0,0,0,0.12); min-width: 180px; z-index: 1001; border-radius: 0 0 8px 8px; }
        .dropdown a { display: block; padding: 12px 18px; font-size: 13px; color: #333; font-weight: 500; border-bottom: 1px solid #f5f5f5; transition: all 0.15s; }
        .dropdown a:last-child { border-bottom: none; }
        .dropdown a:hover { background: #f9f9f9; color: #cc0000; padding-left: 22px; }

        /* BREAKING TICKER */
        .breaking { background: #fff; border-bottom: 1px solid #eee; padding: 8px 16px; display: flex; align-items: center; gap: 14px; overflow: hidden; }
        .breaking-label { background: #cc0000; color: #fff; padding: 4px 14px; font-size: 11px; font-weight: 900; border-radius: 3px; white-space: nowrap; letter-spacing: 1.5px; flex-shrink: 0; }
        .breaking-text { font-size: 13px; color: #222; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        /* MOBILE MENU */
        .mobile-menu { display: none; background: #fff; border-top: 1px solid #eee; }
        .mobile-menu.open { display: block; }
        .mobile-menu a { display: block; color: #333; font-size: 14px; font-weight: 600; padding: 13px 16px; border-bottom: 1px solid #f5f5f5; }
        .mobile-menu a:hover { color: #cc0000; background: #fafafa; }
        .mobile-section { padding: 8px 16px; background: #f9f9f9; font-size: 11px; font-weight: 900; color: #cc0000; letter-spacing: 1px; text-transform: uppercase; }

        /* PAGE WRAP */
        .page-wrap { max-width: 1280px; margin: 24px auto; padding: 0 16px; }

        /* HERO */
        .hero-section { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 28px; }
        .hero-main { position: relative; border-radius: 12px; overflow: hidden; display: block; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .hero-main img { width: 100%; height: 480px; object-fit: cover; display: block; transition: transform 0.3s; }
        .hero-main:hover img { transform: scale(1.02); }
        .hero-breaking-badge { position: absolute; top: 18px; left: 18px; background: #cc0000; color: #fff; padding: 6px 16px; font-size: 12px; font-weight: 900; border-radius: 4px; letter-spacing: 1.5px; display: flex; align-items: center; gap: 8px; box-shadow: 0 2px 12px rgba(204,0,0,0.4); }
        .blink-dot { width: 8px; height: 8px; background: #fff; border-radius: 50%; animation: blink 1s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .hero-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px 28px; background: linear-gradient(transparent, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.95)); }
        .hero-cat { background: #cc0000; color: #fff; padding: 4px 12px; font-size: 11px; font-weight: 900; border-radius: 3px; display: inline-block; margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase; }
        .hero-title { color: #fff; font-size: 28px; font-weight: 900; line-height: 1.3; margin-bottom: 10px; }
        .hero-meta { color: rgba(255,255,255,0.65); font-size: 12px; display: flex; align-items: center; gap: 8px; }

        /* HERO SIDE */
        .hero-side { display: flex; flex-direction: column; gap: 3px; }
        .hero-side-item { display: flex; gap: 12px; padding: 14px; background: #fff; cursor: pointer; transition: all 0.15s; border-radius: 8px; border: 1px solid #eee; }
        .hero-side-item:hover { background: #fafafa; border-color: #cc0000; }
        .hero-side-item img { width: 88px; height: 66px; object-fit: cover; border-radius: 6px; flex-shrink: 0; }
        .side-cat { color: #cc0000; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .side-title { font-size: 13px; font-weight: 700; line-height: 1.4; margin-top: 4px; color: #111; }
        .side-time { color: #999; font-size: 11px; margin-top: 4px; }

        /* CONTENT */
        .content-sidebar { display: grid; grid-template-columns: 1fr; gap: 24px; }
        .news-section { background: #fff; border-radius: 12px; padding: 24px; border: 1px solid #eee; }
        .section-hdr { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 2px solid #f0f0f0; }
        .section-hdr-bar { width: 4px; height: 22px; background: #cc0000; border-radius: 2px; }
        .section-hdr h2 { font-size: 16px; font-weight: 900; color: #111; letter-spacing: 0.5px; text-transform: uppercase; }
        .article-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 20px; }
        .article-card { cursor: pointer; display: block; background: #fff; border: 1px solid #eee; border-radius: 8px; overflow: hidden; transition: all 0.2s; }
        .article-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .article-card img { width: 100%; height: 165px; object-fit: cover; display: block; }
        .article-card-body { padding: 12px; }
        .a-cat { color: #cc0000; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .a-title { font-size: 14px; font-weight: 700; line-height: 1.4; margin-top: 6px; color: #111; transition: color 0.15s; }
        .article-card:hover .a-title { color: #cc0000; }
        .a-time { color: #999; font-size: 11px; margin-top: 6px; display: block; }

        /* SIDEBAR */
        .sidebar { display: flex; flex-direction: column; gap: 20px; }
        .sb-box { background: #fff; border-radius: 12px; border: 1px solid #eee; overflow: hidden; }
        .sb-hdr { font-size: 12px; font-weight: 900; color: #111; background: #f8f8f8; padding: 12px 16px; letter-spacing: 1.5px; border-bottom: 3px solid #cc0000; text-transform: uppercase; }
        .sb-body { padding: 0 16px; }
        .social-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f5f5f5; }
        .social-row:last-child { border-bottom: none; }
        .s-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; color: #fff; flex-shrink: 0; }
        .s-info { flex: 1; }
        .s-name { font-size: 13px; font-weight: 700; color: #111; }
        .s-count { font-size: 11px; color: #888; }
        .s-btn { background: #f0f0f0; color: #333; padding: 5px 14px; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; border: 1px solid #ddd; }
        .s-btn:hover { background: #cc0000; color: #fff; border-color: #cc0000; }
        .trend-item { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f5f5f5; text-decoration: none; color: inherit; }
        .trend-item:last-child { border-bottom: none; }
        .trend-num { font-size: 24px; font-weight: 900; color: #eee; min-width: 30px; line-height: 1; }
        .trend-title { font-size: 13px; font-weight: 600; color: #111; line-height: 1.4; }
        .trend-title:hover { color: #cc0000; }
        .trend-time { font-size: 11px; color: #aaa; margin-top: 3px; }
        .must-item { display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f5f5f5; align-items: center; text-decoration: none; color: inherit; }
        .must-item:last-child { border-bottom: none; }
        .must-item img { width: 72px; height: 54px; object-fit: cover; border-radius: 6px; flex-shrink: 0; }
        .must-title { font-size: 13px; font-weight: 600; color: #111; line-height: 1.4; }
        .must-title:hover { color: #cc0000; }

        /* FOOTER */
        .footer { background: #111; padding: 48px 16px 24px; margin-top: 40px; }
        .footer-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 32px; }
        .f-brand p { color: #777; font-size: 12px; line-height: 1.8; margin-top: 12px; }
        .f-logo-main { color: #fff; font-size: 20px; font-weight: 900; letter-spacing: 3px; }
        .f-logo-sub { color: #cc0000; font-size: 8px; letter-spacing: 6px; }
        .f-col h4 { color: #fff; font-size: 11px; font-weight: 900; letter-spacing: 2px; margin-bottom: 16px; text-transform: uppercase; padding-bottom: 10px; border-bottom: 1px solid #333; }
        .f-col a { display: block; color: #777; font-size: 12px; margin-bottom: 10px; transition: color 0.15s; }
        .f-col a:hover { color: #cc0000; }
        .footer-bottom { max-width: 1280px; margin: 32px auto 0; padding-top: 20px; border-top: 1px solid #222; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .footer-bottom p { color: #555; font-size: 11px; }

        /* RESPONSIVE */
        @media (min-width: 960px) {
          .hamburger { display: none !important; }
          .hero-section { grid-template-columns: 2fr 1fr; }
          .content-sidebar { grid-template-columns: 2fr 1fr; }
        }
        @media (max-width: 959px) {
          .navbar-links { display: none; }
          .hamburger { display: flex !important; }
          .hero-main img { height: 280px; }
          .hero-title { font-size: 20px !important; }
          .search-box { display: none; }
        }
      `}</style>

      <div style={{ minHeight: "100vh" }}>

        {/* TOP BAR */}
        <div className="topbar">
          <span className="topbar-date">
            📅 {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </span>
          <div className="topbar-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://x.com/BaidoaOnline" target="_blank" rel="noreferrer">X (Twitter)</a>
            <a href="https://www.youtube.com/@BaidoaOnline" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>

        {/* NAVBAR TOP */}
        <nav className="navbar">
          <div className="navbar-top">
            <a href="/" className="logo-wrap">
              <div className="logo-icon" style={{width:"42px",height:"42px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="19" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.15"/><circle cx="21" cy="21" r="15" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.3"/><circle cx="21" cy="21" r="11" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.5"/><circle cx="21" cy="21" r="7" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.75"/><circle cx="21" cy="21" r="4" fill="#cc0000"/></svg></div>
              <div className="logo-text">
                <div className="logo-text-main">BAIDOA</div>
                <div className="logo-text-sub">ONLINE</div>
              </div>
            </a>
            <div className="navbar-right">
              <div className="search-box">
                <span style={{ color: "#999", fontSize: "14px" }}>🔍</span>
                <input placeholder={lang === "so" ? "Raadi wararka..." : "Search news..."} />
              </div>
              <div className="lang-btns">
                <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>English</button>
                <button className={`lang-btn ${lang === "so" ? "active" : ""}`} onClick={() => setLang("so")}>Somali</button>
              </div>
              <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>

          {/* NAV LINKS BAR */}
          <div className="navbar-links">
            <div className="navbar-links-inner">
              <div className="nav-item">
                <a href="/" className="nav-link">{lang === "so" ? "Hoyga" : "Home"}</a>
              </div>

              {/* SOMALIA LINK */}
              <div className="nav-item">
                <a href="/category/south-west" className="nav-link">Somalia</a>
              </div>

              {/* WORLD DROPDOWN */}
              <div className="nav-item"
                onMouseEnter={() => setWorldOpen(true)}
                onMouseLeave={() => setWorldOpen(false)}>
                <button className="nav-link">
                  World <span className="nav-arrow">▾</span>
                </button>
                {worldOpen && (
                  <div className="dropdown">
                    {worldRegions.map(r => (
                      <a key={r.label} href={r.href}>{r.label}</a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map(item => (
                <div key={item.label} className="nav-item">
                  <a href={item.href} className="nav-link">{item.label}</a>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <a href="/" onClick={() => setMenuOpen(false)}>🏠 {lang === "so" ? "Hoyga" : "Home"}</a>
            <div className="mobile-section">Somalia — Gobolada</div>
            {somaliaStates.map(s => (
              <a key={s.label} href={s.href} onClick={() => setMenuOpen(false)}>  {s.label}</a>
            ))}
            <div className="mobile-section">World</div>
            {worldRegions.map(r => (
              <a key={r.label} href={r.href} onClick={() => setMenuOpen(false)}>  {r.label}</a>
            ))}
            <div className="mobile-section">More</div>
            {navLinks.slice(1).map(item => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <div style={{ display: "flex", gap: "8px", padding: "12px 16px" }}>
              <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")} style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "8px 16px", cursor: "pointer" }}>English</button>
              <button className={`lang-btn ${lang === "so" ? "active" : ""}`} onClick={() => setLang("so")} style={{ border: "1px solid #ddd", borderRadius: "4px", padding: "8px 16px", cursor: "pointer" }}>Somali</button>
            </div>
          </div>
        </nav>

        {/* BREAKING TICKER */}
        <div className="breaking">
          <span className="breaking-label">{lang === "so" ? "WAR DEGDEG AH" : "BREAKING"}</span>
          <span className="breaking-text">{breakingTicker}</span>
        </div>

        <div className="page-wrap">
          {/* HERO */}
          {hero && (
            <div className="hero-section">
              <a href={`/news/${hero.slug?.current}`} className="hero-main">
                <img src={getImage(hero)} alt={hero.title}
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/900x500/cc0000/ffffff?text=Baidoa+Online"; }} />
                {hero.isBreaking && (
                  <div className="hero-breaking-badge">
                    <div className="blink-dot"></div>
                    {lang === "so" ? "WAR DEGDEG AH" : "BREAKING NEWS"}
                  </div>
                )}
                <div className="hero-overlay">
                  <span className="hero-cat">{hero.category || "News"}</span>
                  <h1 className="hero-title">{getTitle(hero)}</h1>
                  <div className="hero-meta">
                    <span>🕐 {timeAgo(hero.publishedAt)}</span>
                    <span>·</span>
                    <span>Baidoa Online</span>
                  </div>
                </div>
              </a>

              <div className="hero-side">
                {sideArticles.map((a: any) => (
                  <a key={a._id} className="hero-side-item" href={`/news/${a.slug?.current}`}>
                    <img src={getImage(a)} alt=""
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x150/333/fff?text=News"; }} />
                    <div>
                      <div className="side-cat">{a.category || "News"}</div>
                      <div className="side-title">{getTitle(a)}</div>
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
                    <div className="article-card-body">
                      <span className="a-cat">{a.category || "News"}</span>
                      <div className="a-title">{getTitle(a)}</div>
                      <span className="a-time">{timeAgo(a.publishedAt)}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="sidebar">
              <div className="sb-box">
                <div className="sb-hdr">Stay Connected</div>
                <div className="sb-body">
                  {[
                    { name: "Facebook", count: "12,400 Fans", color: "#1877f2", icon: "f", link: "https://facebook.com" },
                    { name: "X (Twitter)", count: "13,200 Followers", color: "#000", icon: "𝕏", link: "https://x.com/BaidoaOnline" },
                    { name: "YouTube", count: "8,500 Subs", color: "#ff0000", icon: "▶", link: "https://www.youtube.com/@BaidoaOnline" },
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
                <div className="sb-hdr">Trending Now</div>
                <div className="sb-body">
                  {posts.slice(0, 4).map((a: any, i: number) => (
                    <a key={a._id} className="trend-item" href={`/news/${a.slug?.current}`}>
                      <div className="trend-num">0{i + 1}</div>
                      <div>
                        <div className="trend-title">{getTitle(a)}</div>
                        <div className="trend-time">{timeAgo(a.publishedAt)}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="sb-box">
                <div className="sb-hdr">Must Read</div>
                <div className="sb-body">
                  {posts.slice(0, 3).map((a: any) => (
                    <a key={a._id} className="must-item" href={`/news/${a.slug?.current}`}>
                      <img src={getImage(a)} alt=""
                        onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/200x150/333/fff?text=News"; }} />
                      <div className="must-title">{getTitle(a)}</div>
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
            <div className="f-brand">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{width:'32px',height:'32px'}}><svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21" r="19" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.15"/><circle cx="21" cy="21" r="15" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.3"/><circle cx="21" cy="21" r="11" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.5"/><circle cx="21" cy="21" r="7" fill="none" stroke="#cc0000" strokeWidth="1.5" strokeOpacity="0.75"/><circle cx="21" cy="21" r="4" fill="#cc0000"/></svg></div>
                <div>
                  <div className="f-logo-main">BAIDOA</div>
                  <div className="f-logo-sub">ONLINE</div>
                </div>
              </div>
              <p>{lang === "so" ? "Ilo wareedka ugu la-aamin badan ee Soomaaliya." : "Somalia's most trusted news source."}</p>
              <p style={{ marginTop: "8px" }}>📧 info@baidoaonline.com</p>
            </div>
            {[
              { title: "Somalia", links: somaliaStates },
              { title: "World", links: worldRegions },
              { title: "More", links: [
                { label: "Sports", href: "/category/ciyaaraha" },
                { label: "Business", href: "/category/ganacsiga" },
                { label: "Af-Maay", href: "/category/af-maay" },
                { label: "Opinion", href: "/category/opinion" },
                { label: "About Us", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Contact", href: "/contact" },
              ]},
            ].map(col => (
              <div key={col.title} className="f-col">
                <h4>{col.title}</h4>
                {col.links.map((link: any) => <a key={link.label} href={link.href}>{link.label}</a>)}
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2026 Baidoa Online. {lang === "so" ? "Xuquuqda oo dhan way ilaalisan yihiin." : "All rights reserved."}</p>
            <p>Baidoa, Bay Region · South West State, Somalia</p>
          </div>
        </footer>
      </div>
    </>
  );
}

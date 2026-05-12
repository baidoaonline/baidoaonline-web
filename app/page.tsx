export default function Home() {
  const articles = [
    { id: 1, category: "Somalia", title: "Federal Government Announces New Infrastructure Plan for Baidoa Region", time: "2 hours ago", image: "https://placehold.co/400x250/cc0000/ffffff?text=Somalia" },
    { id: 2, category: "Africa", title: "African Union Summit Addresses Regional Security Challenges Across the Horn", time: "4 hours ago", image: "https://placehold.co/400x250/111111/ffffff?text=Africa" },
    { id: 3, category: "World", title: "International Aid Organizations Increase Support for Displaced Families", time: "5 hours ago", image: "https://placehold.co/400x250/cc0000/ffffff?text=World" },
    { id: 4, category: "Politics", title: "Parliamentary Debate Heats Up Over New Electoral Commission Appointments", time: "6 hours ago", image: "https://placehold.co/400x250/111111/ffffff?text=Politics" },
    { id: 5, category: "Sport", title: "Somali National Football Team Qualifies for CECAFA Championship Finals", time: "8 hours ago", image: "https://placehold.co/400x250/cc0000/ffffff?text=Sport" },
    { id: 6, category: "Business", title: "New Trade Agreement Opens Market Opportunities for Somali Exporters", time: "10 hours ago", image: "https://placehold.co/400x250/111111/ffffff?text=Business" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* Top bar */}
      <div style={{ background: "#cc0000", padding: "6px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#fff", fontSize: "12px" }}>📍 Baidoa, Somalia — Tuesday, May 12, 2026</span>
          <span style={{ color: "#fff", fontSize: "12px" }}>Follow us: X · Facebook · YouTube</span>
        </div>
      </div>

      {/* Navbar - WHITE background like Option 2 */}
      <nav style={{ background: "#ffffff", padding: "0", borderBottom: "3px solid #cc0000", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ position: "relative", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#cc0000", position: "absolute" }}></div>
              <div style={{ width: "22px", height: "22px", borderRadius: "50%", border: "2.5px solid #cc0000", opacity: 0.7, position: "absolute" }}></div>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #cc0000", opacity: 0.3, position: "absolute" }}></div>
            </div>
            <div>
              <div style={{ color: "#111111", fontSize: "26px", fontWeight: "900", letterSpacing: "3px", lineHeight: "1" }}>BAIDOA</div>
              <div style={{ color: "#cc0000", fontSize: "11px", fontWeight: "600", letterSpacing: "8px", lineHeight: "1.4" }}>ONLINE</div>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "28px" }}>
            {["Somalia", "Africa", "World", "Politics", "Sport", "Business"].map(cat => (
              <a key={cat} href="#" style={{ color: "#111111", textDecoration: "none", fontSize: "14px", fontWeight: "600", letterSpacing: "0.5px" }}>
                {cat}
              </a>
            ))}
          </div>

          {/* Search */}
          <div style={{ display: "flex", alignItems: "center", background: "#f5f5f5", borderRadius: "4px", padding: "6px 12px", gap: "8px", border: "1px solid #e0e0e0" }}>
            <span style={{ color: "#999", fontSize: "14px" }}>🔍</span>
            <input placeholder="Search news..." style={{ background: "transparent", border: "none", outline: "none", color: "#111", fontSize: "14px", width: "160px" }} />
          </div>
        </div>
      </nav>

      {/* Breaking news ticker */}
      <div style={{ background: "#f5f5f5", borderBottom: "2px solid #cc0000", padding: "10px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ background: "#cc0000", color: "#fff", padding: "2px 10px", fontSize: "12px", fontWeight: "bold", borderRadius: "2px", whiteSpace: "nowrap" }}>BREAKING</span>
          <span style={{ fontSize: "13px", color: "#333" }}>Federal forces report major advances in southwest Somalia · African Union extends peacekeeping mission · Baidoa airport to receive international flights by Q3 2026</span>
        </div>
      </div>

      {/* Hero section */}
      <div style={{ maxWidth: "1200px", margin: "32px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
        <div style={{ cursor: "pointer" }}>
          <img src="https://placehold.co/800x450/cc0000/ffffff?text=Top+Story" alt="Top Story" style={{ width: "100%", borderRadius: "4px" }} />
          <div style={{ marginTop: "16px" }}>
            <span style={{ background: "#cc0000", color: "#fff", padding: "3px 10px", fontSize: "11px", fontWeight: "bold", borderRadius: "2px" }}>SOMALIA</span>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", lineHeight: "1.3", marginTop: "10px", color: "#111" }}>
              Historic Peace Talks Begin in Baidoa as Regional Leaders Gather for Three-Day Summit
            </h1>
            <p style={{ color: "#555", fontSize: "15px", marginTop: "10px", lineHeight: "1.6" }}>
              Senior officials from across the region convened in Baidoa today to discuss a comprehensive framework for lasting peace and regional stability in Southwest Somalia.
            </p>
            <span style={{ color: "#999", fontSize: "13px" }}>1 hour ago · By Baidoa Online Staff</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {articles.slice(0, 3).map(article => (
            <div key={article.id} style={{ display: "flex", gap: "12px", cursor: "pointer", paddingBottom: "20px", borderBottom: "1px solid #eee" }}>
              <img src={article.image} alt={article.title} style={{ width: "100px", height: "70px", objectFit: "cover", borderRadius: "3px", flexShrink: 0 }} />
              <div>
                <span style={{ color: "#cc0000", fontSize: "11px", fontWeight: "bold" }}>{article.category}</span>
                <p style={{ fontSize: "14px", fontWeight: "600", lineHeight: "1.4", marginTop: "4px", color: "#111" }}>{article.title}</p>
                <span style={{ color: "#999", fontSize: "12px" }}>{article.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest news label */}
      <div style={{ background: "#cc0000", padding: "12px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", letterSpacing: "1px" }}>LATEST NEWS</h2>
        </div>
      </div>

      {/* Article grid */}
      <div style={{ maxWidth: "1200px", margin: "32px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
        {articles.map(article => (
          <div key={article.id} style={{ cursor: "pointer", borderBottom: "2px solid #eee", paddingBottom: "20px" }}>
            <img src={article.image} alt={article.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "3px" }} />
            <div style={{ marginTop: "12px" }}>
              <span style={{ color: "#cc0000", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.5px" }}>{article.category}</span>
              <h3 style={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.4", marginTop: "6px", color: "#111" }}>{article.title}</h3>
              <span style={{ color: "#999", fontSize: "12px", marginTop: "8px", display: "block" }}>{article.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ background: "#111111", padding: "40px 0", marginTop: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#cc0000", position: "absolute" }}></div>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", border: "1.5px solid #cc0000", opacity: 0.7, position: "absolute" }}></div>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "1px solid #cc0000", opacity: 0.35, position: "absolute" }}></div>
              </div>
              <div>
                <div style={{ color: "#ffffff", fontSize: "16px", fontWeight: "900", letterSpacing: "2px", lineHeight: "1" }}>BAIDOA</div>
                <div style={{ color: "#cc0000", fontSize: "9px", letterSpacing: "6px", lineHeight: "1" }}>ONLINE</div>
              </div>
            </div>
            <p style={{ color: "#aaa", fontSize: "13px", lineHeight: "1.6" }}>Somalia&apos;s trusted source for breaking news, analysis, and in-depth reporting.</p>
          </div>
          {[
            { title: "Sections", links: ["Somalia", "Africa", "World", "Politics"] },
            { title: "More", links: ["Sport", "Business", "Opinion", "About Us"] },
            { title: "Follow Us", links: ["X (Twitter)", "Facebook", "YouTube", "Contact"] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: "#cc0000", fontSize: "13px", fontWeight: "bold", letterSpacing: "1px", marginBottom: "16px" }}>{col.title.toUpperCase()}</h4>
              {col.links.map(link => (
                <a key={link} href="#" style={{ display: "block", color: "#aaa", fontSize: "13px", textDecoration: "none", marginBottom: "8px" }}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "1200px", margin: "32px auto 0", padding: "20px 20px 0", borderTop: "1px solid #333", textAlign: "center" }}>
          <p style={{ color: "#666", fontSize: "12px" }}>© 2026 Baidoa Online. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
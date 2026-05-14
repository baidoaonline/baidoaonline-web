export default function ContactPage() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f7f7f7; color: #111; }
        a { text-decoration: none; color: inherit; }
        .navbar { background: #fff; border-bottom: 1px solid #e0e0e0; box-shadow: 0 1px 4px rgba(0,0,0,0.06); position: sticky; top: 0; z-index: 100; }
        .navbar-inner { max-width: 1200px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; height: 56px; gap: 16px; }
        .logo-icon { position: relative; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-dot { width: 9px; height: 9px; border-radius: 50%; background: #cc0000; position: absolute; }
        .logo-ring1 { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #cc0000; opacity: 0.7; position: absolute; }
        .logo-ring2 { width: 33px; height: 33px; border-radius: 50%; border: 1.5px solid #cc0000; opacity: 0.3; position: absolute; }
        .logo-text-main { color: #111; font-size: 22px; font-weight: 900; letter-spacing: 2px; line-height: 1; }
        .logo-text-sub { color: #cc0000; font-size: 9px; font-weight: 700; letter-spacing: 7px; line-height: 1.5; }
        .page-wrap { max-width: 900px; margin: 40px auto; padding: 0 16px; }
        .back-link { color: #cc0000; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 24px; }
        .back-link:hover { text-decoration: underline; }
        .page-header { border-bottom: 3px solid #cc0000; padding-bottom: 16px; margin-bottom: 36px; }
        .page-header h1 { font-size: 28px; font-weight: 900; color: #111; }
        .page-header p { color: #666; font-size: 14px; margin-top: 8px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .contact-info { display: flex; flex-direction: column; gap: 20px; }
        .info-card { background: #fff; border-radius: 8px; border: 1px solid #eee; padding: 20px; display: flex; align-items: flex-start; gap: 14px; }
        .info-icon { width: 42px; height: 42px; border-radius: 50%; background: #cc0000; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .info-title { font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .info-value { font-size: 14px; font-weight: 600; color: #111; }
        .info-value a { color: #cc0000; }
        .info-value a:hover { text-decoration: underline; }
        .social-section { background: #fff; border-radius: 8px; border: 1px solid #eee; padding: 20px; margin-top: 20px; }
        .social-title { font-size: 13px; font-weight: 900; color: #111; margin-bottom: 16px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 2px solid #cc0000; padding-bottom: 8px; }
        .social-links { display: flex; flex-direction: column; gap: 12px; }
        .social-link { display: flex; align-items: center; gap: 12px; padding: 10px; border-radius: 6px; transition: background 0.15s; }
        .social-link:hover { background: #f5f5f5; }
        .social-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; color: #fff; flex-shrink: 0; }
        .social-name { font-size: 14px; font-weight: 700; color: #111; }
        .social-handle { font-size: 12px; color: #888; }
        .form-section { background: #fff; border-radius: 8px; border: 1px solid #eee; padding: 28px; }
        .form-title { font-size: 16px; font-weight: 900; color: #111; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #f0f0f0; }
        .form-group { margin-bottom: 16px; }
        .form-group label { display: block; font-size: 12px; font-weight: 700; color: #555; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
        .form-group input, .form-group textarea, .form-group select { width: 100%; padding: 10px 14px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; color: #111; background: #fafafa; outline: none; font-family: Arial, sans-serif; }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: #cc0000; background: #fff; }
        .form-group textarea { height: 120px; resize: vertical; }
        .submit-btn { background: #cc0000; color: #fff; border: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 700; cursor: pointer; width: 100%; letter-spacing: 0.5px; }
        .submit-btn:hover { background: #aa0000; }
        .footer { background: #1a1a1a; padding: 28px 16px; margin-top: 48px; text-align: center; }
        .footer p { color: #555; font-size: 12px; }
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr; }
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

      <div className="page-wrap">
        <a href="/" className="back-link">← Bogga Hore</a>

        <div className="page-header">
          <h1>📬 Nala Soo Xiriir</h1>
          <p>Waxaad nagala soo xiriiri kartaa email, telefoon, ama baraha bulshada · You can reach us via email, phone, or social media.</p>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <div>
                  <div className="info-title">Email</div>
                  <div className="info-value"><a href="mailto:info@baidoaonline.com">info@baidoaonline.com</a></div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-title">Location</div>
                  <div className="info-value">Baidoa, Bay Region</div>
                  <div className="info-value" style={{ color: '#888', fontSize: '13px' }}>South West State, Somalia</div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">��</div>
                <div>
                  <div className="info-title">Saacadaha Shaqada · Working Hours</div>
                  <div className="info-value">Isniinta - Jimcaha</div>
                  <div className="info-value" style={{ color: '#888', fontSize: '13px' }}>8:00 AM – 6:00 PM (EAT)</div>
                </div>
              </div>
            </div>

            <div className="social-section">
              <div className="social-title">Nagu Raac · Follow Us</div>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
                  <div className="social-icon" style={{ background: '#1877f2' }}>f</div>
                  <div>
                    <div className="social-name">Facebook</div>
                    <div className="social-handle">12,400 Fans</div>
                  </div>
                </a>
                <a href="https://x.com/BaidoaOnline" target="_blank" rel="noreferrer" className="social-link">
                  <div className="social-icon" style={{ background: '#000' }}>𝕏</div>
                  <div>
                    <div className="social-name">X (Twitter)</div>
                    <div className="social-handle">@BaidoaOnline</div>
                  </div>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
                  <div className="social-icon" style={{ background: '#ff0000' }}>▶</div>
                  <div>
                    <div className="social-name">YouTube</div>
                    <div className="social-handle">8,500 Subscribers</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-title">✉️ Noo Dir Fariin · Send Us a Message</div>
            <form action="mailto:info@baidoaonline.com" method="get">
              <div className="form-group">
                <label>Magacaaga · Your Name</label>
                <input type="text" placeholder="Geli magacaaga..." />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="email@example.com" />
              </div>
              <div className="form-group">
                <label>Mawduuca · Subject</label>
                <select>
                  <option>Wariye ahaan · Reporter Inquiry</option>
                  <option>Xayeysiis · Advertising</option>
                  <option>Astaanta · Technical Issue</option>
                  <option>Wax kale · Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Farriiinta · Message</label>
                <textarea placeholder="Qor farriiintaada halkan..."></textarea>
              </div>
              <button type="submit" className="submit-btn">📤 Dir Farriiinta · Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Baidoa Online · info@baidoaonline.com</p>
      </footer>
    </>
  )
}

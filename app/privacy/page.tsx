export default function PrivacyPage() {
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
        .hero { background: linear-gradient(135deg, #111 0%, #cc0000 100%); padding: 60px 16px; text-align: center; }
        .hero h1 { color: #fff; font-size: 36px; font-weight: 900; letter-spacing: 2px; margin-bottom: 12px; }
        .hero p { color: rgba(255,255,255,0.8); font-size: 14px; }
        .page-wrap { max-width: 860px; margin: 48px auto; padding: 0 16px; }
        .back-link { color: #cc0000; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 28px; }
        .section { background: #fff; border-radius: 12px; padding: 36px; margin-bottom: 20px; border: 1px solid #eee; }
        .section h2 { font-size: 18px; font-weight: 900; color: #111; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0; display: flex; align-items: center; gap: 10px; }
        .section p { font-size: 14px; line-height: 1.9; color: #444; margin-bottom: 12px; }
        .section p:last-child { margin-bottom: 0; }
        .section ul { margin: 10px 0 12px 20px; }
        .section ul li { font-size: 14px; line-height: 1.9; color: #444; margin-bottom: 6px; }
        .updated { background: #f9f9f9; border-left: 4px solid #cc0000; padding: 14px 18px; border-radius: 0 8px 8px 0; margin-bottom: 28px; font-size: 13px; color: #666; }
        .footer { background: #111; padding: 28px 16px; margin-top: 48px; text-align: center; }
        .footer p { color: #555; font-size: 12px; }
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
        <h1>Privacy Policy</h1>
        <p>Last updated: May 15, 2026</p>
      </div>

      <div className="page-wrap">
        <a href="/" className="back-link">← Home</a>

        <div className="updated">
          📋 This Privacy Policy explains how Baidoa Online collects, uses, and protects your information when you visit <strong>www.baidoaonline.com</strong>.
        </div>

        <div className="section">
          <h2>�� 1. Information We Collect</h2>
          <p>When you visit Baidoa Online, we may collect the following types of information:</p>
          <ul>
            <li><strong>Usage Data</strong> — pages visited, time spent, browser type, device type, IP address</li>
            <li><strong>Cookies</strong> — small files stored on your device to improve your experience</li>
            <li><strong>Contact Information</strong> — only when you voluntarily contact us via our contact form (name, email, message)</li>
            <li><strong>Analytics Data</strong> — aggregated, anonymous data about how visitors use our site</li>
          </ul>
          <p>We do not collect sensitive personal information such as financial data, passwords, or government ID numbers.</p>
        </div>

        <div className="section">
          <h2>🍪 2. How We Use Cookies</h2>
          <p>Baidoa Online uses cookies to enhance your browsing experience. Cookies help us understand how visitors interact with our website so we can improve it.</p>
          <ul>
            <li><strong>Essential Cookies</strong> — required for the website to function properly</li>
            <li><strong>Analytics Cookies</strong> — help us understand traffic patterns (via Google Analytics)</li>
            <li><strong>Advertising Cookies</strong> — used by Google AdSense to show relevant ads</li>
          </ul>
          <p>You can disable cookies in your browser settings at any time. Note that disabling cookies may affect your experience on our site.</p>
        </div>

        <div className="section">
          <h2>�� 3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Improve and maintain our website</li>
            <li>Understand how our content is being used</li>
            <li>Respond to messages sent through our contact form</li>
            <li>Display relevant advertisements through Google AdSense</li>
            <li>Monitor and prevent fraudulent activity</li>
          </ul>
          <p>We do not sell, trade, or rent your personal information to third parties.</p>
        </div>

        <div className="section">
          <h2>📢 4. Advertising</h2>
          <p>Baidoa Online uses Google AdSense to display advertisements. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website and other websites on the internet.</p>
          <p>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" style={{color:'#cc0000'}}>Google Ads Settings</a>.</p>
        </div>

        <div className="section">
          <h2>🔗 5. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policies of any external sites you visit.</p>
        </div>

        <div className="section">
          <h2>👶 6. Children's Privacy</h2>
          <p>Baidoa Online is a general news website and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it immediately.</p>
        </div>

        <div className="section">
          <h2>🔒 7. Data Security</h2>
          <p>We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
        </div>

        <div className="section">
          <h2>✏️ 8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.</p>
        </div>

        <div className="section">
          <h2>📧 9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> info@baidoaonline.com</li>
            <li><strong>Website:</strong> www.baidoaonline.com/contact</li>
            <li><strong>Location:</strong> Baidoa, South West State, Somalia</li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Baidoa Online · info@baidoaonline.com · Baidoa, South West State, Somalia</p>
      </footer>
    </>
  )
}

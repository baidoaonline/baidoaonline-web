export default function CookiePolicy() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; }
        .wrap { max-width: 800px; margin: 40px auto; padding: 0 20px 60px; background: #fff; border-radius: 10px; }
        .back { color: #cc0000; font-size: 13px; font-weight: 700; display: inline-block; padding: 20px 0 10px; }
        h1 { font-size: 28px; font-weight: 900; color: #111; padding: 20px 0 8px; border-bottom: 3px solid #cc0000; margin-bottom: 24px; }
        h2 { font-size: 17px; font-weight: 800; color: #111; margin: 28px 0 10px; }
        p { font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 14px; }
        ul { padding-left: 20px; margin-bottom: 14px; }
        li { font-size: 15px; line-height: 1.7; color: #333; margin-bottom: 6px; }
        .opt-out { background: #f9f9f9; border-left: 4px solid #cc0000; padding: 16px 20px; border-radius: 4px; margin: 20px 0; }
      `}</style>
      <div className="wrap">
        <a href="/" className="back">← Home</a>
        <h1>Cookie Policy</h1>
        <p>This Cookie Policy explains how Baidoa Online (baidoaonline.com) uses cookies and similar tracking technologies when you visit our website.</p>
        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the site.</p>
        <h2>1. Essential Cookies</h2>
        <p>These cookies are necessary for the website to function properly, including page navigation and language preference. You cannot opt out of these cookies.</p>
        <h2>2. Analytics Cookies</h2>
        <p>We use Google Analytics to understand how visitors interact with our site — pages visited, time spent, and geographic location at country level. This data is anonymised and used solely to improve our content.</p>
        <ul>
          <li>Provider: Google LLC</li>
          <li>Purpose: Website analytics and performance</li>
          <li>Data retained: 26 months</li>
        </ul>
        <h2>3. Advertising Cookies</h2>
        <p>We display advertisements through Google AdSense. Google uses cookies to serve ads based on your prior visits to this and other websites.</p>
        <ul>
          <li>Provider: Google LLC</li>
          <li>Purpose: Personalised advertising</li>
          <li>Data collected: Browsing behaviour, device information, location</li>
        </ul>
        <div className="opt-out">
          <strong>Opt out of personalised ads:</strong> Visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{color:'#cc0000'}}>google.com/settings/ads</a> or use the <a href="https://optout.aboutads.info" target="_blank" rel="noreferrer" style={{color:'#cc0000'}}>Digital Advertising Alliance opt-out tool</a>.
        </div>
        <h2>Managing Cookies</h2>
        <p>You can control and delete cookies through your browser settings. Disabling certain cookies may affect site functionality.</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" style={{color:'#cc0000'}}>Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noreferrer" style={{color:'#cc0000'}}>Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noreferrer" style={{color:'#cc0000'}}>Safari</a></li>
        </ul>
        <h2>Contact</h2>
        <p>Questions about cookies? Email us at <a href="mailto:info@baidoaonline.com" style={{color:'#cc0000'}}>info@baidoaonline.com</a></p>
        <p style={{color:'#888', fontSize:'13px', marginTop:'32px'}}>Last updated: June 2026</p>
      </div>
    </>
  )
}

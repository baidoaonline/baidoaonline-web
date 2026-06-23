export default function Terms() {
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
      `}</style>
      <div className="wrap">
        <a href="/" className="back">← Home</a>
        <h1>Terms and Conditions</h1>
        <p>By accessing and using Baidoa Online (baidoaonline.com), you agree to be bound by these Terms and Conditions. Please read them carefully.</p>
        <h2>Use of Content</h2>
        <p>All content published on Baidoa Online — including articles, photographs, graphics, and video — is the intellectual property of Baidoa Online or its content partners and is protected by copyright law.</p>
        <ul>
          <li>You may share links to our articles freely</li>
          <li>You may quote up to 50 words from an article with clear attribution and a link back to the original</li>
          <li>You may not republish full articles without written permission</li>
          <li>You may not scrape, copy, or redistribute our content for commercial purposes</li>
        </ul>
        <h2>Disclaimer</h2>
        <p>The information published on Baidoa Online is provided in good faith for general informational purposes. We make no warranty as to the completeness or accuracy of any information. We are not liable for any losses or damages arising from reliance on our content.</p>
        <h2>Third-Party Links</h2>
        <p>Our site may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of any external sites.</p>
        <h2>Advertising</h2>
        <p>Baidoa Online displays advertisements served by Google AdSense and other advertising partners. These ads are clearly distinguished from editorial content. Advertiser relationships do not influence our editorial decisions.</p>
        <h2>Changes to Terms</h2>
        <p>We reserve the right to update these Terms at any time. Continued use of the site after changes constitutes acceptance of the new Terms.</p>
        <h2>Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:info@baidoaonline.com" style={{color:'#cc0000'}}>info@baidoaonline.com</a></p>
        <p style={{color:'#888', fontSize:'13px', marginTop:'32px'}}>Last updated: June 2026</p>
      </div>
    </>
  )
}

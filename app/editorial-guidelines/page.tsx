export default function EditorialGuidelines() {
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
        <h1>Editorial Guidelines</h1>
        <p>Baidoa Online is committed to accurate, fair, and independent journalism covering Somalia, South West State, and the wider Horn of Africa region. These guidelines govern all editorial decisions made by our team.</p>
        <h2>Our Mission</h2>
        <p>We provide timely, factual, and balanced reporting on political, security, humanitarian, and social developments across Somalia and the Horn of Africa — with a particular focus on Baidoa, Bay Region, and South West State, whose stories are often underrepresented in mainstream media.</p>
        <h2>Accuracy and Verification</h2>
        <p>All published articles must be verified through at least one credible source before publication. We prioritize official statements, eyewitness accounts, and established news agencies. Unverified claims are clearly labelled as unconfirmed.</p>
        <ul>
          <li>We do not publish rumours or unverified social media content as fact</li>
          <li>Quotes are attributed to named sources wherever possible</li>
          <li>Statistics and figures are sourced from official bodies or reputable research institutions</li>
          <li>We cross-reference breaking news with multiple sources before publication</li>
        </ul>
        <h2>Independence and Impartiality</h2>
        <p>Baidoa Online operates independently and is not affiliated with any political party, government, militia, or commercial interest. Our editorial decisions are made solely on the basis of newsworthiness and public interest.</p>
        <h2>Corrections Policy</h2>
        <p>We correct errors promptly and transparently. When a factual error is identified, we update the article and note the correction at the bottom of the piece. We do not silently delete or alter published content without acknowledgment.</p>
        <h2>Sourcing Standards</h2>
        <p>We use named sources wherever possible. Anonymous sources are used only when the information is in the public interest and the source faces genuine risk if identified. We do not use single anonymous sources for major factual claims.</p>
        <h2>Hate Speech and Harmful Content</h2>
        <p>We do not publish content that incites violence, promotes clan or ethnic hatred, or targets individuals based on religion, gender, or nationality. We report on sensitive topics with care and context.</p>
        <h2>Contact Us</h2>
        <p>To report an error or raise an editorial concern, contact us at <a href="mailto:info@baidoaonline.com" style={{color:'#cc0000'}}>info@baidoaonline.com</a></p>
        <p style={{color:'#888', fontSize:'13px', marginTop:'32px'}}>Last updated: June 2026</p>
      </div>
    </>
  )
}

export function generateArticleSchema(post: any, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.titleEn || post.title,
    "description": post.excerpt || "",
    "url": url,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Baidoa Online",
      "url": "https://www.baidoaonline.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Baidoa Online",
      "url": "https://www.baidoaonline.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.baidoaonline.com/og-image.png"
      }
    },
    "inLanguage": ["so", "en"],
    "isAccessibleForFree": true
  }
}

import type { MetadataRoute } from "next";

/**
 * Robots policy. No sitemap is published because this portfolio concept
 * has no canonical deployment URL yet — add one when a real host exists.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
  };
}

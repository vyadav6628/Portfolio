import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vipin-yadav-portfolio.vercel.app/sitemap.xml",
    host: "https://vipin-yadav-portfolio.vercel.app",
  };
}

import type { MetadataRoute } from "next";

const baseUrl = "https://spinecare.kooplicatayurveda";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}


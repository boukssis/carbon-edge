import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/sectors",
  "/approach",
  "/field-work",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://carbon-edge-preview.local";

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}

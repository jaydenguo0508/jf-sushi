
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jf-sushi.vercel.app";

  const pages = [
    "",
    "/about",
    "/products",
    "/services",
    "/products/salmon-nigiri",
    "/products/tuna-nigiri",
    "/products/california-rolls",
    "/products/poke-bowls",
    "/products/sushi-rolls",
    "/products/rice-bowls",
    "/products/dumplings",
    "/products/noodles",
    "/products/asian-specialties",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}

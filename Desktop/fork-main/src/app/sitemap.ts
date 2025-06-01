import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://sutanmuleta.github.io",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://sutanmuleta.github.io/profile-banner.png",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://sutanmuleta.github.io/opengraph-image.png",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		// Add more routes/files if needed
	];
}

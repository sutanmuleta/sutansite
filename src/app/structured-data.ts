export const generateStructuredData = () => {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Sutan Tadese",
		url: "https://sutanmuleta.github.io",
		sameAs: [
			"https://linkedin.com/in/sutanmuleta",
			"https://github.com/sutanmuleta",
			"https://x.com/msmuleta",
			"https://sutanhashnode.com"
		],
		jobTitle: "Founder & AI Researcher",
		description:
			"Sutan Tadese is a 21-year-old builder, researcher, and founder of Phases — a decentralized FemTech app focused on equity, privacy, and machine learning.",
		image: {
			"@type": "ImageObject",
			url: "https://sutanmuleta.github.io/profile-banner.png",
			width: "135",
			height: "180",
			caption: "Sutan Tadese",
		},
	};
};

import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sutan Tadese — Builder & Researcher</title>
				<meta
					property="og:title"
					content="Sutan Tadese — Builder & Researcher"
				/>
				<meta
					property="og:description"
					content="Founder of Phases — a decentralized FemTech app focused on equity, privacy, and AI."
				/>
				<meta
					property="og:image"
					content={`${
						process.env.VERCEL_URL
							? "https://" + process.env.VERCEL_URL
							: "https://sutanmuleta.github.io"
					}/opengraph-image.png`}
				/>
				<meta property="og:url" content="https://sutanmuleta.github.io" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<div>
				<h1>Welcome to Sutan Tadese's Website</h1>
				<p>Decentralized builder. Researcher. Founder of Phases.</p>
			</div>
		</>
	);
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/style.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	themeColor: "#000000",
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: {
		default: "Assem Hebik | Full Stack Engineer",
		template: "%s | Assem Hebik",
	},
	description:
		"Portfolio of Assem Hebik, a Senior Full Stack Engineer specializing in React, Next.js, and high-velocity SaaS infrastructure.",
	keywords: [
		"Full Stack Engineer",
		"Software Engineer",
		"Web Development",
		"Next.js",
		"TypeScript",
		"AWS",
		"Terraform",
	],
	manifest: "/manifest.json",
	authors: [{ name: "Assem Hebik" }],
	creator: "Assem Hebik",
	metadataBase: new URL("https://assemhebik.com/"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Assem Hebik | Portfolio",
		description: "Explore my projects and professional journey in engineering.",
		url: "https://assemhebik.com/",
		siteName: "Assem Hebik Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Assem Hebik Portfolio Preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Assem Hebik | Portfolio",
		description: "Full Stack Engineer.",
		creator: "@assem_hebik",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
		>
			<body className="min-h-full flex w-full flex-col bg-black text-white selection:bg-white/10">
				<main className="flex-grow">{children}</main>
			</body>
		</html>
	);
}

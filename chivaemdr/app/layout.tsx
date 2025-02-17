import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
	subsets: ["latin"],
	weight: ["700"],
	variable: "--font-baloo",
});

const mulish = Mulish({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-mulish",
});

export const metadata: Metadata = {
	title: "Chiva Investor Pitch 2/25",
	description:
		"Chi'Va fills the gap in behavioral health services demand by recapturing billions in lost revenues!",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link
					rel="stylesheet"
					href="https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body
				className={`${mulish.variable} ${baloo.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

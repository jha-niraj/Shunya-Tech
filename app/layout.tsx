import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "sonner";
import { ThemeProvider } from "@/components/theme-providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-space-grotesk',
})
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shunya Tech",
	description: "Leave technalities to us, just work on building your products.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/shunyatech.ico" />

				<title>Shunya Tech</title>
				<meta name="description" content="Leave technalities to us, just work on building your products." />

				<meta property="og:url" content="https://shunya.nirajjha.xyz" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Shunya Tech" />
				<meta property="og:description" content="Leave technalities to us, just work on building your products." />
				<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/f71f0216-3b30-47a0-9891-ce57484aa7d1.png?token=MVW4Q5baCz33x3bNCQYrEbiRtxU7vhm74tZel8wwrJM&height=1200&width=1200&expires=33297316036" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="shunya.nirajjha.xyz" />
				<meta property="twitter:url" content="https://shunya.nirajjha.xyz" />
				<meta name="twitter:title" content="Shunya Tech" />
				<meta name="twitter:description" content="Leave technalities to us, just work on building your products." />
				<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/f71f0216-3b30-47a0-9891-ce57484aa7d1.png?token=MVW4Q5baCz33x3bNCQYrEbiRtxU7vhm74tZel8wwrJM&height=1200&width=1200&expires=33297316036" />
			</head>
			<body
				className={`${geistSans.variable} ${spaceGrotesk.className} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<Footer />
					<SonnerToaster position="top-center" closeButton richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}

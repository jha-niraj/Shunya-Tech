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

import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-providers";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Budget Estimator",
	description: "Estimate your project budget in minutes",
	icons: {
		icon: "/shunyatech.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			<Suspense fallback={<div>Loading...</div>}>
				<main className="w-full mx-auto bg-black">
					<Navbar />
					{children}
					<Footer />
					<Toaster />
				</main>
			</Suspense>
		</ThemeProvider>
	);
}
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "@/components/ui/sonner";
import InvoiceFooter from "./_components/invoicefooter";

export const metadata: Metadata = {
	title: "VayuLabs",
	description: "You think we'll deliver",
	icons: {
		icon: "/vayulabs.png",
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
			<main className="w-full mx-auto">
				{children}
				<InvoiceFooter />
				<Toaster />
			</main>
		</ThemeProvider>
	);
}

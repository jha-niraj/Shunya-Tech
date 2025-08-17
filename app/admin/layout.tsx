import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-providers";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Admin Panel - Shunya Tech",
    description: "Admin panel for managing Shunya Tech website",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="min-h-screen bg-background">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <Toaster />
            </div>
        </ThemeProvider>
    );
}

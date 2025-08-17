import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LegalLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </section>
    );
} 
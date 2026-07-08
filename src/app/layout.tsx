import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Uttarayan The Homestay | A Journey Northward",
  description: "A peaceful Himalayan retreat rooted in traditional hospitality and spiritual renewal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface-bright text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed-variant flex flex-col min-h-screen">
        <div className="grain-overlay"></div>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

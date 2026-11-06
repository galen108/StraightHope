import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Straight Hope Virtual Newsletter | Straight Hope",
  description: "Experience the Straight Hope newsletter in a fully accessible, mobile-first virtual environment. Providing hope and recovery resources for Narcotics Anonymous.",
  keywords: ["Straight Hope", "Narcotics Anonymous", "NA", "Recovery", "Newsletter", "Virtual Newsletter"],
  authors: [{ name: "Straight Hope" }],
  openGraph: {
    title: "Straight Hope Virtual Newsletter",
    description: "Accessible virtual recovery newsletter for Straight Hope.",
    url: "https://straighthope.org",
    siteName: "Straight Hope",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Straight Hope Virtual Newsletter",
    description: "Accessible virtual recovery newsletter for Straight Hope.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-12 bg-background">
              <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-foreground">Straight Hope</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  © 2026 Straight Hope Virtual Newsletter. All rights reserved.
                </div>
                <div className="flex gap-4">
                  <a href="https://www.cprna.org/terms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Terms</a>
                  <a href="https://www.cprna.org/privacy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Privacy</a>
                  <a href="https://www.cprna.org/accessibility" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Accessibility</a>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

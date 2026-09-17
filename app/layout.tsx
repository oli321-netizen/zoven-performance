import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zoven.performance"),
  title: {
    default: "ZOVEN PERFORMANCE — Clear caffeine water",
    template: "%s — ZOVEN PERFORMANCE",
  },
  description:
    "ZOVEN is clear caffeine–electrolyte water in a 500 ml clear can. Lemon-Lime, Cucumber-Mint, Berry, and Pure. Coming soon in the UK. Contains caffeine.",
  applicationName: "ZOVEN PERFORMANCE",
  keywords: [
    "ZOVEN",
    "clear caffeine water",
    "electrolyte water",
    "RTD",
    "UK",
  ],
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "ZOVEN PERFORMANCE — Clear caffeine water",
    description:
      "Clear caffeine–electrolyte water. 500 ml clear can. Four flavours. Coming soon.",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/brand/logo-lockup.png", alt: "ZOVEN PERFORMANCE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOVEN PERFORMANCE — Clear caffeine water",
    description:
      "Clear caffeine–electrolyte water. 500 ml clear can. Coming soon.",
    images: ["/brand/logo-lockup.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-white focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Primus Consulting | B2B Salesforce Consulting & Custom Development",
  description: "Developer-led Salesforce consulting firm specializing in heavy custom development for global B2B firms. Professional, scalable implementations.",
  metadataBase: new URL("https://primusconsulting.com"),
  openGraph: {
    title: "Primus Consulting | B2B Salesforce Consulting & Custom Development",
    description: "Developer-led Salesforce consulting firm specializing in heavy custom development for global B2B firms.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

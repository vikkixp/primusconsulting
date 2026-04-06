import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

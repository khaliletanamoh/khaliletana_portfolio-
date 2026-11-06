
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khaliletanamoh.com"),

  title: {
    default: "Khalil Etana | Industrial Engineer & Full-Stack Web Developer",
    template: "%s | Khalil Etana",
  },

  description:
    "Explore the portfolio of Khalil Etana, an Industrial Engineer and Full-Stack Web Developer interested in engineering, technology, problem solving, and digital solutions.",

  applicationName: "Khalil Etana Portfolio",

  authors: [{ name: "Khalil Etana" }],

  creator: "Khalil Etana",

  keywords: [
    "Khalil Etana",
    "Industrial Engineer",
    "Full-Stack Web Developer",
    "Web Development",
    "Engineering",
    "Digital Solutions",
    "Problem Solving",
    "Ethiopia",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khaliletanamoh.com",
    siteName: "Khalil Etana",
    title: "Khalil Etana | Industrial Engineer & Full-Stack Web Developer",
    description:
      "Engineering mindset meets technology. Explore my projects, skills, and professional journey.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Khalil Etana | Portfolio",
    description:
      "Industrial Engineer & Full-Stack Web Developer.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

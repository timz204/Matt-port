import type { Metadata } from "next";
import { JetBrains_Mono, Syne, Manrope } from "next/font/google";
import { Header, HeaderSpacer } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`;

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jacobvenneoliver.dev"),
  title: {
    default: "Jacob Venne Oliver | Senior DevOps Engineer",
    template: "%s | Jacob Venne Oliver",
  },
  description:
    "Senior DevOps Engineer with 10+ years of software engineering and AWS cloud infrastructure experience, including CI/CD, Docker, Jenkins, GitLab, and Linux.",
  keywords: [
    "DevOps Engineer",
    "AWS",
    "CI/CD",
    "Docker",
    "Jenkins",
    "GitLab",
    "Linux",
    "Cloud Infrastructure",
    "Jacob Venne Oliver",
    "Tampa",
  ],
  authors: [{ name: "Jacob Venne Oliver" }],
  creator: "Jacob Venne Oliver",
  openGraph: {
    title: "Jacob Venne Oliver | Senior DevOps Engineer",
    description:
      "AWS infrastructure, CI/CD automation, Docker, Linux operations, and production reliability.",
    type: "website",
    locale: "en_US",
    siteName: "Jacob Venne Oliver",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Venne Oliver | Senior DevOps Engineer",
    description: "Reliable infrastructure. Faster releases. Secure delivery.",
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
      className={`${manrope.variable} ${syne.variable} ${jetbrains.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <ScrollProgress />
            <HeaderSpacer />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

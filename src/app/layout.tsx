import type { Metadata } from "next";
import { JetBrains_Mono, Syne, Manrope } from "next/font/google";
import { Header, HeaderSpacer } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`;

const localeInitScript = `(function(){try{var l=localStorage.getItem('locale');if(l==='es'||l==='en')document.documentElement.lang=l;else if(navigator.language.toLowerCase().indexOf('es')===0)document.documentElement.lang='es';}catch(e){}})();`;

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
  metadataBase: new URL("https://matiasperrone.dev"),
  title: {
    default: "Matias Perrone | Senior Full Stack Developer",
    template: "%s | Matias Perrone",
  },
  description:
    "Senior Full Stack Developer with 20+ years building scalable web applications with React, Next.js, Vue, Node.js, Python, and PHP. Cloud-native on AWS.",
  keywords: [
    "Full Stack Developer",
    "Senior Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Laravel",
    "AWS",
    "Matias Perrone",
    "Buenos Aires",
  ],
  authors: [{ name: "Matias Perrone" }],
  creator: "Matias Perrone",
  openGraph: {
    title: "Matias Perrone | Senior Full Stack Developer",
    description:
      "20+ years building scalable platforms, APIs, and cloud-native systems. Modernizing legacy, delivering impact.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_AR"],
    siteName: "Matias Perrone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matias Perrone | Senior Full Stack Developer",
    description: "Scalable systems. Clean architecture. High-impact delivery.",
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
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
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

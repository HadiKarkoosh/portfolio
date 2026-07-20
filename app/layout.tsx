import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/i18n";

const setInitialDirScript = `
(function () {
  try {
    var saved = localStorage.getItem('lang');
    if (saved === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    }
  } catch (e) {}
})();
`;

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const TITLE = "Hadi Karkoosh — Full-Stack Developer";
const DESCRIPTION =
  "Full-stack developer building with Next.js, TypeScript, Laravel & React. Informatics Engineering student at WPU, freelancer, competitive programmer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-hadikarkooshs-projects.vercel.app"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Hadi Karkoosh",
  openGraph: {
    type: "website",
    siteName: "Hadi Karkoosh",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialDirScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

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

export const metadata: Metadata = {
  title: "Hadi Karkoosh — Developer",
  description:
    "Full-stack developer building with Next.js, TypeScript, Laravel & React. Informatics Engineering student at WPU, freelancer, competitive programmer.",
  applicationName: "Hadi Karkoosh",
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

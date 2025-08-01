import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JQsystems for Academies - Automatización con IA para Academias",
  description: "Sistema de automatización con IA especializado en academias de formación. Genera matrículas automáticamente sin inversión adicional en publicidad. WhatsApp automation + filtrado inteligente de leads.",
  keywords: "automatización academias, WhatsApp automation, IA academias, marketing digital, leads cualificados, matrículas automáticas, JQsystems",
  authors: [{ name: "Joaquín Torres" }],
  creator: "JQsystems",
  publisher: "JQsystems",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://jqsystems.tech",
    siteName: "JQsystems for Academies",
    title: "JQsystems for Academies - Automatización con IA para Academias",
    description: "Sistema de automatización con IA especializado en academias de formación. Genera matrículas automáticamente sin inversión adicional en publicidad.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "JQsystems for Academies - Automatización con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JQsystems for Academies - Automatización con IA",
    description: "Sistema de automatización con IA especializado en academias de formación. Genera matrículas automáticamente.",
    images: ["/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

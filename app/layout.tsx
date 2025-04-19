import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import CookieConsent from "./components/CookieConsent";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ondřej Krejčí | Full-stack Developer & Designer",
  description: "Jsem full-stack vývojář a designer se zaměřením na tvorbu moderních webových aplikací. Nabízím komplexní řešení od návrhu až po realizaci.",
  keywords: ["full-stack developer", "web designer", "ondřej krejčí", "ondrejkrejci", "ondrejkrejci.com", "webové aplikace", "frontend", "backend"],
  authors: [{ name: "Ondřej Krejčí" }],
  creator: "Ondřej Krejčí",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://vase-domena.cz",
    title: "Ondřej Krejčí | Full-stack Developer & Designer",
    description: "Jsem full-stack vývojář a designer se zaměřením na tvorbu moderních webových aplikací.",
    siteName: "Ondřej Krejčí Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NKKXH357');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FMK3G42TZF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMK3G42TZF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKKXH357"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

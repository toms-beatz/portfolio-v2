import type { Metadata } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from "next/script";
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Thomas Mazeau - Portfolio",
  description: "Développeur passionné par le web et ses technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZL0V3DH7TY"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZL0V3DH7TY');
          `}
        </Script>
      </head>
      <body
        className={`antialiased dark:bg-dark-1 bg-light-1`}
      >
        {children}
      </body>
    </html>
  );
}

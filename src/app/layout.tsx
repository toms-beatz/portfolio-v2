import type { Metadata } from "next";
import { Freeman } from "next/font/google";
import "./globals.css";

const freeman: Freeman = ({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-freeman'
});

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
    <html lang="en" className={freeman.variable}>
      <body
        className={`antialiased dark:bg-dark-1 bg-light-1`}
      >
        {children}
      </body>
    </html>
  );
}

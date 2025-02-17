import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={`antialiased dark:bg-dark-1 bg-light-1`}
      >
        {children}
      </body>
    </html>
  );
}

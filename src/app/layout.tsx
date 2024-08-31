import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anatolian Honey",
  description: "Organic honey from the Anatolian region",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="custom-font">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "@/app/ui/navbar";


export const metadata: Metadata = {
  title: "Internia",
  description: "A website that connects high schoolers to internships based off the papers they like and don't like.",
  metadataBase: new URL('https://localhost:3000'),  // Update later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${inter.className} antialiased flex flex-col items-center w-screen h-screen bg-gradient-to-b from-[#E5D4F6]/[0.9] to[#F2F4FB]`}
      >
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
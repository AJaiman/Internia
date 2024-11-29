import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import Provider from "@/app/client-provider";
import { getServerSession } from "next-auth";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "Internia",
  description: "A website that connects high schoolers to internships based off the papers they like and don't like.",
  metadataBase: new URL('http://localhost:3000'),  // Update later
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${inter.className} antialiased flex flex-col items-center w-screen h-screen bg-gradient-to-b from-[#E5D4F6]/[0.9] to[#F2F4FB]`}
      >
        <Analytics />
        <Provider session={session}>
          <RootLayoutClient>
            <Navbar />
            {children}
          </RootLayoutClient>
        </Provider>
      </body>
    </html>
  );
}

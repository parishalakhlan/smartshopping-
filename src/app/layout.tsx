import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar/navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Archetype Fashion Group",
  description:
    "Global High-Fashion Franchise Business Network Organization Hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white">
        {/* Single Source of Truth Global Navbar Integration */}
        <Navbar />

        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog Post - Test",
  description: "A simple blog post",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Alphine JS */}
      <Script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></Script>

      {/* Font Awesome */}
      <Script src="https://kit.fontawesome.com/e45c3e1c15.js"></Script>
      <body className="bg-gray-100 p-6">{children}</body>
    </html>
  );
}

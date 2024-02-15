import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Page - Test",
  description: "A simple User Page",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-6">{children}</body>
    </html>
  );
}

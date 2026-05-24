import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landhill Capital",
  description:
    "Landhill Capital invests in micro-SaaS and AI startups and shares ecosystem insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full">
        {children}
      </body>
    </html>
  );
}

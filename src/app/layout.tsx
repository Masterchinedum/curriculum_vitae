import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinedu Kingsley Okereke | Full-Stack & AI Systems Engineer",
  description:
    "CV and work profile of Chinedu Kingsley Okereke — Full-Stack & AI Systems Engineer with 4+ years of experience building scalable web platforms and AI-integrated systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

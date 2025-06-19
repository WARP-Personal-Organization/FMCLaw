// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // This now imports your Tailwind styles and custom fonts

export const metadata: Metadata = {
  title: "FMC Law - Legal Guidance That Moves You Forward", // Update title
  description:
    "Bringing together diverse perspectives, we deliver dedicated legal representation focused on achieving the best possible outcome for you.", // Update description
  icons: {
    icon: "/FMC-logo-favicon.png", 
  }
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

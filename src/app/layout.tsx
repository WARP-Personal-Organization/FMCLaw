// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // This now imports your Tailwind styles and custom fonts

export const metadata: Metadata = {
  title: "FMC Law - Reimagining Legal Solutions", // Update title
  description: "Premium law firm offering expert legal services for complex challenges.", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
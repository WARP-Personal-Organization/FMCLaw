// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics"; // Adjust path if needed

// Hardcoded Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-FMEBC1PWCC";

// Use NEXT_PUBLIC_SITE_URL from environment variables if available,
// otherwise default to your production URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fmclaw.com.ph';
const ogImageName = "socialshare.png"; // Assuming this image is in your /public folder
const ogImageUrl = `${siteUrl}/${ogImageName}`;

export const metadata: Metadata = {
  title: "FMC Law - Legal Guidance That Moves You Forward",
  description:
    "Bringing together diverse perspectives, we deliver dedicated legal representation focused on achieving the best possible outcome for you.",
  icons: {
    icon: "/FMC-logo-favicon.PNG", // Ensure this path is correct relative to /public
  },
  metadataBase: new URL(siteUrl), // Recommended for resolving relative image paths
  openGraph: {
    title: "FMC Law - Legal Guidance That Moves You Forward",
    description: "Dedicated legal representation focused on achieving the best possible outcome for you.",
    url: siteUrl, // The canonical URL of your site
    siteName: "FMC Law",
    images: [
      {
        url: ogImageUrl, // Now an absolute URL like https://fmclaw.com.ph/socialshare.png
        width: 1200,
        height: 630,
        alt: "FMC Law - Legal Guidance That Moves You Forward",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FMC Law - Legal Guidance That Moves You Forward",
    description: "Dedicated legal representation focused on achieving the best possible outcome for you.",
    images: [ogImageUrl], // Absolute URL
    // site: '@YourTwitterSiteHandle', // Optional: Your site's Twitter handle
    // creator: '@YourTwitterCreatorHandle', // Optional: Your personal/company Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Analytics Script - Using hardcoded ID */}
      {GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}
      <body className="antialiased">{children}</body>
    </html>
  );
}
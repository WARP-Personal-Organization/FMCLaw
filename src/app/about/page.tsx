// app/about/page.tsx

import AboutUsPage from '@/components/AboutUsPage'; // Adjust the import path if your component is located elsewhere
import type { Metadata } from 'next';

// Optional: Define metadata specific to the About Us page
export const metadata: Metadata = {
  title: 'About Us | FMC Law',
  description: 'Learn more about FMC Law, our mission, core values, and the dedicated legal professionals on our team.',
  // You can add more metadata here, like open graph tags
  // openGraph: {
  //   title: 'About Us | FMC Law',
  //   description: 'Learn more about FMC Law...',
  //   url: 'https://www.fmclaw.com/about', // Replace with your actual domain
  //   images: [
  //     {
  //       url: '/images/og-about-us.jpg', // Replace with an appropriate OG image
  //       width: 1200,
  //       height: 630,
  //       alt: 'FMC Law Team',
  //     },
  //   ],
  // },
};

export default function AboutRoutePage() {
  return (
    // You can add page-specific layout wrappers here if needed,
    // but often the RootLayout is sufficient.
    <AboutUsPage />
  );
}
// src/components/GoogleAnalytics.tsx
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface GoogleAnalyticsProps {
  gaId: string; // Expect the GA ID as a prop
}

// Helper function to send page view events
const sendPageView = (url: string, gaMeasurementId: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", gaMeasurementId, {
      page_path: url,
    });
  } else {
    // This might happen if gtag hasn't loaded yet, or if there's an issue
    // console.warn("gtag function not found. Page view not sent for:", url);
  }
};

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  // Effect for handling client-side navigation (SPA page views)
  useEffect(() => {
    if (!gaId) {
      // console.warn("Google Analytics ID not provided. SPA page views will not be tracked.");
      return;
    }
    // Send page view when pathname changes
    sendPageView(pathname, gaId);
  }, [pathname, gaId]); // Re-run effect if pathname or gaId changes

  // Don't render scripts if no ID is provided (though your layout already checks this)
  if (!gaId) {
    return null;
  }

  return (
    <>
      {/* Main Google Analytics script (gtag.js) */}
      <Script
        strategy="afterInteractive" // Load after the page becomes interactive
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        id={`ga-gtag-script-${gaId}`} // Unique ID for the script tag
      />
      {/* Inline script to initialize gtag and send the initial page view */}
      <Script
        id={`ga-inline-init-script-${gaId}`} // Unique ID for the inline script tag
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname, // Send initial page view
            });
          `,
        }}
      />
    </>
  );
}
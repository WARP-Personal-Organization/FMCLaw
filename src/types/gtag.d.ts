// src/types/gtag.d.ts
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'js',
      targetOrConfig: string | Date | Record<string, unknown>,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config?: { page_path?: string; [key: string]: any } | Record<string, any> // Using any here
    ) => void;
    dataLayer?: unknown[]; // dataLayer can remain unknown or be typed more strictly if needed
  }
}
export {};
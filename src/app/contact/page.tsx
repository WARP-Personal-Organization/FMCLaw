// pages/contact.tsx
"use client"; // Required for useState (mobile menu) if using App Router.
              // If using 'pages' directory, this line is not needed.

import React, { useState } from 'react';
// import type { NextPage } from 'next'; // For 'pages' directory. Not strictly needed for App Router.
// import Head from 'next/head'; // For 'pages' directory. Use metadata export for App Router.

// --- ICON COMPONENTS (Defined within the same file) ---

const PlaceholderIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4 4H20V20H4V4Z" /> {/* Simple square for placeholder */}
  </svg>
);

const GoldCircleIcon: React.FC<{ className?: string; iconPath: string }> = ({ className = "w-6 h-6", iconPath }) => (
  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center mr-4 ${className}`}>
    <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d={iconPath} />
    </svg>
  </div>
);

const RightArrowIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 ml-2" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

// --- DATA ---
const firmName = "FMC Law"; // Replace with your actual firm name

const faqData = [
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation by calling our office directly at (123) 456-7890, emailing us at consult@fmclaw.com, or by filling out the contact form on this page. We aim to respond to all inquiries within 24 business hours.",
  },
  {
    question: "What should I bring to my initial consultation?",
    answer: "Please bring any documents relevant to your case, such as contracts, correspondence, court orders, or police reports. A list of questions you have for our attorneys would also be beneficial for a productive discussion.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we offer virtual consultations via secure video conferencing for clients who prefer not to meet in person or are located remotely. Please indicate your preference when scheduling your appointment.",
  },
  {
    question: "How quickly can I expect a response?",
    answer: "Our team strives to respond to all inquiries as promptly as possible, typically within one business day. For urgent matters, please call our office directly for immediate assistance.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, FMC Law has extensive experience representing international clients on a variety of legal matters. We have a global network and can provide counsel on cross-border issues effectively.",
  },
];

const contactInfo = [
    {
        iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z", // Home icon for address
        label: "Address",
        valueLines: ["123 Legal Avenue, Suite 400", "Justice City, JC 54321, USA"],
    },
    {
        iconPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a10.875 10.875 0 005.578 5.578l1.154-2.308a1 1 0 011.21-.502l4.493 1.498A1 1 0 0117 13.72V17a2 2 0 01-2 2H5a2 2 0 01-2-2V5z", // Phone icon
        label: "Phone",
        valueLines: ["(123) 456-7890"],
        href: "tel:+11234567890",
    },
    {
        iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", // Mail icon
        label: "Email",
        valueLines: ["contact@fmclaw.com"],
        href: "mailto:contact@fmclaw.com",
    },
    {
        iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z", // Clock icon
        label: "Office Hours",
        valueLines: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: By Appointment Only", "Sunday: Closed"],
    },
];

const socialLinks = [
    { href: "#", label: "LinkedIn", icon: <PlaceholderIcon className="w-5 h-5" /> },
    { href: "#", label: "Twitter", icon: <PlaceholderIcon className="w-5 h-5" /> },
    { href: "#", label: "Facebook", icon: <PlaceholderIcon className="w-5 h-5" /> },
];

// --- MAIN PAGE COMPONENT ---
// `NextPage` type is for the 'pages' dir. For App Router, it's just `React.FC` or default function.
const ContactUsPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-partners", label: "Our Partners" },
    { href: "/contact", label: "Contact", current: true },
  ];

  return (
    <>
      {/*
      For App Router, page title and metadata are often set in a layout.tsx file
      or by exporting a `metadata` object from this page.tsx file.
      The <Head> component from `next/head` is primarily for the `pages` directory.
      <Head>
        <title>Contact Us | {firmName}</title>
        <meta name="description" content={`Get in touch with ${firmName}. We are here to assist with your legal needs.`} />
      </Head>
      */}

      {/* 0. Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-black text-white shadow-md font-sans">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center flex-shrink-0">
              <PlaceholderIcon className="h-8 w-8 text-[#D4AF37]" />
              <span className="ml-3 text-xl lg:text-2xl font-bold font-serif text-white">{firmName}</span>
            </a>
            <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors
                    ${link.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'}`}
                  aria-current={link.current ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <a
                href="/book-consultation"
                className="hidden md:block bg-[#D4AF37] text-black px-5 py-2.5 rounded-sm text-sm lg:text-base font-semibold hover:bg-opacity-85 transition-opacity whitespace-nowrap"
              >
                Book Consultation
              </a>
              <div className="md:hidden ml-3">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => (
                 <a
                  key={`mobile-${link.label}`}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${link.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700/50'}`}
                  aria-current={link.current ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/book-consultation"
                className="block w-full text-left bg-[#D4AF37] text-black mt-2 px-3 py-2.5 rounded-md text-base font-semibold hover:bg-opacity-85 transition-opacity"
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="font-sans text-gray-800">
        {/* 1. Header Strip */}
        <section className="bg-[#F7F7F7] py-16 md:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 font-sans leading-relaxed mb-10">
              Ready to discuss your legal needs? Reach out to us today. Our team is committed to providing prompt, professional, and confidential assistance to address your concerns and guide you through your legal journey with our experienced attorneys.
            </p>
            <div className="mx-auto w-12 h-1 bg-[#D4AF37]"></div> {/* 48px gold divider */}
          </div>
        </section>

        {/* 2. Contact Block */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              {/* Left Card: Form */}
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold font-serif text-gray-900 mb-8">Send Us a Message</h2>
                <form action="#" method="POST" className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                      <input type="text" name="first-name" id="first-name" required className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                      <input type="text" name="last-name" id="last-name" required className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input type="email" name="email" id="email" required autoComplete="email" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" name="phone" id="phone" autoComplete="tel" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select id="subject" name="subject" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white">
                      <option>General Inquiry</option>
                      <option>Consultation Request</option>
                      <option>Corporate Law</option>
                      <option>Litigation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
                    <textarea name="message" id="message" rows={5} required className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"></textarea>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] mt-0.5" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="consent" className="font-medium text-gray-700">I agree to the <a href="/privacy-policy" className="text-[#D4AF37] hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.*</label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center bg-black text-white px-8 py-3.5 rounded-md font-semibold font-sans hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Send Message <RightArrowIcon />
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Card: Contact Details */}
              <div className="bg-black text-white p-8 md:p-10 rounded-lg shadow-lg lg:order-last order-first"> {/* Stack form first on mobile */}
                <h2 className="text-2xl font-bold font-serif text-white mb-10">Firm Contact Details</h2>
                <div className="space-y-8 font-sans">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start">
                      <GoldCircleIcon iconPath={info.iconPath} />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
                        {info.valueLines.map((line, index) => (
                          info.href && index === 0 ? (
                            <a key={index} href={info.href} className="block text-gray-300 hover:text-[#D4AF37] transition-colors text-sm leading-relaxed">{line}</a>
                          ) : (
                            <p key={index} className="text-gray-300 text-sm leading-relaxed">{line}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                   <div className="flex items-start">
                      <GoldCircleIcon iconPath="M13 13h-2v-2h2v2zm7-7h-2V4h-2v2H8V4H6v2H4c-1.11 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" /> {/* Placeholder social icon */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Connect With Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(link => (
                                <a key={link.label} href={link.href} aria-label={link.label} className="text-[#D4AF37] hover:text-white transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                      </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="aspect-[16/9] bg-gray-700 rounded-md overflow-hidden shadow-md">
                    {/* Replace with actual map embed or image */}
                    <img src="/images/map-placeholder-grayscale.jpg" alt="FMC Law Headquarters Location Map" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="bg-gray-800 text-center py-3 px-4 rounded-b-md -mt-1 relative z-10">
                    <p className="text-xs text-gray-300 font-sans">{firmName} Headquarters - Open Weekdays 9 AM to 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQ Section */}
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
                        Find quick answers to common questions about our services and processes. If you don't find your answer here, please don't hesitate to reach out.
                    </p>
                    <div className="mt-8 mx-auto w-12 h-1 bg-[#D4AF37]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {faqData.map((item, index) => (
                        <div key={index} className="font-sans">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. CTA Banner */}
        <section
          className="relative bg-cover bg-center py-20 md:py-28"
          style={{ backgroundImage: "url('/images/backgrounds/cta-office-dark.jpg')" }} // Replace with actual image
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-5">
              Ready to Work with Us?
            </h3>
            <p className="text-lg font-sans mb-10 max-w-xl mx-auto">
              Schedule a consultation today and let our expert attorneys provide the strategic guidance you need to navigate your legal challenges with confidence.
            </p>
            <a
              href="/book-consultation"
              className="bg-[#D4AF37] text-black px-8 py-3.5 rounded-md font-semibold font-sans text-base lg:text-lg hover:bg-opacity-85 transition-opacity"
            >
              Book a Consultation Now
            </a>
          </div>
        </section>
      </main>

      {/* 5. Global Footer */}
      <footer className="bg-black text-gray-400 border-t-2 border-[#D4AF37] pt-16 pb-8 font-sans">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
            <div className="space-y-5">
              <a href="/" className="flex items-center space-x-2">
                <PlaceholderIcon className="h-10 w-10 text-[#D4AF37]" />
                <span className="text-2xl font-bold font-serif text-white">{firmName}</span>
              </a>
              <p className="text-sm leading-relaxed">
                Providing sophisticated legal solutions with integrity and a client-first approach.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label={`${firmName} on LinkedIn`} className="text-gray-400 hover:text-[#D4AF37] transition-colors"><PlaceholderIcon className="w-5 h-5" /></a>
                <a href="#" aria-label={`${firmName} on Twitter`} className="text-gray-400 hover:text-[#D4AF37] transition-colors"><PlaceholderIcon className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Key Practices</h5>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Corporate Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Litigation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intellectual Property</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Our Firm</h5>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/our-partners" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Get In Touch</h5>
              <address className="not-italic space-y-2.5 text-sm">
                <p>123 Legal Avenue, Suite 400<br />Justice City, JC 54321</p>
                <p>P: <a href="tel:+11234567890" className="hover:text-white transition-colors">(123) 456-7890</a></p>
                <p>E: <a href="mailto:contact@fmclaw.com" className="hover:text-white transition-colors">contact@fmclaw.com</a></p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 mt-8 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p>© {new Date().getFullYear()} {firmName}. All Rights Reserved.</p>
              <div className="space-x-4 mt-4 md:mt-0">
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUsPage;

// If using App Router and want to define metadata:
// export const metadata = {
//   title: `Contact Us | ${firmName}`,
//   description: `Get in touch with ${firmName}. We are here to assist with your legal needs, schedule consultations, and answer your questions.`,
// };
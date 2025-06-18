"use client"
// pages/our-partners.tsx
import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// --- HELPER COMPONENTS (Defined within the same file) ---

// Gold Check SVG Icon
const GoldCheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4AF37"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Placeholder Icon (for logo, social icons)
const PlaceholderIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Using a simple square for placeholder to differentiate from star */}
    <path d="M4 4H20V20H4V4Z" />
  </svg>
);


// --- PARTNER DATA AND TYPES ---
interface PartnerInfoGroup {
  heading: string;
  items: string[];
}

interface Partner {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  specialties: string[];
  infoGroups: PartnerInfoGroup[];
}

const firmName = "Sterling & Guild"; // Example Firm Name

const partnersData: Partner[] = [
  {
    id: 1,
    name: "Dr. Alistair Finch",
    role: "Managing Partner, Corporate Law",
    imageUrl: "/images/team/alistair-finch.jpg", // Replace with actual image paths
    specialties: ["Mergers & Acquisitions", "Venture Capital", "Corporate Governance"],
    infoGroups: [
      {
        heading: "Credentials",
        items: ["Bar Admission: New York State, 2001", "Certified Specialist in Business Law", "Fellow, Institute of Corporate Directors"],
      },
      {
        heading: "Employment History",
        items: [`Founding Partner, ${firmName} (2010-Present)`, "Senior Counsel, Lex Magna LLP (2005-2010)", "Associate, Global Law Group (2001-2005)"],
      },
      {
        heading: "Areas of Practice",
        items: ["Complex International Transactions", "Private Equity & Fund Formation", "Regulatory Compliance & Advisory"],
      },
      {
        heading: "Education & Background",
        items: ["J.D., Harvard Law School (magna cum laude)", "M.Phil in Economics, University of Oxford (Rhodes Scholar)", "B.A. in Philosophy, Politics, and Economics (PPE), Yale University"],
      },
    ],
  },
  {
    id: 2,
    name: "Eleanor Ainsworth, Esq.",
    role: "Senior Partner, Litigation & Arbitration",
    imageUrl: "/images/team/eleanor-ainsworth.jpg",
    specialties: ["Commercial Litigation", "International Arbitration", "White-Collar Defense"],
    infoGroups: [
      {
        heading: "Credentials",
        items: ["Bar Admission: California, 1998; England & Wales (Solicitor), 2003", "Member, Chartered Institute of Arbitrators (MCIArb)"],
      },
      {
        heading: "Employment History",
        items: [`Partner, ${firmName} (2012-Present)`, "Head of Litigation, Ainsworth & Crane (2004-2012)", "Barrister, Temple Chambers (1999-2003)"],
      },
      {
        heading: "Areas of Practice",
        items: ["High-Stakes Contractual Disputes", "Securities Fraud Litigation", "Cross-Border Insolvency"],
      },
      {
        heading: "Education & Background",
        items: ["LL.M., Columbia Law School (Harlan Fiske Stone Scholar)", "B.C.L., University of Oxford", "B.A. in Law, University of Cambridge (First Class Honours)"],
      },
    ],
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Partner, Intellectual Property & Technology",
    imageUrl: "/images/team/marcus-thorne.jpg",
    specialties: ["Patent Litigation", "Tech Transactions", "Data Privacy & Cybersecurity"],
    infoGroups: [
      {
        heading: "Credentials",
        items: ["Registered Patent Attorney, USPTO", "Certified Information Privacy Professional (CIPP/US, CIPP/E)"],
      },
      {
        heading: "Employment History",
        items: [`Partner, ${firmName} (2015-Present)`, "Senior IP Counsel, Innovatech Solutions (2010-2015)", "Associate, TechLaw Partners (2007-2010)"],
      },
      {
        heading: "Areas of Practice",
        items: ["Software & SaaS Licensing", "AI & Machine Learning Law", "E-commerce & Digital Media"],
      },
      {
        heading: "Education & Background",
        items: ["J.D., Stanford Law School (with distinction in Law, Science & Technology)", "M.S. in Computer Science, Massachusetts Institute of Technology (MIT)", "B.S. in Electrical Engineering, Caltech"],
      },
    ],
  },
  {
    id: 4,
    name: "Seraphina Dubois",
    role: "Partner, Real Estate & Environmental Law",
    imageUrl: "/images/team/seraphina-dubois.jpg",
    specialties: ["Commercial Real Estate", "Sustainable Development", "Environmental Regulation"],
    infoGroups: [
      {
        heading: "Credentials",
        items: ["Bar Admission: Florida, 2006", "LEED Accredited Professional (LEED AP BD+C)"],
      },
      {
        heading: "Employment History",
        items: [`Partner, ${firmName} (2018-Present)`, "Counsel, EcoLex Chambers (2011-2018)", "Associate, Property & Planning Group (2006-2011)"],
      },
      {
        heading: "Areas of Practice",
        items: ["Large-Scale Development Projects", "Renewable Energy Law", "Land Use & Zoning Appeals"],
      },
      {
        heading: "Education & Background",
        items: ["J.D., Yale Law School (Editor, Yale Journal on Regulation)", "Master of Environmental Management (MEM), Duke University", "B.A. in Urban Studies, Princeton University"],
      },
    ],
  },
];

// Partner Card Component
interface PartnerCardProps {
  partner: Partner;
  imageSide: 'left' | 'right';
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, imageSide }) => {
  const { name, role, imageUrl, specialties, infoGroups } = partner;

  const imageOrderClass = imageSide === 'left' ? 'md:order-first' : 'md:order-last';
  const contentOrderClass = imageSide === 'left' ? 'md:order-last' : 'md:order-first';

  return (
    <article className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-0"> {/* No gap between image and text on md+ */}
        {/* Image Section */}
        <div className={`md:col-span-5 ${imageOrderClass} bg-gray-100`}>
          <div className="aspect-[3/2] w-full">
            <img
              src={imageUrl}
              alt={`Portrait of ${name}`}
              className="w-full h-full object-cover md:rounded-l-md md:rounded-r-none" // Adjust rounding based on side if needed, but usually image is flush
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/cccccc/969696?text=Image+Not+Found'; }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className={`md:col-span-7 p-6 ${contentOrderClass}`}> {/* 24px padding */}
          <h4 className="text-2xl lg:text-3xl font-semibold font-serif text-gray-900 mb-1">{name}</h4>
          <p className="text-sm font-medium text-[#D4AF37] font-sans mb-4 tracking-wide">{role}</p>

          {specialties && specialties.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-full font-sans"
                >
                  {specialty}
                </span>
              ))}
            </div>
          )}

          <div className="space-y-5">
            {infoGroups.map((group) => (
              <div key={group.heading}>
                <h5 className="text-base font-bold font-sans text-gray-800 mb-2.5">{group.heading}</h5>
                <ul className="space-y-1.5">
                  {group.items.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600 font-sans leading-relaxed">
                      <GoldCheckIcon className="w-4 h-4 mr-2.5 mt-[3px] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};


// --- MAIN PAGE COMPONENT ---
const OurPartnersPage: NextPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-partners", label: "Our Partners", current: true },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <Head>
        <title>Meet Our Legal Experts | {firmName}</title>
        <meta name="description" content={`Discover the distinguished legal team at ${firmName}, committed to excellence and client success.`} />
        {/* Add other relevant meta tags like OpenGraph if needed */}
      </Head>

      {/* 0. Sticky Top-Nav */}
      <nav className="sticky top-0 z-50 bg-black text-white shadow-md font-sans">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <PlaceholderIcon className="h-8 w-8 text-[#D4AF37]" />
                <span className="ml-3 text-xl lg:text-2xl font-bold font-serif text-white">{firmName}</span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
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

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center">
              <a
                href="/book-consultation" // Replace with actual link
                className="hidden md:block bg-[#D4AF37] text-black px-5 py-2.5 rounded-sm text-sm lg:text-base font-semibold hover:bg-opacity-85 transition-opacity whitespace-nowrap"
              >
                Book Consultation
              </a>
              {/* Mobile menu button */}
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

        {/* Mobile menu, show/hide based on menu state. */}
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

      <main className="font-sans bg-gray-50 text-gray-700"> {/* Default text color for body */}
        {/* 1. Hero Banner */}
        <section
          className="relative bg-cover bg-center py-28 md:py-40 lg:py-56"
          style={{ backgroundImage: "url('/images/backgrounds/law-library-darkened.jpg')" }} // Ensure this image is in /public/images/backgrounds
        >
          <div className="absolute inset-0 bg-black opacity-70"></div> {/* Darkening overlay */}
          <div className="relative z-10 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white leading-tight">
              Meet Our <span className="text-[#D4AF37]">Legal Experts</span>
            </h1>
            <p className="mt-5 md:mt-6 text-lg md:text-xl text-gray-200 font-sans max-w-3xl mx-auto">
              A team of distinguished attorneys dedicated to providing unparalleled legal counsel and achieving exceptional outcomes.
            </p>
          </div>
        </section>

        {/* 2. Intro Block */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-5">
              The Minds Behind {firmName}
            </h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Our firm is built on a foundation of intellectual rigor, extensive experience, and an unwavering commitment to our clients' success. Each expert brings a unique perspective, contributing to our collective strength.
            </p>
          </div>
        </section>

        {/* 3. Partner Profile Cards */}
        <section className="py-16 md:py-20 bg-gray-100"> {/* Slightly different bg for contrast */}
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 md:space-y-16">
              {partnersData.map((partner, index) => (
                <PartnerCard
                  key={partner.id}
                  partner={partner}
                  imageSide={index % 2 === 0 ? 'left' : 'right'} // Alternating image side for desktop
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. CTA Band */}
        <section className="bg-black text-white py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-5">
              Connect With Our Legal Experts
            </h3>
            <p className="text-lg text-gray-300 font-sans mb-10 max-w-xl mx-auto">
              Experience the difference that dedicated, expert legal representation can make. We are ready to listen and advise.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6">
              <a
                href="/book-consultation" // Replace with actual link
                className="bg-[#D4AF37] text-black px-8 py-3.5 rounded-md font-semibold font-sans text-base lg:text-lg hover:bg-opacity-85 transition-opacity w-full sm:w-auto"
              >
                Book a Consultation
              </a>
              <a
                href="/contact" // Replace with actual link
                className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 rounded-md font-semibold font-sans text-base lg:text-lg hover:bg-[#D4AF37] hover:text-black transition-colors w-full sm:w-auto"
              >
                Contact a Specific Partner
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Global Footer */}
      <footer className="bg-black text-gray-400 border-t-2 border-[#D4AF37] pt-16 pb-8 font-sans">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
            {/* Column 1: Brand */}
            <div className="space-y-5">
              <a href="/" className="flex items-center space-x-2">
                <PlaceholderIcon className="h-10 w-10 text-[#D4AF37]" />
                <span className="text-2xl font-bold font-serif text-white">{firmName}</span>
              </a>
              <p className="text-sm leading-relaxed">
                Providing sophisticated legal solutions with integrity and a client-first approach. We navigate complexity to deliver clarity and results.
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label={`${firmName} on LinkedIn`} className="text-gray-400 hover:text-[#D4AF37] transition-colors"><PlaceholderIcon className="w-5 h-5" /></a>
                <a href="#" aria-label={`${firmName} on Twitter`} className="text-gray-400 hover:text-[#D4AF37] transition-colors"><PlaceholderIcon className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Column 2: Practice Areas (Sample) */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Key Practices</h5>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Corporate & M&A</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Litigation & Disputes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intellectual Property</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real Estate Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">International Trade</a></li>
              </ul>
            </div>

            {/* Column 3: Company Links */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Our Firm</h5>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/our-partners" className="hover:text-white transition-colors">Our Experts</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/insights" className="hover:text-white transition-colors">Insights & News</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Get In Touch</h5>
              <address className="not-italic space-y-2.5 text-sm">
                <p>123 Legal Plaza, Suite 1000<br />Metropolis, NY 10001</p>
                <p>Phone: <a href="tel:+12125550123" className="hover:text-white transition-colors">(212) 555-0123</a></p>
                <p>Email: <a href={`mailto:info@${firmName.toLowerCase().replace(/\s+/g, '')}.com`} className="hover:text-white transition-colors">info@{firmName.toLowerCase().replace(/\s+/g, '')}.com</a></p>
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

export default OurPartnersPage;
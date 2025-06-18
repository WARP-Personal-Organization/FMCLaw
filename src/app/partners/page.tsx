"use client";
// pages/our-partners.tsx
import type { NextPage } from "next";
import Head from "next/head";
import AboutPartnerCard from "@/components/AboutPartnerCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- HELPER COMPONENTS (Defined within the same file) ---

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

const firmName = "FMC Law"; // Example Firm Name

const partnersData: Partner[] = [
  {
    id: 1,
    name: "Carl Vincent Mondejar, CPA",
    role: "PARTNER",
    imageUrl: "/assets/Jonathan-portrait.png", // Replace with actual image paths
    specialties: [
      "Mergers & Acquisitions",
      "Venture Capital",
      "Corporate Governance",
    ],
    infoGroups: [
      {
        heading: "Credentials",
        items: [
          "Bar Admission: New York State, 2001",
          "Certified Specialist in Business Law",
          "Fellow, Institute of Corporate Directors",
        ],
      },
      {
        heading: "Employment History",
        items: [
          `Founding Partner, ${firmName} (2010-Present)`,
          "Senior Counsel, Lex Magna LLP (2005-2010)",
          "Associate, Global Law Group (2001-2005)",
        ],
      },
      {
        heading: "Areas of Practice",
        items: [
          "Complex International Transactions",
          "Private Equity & Fund Formation",
          "Regulatory Compliance & Advisory",
        ],
      },
      {
        heading: "Education & Background",
        items: [
          "J.D., Harvard Law School (magna cum laude)",
          "M.Phil in Economics, University of Oxford (Rhodes Scholar)",
          "B.A. in Philosophy, Politics, and Economics (PPE), Yale University",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Lcid Crescent Fernandez",
    role: "MANAGING PARTNER",
    imageUrl: "/assets/Alexandra-portrait.png",
    specialties: [
      "Commercial Litigation",
      "International Arbitration",
      "White-Collar Defense",
    ],
    infoGroups: [
      {
        heading: "Credentials",
        items: [
          "Bar Admission: California, 1998; England & Wales (Solicitor), 2003",
          "Member, Chartered Institute of Arbitrators (MCIArb)",
        ],
      },
      {
        heading: "Employment History",
        items: [
          `Partner, ${firmName} (2012-Present)`,
          "Head of Litigation, Ainsworth & Crane (2004-2012)",
          "Barrister, Temple Chambers (1999-2003)",
        ],
      },
      {
        heading: "Areas of Practice",
        items: [
          "High-Stakes Contractual Disputes",
          "Securities Fraud Litigation",
          "Cross-Border Insolvency",
        ],
      },
      {
        heading: "Education & Background",
        items: [
          "LL.M., Columbia Law School (Harlan Fiske Stone Scholar)",
          "B.C.L., University of Oxford",
          "B.A. in Law, University of Cambridge (First Class Honours)",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Ryan Carlo Cordero",
    role: "PARTNER",
    imageUrl: "/assets/Jonathan-portrait.png",
    specialties: [
      "Patent Litigation",
      "Tech Transactions",
      "Data Privacy & Cybersecurity",
    ],
    infoGroups: [
      {
        heading: "Credentials",
        items: [
          "Registered Patent Attorney, USPTO",
          "Certified Information Privacy Professional (CIPP/US, CIPP/E)",
        ],
      },
      {
        heading: "Employment History",
        items: [
          `Partner, ${firmName} (2015-Present)`,
          "Senior IP Counsel, Innovatech Solutions (2010-2015)",
          "Associate, TechLaw Partners (2007-2010)",
        ],
      },
      {
        heading: "Areas of Practice",
        items: [
          "Software & SaaS Licensing",
          "AI & Machine Learning Law",
          "E-commerce & Digital Media",
        ],
      },
      {
        heading: "Education & Background",
        items: [
          "J.D., Stanford Law School (with distinction in Law, Science & Technology)",
          "M.S. in Computer Science, Massachusetts Institute of Technology (MIT)",
          "B.S. in Electrical Engineering, Caltech",
        ],
      },
    ],
  },
];
const OurPartnersPage: NextPage = () => {
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
        <meta
          name="description"
          content={`Discover the distinguished legal team at ${firmName}, committed to excellence and client success.`}
        />
      </Head>

      <Header />

      <main className="font-sans bg-gray-50 text-gray-700">
        <section
          className="relative bg-cover bg-center py-28 md:py-40 lg:py-56"
          style={{
            backgroundImage: "url('assets/meet-partners-banner.png')",
          }} // Ensure this image is in /public/images/backgrounds
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
          {/* Darkening overlay */}
          <div className="relative z-10  px-4 sm:px-6 lg:px-8 text-left mx-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-oswald text-white leading-tight">
              Meet Our <span className="text-[#D4AF37]">Legal Experts</span>
            </h1>
            <p className="mt-5 md:mt-6 text-lg md:text-xl text-gray-200 font-inter max-w-3xl">
              Our team of accomplished attorneys brings decades of combined
              experience across diverse practice areas to deliver exceptional
              legal representation.
            </p>
          </div>
        </section>
        {/* 2. Intro Block */}
        <section className="py-16 md:py-24 bg-gray-100 font-inter">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              The Minds Behind {firmName}
            </h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Our partners bring new ideas and a strong commitment to quality in
              every case.
            </p>
          </div>
        </section>
        {/* 3. Partner Profile Cards */}
        <section className="py-16 md:py-20 bg-gray-100">
          {" "}
          {/* Slightly different bg for contrast */}
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 md:space-y-16">
              {partnersData.map((partner, index) => (
                <AboutPartnerCard
                  key={partner.id}
                  partner={partner}
                  imageSide={index % 2 === 0 ? "left" : "right"} // Alternating image side for desktop
                />
              ))}
            </div>
          </div>
        </section>
        {/* 4. CTA Band */}
        <section className="bg-black text-white py-16 md:py-20 font-inter">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              Connect With Our Legal Experts
            </h3>
            <p className="text-lg text-gray-300 font-sans mb-10 max-w-xl mx-auto">
              Whether you need advice on a specific legal matter or want to
              explore how we can support your business, our partners are ready
              to assist you.
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
      <Footer />
    </>
  );
};

export default OurPartnersPage;

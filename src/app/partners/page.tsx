"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const firmName = "FMC Law";

const partnersData: Partner[] = [
    {
    id: 1,
    name: "Lcid Crescent Fernandez",
    role: "MANAGING PARTNER",
    imageUrl: "/assets/alexandra.png",
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
    id: 2,
    name: "Carl Vincent Mondejar, CPA",
    role: "PARTNER",
    imageUrl: "/assets/jonathan.png",
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
    id: 3,
    name: "Ryan Carlo Cordero",
    role: "PARTNER",
    imageUrl: "/assets/jonathan.png",
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

interface AboutPartnerCardProps {
  partner: Partner;
  imageSide?: "left" | "right";
}

const AboutPartnerCard: React.FC<AboutPartnerCardProps> = ({
  partner,
  imageSide = "left",
}) => {
  const imageOrderClass = imageSide === "left" ? "md:order-1" : "md:order-2";
  const contentOrderClass = imageSide === "left" ? "md:order-2" : "md:order-1";

  return (
    <div className="bg-white shadow-xl overflow-hidden md:grid md:grid-cols-12 md:gap-0">
      <div
        className={`md:col-span-4 relative ${imageOrderClass} min-h-[300px] md:min-h-0`}
      >
        <Image
          src={partner.imageUrl}
          alt={`Portrait of ${partner.name}`}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-black/10 md:to-transparent"></div>
      </div>

      <div
        className={`md:col-span-8 p-6 sm:p-8 lg:p-10 ${contentOrderClass} flex flex-col`}
      >
        <h3 className="text-2xl sm:text-3xl font-bold font-oswald text-gray-900">
          {partner.name}
        </h3>
        <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-4 font-sans">
          {partner.role}
        </p>

        {partner.specialties && partner.specialties.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2 font-sans">
              Key Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {partner.specialties.map((spec, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-700 px-3 py-1 text-xs font-medium rounded-full font-sans"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 flex-grow">
          {partner.infoGroups.map((group) => (
            <div key={group.heading}>
              <h5 className="text-base font-semibold text-gray-800 mb-2 font-sans">
                {group.heading}
              </h5>
              <ul className="list-disc list-inside space-y-1 pl-1">
                {group.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 font-sans leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OurPartnersPage: NextPage = () => {
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
            backgroundImage: "url('/assets/meet-partners-banner.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="md:w-3/4 lg:w-2/3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-oswald text-white leading-tight">
                Meet Our <span className="text-[#D4AF37]">Legal Experts</span>
              </h1>
              <p className="mt-5 md:mt-6 text-lg md:text-xl text-gray-200 font-inter max-w-3xl">
                Our team of accomplished attorneys brings decades of combined
                experience across diverse practice areas to deliver exceptional
                legal representation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-100 font-inter">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-oswald">
              The Minds Behind {firmName}
            </h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Our partners bring new ideas and a strong commitment to quality in
              every case.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              {partnersData.map((partner, index) => (
                <AboutPartnerCard
                  key={partner.id}
                  partner={partner}
                  imageSide={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white py-16 md:py-20 font-inter">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-5 font-oswald">
              Connect With Our Legal Experts
            </h3>
            <p className="text-lg text-gray-300 font-sans mb-10 max-w-xl mx-auto">
              Whether you need advice on a specific legal matter or want to
              explore how we can support your business, our partners are ready
              to assist you.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-black px-8 py-3.5 font-semibold font-sans text-base lg:text-lg hover:bg-opacity-85 transition-opacity w-full sm:w-auto"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3.5 font-semibold font-sans text-base lg:text-lg hover:bg-[#D4AF37] hover:text-black transition-colors w-full sm:w-auto"
              >
                Contact a Specific Partner
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurPartnersPage;
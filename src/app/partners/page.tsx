"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Partner {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  specialties: string[];
  partnerInfo: string[];
}

const firmName = "FMC Law";

const partnersData: Partner[] = [
  {
    id: 1,
    name: "Lcid Crescent Fernandez",
    role: "MANAGING PARTNER",
    imageUrl: "/assets/partners/lcid.jpg",
    specialties: [],
    partnerInfo: [
      "Atty. Lcid Crescent Fernandez is a dynamic entrepreneur and legal professional with a Juris Doctor degree from the University of San Agustin, a business degree from the University of the Philippines Visayas, and a track record of excellence in law, business, and communication. He currently serves as CEO of Prometheus, Promises Film and Creative Studio, WARP Innovations and Technologies, Inc., and 101 Food, while also holding leadership roles as Vice President – External of Daily Guardian, President and Chairman of Quiklab Diagnostics, Inc., and a founding stockholder of Asia Pacific Medical Center Iloilo.",
      "His experience spans both the private and public sectors, having served as Chief of Staff to the Provincial Federation President of the Liga ng mga Barangay and as Technical Assistant at the Department of Education Central Office. Earlier in his career, he worked as an Editorial Assistant for Daily Guardian and team leader for a gubernatorial campaign.",
      "Atty. Fernandez has been recognized for his leadership and innovation, receiving the Innovative Entrepreneur Award from the Philippine Chamber of Commerce and Industry – Iloilo Chapter, Marketing Leader of the Year at the 2023 Marketing Excellence Awards, and the Dungganon sa Barotacnon Award for Entrepreneurship. He is also a recipient of the Young Ilonggo Entrepreneur of the Year (Special Citation) and has won multiple awards in national and international moot court and debate competitions.",
      "Atty. Lcid Crescent Fernandez is a multi-awarded entrepreneur and lawyer, having received his legal education from the University of the Philippines, Ateneo Law School, and the University of San Agustin. He is currently leading multiple ventures across media, technology, healthcare, and food, while bringing a strong background in public service, advocacy, and strategic communication.",
    ],
  },
  {
    id: 2,
    name: "Carl Vincent Mondejar, CPA",
    role: "PARTNER",
    imageUrl: "/assets/partners/mondejar.jpg",
    specialties: [],
    partnerInfo: [
      "Atty. Carl Mondejar holds a Juris Doctor degree from Ateneo de Manila University School of Law and has built a career at the intersection of public service and legal practice.",
      "He began his legal career as an Associate at Gerodias Suchianco Estrella Law and previously served as a Sangguniang Bayan Member of New Lucena, Iloilo.",
      "His professional development reflects a deep commitment to governance, civic engagement, and legal service, shaped by both private sector experience and legislative work at the local level.",
      "He is set to assume office as the incoming Mayor of New Lucena, bringing with him a strong legal foundation, a vision for progressive leadership, and a passion for community development.",
    ],
  },
  {
    id: 3,
    name: "Atty. Ryan Carlo L. Cordero",
    role: "PARTNER",
    imageUrl: "/assets/partners/cordero.jpg",
    specialties: ["Civ.", "Crim.", "Labor", "Admin."],
    partnerInfo: [
      "Atty. Ryan Carlo L. Cordero, a former Managing Partner, holds a Juris Doctor degree from De La Salle University – Manila and a bachelor’s degree in Consular and Diplomatic Affairs from De La Salle – College of Saint Benilde. He was admitted to the Philippine Bar in December 2023.",
      "Before founding Cordero Law Office, he served as an Associate Attorney at Santos Paruñgao Aquino and Santos Law Offices (SPASLaw). ",
      "His professional development includes certifications and specialized training in government procurement (RA 9184), risk reduction and emergency response, and security management. He holds a Civil Service Professional Eligibility and has completed courses with the Department of Foreign Affairs, National Risk Reduction and Management Council (NDRRMC), National Intelligence Coordinating Agency (NICA), and the Metro Manila Development Authority (MMDA).",
      "Prior to his legal practice, Atty. Cordero worked as a Planning Officer at the Department of Foreign Affairs – Office of Intelligence and Security, and held an early internship at the Office of Senator Alan Peter S. Cayetano in the Senate of the Philippines. He also gained legal experience as a legal intern at Rouse Philippines / Baranda and Associates.",
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

        <div
        // className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 flex-grow"
        >
          <ul className="list-none list-inside space-y-1 pl-1">
            {partner.partnerInfo.map((info, groupIndex) => (
              <li
                key={groupIndex}
                className="text-sm text-gray-600 font-inter leading-relaxed mb-4 text-justify"
              >
                {info}
              </li>
            ))}
          </ul>
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
            backgroundImage:
              "url('/assets/background/meet-partners-banner.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left ">
            <div className="md:w-3/4 lg:w-2/3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-oswald text-white leading-tight">
                The Minds Behind{" "}
                <span className="text-[#D4AF37]">{firmName}</span>
              </h1>
              <p className="mt-5 md:mt-6 text-lg md:text-xl text-gray-200 font-inter max-w-3xl">
                Our partners bring new ideas and a strong commitment to quality
                in every case.
              </p>
            </div>
            <div className="mt-8 h-1 w-24 bg-[#D4AF37]"></div>
          </div>
        </section>

        {/* <section className="py-16 md:py-24 bg-gray-100 font-inter">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 font-oswald">
              The Minds Behind {firmName}
            </h2>
            <p className="text-lg text-gray-600 font-sans leading-relaxed">
              Our partners bring new ideas and a strong commitment to quality in
              every case.
            </p>
          </div>
        </section> */}

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

"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";

const coreValuesData = [
  {
    title: "Excellence",
    description: "Top-tier lawyers with proven expertise.",
    iconSrc: "/assets/icons/award-pin-solid.svg",
    iconAlt: "Excellence icon",
  },
  {
    title: "Client-Focused",
    description: "Your goals guide everything we do.",
    iconSrc: "/assets/icons/handshake-solid.svg",
    iconAlt: "Collaboration icon",
  },
  {
    title: "Integrity",
    description: "Trust built on honesty and professionalism.",
    iconSrc: "/assets/icons/scales-solid.svg",
    iconAlt: "Integrity icon",
  },

  {
    title: "Foresight",
    description: "We anticipate issues before they arise, keeping you ahead.",
    iconSrc: "/assets/icons/eye-solid.svg",
    iconAlt: "Integrity icon",
  },
];

const leadershipData = [
  {
    id: 1,
    name: "Lcid Crescent Fernandez",
    role: "Managing Partner",
    bio: "With over 20 years of experience in corporate law, Alexandra leads our firm with vision and integrity, specializing in complex commercial litigation.",
    imageUrl: "/assets/partners/alexandra.png",
  },
  {
    id: 2,
    name: "Carl Vincent Mondejar, CPA",
    role: "Partner",
    bio: "A former federal prosecutor, Jonathan brings unparalleled expertise in white-collar defense and corporate compliance matters.",
    imageUrl: "/assets/partners/jonathan.png",
  },
  {
    id: 3,
    name: "Ryan Carlo Cordero",
    role: "Partner",
    bio: "A tech industry veteran, Michelle leads our intellectual property and data privacy practice with innovative approaches to complex challenges.",
    imageUrl: "/assets/partners/michelle.png",
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="text-gray-800">
        <section className="bg-white py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold font-oswald text-gray-900 text-center">
              About Us
            </h1>
            <p className="font-inter mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              FMC Law combines traditional legal expertise with innovative
              approaches to deliver exceptional representation for our clients’
              most complex challenges.
            </p>
            <div className="mt-8 h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-oswald text-gray-900 mb-6">
                  Firm Profile
                </h2>
                <p className="text-gray-700 font-inter leading-relaxed mb-4">
                  Established in 2025, FMC Law was built on the belief that
                  today’s legal challenges require more than just expertise.
                  They demand responsiveness, integrity, and a genuine
                  understanding of each client’s needs. The firm was created to
                  offer a fresh, client-centered approach to legal
                  representation, combining strategic insight with principled
                  service.
                </p>
                <p className="text-gray-700 font-inter leading-relaxed mb-4">
                  At the heart of FMC Law’s philosophy is a commitment to
                  meaningful engagement. Every solution is tailored, every
                  strategy carefully aligned with the client’s unique goals.
                  This dedication to thoughtful, personalized service has shaped
                  the firm’s identity from the start.
                </p>
                <p className="text-gray-700 font-inter leading-relaxed mb-4">
                  With offices in Iloilo and Metro Manila, FMC Law is positioned
                  to serve a broad range of clients across regions. The firm is
                  composed of lawyers from diverse legal and professional
                  backgrounds, enabling it to address a wide variety of legal
                  concerns with depth and nuance: from corporate law and
                  taxation to civil litigation, estate planning, and beyond.
                </p>
                <p className="text-gray-700 font-inter leading-relaxed mb-4">
                  FMC Law aims to be more than a provider of legal services. It
                  strives to be a trusted partner, delivering clarity,
                  confidence, and results. Grounded in professionalism and
                  guided by values, the firm remains focused on what matters
                  most: helping clients move forward with strength and
                  certainty.
                </p>
                <p className="text-gray-700 font-inter leading-relaxed">
                  The driving force behind FMC Law is its roster of founding
                  partners: Atty. Lcid Crescent Fernandez, Atty. Carl Vincent
                  Mondejar, CPA, and Atty. Ryan Carlo Cordero. This collective
                  of legal professionals brings diverse specializations and a
                  unified focus on achieving client objectives with integrity.
                  Their collaborative leadership ensures the firm consistently
                  provides sound guidance and a steadfast commitment to
                  excellence in every legal engagement.
                </p>
              </div>
              <div className="relative mt-10 md:mt-0">
                <div className="relative w-full aspect-[4/3] shadow-xl">
                  <Image
                    src="/assets/table-people.png"
                    alt="FMC Law team discussion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-20 h-20 bg-[#D4AF37] z-10"></div>
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 bg-black z-10"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-oswald text-center text-gray-900 mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValuesData.map((value) => (
                <div
                  key={value.title}
                  className="bg-white border border-gray-100 p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-white bg-[#D4AF37]">
                    <Image
                      src={value.iconSrc}
                      alt={value.iconAlt}
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold font-inter text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white text-white py-16 md:py-5">
          <div className="bg-black max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <h3 className="text-3xl lg:text-4xl font-bold font-sans text-center mb-10">
              Our Mission
            </h3>
            <div className="max-w-3xl mx-auto space-y-6 text-center text-gray-300 font-inter leading-relaxed text-lg">
              <p>
                FMC Law is driven by a mission to offer effective legal
                representation built on professionalism and genuine commitment
                to each client. We commit to understanding individual client
                needs and crafting specific solutions that deliver desired
                outcomes.
              </p>
            </div>
            <p className="text-[#D4AF37] text-2xl lg:text-3xl font-inter mt-12 text-center max-w-2xl mx-auto">
              &quot;Excellence is our standard, not our goal.&quot;
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-oswald font-bold text-center text-gray-900 mb-16">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-inter">
              {leadershipData.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-white border border-gray-200 shadow-md overflow-hidden flex flex-col transition-shadow hover:shadow-xl"
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={leader.imageUrl}
                      alt={`Portrait of ${leader.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-center bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                      <h4 className="text-2xl font-sans text-white mb-1">
                        {leader.name}
                      </h4>
                      <p className="text-md font-medium text-[#D4AF37] font-sans mb-2">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link
                href="/partners"
                className="text-black font-bold font-sans hover:underline text-lg transition-colors"
              >
                View All Partners →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white md:py-8">
          <div className="bg-black p-12 sm:p-20 max-w-7xl mx-auto my-10 sm:my-20 relative">
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-oswald mb-4">
                Experience the Difference
              </h2>
              <p className="text-lg text-gray-200 font-inter mb-10 max-w-2xl mx-auto">
                Talk to our legal team and see how we can help you move forward.
              </p>
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-black px-10 py-4 font-semibold font-sans text-lg hover:bg-opacity-80 transition-colors"
              >
                Get in Touch Today
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUsPage;

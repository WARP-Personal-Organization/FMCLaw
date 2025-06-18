// components/FmcLawLandingPage.jsx
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";
import PartnersCard from "./PartnersCard";
// For a real Next.js project, you'd import Link and Image:
// import Link from 'next/link';
// import Image from 'next/image';

// Placeholder for icons (replace with actual SVGs or an icon library)
const PlaceholderIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const GoldCheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4AF37"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 flex-shrink-0"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const FmcLawLandingPage = () => {
  const practiceAreas = [
    {
      name: "Corporate Law",
      description: "Expert advice on corporate governance and structuring.",
      image: "assets/Our_expertise/scales-solid.png",
    },
    {
      name: "Commercial Law",
      description: "Navigating complex commercial transactions and agreements.",
      image: "assets/Our_expertise/commercial-law-solid.png",
    },
    {
      name: "Litigation",
      description: "Strategic representation in contentious legal disputes.",
      image: "assets/Our_expertise/judge-hammer-solid.png",
    },
    {
      name: "Intellectual Property",
      description: "Protecting your innovations and creative works.",
      image: "assets/Our_expertise/TM-solid.png",
    },
    {
      name: "Labor Law",
      description: "Guidance on employment relations and workplace compliance.",
      image: "assets/Our_expertise/labor-law-solid.png",
    },
    {
      name: "Criminal Law",
      description: "Robust defense for individuals facing criminal charges.",
      image: "assets/Our_expertise/criminal-law-solid.png",
    },
    {
      name: "Administrative Law",
      description: "Challenging governmental decisions and regulatory actions.",
      image: "assets/Our_expertise/TM-solid.png",
    },
    {
      name: "Civil Law",
      description: "Resolving disputes between individuals and organizations.",
      image: "assets/Our_expertise/TM-solid.png",
    },
    {
      name: "Election Law",
      description: "Ensuring fair and lawful electoral processes.",
      image: "assets/Our_expertise/TM-solid.png",
    },
  ];

  const whyChooseReasons = [
    {
      name: "Excellence",
      image: "assets/Why_choose_FMC/award-pin-solid.png",
      description: "Legal expertise exemplified by a team of accomplished practitioners at the forefront of their fields."
    },
    {
      name: "Innovation",
      image: "assets/Why_choose_FMC/lightbulb-solid.png",
      description: "Advanced legal solutions delivered through innovative strategies and technologies."
    },
    {
      name: "Client-Focused",
      image: "assets/Why_choose_FMC/handshake-solid.png",
      description: "Your success is our priority. Client success serves as the ultimate measure, with full commitment to realizing those goals."
    },
    {
      name: "Integrity",
      image: "assets/Our_expertise/scales-solid.png",
      description: "Professional conduct of the highest standard establishes relationships built on transparency and trust."
    },
    {
      name: "Foresight",
      image: "assets/Why_choose_FMC/eye-solid.png",
      description: "Proactive identification and resolution of potential legal challenges, ensuring clients consistently maintain an advantageous position."
    }
  ];

  const partnersData = [
    {
      id: 1,
      name: "Alexandra Reynolds",
      role: "Managing Partner",
      imageUrl: "assets/alexandra.png",
      details: [
        {
          label: "Credentials",
          value:
            "Board Certified in Civil Trial Law, Certified Mediator, AV Preeminent® Rated",
        },
        {
          label: "Employment History",
          value:
            "Former Senior Partner at Wilson & Reed (2010-2018); Judicial Law Clerk, U.S. Court of Appeals (2005-2007)",
        },
        {
          label: "Areas of Practice",
          value: "Corporate Litigation, M&A, International Business Law",
        },
        {
          label: "Education",
          value:
            "J.D., Harvard Law School (magna cum laude); B.A. Economics, Yale",
        },
      ],
    },
    {
      id: 2,
      name: "Jonathan Blackwell",
      role: "Senior Partner",
      imageUrl: "assets/jonathan.png",
      details: [
        {
          label: "Credentials",
          value:
            "Fellow, American College of Trial Lawyers; Super Lawyers® Top 100",
        },
        {
          label: "Employment History",
          value:
            "Founding Partner, Blackwell & Associates (2008-2020); Assistant U.S. Attorney (2002-2008)",
        },
        {
          label: "Areas of Practice",
          value:
            "White-Collar Defense, Corporate Compliance, Complex Civil Litigation",
        },
        {
          label: "Education",
          value:
            "J.D., Stanford Law School; B.A. Political Science, Georgetown",
        },
      ],
    },
    {
      id: 3,
      name: "Michelle Chen",
      role: "Partner",
      imageUrl: "assets/michelle.png",
      details: [
        {
          label: "Credentials",
          value:
            "Certified Intellectual Property Specialist; Rising Stars® (2018-2025)",
        },
        {
          label: "Employment History",
          value:
            "Senior Associate, Tech Law Partners (2015-2022); In-house Counsel, InnovateTech (2012-2015)",
        },
        {
          label: "Areas of Practice",
          value:
            "Intellectual Property, Technology Law, Data Privacy & Cyber-security",
        },
        {
          label: "Education",
          value:
            "J.D., UC Berkeley School of Law; M.S. Computer Science, MIT; B.S. Electrical Engineering, Caltech",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero Section (UNCHANGED) */}
        <section
          id="home"
          className="relative bg-gray-700 min-h-[600px] flex items-center justify-center text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#CE9930]/90 via-black to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-22">
            <div className="grid md:grid-cols-10 gap-8 items-center">
              <div className="md:col-span-6 text-center md:text-left">
                <h1 className="text-[3.5rem] leading-tight font-Oswald font-bold font-sans mb-7 text-[#CE9930]">
                  Reimagining Legal Solutions for Complex Challenges
                </h1>
                <p className="text-lg text-gray-200 font-sans max-w-[48ch] mx-auto md:mx-0 mb-10">
                  FMC Law delivers unparalleled legal expertise, innovative
                  strategies, and a client-first approach to navigate your most
                  intricate legal matters with confidence and clarity.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                  <a
                    href="#contact"
                    className="bg-[#D4AF37] text-black px-8 py-3 rounded-md font-semibold font-sans text-lg hover:bg-opacity-80 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#about"
                    className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold font-sans text-lg hover:bg-white hover:text-black transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:col-span-4 hidden md:flex justify-center md:justify-end items-center">
                <img
                  src="/assets/fmc-emblem-large.svg"
                  alt="FMC Law Emblem"
                  className="w-3/3 max-w-md opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro Section (UPDATED) */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[64px]">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className="md:col-span-3">
                {" "}
                {/* Text (60%) */}
                <h2 className="text-3xl lg:text-4xl font-[Avenir Next Family] font-bold font-sans text-gray-900 mb-6">
                  A Different Kind of Law Firm
                </h2>
                <p className="text-lg text-gray-700 font-sans mb-8 leading-relaxed max-w-[50ch]">
                  At FMC Law, we&apos;ve redefined the traditional law firm
                  model. Our modern, client-centric approach prioritizes
                  transparent communication, innovative solutions, and a deep
                  understanding of your unique needs, ensuring you feel
                  empowered and informed every step of the way.
                </p>
                <a
                  href="#about-us-detailed" // Point to a relevant section or page
                  className="inline-block border border-black text-black py-[10px] px-[32px] rounded-[6px] text-sm font-semibold font-sans hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Learn More
                </a>
              </div>
              <div className="md:col-span-2 relative mt-10 md:mt-0">
                {" "}
                {/* Image (40%) */}
                <div className="relative">
                  <img
                    className="border-4 border-black shadow-xl w-full aspect-[4/5] object-cover"
                    src="\assets\diff-kind-of-law-firm.png" // Replace with actual portrait image
                    alt="Modern Legal Professional at FMC Law"
                  />
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#D4AF37] rounded-sm z-10"></div>{" "}
                  {/* Decorative square */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Practice Areas Section (UNCHANGED) */}
        <section className="bg-[#F7F8FA] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-center text-gray-900 mb-16">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white p-8 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6 text-white">
                    {/* <PlaceholderIcon className="w-8 h-8" /> */}
                    <img src={area.image} alt={area.name} className=""/>
                  </div>
                  <h3 className="text-xl font-bold font-sans text-gray-900 mb-3">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose FMC Law Section (UNCHANGED) */}
        <section className="bg-black text-white py-14 md:py-[56px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans mb-16">
              Why Choose FMC Law?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {whyChooseReasons.map((reason) => (
                <div key={reason.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-[#D4AF37] bg-[#D4AF37]">
                    <img src={reason.image} alt={reason.name} />
                  </div>
                  <p className="text-lg font-semibold font-sans italic mb-3">{reason.name}</p>
                  <p className="text-[#D1D5DB] font-sans text-sm leading-relaxed flex-grow">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Mid-page CTA Banner (UNCHANGED) */}
        <section
          className="relative bg-cover bg-fixed bg-center py-24 md:py-32"
          style={{
            backgroundImage: "url('/assets/dark-office-interior.png')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-[2.25rem] md:text-4xl leading-tight font-bold font-sans mb-8">
              Ready to Work with FMC Law?
            </h2>
            <p className="text-[#D1D5DB] font-sans text-sm leading-relaxed flex-grow mb-10 mx-40">
              Schedule a consultation with our experienced attorneys and discover how we can help you navigate your legal challenges.
            </p>
            <a
              href="#contact"
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-md font-semibold font-sans text-lg hover:bg-opacity-80 transition-colors"
            >
              Get in Touch Today
            </a>
          </div>
        </section>

        {/* 6. About FMC Law Section (UNCHANGED) */}
        <section id="about" className="bg-white py-16 md:py-20">
          <div className="text-center mb-12">
            {/* mb-12 is 48px */}
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-gray-900 mb-3">
              About FMC Law
            </h2>
            <div className="mx-auto w-[56px] h-[3px] bg-[#D4AF37]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <img
                  className="rounded-lg shadow-xl object-cover"
                  src="assets/table-people.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold font-sans text-gray-900 mb-8">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 font-sans leading-relaxed">
                  FMC Law is driven by a mission to offer outstanding legal
                  representation built on<b> professionalism, integrity</b>, and
                  <b> client-focused </b>service.
                  <br />
                  <br />
                  We commit to understanding individual client needs and
                  crafting specific solutions that deliver desired outcomes.
                  <br />
                  <br />
                  We believe in integrating foundational legal expertise with
                  innovative approaches to meet the evolving demands faced by
                  our clients.
                </p>
                <div className="flex items-center gap-5 mt-5">
                  <div className="m-0 w-[32px] h-[3px] bg-[#D4AF37]"></div>
                  <p className="font-bold italic text-black justify-start">
                    &quot;Excellence is our standard, not our goal.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="order-1 md:order-2">
                <img
                  className="rounded-lg shadow-xl"
                  src="assets/table-empty.png"
                  alt="FMC Law Conference Table"
                />
              </div>
              <div className="order-2 md:order-1 font-sans">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Our Values
                </h3>
                <div className="flex items-start space-x-3 text-black mb-4">
                  <img src="assets/scales-outline.png" alt="" />
                  <div>
                    <p className="font-bold mb-4">Integrity</p>
                    <p className="text-sm text-[#374151]">
                      We adhere to the highest ethical standards in all our
                      dealings, ensuring transparency and honesty in our client
                      relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-black mb-4">
                  <img src="assets/scales-outline.png" alt="" />
                  <div>
                    <p className="font-bold mb-4">Excellence</p>
                    <p className="text-sm text-[#374151]">
                      We strive for excellence in everything we do, from legal
                      analysis and strategy to client communication and case
                      management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-black mb-4">
                  <img src="assets/scales-outline.png" alt="" />
                  <div>
                    <p className="font-bold mb-4">Collaboration</p>
                    <p className="text-sm text-[#374151]">
                      We work closely with our clients, building partnerships
                      based on mutual respect and shared goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-black mb-4">
                  <img src="assets/scales-outline.png" alt="" />
                  <div>
                    <p className="font-bold mb-4">Innovation</p>
                    <p className="text-sm text-[#374151]">
                      We embrace creative thinking and new technologies to
                      deliver efficient, effective legal solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="bg-white py-16 md:py-20">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold  text-gray-900 mb-3">
                Our Partners
              </h2>
              <p className="text-base text-[#5A5A5A] mb-6 max-w-2xl mx-auto">
                Meet the distinguished legal minds at FMC Law, dedicated to
                achieving exceptional results for our clients.
              </p>
              <div className="mx-auto w-[56px] h-[3px] bg-[#D4AF37]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnersData.map((partner) => (
                <PartnersCard partner={partner} key={partner.id} />
              ))}
            </div>
          </div>
        </section>

        {/* 8. Contact Section (UNCHANGED) */}
        <section id="contact" className="bg-[#FAFBFC] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* mb-12 is 48px */}
              <h2 className="text-3xl lg:text-4xl font-bold  text-gray-900 mb-3">
                Contact Us
              </h2>
              <p className="text-base text-[#5A5A5A] font-sans mb-6 max-w-2xl mx-auto">
                Ready to discuss your legal needs? Reach out to schedule a
                consultation with one of our experienced attorneys.
              </p>
              <div className="mx-auto w-[56px] h-[3px] bg-[#D4AF37]"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
              <div className="md:w-3/5 bg-white p-8 rounded-lg shadow-lg">
                <form action="#" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 font-sans mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 font-sans mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 font-sans mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 font-sans mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 font-sans mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-black text-white px-8 py-3 rounded-md font-semibold font-sans hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="md:w-2/5 space-y-8 mt-10 md:mt-0">
                <div className=" bg-black p-8 rounded-lg shadow-lg space-y-6">
                  <h3 className="text-xl font-bold font-sans text-white">
                    Firm Contact Details
                  </h3>
                  <div className="flex items-start space-x-3 text-white">
                    <img src="assets/pin-outline.png" alt="" />
                    <span className="font-sans">
                      <b>Address</b>
                      <br />
                      1234 Legal Avenue, Suite 500
                      <br />
                      Metropolis, NY 10001
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src="assets/phone-outline.png" alt="" />
                    <span className="font-sans ">
                      <b>Phone</b>
                      <br />
                      (212) 555-1234
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src="assets/mail-outline.png" alt="" />
                    <span className="font-sans ">
                      <b>Email</b>
                      <br />
                      info@fmclaw.ph
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src="assets/clock-outline.png" alt="" />
                    <span className="font-sans ">
                      <b>Office Hours</b>
                      <br />
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: By appointment only
                      <br />
                      Sunday: Closed
                    </span>
                  </div>
                </div>
                <div className="aspect-square  rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    title="FMCLaw Address"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2000000000003!2d-73.98785368459365!3d40.75806097932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6434221%3A0x60f937894d3c3d11!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1616000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default FmcLawLandingPage;

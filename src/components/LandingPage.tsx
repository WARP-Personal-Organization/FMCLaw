// components/FmcLawLandingPage.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";
import PartnersCard from "./PartnersCard";

interface PracticeArea {
  name: string;
  description: string;
  image: string;
}

interface WhyChooseReason {
  name: string;
  image: string;
  description: string;
}

interface PartnerDetailItem {
  label: string;
  value: string;
}

interface Partner {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  details: PartnerDetailItem[];
}

const FmcLawLandingPage: React.FC = () => {
  const practiceAreas: PracticeArea[] = [
    {
      name: "Corporate Law",
      description: "Expert advice on corporate governance and structuring.",
      image: "/assets/scales-solid.svg",
    },
    {
      name: "Commercial Law",
      description: "Navigating complex commercial transactions and agreements.",
      image: "/assets/Our_expertise/commercial-law-solid.svg",
    },
    {
      name: "Litigation",
      description: "Strategic representation in contentious legal disputes.",
      image: "/assets/Our_expertise/judge-hammer-solid.svg",
    },
    {
      name: "Intellectual Property",
      description: "Protecting your innovations and creative works.",
      image: "/assets/Our_expertise/TM-solid.svg",
    },
    {
      name: "Labor Law",
      description: "Guidance on employment relations and workplace compliance.",
      image: "/assets/Our_expertise/labor-law-solid.svg",
    },
    {
      name: "Criminal Law",
      description: "Robust defense for individuals facing criminal charges.",
      image: "/assets/Our_expertise/criminal-law-solid.svg",
    },
    {
      name: "Administrative Law",
      description: "Challenging governmental decisions and regulatory actions.",
      image: "/assets/Our_expertise/administrative-law-solid.svg",
    },
    {
      name: "Civil Law",
      description: "Resolving disputes between individuals and organizations.",
      image: "/assets/Our_expertise/scroll-solid.svg",
    },
    {
      name: "Election Law",
      description: "Ensuring fair and lawful electoral processes.",
      image: "/assets/Our_expertise/election-solid.svg",
    },
    {
      name: "Compliance",
      description: "Ensuring adherence to laws and regulatory standards.",
      image: "/assets/Our_expertise/compliance-solid.svg",
    },
  ];

  const whyChooseReasons: WhyChooseReason[] = [
    {
      name: "Excellence",
      image: "/assets/Why_choose_FMC/award-pin-solid.png",
      description: "Top-tier lawyers with proven expertise.",
    },
    {
      name: "Client-Focused",
      image: "/assets/Why_choose_FMC/handshake-solid.svg",
      description: "Your goals guide everything we do.",
    },
    {
      name: "Integrity",
      image: "/assets/scales-solid.svg",
      description: "Trust built on honesty and professionalism.",
    },
    {
      name: "Foresight",
      image: "/assets/Why_choose_FMC/eye-solid.svg",
      description: "We anticipate issues before they arise, keeping you ahead.",
    },
  ];

  const partnersData: Partner[] = [
    {
      id: 1,
      name: "Lcid Crescent Fernandez",
      role: "Managing Partner",
      imageUrl: "/assets/alexandra.png",
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
      name: "Carl Vincent Mondejar, CPA",
      role: "Partner",
      imageUrl: "/assets/jonathan.png",
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
      name: "Ryan Carlo Cordero",
      role: "Partner",
      imageUrl: "/assets/michelle.png",
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
        <section
          id="home"
          className="relative bg-[#CE9930] min-h-[600px] flex items-center justify-center text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black to-black" />
          <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <div className="md:w-3/5 text-center md:text-left py-8 md:py-0">
                <h1 className="text-[3rem] sm:text-[3.5rem] leading-tight font-oswald font-bold mb-7 text-[#CE9930]">
                  Legal Guidance That Moves You Forward
                </h1>
                <p className="text-lg text-gray-200 font-roboto mx-auto md:mx-0 mb-10 max-w-xl">
                  Bringing together diverse perspectives, we deliver dedicated
                  legal representation focused on achieving the best possible
                  outcome for you.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                  <Link
                    href="/contact"
                    className="bg-[#D4AF37] text-black px-8 py-3 font-semibold font-sans text-lg hover:bg-opacity-80 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/about"
                    className="border-2 border-white text-white px-8 py-3 font-semibold font-sans text-lg hover:bg-white hover:text-black transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center md:w-2/5 overflow-hidden p-4">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <Image
                    src="/assets/fmc-emblem-large.svg"
                    alt="FMC Law Emblem"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-[64px]">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center font-inter">
              <div className="md:col-span-3">
                <h2 className="text-3xl lg:text-4xl font-[Avenir Next Family] font-bold text-gray-900 mb-6">
                  A Different Kind of Law Firm
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-[50ch]">
                  Facing big challenges means you need legal support that’s
                  smart, practical, and trustworthy.
                  <br />
                  <br />
                  FMC Law delivers exactly that: client-focused, reliable
                  solutions that blend legal expertise with flexible strategies
                  to keep your goals front and center. With offices in Metro
                  Manila and Iloilo City, the firm serves clients across regions
                  with consistency, accessibility, and care.
                </p>
                <Link
                  href="/about"
                  className="inline-block border border-black text-black py-[10px] px-[32px] text-sm font-semibold font-sans hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
              <div className="md:col-span-2 relative mt-10 md:mt-0">
                <div className="relative w-full aspect-[1/1] border-4 border-black shadow-xl">
                  <Image
                    src="/assets/diff-kind-of-law-firm.png"
                    alt="Modern Legal Professional at FMC Law"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#D4AF37] rounded-sm z-10"></div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FA] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-inter">
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
                    <Image
                      src={area.image}
                      alt={`${area.name} icon`}
                      width={32}
                      height={32}
                    />
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

        <section className="bg-black text-white py-14 md:py-[56px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-inter mb-16">
              Why Choose FMC Law?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 font-roboto">
              {whyChooseReasons.map((reason) => (
                <div key={reason.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-white bg-[#D4AF37]">
                    <Image
                      src={reason.image}
                      alt={`${reason.name} icon`}
                      width={32}
                      height={32}
                    />
                  </div>
                  <p className="text-lg font-semibold italic mb-3">
                    {reason.name}
                  </p>
                  <p className="text-[#D1D5DB] text-sm leading-relaxed flex-grow">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative bg-cover bg-fixed bg-center py-24 md:py-32"
          style={{
            backgroundImage: "url('/assets/dark-office-interior.png')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-inter">
            <h2 className="text-white text-[2.25rem] md:text-4xl leading-tight font-bold mb-8">
              Ready to Work with FMC Law?
            </h2>
            <p className="text-[#D1D5DB] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our experienced attorneys and
              discover how we can help you navigate your legal challenges.
            </p>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 font-semibold text-lg hover:bg-opacity-80 transition-colors"
            >
              Get in Touch Today
            </Link>
          </div>
        </section>

        <section id="about" className="bg-white py-16 md:py-20 font-inter">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-gray-900 mb-3">
              About FMC Law
            </h2>
            <div className="mx-auto w-[56px] h-[3px] bg-[#D4AF37]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/assets/table-people.png"
                  alt="FMC Law team in a meeting"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold font-sans text-gray-900 mb-8">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 font-sans leading-relaxed">
                  FMC Law is driven by a mission to offer effective legal
                  representation built on professionalism and genuine commitment
                  to each client. We commit to understanding individual client
                  needs and crafting specific solutions that deliver desired
                  outcomes.
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
              <div className="order-1 md:order-2 relative w-full aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/assets/table-empty.png"
                  alt="FMC Law conference room"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="order-2 md:order-1 font-sans">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Our Values
                </h3>
                {[
                  {
                    title: "Integrity",
                    text: "We adhere to the highest ethical standards in all our dealings, ensuring transparency and honesty in our client relationships.",
                  },
                  {
                    title: "Excellence",
                    text: "We strive for excellence in everything we do, from legal analysis and strategy to client communication and case management.",
                  },
                  {
                    title: "Collaboration",
                    text: "We work closely with our clients, building partnerships based on mutual respect and shared goals.",
                  },
                  {
                    title: "Innovation",
                    text: "We embrace creative thinking and new technologies to deliver efficient, effective legal solutions.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="flex items-start space-x-3 text-black mb-4"
                  >
                    <Image
                      src="/assets/scales-outline.png"
                      alt={`${value.title} icon`}
                      width={24}
                      height={24}
                    />
                    <div>
                      <p className="font-bold mb-1">{value.title}</p>
                      <p className="text-sm text-[#374151]">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="bg-white py-16 md:py-20 font-inter">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
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

        <section
          id="contact"
          className="bg-[#FAFBFC] py-16 md:py-20 font-inter"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p className="text-base text-[#5A5A5A] font-sans mb-6 max-w-2xl mx-auto">
                Ready to discuss your legal needs? Reach out to schedule a
                consultation with one of our experienced attorneys.
              </p>
              <div className="mx-auto w-[56px] h-[3px] bg-[#D4AF37]"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
              <div className="md:w-3/5 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
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
                <div className="bg-black p-6 sm:p-8 rounded-lg shadow-lg space-y-6 text-white">
                  <h3 className="text-xl font-bold font-sans">
                    Firm Contact Details
                  </h3>
                  {[
                    {
                      icon: "/assets/pin-outline.png",
                      alt: "Location pin icon",
                      lines: [
                        "<b>Address</b>",
                        "Iloilo Office: 2F, Daily Guardian Center,",
                        "Guzman Jasena, Mandurriao, Iloilo City",
                        "",
                        "Manila Office: #62 Saint Peter Street,",
                        "Brgy. Oranbo, Pasig City",
                      ],
                    },
                    {
                      icon: "/assets/phone-outline.png",
                      alt: "Phone icon",
                      lines: ["<b>Phone</b>", "(033) 329-28-38"],
                    },
                    {
                      icon: "/assets/mail-outline.png",
                      alt: "Email icon",
                      lines: ["<b>Email</b>", "admin@fmclaw.com.ph"],
                    },
                    {
                      icon: "/assets/clock-outline.png",
                      alt: "Clock icon",
                      lines: [
                        "<b>Office Hours</b>",
                        "Mon-Fri: 9:00 AM - 6:00 PM",
                      ],
                    },
                  ].map((item) => (
                    <div key={item.alt} className="flex items-start space-x-3">
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={24}
                        height={24}
                        className="mt-1"
                      />
                      <span
                        className="font-sans text-sm"
                        dangerouslySetInnerHTML={{
                          __html: item.lines.join("<br />"),
                        }}
                      />
                    </div>
                  ))}
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

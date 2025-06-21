// components/FmcLawLandingPage.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants, Easing } from "framer-motion";
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

const StaggeredChildAnimation: React.FC<{ children: React.ReactNode, className?: string, staggerAmount?: number, once?: boolean }> = ({ children, className, staggerAmount = 0.1, once = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerAmount,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as Easing,
    },
  },
};

const FmcLawLandingPage: React.FC = () => {
  const practiceAreas: PracticeArea[] = [
    {
      name: "Corporate Law",
      description: "Expert advice on corporate governance and structuring.",
      image: "/assets/icons/scales-solid.svg",
    },
    {
      name: "Commercial Law",
      description: "Navigating complex commercial transactions and agreements.",
      image: "/assets/icons/commercial-law-solid.svg",
    },
    {
      name: "Litigation",
      description: "Strategic representation in contentious legal disputes.",
      image: "/assets/icons/judge-hammer-solid.svg",
    },
    {
      name: "Intellectual Property",
      description: "Protecting your innovations and creative works.",
      image: "/assets/icons/TM-solid.svg",
    },
    {
      name: "Labor Law",
      description: "Guidance on employment relations and workplace compliance.",
      image: "/assets/icons/labor-law-solid.svg",
    },
    {
      name: "Criminal Law",
      description: "Robust defense for individuals facing criminal charges.",
      image: "/assets/icons/criminal-law-solid.svg",
    },
  ];

  const whyChooseReasons: WhyChooseReason[] = [
    {
      name: "Excellence",
      image: "/assets/icons/award-pin-solid.svg",
      description: "Top-tier lawyers with proven expertise.",
    },
    {
      name: "Client-Focused",
      image: "/assets/icons/handshake-solid.svg",
      description: "Your goals guide everything we do.",
    },
    {
      name: "Integrity",
      image: "/assets/icons/scales-solid.svg",
      description: "Trust built on honesty and professionalism.",
    },
    {
      name: "Foresight",
      image: "/assets/icons/eye-solid.svg",
      description: "We anticipate issues before they arise, keeping you ahead.",
    },
  ];

  const partnersData: Partner[] = [
    {
      id: 1,
      name: "Lcid Crescent Fernandez",
      role: "Managing Partner",
      imageUrl: "/assets/partners/lcid.jpg",
      details: [
        {
          label: "",
          value:
            "Atty. Lcid Crescent Fernandez is a multi-awarded lawyer and entrepreneur with a Juris Doctor from the University of San Agustin and a business degree from UP Visayas, currently leading multiple ventures across media, technology, healthcare, and food, while bringing a strong background in public service, advocacy, and strategic communication.",
        },
      ],
    },
    {
      id: 2,
      name: "Carl Vincent Mondejar, CPA",
      role: "Partner",
      imageUrl: "/assets/partners/mondejar.jpg",
      details: [
        {
          label: " ",
          value:
            "Atty. Carl Mondejar is an Ateneo Law School graduate and former associate at Gerodias Suchianco Estrella Law, with experience as a Sangguniang Bayan Member of New Lucena, now poised to serve as the municipality's incoming mayor.",
        },
      ],
    },
    {
      id: 3,
      name: "Ryan Carlo Cordero",
      role: "Partner",
      imageUrl: "/assets/partners/cordero.jpg",
      details: [
        {
          label: "",
          value:
            "Atty. Ryan Carlo L. Cordero is the Managing Partner of Cordero Law Office and a De La Salle University–Manila Juris Doctor graduate with a background in foreign affairs and specialized training in procurement, risk management, and security.",
        },
      ],
    },
  ];
  const [isLandingFormSubmitting, setIsLandingFormSubmitting] = useState(false);
  const [landingFormStatus, setLandingFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleLandingFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsLandingFormSubmitting(true);
    setLandingFormStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });

      if (response.ok) {
        setLandingFormStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });
        form.reset();
      } else {
        const errorText = await response.text();
        setLandingFormStatus({
          type: "error",
          message: `Submission failed: ${errorText || "Please try again."}`,
        });
      }
      } catch (submitError) { 
      console.error("Landing form submission error:", submitError);
      setLandingFormStatus({ type: 'error', message: "An unexpected error occurred. Please try again." });
    } finally {
      setIsLandingFormSubmitting(false);
    }
  };

  const heroTextVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut" as Easing,
      },
    }),
  };

  const heroImageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut" as Easing,
      },
    },
  };

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
          <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <motion.div 
                className="md:w-3/5 text-center md:text-left py-8 md:py-0"
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  className="text-[3rem] sm:text-[3.5rem] leading-tight font-oswald font-bold mb-7 text-[#CE9930]"
                  variants={heroTextVariants}
                  custom={0}
                >
                  Legal Guidance <br></br>That Moves You Forward
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-200 font-roboto mx-auto md:mx-0 mb-10 max-w-xl"
                  variants={heroTextVariants}
                  custom={1}
                >
                  Bringing together diverse perspectives, we deliver dedicated
                  legal representation focused on achieving the best possible
                  outcome for you.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
                  variants={heroTextVariants}
                  custom={2}
                >
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
                </motion.div>
              </motion.div>
              <motion.div 
                className="hidden md:flex md:w-2/5 justify-center items-center overflow-hidden p-4"
                variants={heroImageVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="relative w-[600px] aspect-square ">
                  <Image
                    src="/assets/logos/fmc-emblem-large.png"
                    alt="FMC Law Emblem"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </motion.div>
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
                    src="/assets/background/main1.jpg"
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
            <StaggeredChildAnimation className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area) => (
                <motion.div
                  key={area.name}
                  className="bg-white p-8 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                  variants={itemVariants}
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
                </motion.div>
              ))}
            </StaggeredChildAnimation>
          </div>
        </section>

        <section className="bg-black text-white py-14 md:py-[56px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-inter mb-16">
              Why Choose FMC Law?
            </h2>
            <StaggeredChildAnimation 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 font-roboto"
                staggerAmount={0.15}
            >
              {whyChooseReasons.map((reason) => (
                <motion.div 
                    key={reason.name} 
                    className="flex flex-col items-center"
                    variants={itemVariants}
                >
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
                </motion.div>
              ))}
            </StaggeredChildAnimation>
          </div>
        </section>

        <section
          className="relative bg-cover bg-fixed bg-center py-24 md:py-32"
          style={{
            backgroundImage:
              "url('/assets/background/dark-office-interior.png')",
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
                  src="/assets/background/main2.jpg"
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
                  src="/assets/background/main3.jpg"
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
                    title: "Excellence",
                    text: "Top-tier lawyers with proven expertise.",
                    imageUrl: "/assets/icons/award-pin-solid.svg",
                  },
                  {
                    title: "Client-Focused",
                    text: "Your goals guide everything we do.",
                    imageUrl: "/assets/icons/handshake-solid.svg",
                  },
                  {
                    title: "Integrity",
                    text: "Trust built on honesty and professionalism.",
                    imageUrl: "/assets/icons/scales-solid.svg",
                  },

                  {
                    title: "Foresight",
                    text: "We anticipate issues before they arise, keeping you ahead.",
                    imageUrl: "/assets/icons/eye-solid.svg",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="flex items-start space-x-3 text-black mb-4 "
                  >
                    <div className="w-12 h-12 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-white bg-[#D4AF37]">
                      <Image
                        src={value.imageUrl}
                        alt={`${value.title} icon`}
                        width={24}
                        height={24}
                      />
                    </div>
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
                <form
                  name="landing-page-contact-form-react"
                  onSubmit={handleLandingFormSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="landing" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="first-name-landing"
                        className="block text-sm font-medium text-gray-700 font-sans mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name-landing"
                        autoComplete="given-name"
                        className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm text-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name-landing"
                        className="focus:outline-none focus:ring-1 rounded-md block text-sm font-medium text-gray-700 font-sans mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name-landing"
                        autoComplete="family-name"
                        className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm text-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email-landing"
                      className="focus:outline-none focus:ring-1 rounded-md block text-sm font-medium text-gray-700 font-sans mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-landing"
                      autoComplete="email"
                      className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm text-gray-700"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone-landing"
                      className="block text-sm font-medium text-gray-700 font-sans mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone-landing"
                      autoComplete="tel"
                      className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm text-gray-700"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message-landing"
                      className="block text-sm font-medium text-gray-700 font-sans mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message-landing"
                      rows={4}
                      className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] font-sans shadow-sm text-gray-700"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isLandingFormSubmitting}
                      className="w-full bg-black text-white px-8 py-3 rounded-md font-semibold font-sans hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
                    >
                      {isLandingFormSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                  {landingFormStatus && (
                    <p
                      className={`mt-4 text-sm ${
                        landingFormStatus.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {landingFormStatus.message}
                    </p>
                  )}
                </form>
              </div>
              <div className="md:w-2/5 space-y-8 mt-10 md:mt-0">
                <div className="bg-black p-6 sm:p-8 rounded-lg shadow-lg space-y-6 text-white">
                  <h3 className="text-xl font-bold font-sans">
                    Firm Contact Details
                  </h3>
                  {[
                    {
                      icon: "/assets/icons/pin-outline.svg",
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
                      icon: "/assets/icons/phone-outline.svg",
                      alt: "Phone icon",
                      lines: ["<b>Phone</b>", "(033) 329-28-38"],
                    },
                    {
                      icon: "/assets/icons/mail-outline.svg",
                      alt: "Email icon",
                      lines: ["<b>Email</b>", "admin@fmclaw.com.ph"],
                    },
                    {
                      icon: "/assets/icons/clock-outline.svg",
                      alt: "Clock icon",
                      lines: [
                        "<b>Office Hours</b>",
                        "Mon-Fri: 9:00 AM - 6:00 PM",
                      ],
                    },
                  ].map((item) => (
                    <div key={item.alt} className="flex items-start space-x-3 ">
                      <div className="w-8 h-8 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-white bg-[#D4AF37]">
                        <Image
                          src={item.icon}
                          alt={item.alt}
                          width={16}
                          height={16}
                        />
                      </div>
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
      </main>
      <Footer />
    </>
  );
};

export default FmcLawLandingPage;

// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const RightArrowIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5 ml-2",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
);

const firmName = "FMC Law";

const faqData = [
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by calling our office directly at (123) 456-7890, emailing us at consult@fmclaw.com, or by filling out the contact form on this page. We aim to respond to all inquiries within 24 business hours.",
  },
  {
    question: "What should I bring to my initial consultation?",
    answer:
      "Please bring any documents relevant to your case, such as contracts, correspondence, court orders, or police reports. A list of questions you have for our attorneys would also be beneficial for a productive discussion.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer virtual consultations via secure video conferencing for clients who prefer not to meet in person or are located remotely. Please indicate your preference when scheduling your appointment.",
  },
  {
    question: "How quickly can I expect a response?",
    answer:
      "Our team strives to respond to all inquiries as promptly as possible, typically within one business day. For urgent matters, please call our office directly for immediate assistance.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, FMC Law has extensive experience representing international clients on a variety of legal matters. We have a global network and can provide counsel on cross-border issues effectively.",
  },
];

const contactInfo = [
  {
    iconPath: "/assets/icons/pin-outline.svg",
    label: "Address",
    valueLines: [
      "Iloilo Office: 2F, Daily Guardian Center,",
      "Guzman Jesena, Mandurriao, Iloilo City",
      "",
      "Manila Office: #62 Saint Peter Street,",
      "Brgy. Oranbo, Pasig City",
    ],
  },
  {
    iconPath: "/assets/icons/phone-outline.svg",
    label: "Phone",
    valueLines: ["(033) 329-28-38"],
    href: "tel:(033) 329-28-38",
  },
  {
    iconPath: "/assets/icons/mail-outline.svg",
    label: "Email",
    valueLines: ["admin@fmclaw.com.ph"],
    href: "mailto:admin@fmclaw.com.ph",
  },
  {
    iconPath: "/assets/icons/clock-outline.svg",
    label: "Office Hours",
    valueLines: ["Monday - Friday: 8:00 AM - 5:00 PM"],
  },
];

const socialLinks = [
  // {
  //   href: "#",
  //   label: "LinkedIn",
  //   iconSrc: "/assets/icons/linkedin-solid-gray.svg",
  // },
  // {
  //   href: "#",
  //   label: "Twitter",
  //   iconSrc: "/assets/icons/twitter-solid-gray.svg",
  // },
  {
    href: "#",
    label: "Facebook",
    iconSrc: "/assets/icons/facebook-solid-gray.svg",
  },
];

const ContactUsPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

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
        setSubmissionStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        form.reset();
      } else {
        const errorText = await response.text();
        setSubmissionStatus({
          type: "error",
          message: `Submission failed: ${errorText || "Please try again."}`,
        });
      }
    } catch (submitError) {
      // Changed 'error' to 'submitError'
      console.error(
        "Network or other error during form submission:",
        submitError
      ); // Use 'submitError'
      setSubmissionStatus({
        type: "error",
        message:
          "An unexpected error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="font-sans text-gray-800">
        <section className="bg-gray-100 py-16 md:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold font-oswald text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-10">
              Ready to discuss your legal needs? Reach out to schedule a
              consultation with one of our experienced attorneys.
            </p>
            <div className="mx-auto w-12 h-1 bg-[#D4AF37]"></div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 md:py-24 font-inter">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              <div className="bg-white p-8 md:p-10 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 font-oswald">
                  Send Us a Message
                </h2>
                <form
                  name="contact-form-page-react"
                  onSubmit={handleContactSubmit}
                  className="space-y-6 font-sans"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="first-name-contact"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name-contact"
                        required
                        className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37] "
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name-contact"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name-contact"
                        required
                        className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email-contact"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-contact"
                      required
                      autoComplete="email"
                      className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone-contact"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone-contact"
                      autoComplete="tel"
                      className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject-contact"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject-contact"
                      required
                      autoComplete="off"
                      className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message-contact"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message*
                    </label>
                    <textarea
                      name="message"
                      id="message-contact"
                      rows={5}
                      required
                      className="focus:outline-none focus:ring-1 rounded-md w-full p-3 border border-gray-300 shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input
                        id="consent-contact"
                        name="consent"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-[#D4AF37] border-gray-300 focus:ring-[#D4AF37] mt-0.5"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="consent-contact"
                        className="font-medium text-gray-700"
                      >
                        I agree to the{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-[#D4AF37] hover:underline"
                        >
                          privacy policy
                        </Link>{" "}
                        and consent to being contacted regarding my inquiry.*
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center bg-black text-white px-8 py-3.5 font-semibold font-sans hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}{" "}
                      <RightArrowIcon />
                    </button>
                  </div>
                  {submissionStatus && (
                    <p
                      className={`mt-4 text-sm ${
                        submissionStatus.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {submissionStatus.message}
                    </p>
                  )}
                </form>
              </div>

              <div className="bg-black text-white p-8 md:p-10 shadow-lg lg:order-last order-first font-inter">
                <h2 className="text-2xl font-bold text-white mb-10 font-oswald">
                  Firm Contact Details
                </h2>
                <div className="space-y-8 font-sans">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start ">
                      <div className="mr-4 flex justify-center items-center bg-[#D4AF37] w-8 h-8 border-2 border-[#D4AF37] rounded-full">
                        <Image
                          src={info.iconPath}
                          alt=""
                          width={16}
                          height={16}
                          className="flex-shrink-0"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {info.label}
                        </h3>
                        {info.valueLines.map((line, index) =>
                          info.href && index === 0 ? (
                            <a
                              key={index}
                              href={info.href}
                              className="block text-gray-300 hover:text-[#D4AF37] transition-colors text-sm leading-relaxed"
                            >
                              {line}
                            </a>
                          ) : (
                            <p
                              key={index}
                              className="text-gray-300 text-sm leading-relaxed"
                            >
                              {line}
                              <br />
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start">
                    <div className="mr-4 flex justify-center items-center bg-[#D4AF37] w-8 h-8 border-2 border-[#D4AF37] rounded-full">
                      <Image
                        src="/assets/icons/share-outline.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="flex-shrink-0"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Connect With Us
                      </h3>
                      <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            aria-label={link.label}
                            className="text-[#D4AF37] hover:text-white transition-colors"
                          >
                            <Image
                              src={link.iconSrc}
                              alt={link.label}
                              width={20}
                              height={20}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="aspect-[16/9] bg-gray-700 overflow-hidden shadow-md">
                    <Image
                      src="/assets/background/map-placeholder-grayscale.png"
                      alt="Map placeholder"
                      width={1600}
                      height={900}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="bg-gray-800 text-center py-3 px-4 -mt-1 relative z-10">
                    <p className="text-xs text-gray-300 font-sans">
                      {firmName} Headquarters - Open Weekdays 9 AM to 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 font-inter">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-oswald">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
                Find quick answers to common questions about our services and
                processes. If you don&apos;t find your answer here, please
                don&apos;t hesitate to reach out.
              </p>
              <div className="mt-8 mx-auto w-12 h-1 bg-[#D4AF37]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {faqData.map((item, index) => (
                <div key={index} className="font-sans">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat font-inter"
          style={{ backgroundImage: "url('/assets/contact-us-banner.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white ">
            <h3 className="text-3xl md:text-4xl font-bold mb-5 font-oswald">
              Ready to Work with Us?
            </h3>
            <p className="text-lg font-sans mb-10 max-w-xl mx-auto">
              Schedule a consultation with our experienced attorneys and
              discover how we can help you navigate your legal challenges.
            </p>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-8 py-3.5 font-semibold font-sans text-base lg:text-lg hover:bg-opacity-85 transition-opacity"
            >
              Book a Consultation Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;

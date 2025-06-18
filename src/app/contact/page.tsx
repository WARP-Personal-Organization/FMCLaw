// pages/contact.tsx
"use client"; // Required for useState (mobile menu) if using App Router.
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// If using 'pages' directory, this line is not needed.

// import type { NextPage } from 'next'; // For 'pages' directory. Not strictly needed for App Router.
// import Head from 'next/head'; // For 'pages' directory. Use metadata export for App Router.

// --- ICON COMPONENTS (Defined within the same file) ---

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

// --- DATA ---
const firmName = "FMC Law"; // Replace with your actual firm name

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
    iconPath: "assets/pin-outline.png", // Home icon for address
    label: "Address",
    valueLines: [
      "Iloilo Office: 2F, Daily Guardian Center,",
      "Guzman Jasena, Mandurriao, Iloilo City",
    ],
  },
  {
    iconPath: "/assets/phone-outline.png", // Phone icon
    label: "Phone",
    valueLines: ["0917-702-1298"],
    href: "tel:+63917-702-1298",
  },
  {
    iconPath: "assets/mail-outline.png", // Mail icon
    label: "Email",
    valueLines: ["admin@fmclaw.com.ph"],
    href: "mailto:admin@fmclaw.com.ph",
  },
  {
    iconPath: "assets/clock-outline.png",

    label: "Office Hours",
    valueLines: ["Monday - Friday: 9:00 AM - 6:00 PM"],
  },
];

const socialLinks = [
  {
    href: "#",
    label: "LinkedIn",
    icon: <img src="assets/linkedin-solid-gray.png" alt="" />,
  },
  {
    href: "#",
    label: "Twitter",
    icon: <img src="assets/twitter-solid-gray.png" alt="" />,
  },
  {
    href: "#",
    label: "Facebook",
    icon: <img src="assets/facebook-solid-gray.png" alt="" />,
  },
];

// --- MAIN PAGE COMPONENT ---
// `NextPage` type is for the 'pages' dir. For App Router, it's just `React.FC` or default function.
const ContactUsPage: React.FC = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-partners", label: "Our Partners" },
    { href: "/contact", label: "Contact", current: true },
  ];

  return (
    <>
      <Header />

      <main className="font-sans text-gray-800">
        {/* 1. Header Strip */}
        <section className="bg-gray-100 py-16 md:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold font-oswald text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 font-inter leading-relaxed mb-10">
              Ready to discuss your legal needs? Reach out to us today. Our team
              is committed to providing prompt, professional, and confidential
              assistance to address your concerns and guide you through your
              legal journey with our experienced attorneys.
            </p>
            <div className="mx-auto w-12 h-1 bg-[#D4AF37]"></div>{" "}
            {/* 48px gold divider */}
          </div>
        </section>

        {/* 2. Contact Block */}
        <section className="bg-gray-100 py-16 md:py-24 font-inter">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              {/* Left Card: Form */}
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>
                <form action="#" method="POST" className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="email"
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>Consultation Request</option>
                      <option>Corporate Law</option>
                      <option>Litigation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message*
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] mt-0.5"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="consent"
                        className="font-medium text-gray-700"
                      >
                        I agree to the{" "}
                        <a
                          href="/privacy-policy"
                          className="text-[#D4AF37] hover:underline"
                        >
                          privacy policy
                        </a>{" "}
                        and consent to being contacted regarding my inquiry.*
                      </label>
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
              <div className="bg-black text-white p-8 md:p-10 rounded-lg shadow-lg lg:order-last order-first font-inter">
                {" "}
                {/* Stack form first on mobile */}
                <h2 className="text-2xl font-bold text-white mb-10">
                  Firm Contact Details
                </h2>
                <div className="space-y-8 font-sans">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start">
                      <img src={info.iconPath} alt="" className="mx-4" />
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
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start">
                    <img
                      src="assets/share-outline.png"
                      alt=""
                      className="mx-4"
                    />
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
                    <img
                      src="/images/map-placeholder-grayscale.jpg"
                      alt="FMC Law Headquarters Location Map"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="bg-gray-800 text-center py-3 px-4 rounded-b-md -mt-1 relative z-10">
                    <p className="text-xs text-gray-300 font-sans">
                      {firmName} Headquarters - Open Weekdays 9 AM to 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQ Section */}
        <section className="bg-white py-16 md:py-24 font-inter">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
                Find quick answers to common questions about our services and
                processes. If you don't find your answer here, please don't
                hesitate to reach out.
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

        {/* 4. CTA Banner */}
        <section
          className="relative  py-20 md:py-28 bg-cover bg-center bg-no-repeat font-inter"
          style={{ backgroundImage: "url('assets/contact-us-banner.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white ">
            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              Ready to Work with Us?
            </h3>
            <p className="text-lg font-sans mb-10 max-w-xl mx-auto">
              Schedule a consultation with our experienced attorneys and
              discover how we can help you navigate your legal challenges.
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
      <Footer />
    </>
  );
};

export default ContactUsPage;

// If using App Router and want to define metadata:
// export const metadata = {
//   title: `Contact Us | ${firmName}`,
//   description: `Get in touch with ${firmName}. We are here to assist with your legal needs, schedule consultations, and answer your questions.`,
// };

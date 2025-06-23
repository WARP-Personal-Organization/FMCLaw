// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  const socialLinks = [
    // { href: "#", src: "/assets/linkedin-solid.png", alt: "LinkedIn" },
    // { href: "#", src: "/assets/twitter-solid.png", alt: "Twitter" },
    { href: "#", src: "/assets/icons/facebook-solid.svg", alt: "Facebook" },
    // { href: "#", src: "/assets/insta-outline.png", alt: "Instagram" },
  ];

  const companyLinks = [
    { href: "/", text: "Home" }, // Assuming #home for Hero section
    { href: "/about", text: "About Us" },
    { href: "/partners", text: "Our Partners" },
    { href: "/contact", text: "Contact" },
  ];

  const contactInfo = [
    {
      icon: "/assets/icons/pin-solid.svg",
      alt: "Location Pin Icon",
      lines: [
        "Iloilo Office: 2F, Daily Guardian Center,",
        "Guzman Jasena, Mandurriao, Iloilo City ",
        "",
        "Manila Office: #62 Saint Peter Street,",
        "Brgy. Oranbo, Pasig City",
      ],
      href: "#", // Placeholder, could be a Google Maps link
    },
    {
      icon: "/assets/icons/phone-solid.svg",
      alt: "Phone Icon",
      lines: ["(033) 329-28-38"],
      href: "tel:(033) 329-28-38",
    },
    {
      icon: "/assets/icons/mail-solid.svg",
      alt: "Mail Icon",
      lines: ["admin@fmclaw.com.ph"],
      href: "mailto:admin@fmclaw.com.ph",
    },
    {
      icon: "/assets/icons/clock-solid.svg",
      alt: "Clock Icon",
      lines: ["Mon-Fri: 8:00 AM - 5:00 PM"],
      href: "#", // Placeholder
    },
  ];

  return (
    <footer className="relative bg-black text-gray-400 border-t-4 border-[#D4AF37] pt-16 pb-8 font-roboto">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#CE9930]/25 via-transparent to-black/30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-12 mb-12">
          <div className="space-y-6 w-full lg:w-auto lg:max-w-sm">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logos/Logo Main.png"
                alt="FMC Law Logo"
                width={180}
                height={45}
                className="object-contain"
              />
            </Link>
            <p className="text-sm">
              We combine forward-thinking and dynamic approaches with innovative
              strategies to deliver exceptional legal representation for your
              most critical matters.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  className="text-[#D4AF37] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <h5 className="text-lg font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-auto lg:max-w-md">
            <h5 className="text-lg font-semibold text-white mb-4">Contact</h5>
            <ul className="text-sm space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <div className="flex items-start space-x-3">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={20}
                      height={20}
                      className="mt-0.5"
                    />
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors leading-snug"
                    >
                      {item.lines.map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < item.lines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm text-[#CE9930]">
          <div className="w-full mx-auto opacity-60 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8 h-[2px]" />
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} FMC Law. All rights reserved.
            </p>
            <div className="space-x-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

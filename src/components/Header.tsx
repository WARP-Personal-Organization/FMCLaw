"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/partners", label: "Our Partners" },
  ];

  const HamburgerIcon = ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.00098H21V8.00098H3V6.00098ZM3 11.001H21V13.001H3V11.001ZM3 16.001H21V18.001H3V16.001Z"
      />
    </svg>
  );

  const CloseIcon = ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L12 10.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L13.4142 12L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L12 13.4142L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.5858 12L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
      />
    </svg>
  );

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md border-b-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/icons/header-logo.png"
                alt="FMC LAW Logo"
                width={150}
                height={40}
                className="h-8 md:h-10 w-auto opacity-90"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-[#CE9930] px-3 py-2 text-sm font-medium font-sans"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link
              href="/contact"
              className="hidden sm:block bg-[#D4AF37] text-black px-4 py-2 text-sm font-semibold font-sans hover:bg-opacity-80 transition-colors"
            >
              Book Consultation
            </Link>
            <div className="md:hidden ml-3">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <CloseIcon className="block h-6 w-6" />
                ) : (
                  <HamburgerIcon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-[#CE9930] hover:bg-gray-700 block px-3 py-2 text-base font-medium font-sans"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 block w-full text-center bg-[#D4AF37] text-black px-4 py-2 text-base font-semibold font-sans hover:bg-opacity-80 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

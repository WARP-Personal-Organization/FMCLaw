import React  from "react";

export default function Header() {

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

    return (
    <>
      {/* 0. Sticky Top Nav (UNCHANGED) */}
      <nav className="sticky top-0 z-50 bg-black text-white shadow-md border-b-2 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-[#D4AF37]">
                <img
                  src="/assets/header-logo.png"
                  alt="FMC LAW"
                  className="w-3/3 max-w-md opacity-80"
                />
              </div>
              <a
                href="/"
                className="ml-3 text-xl font-bold font-serif text-white"
              >
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className="text-gray-300 hover:text-[#CE9930] px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:text-[#CE9930] px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                About Us
              </a>
              <a
                href="/partners"
                className="text-gray-300 hover:text-[#CE9930] px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Our Partners
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-[#CE9930] px-3 py-2 rounded-md text-sm font-medium font-sans"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="#book-consultation"
                className="bg-[#D4AF37] text-black px-4 py-2 rounded-sm text-sm font-semibold font-sans hover:bg-opacity-80 transition-colors"
              >
                Book Consultation
              </a>
              <div className="md:hidden ml-4">
                {/* Optional Mobile Menu Button */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
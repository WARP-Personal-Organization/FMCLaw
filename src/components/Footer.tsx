import React from "react";

function Footer() {
  const practiceAreas = [
    {
      name: "Corporate Law",
      description: "Expert advice on corporate governance and structuring.",
    },
    {
      name: "Commercial Law",
      description: "Navigating complex commercial transactions and agreements.",
    },
    {
      name: "Litigation",
      description: "Strategic representation in contentious legal disputes.",
    },
    {
      name: "Intellectual Property",
      description: "Protecting your innovations and creative works.",
    },
    {
      name: "Labor Law",
      description: "Guidance on employment relations and workplace compliance.",
    },
    {
      name: "Criminal Law",
      description: "Robust defense for individuals facing criminal charges.",
    },
    {
      name: "Administrative Law",
      description: "Challenging governmental decisions and regulatory actions.",
    },
    {
      name: "Civil Law",
      description: "Resolving disputes between individuals and organizations.",
    },
    {
      name: "Election Law",
      description: "Ensuring fair and lawful electoral processes.",
    },
  ];

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
      {/* 9. Footer (UNCHANGED) */}
      <footer className="bg-black text-gray-400 border-t-4 border-[#D4AF37] pt-16 pb-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <a href="/" className="flex items-center space-x-2">
                <PlaceholderIcon className="h-10 w-10 text-[#D4AF37]" />
                <span className="text-2xl font-bold font-serif text-white">
                  FMC Law
                </span>
              </a>
              <p className="text-sm">
                Dedicated to providing premier legal services with integrity and
                expertise.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#D4AF37] hover:text-white">
                  <PlaceholderIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#D4AF37] hover:text-white">
                  <PlaceholderIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#D4AF37] hover:text-white">
                  <PlaceholderIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">
                Practice Areas
              </h5>
              <ul className="space-y-2 text-sm">
                {practiceAreas.slice(0, 5).map((area) => (
                  <li key={area.name}>
                    <a href="#" className="hover:text-white transition-colors">
                      {area.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    See All Areas...
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">
                Company
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    className="hover:text-white transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">
                Contact Us
              </h5>
              <address className="not-italic space-y-2 text-sm">
                <p>
                  123 Legal Avenue, Suite 400
                  <br />
                  Justice City, JC 54321
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+1234567890" className="hover:text-white">
                    (123) 456-7890
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@fmclaw.com"
                    className="hover:text-white"
                  >
                    contact@fmclaw.com
                  </a>
                </p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 mt-8 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p>© {new Date().getFullYear()} FMC Law. All rights reserved.</p>
              <div className="space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

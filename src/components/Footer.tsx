import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t-4 border-[#D4AF37] pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 mb-12 flex justify-between">
          <div className="space-y-6 w-md">
            <Link href="/" className="flex items-center space-x-2">
              <img src="assets/Logo Main.png" alt="" className="object-cover" />
            </Link>
            <p className="text-sm">
              Combining traditional legal expertise with innovative approaches
              for today&apos;s complex challenges.
            </p>
            <div className="flex space-x-4 items-center">
              <a href="#" className="text-[#D4AF37] hover:text-white">
                <img src="assets/linkedin-solid.png" alt="" />
              </a>
              <a href="#" className="text-[#D4AF37] hover:text-white">
                <img src="assets/twitter-solid.png" alt="" />
              </a>
              <a href="#" className="text-[#D4AF37] hover:text-white">
                <img src="assets/facebook-solid.png" alt="" />
              </a>
              <a href="#" className="text-[#D4AF37] hover:text-white">
                <img src="assets/insta-outline.png" alt="" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-md">
            <h5 className="text-lg font-semibold text-white mb-4">Contact</h5>
            <ul className="text-sm space-y-2 ">
              <li>
                <div className="flex items-start space-x-3">
                  <img src="assets/pin-solid.png" alt="" />
                  <a
                    href="#"
                    className="hover:text-white transition-colors leading-none"
                  >
                    Iloilo Office: 2F, Daily Guardian Center, Guzman Jasena,
                    Mandurriao, Iloilo City
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <img src="assets/phone-solid.png" alt="" />
                  <a href="#" className="hover:text-white transition-colors">
                    0917-702-1298
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <img src="assets/mail-solid.png" alt="" />
                  <a
                    href="#"
                    className="hover:text-white transition-colors leading-none"
                  >
                    admin@fmclaw.com.ph
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <img src="assets/clock-solid.png" alt="" />
                  <a href="#" className="hover:text-white transition-colors">
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#CE9930] pt-8 mt-8 text-sm text-[#CE9930]">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p>© {new Date().getFullYear()} FMC Law. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

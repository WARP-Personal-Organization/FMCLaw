import React from 'react';
import Header from "./Header";
// For a real Next.js project, you might prefer to import Link from 'next/link' for client-side navigation
// and Image from 'next/image' for optimized images.
// import Link from 'next/link';
// import Image from 'next/image';

// Placeholder for icons (as provided in the initial context)
const PlaceholderIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const coreValuesData = [
  { title: "Integrity", description: "Upholding the highest ethical standards in every action and decision we make.", icon: <PlaceholderIcon className="w-10 h-10 text-[#D4AF37]" /> },
  { title: "Excellence", description: "Consistently delivering superior legal services and achieving outstanding results.", icon: <PlaceholderIcon className="w-10 h-10 text-[#D4AF37]" /> },
  { title: "Innovation", description: "Embracing creative thinking and cutting-edge solutions to complex legal challenges.", icon: <PlaceholderIcon className="w-10 h-10 text-[#D4AF37]" /> },
  { title: "Collaboration", description: "Working closely with clients and colleagues to achieve shared goals effectively.", icon: <PlaceholderIcon className="w-10 h-10 text-[#D4AF37]" /> },
];

const leadershipData = [
  { id: 1, name: "Eleanor Vance", role: "Managing Partner", bio: "Eleanor drives the firm's strategic vision with over 20 years of experience in corporate law.", imageUrl: "/images/about/eleanor-vance.jpg" },
  { id: 2, name: "Marcus Thorne", role: "Senior Partner, Litigation", bio: "Marcus is a renowned litigator known for his tenacity and groundbreaking case wins.", imageUrl: "/images/about/marcus-thorne.jpg" },
  { id: 3, name: "Isabelle Rossi", role: "Partner, Mergers & Acquisitions", bio: "Isabelle specializes in complex M&A transactions, guiding clients through high-stakes deals.", imageUrl: "/images/about/isabelle-rossi.jpg" },
  { id: 4, name: "Samuel Green", role: "Partner, Technology & IP", bio: "Samuel leads our tech practice, advising on intellectual property and emerging technologies.", imageUrl: "/images/about/samuel-green.jpg" },
];

const practiceAreasFooter = [
  { name: "Corporate Law", href: "#" },
  { name: "Commercial Law", href: "#" },
  { name: "Litigation", href: "#" },
  { name: "Intellectual Property", href: "#" },
  { name: "Labor Law", href: "#" },
];


const AboutUsPage: React.FC = () => {
  return (
    <>
      {/* 1. Sticky Top Nav */}
      <Header/>
      <main className="font-sans text-gray-800"> {/* Default body font */}
        {/* 2. Hero / Title */}
        <section className="bg-white py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 text-center">
              About Us
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 font-sans max-w-3xl mx-auto text-center leading-relaxed">
              FMC Law combines traditional legal expertise with innovative approaches to deliver exceptional representation for our clients’ most complex challenges.
            </p>
            <div className="mt-8 h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>
        </section>

        {/* 3. Firm Profile Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-6">
                  Firm Profile
                </h2>
                <p className="text-gray-700 font-sans leading-relaxed mb-4">
                  Founded on principles of integrity, excellence, and unwavering client dedication, FMC Law has established itself as a premier legal practice. We offer a comprehensive suite of legal services, tailored to meet the diverse needs of individuals, businesses, and organizations.
                </p>
                <p className="text-gray-700 font-sans leading-relaxed">
                  Our team of seasoned attorneys brings a wealth of experience from various legal disciplines, enabling us to provide insightful, strategic, and effective solutions. We believe in building lasting relationships with our clients, understanding their objectives, and navigating legal complexities with clarity and precision.
                </p>
              </div>
              <div className="relative mt-10 md:mt-0">
                <img
                  src="/images/about/team-meeting-modern.jpg" // Replace with actual team photo
                  alt="FMC Law team discussion"
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-12 h-12 bg-[#D4AF37] rounded-sm z-10"></div>
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 bg-black rounded-sm z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Values */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-center text-gray-900 mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValuesData.map((value) => (
                <div key={value.title} className="bg-white border border-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold font-sans text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Mission Banner */}
        <section className="bg-black text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl lg:text-4xl font-bold font-serif text-center mb-10">
              Our Mission
            </h3>
            <div className="max-w-3xl mx-auto space-y-6 text-center text-gray-300 font-sans leading-relaxed text-lg">
              <p>
                To deliver exceptional legal services with unwavering integrity, profound expertise, and a commitment to achieving the best possible outcomes for our clients.
              </p>
              <p>
                We strive to be trusted advisors, providing strategic counsel and vigorous advocacy while fostering a culture of collaboration, innovation, and respect.
              </p>
              <p>
                Our mission is to empower our clients by navigating complex legal landscapes with clarity, diligence, and a personalized approach that addresses their unique needs and goals.
              </p>
            </div>
            <p className="text-[#D4AF37] italic text-2xl lg:text-3xl font-serif mt-12 text-center max-w-2xl mx-auto">
              “Excellence is our standard, not our goal.”
            </p>
          </div>
        </section>

        {/* 6. Leadership Grid */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-center text-gray-900 mb-16">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipData.map((leader) => (
                <div key={leader.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow hover:shadow-xl">
                  <div className="w-full aspect-[3/4] bg-gray-200"> {/* Placeholder bg if image fails */}
                    <img
                      src={leader.imageUrl}
                      alt={`Portrait of ${leader.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-semibold font-sans text-gray-900 mb-1">{leader.name}</h4>
                    <p className="text-sm font-medium text-[#D4AF37] font-sans mb-3">{leader.role}</p>
                    <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <a href="/partners" className="text-[#D4AF37] font-semibold font-sans hover:underline text-lg transition-colors">
                View All Partners →
              </a>
            </div>
          </div>
        </section>

        {/* 7. Privacy Policy Placeholder */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 border border-gray-300 p-8 md:p-12 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">
                Privacy Policy
              </h2>
              <div className="text-gray-700 font-sans leading-relaxed space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. For more details, please review our full privacy policy documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA Banner */}
        <section
          className="relative bg-cover bg-center py-24 md:py-32"
          style={{ backgroundImage: "url('/images/about/legal-office-dark.jpg')" }} // Replace with actual legal-themed image
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4">
              Experience the FMC Law Difference
            </h2>
            <p className="text-lg text-gray-200 font-sans mb-10 max-w-2xl mx-auto">
              Partner with a law firm that prioritizes your success. Discover how our expertise can make a tangible impact on your legal outcomes.
            </p>
            <a
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-md font-semibold font-sans text-lg hover:bg-opacity-80 transition-colors"
            >
              Get in Touch Today
            </a>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-black text-gray-400 border-t-4 border-[#D4AF37] pt-16 pb-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Logo & Mission */}
            <div className="space-y-6">
              <a href="/" className="flex items-center space-x-2">
                <PlaceholderIcon className="h-10 w-10 text-[#D4AF37]" />
                <span className="text-2xl font-bold font-serif text-white">FMC Law</span>
              </a>
              <p className="text-sm">
                Dedicated to providing premier legal services with integrity, innovation, and unwavering client focus.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><PlaceholderIcon className="w-5 h-5" /></a> {/* LinkedIn */}
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><PlaceholderIcon className="w-5 h-5" /></a> {/* Twitter/X */}
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><PlaceholderIcon className="w-5 h-5" /></a> {/* Facebook */}
              </div>
            </div>

            {/* Column 2: Practice Areas */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Practice Areas</h5>
              <ul className="space-y-2 text-sm">
                {practiceAreasFooter.map(area => (
                  <li key={area.name}><a href={area.href} className="hover:text-white transition-colors">{area.name}</a></li>
                ))}
                <li><a href="/practice-areas" className="hover:text-white transition-colors">See All Areas...</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/partners" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 font-serif">Contact Us</h5>
              <address className="not-italic space-y-2 text-sm">
                <p>123 Legal Avenue, Suite 400<br />Justice City, JC 54321</p>
                <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a></p>
                <p>Email: <a href="mailto:contact@fmclaw.com" className="hover:text-white transition-colors">contact@fmclaw.com</a></p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p>© {new Date().getFullYear()} FMC Law. All rights reserved.</p>
              <div className="space-x-4 mt-4 md:mt-0">
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutUsPage;
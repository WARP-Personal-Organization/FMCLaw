import React from 'react';
import Header from "./Header";
import Footer from './Footer';
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
  { title: "Integrity", description: "Upholding the highest ethical standards in every action and decision we make.", icon: <img src="/assets/scales-solid.svg" alt="" /> },
  { title: "Excellence", description: "Consistently delivering superior legal services and achieving outstanding results.", icon: <img src="/assets/trophy-solid.svg" alt="" /> },
  { title: "Innovation", description: "Embracing creative thinking and cutting-edge solutions to complex legal challenges.", icon: <img src="/assets/lightbulb-solid.svg" alt="" /> },
  { title: "Collaboration", description: "Working closely with clients and colleagues to achieve shared goals effectively.", icon: <img src="/assets/handshake-solid.svg" alt="" /> },
];

const leadershipData = [
  { id: 1, name: "Alexandra Reynolds", role: "Managing Partner", bio: "With over 20 years of experience in corporate law, Alexandra leads our firm with vision and integrity, specializing in complex commercial litigation.", imageUrl: "/assets/alexandra-About.svg" },
  { id: 2, name: "Jonathan Blackwell", role: "Senior Partner, Litigation", bio: "A former federal prosecutor, Jonathan brings unparalleled expertise in white-collar defense and corporate compliance matters.", imageUrl: "/assets/jonathan-about.png" },
  { id: 3, name: "Michelle Chen", role: "Partner, Mergers & Acquisitions", bio: "A tech industry veteran, Michelle leads our intellectual property and data privacy practice with innovative approaches to complex challenges.", imageUrl: "/assets/michelle-about.png" },
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
      <main className="text-gray-800"> {/* Default body font */}
        {/* 2. Hero / Title */}
        <section className="bg-white py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold font-oswald text-gray-900 text-center">
              About Us
            </h1>
            <p className="font-inter mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              FMC Law combines traditional legal expertise with innovative approaches to deliver exceptional representation for our clients’ most complex challenges.
            </p>
            <div className="mt-8 h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>
        </section>

        {/* 3. Firm Profile Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-oswald text-gray-900 mb-6">
                  Firm Profile
                </h2>
                <p className="text-gray-700 font-inter leading-relaxed mb-4">
                  Founded on principles of integrity, excellence, and unwavering client dedication, FMC Law has established itself as a premier legal practice. We offer a comprehensive suite of legal services, tailored to meet the diverse needs of individuals, businesses, and organizations.
                </p>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Our team of seasoned attorneys brings a wealth of experience from various legal disciplines, enabling us to provide insightful, strategic, and effective solutions. We believe in building lasting relationships with our clients, understanding their objectives, and navigating legal complexities with clarity and precision.
                </p>
              </div>
              <div className="relative mt-10 md:mt-0">
                <img
                  src="/assets/firm-profile.png" // Replace with actual team photo
                  alt="FMC Law team discussion"
                  className="w-full aspect-[4/3] object-cover shadow-xl"
                />
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-20 h-20 bg-[#D4AF37] z-10"></div>
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-15 h-15 bg-black z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Values */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold font-oswald text-center text-gray-900 mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValuesData.map((value) => (
                <div key={value.title} className="bg-white border border-gray-100 p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-4 text-[#D4AF37] bg-[#D4AF37]">{value.icon}</div>
                  <h3 className="text-xl font-semibold font-inter text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed flex-grow">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Mission Banner */}
        <section className="bg-white text-white py-16 md:py-5">
          <div className="bg-black max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <h3 className="text-3xl lg:text-4xl font-bold font-sans text-center mb-10">
              Our Mission
            </h3>
            <div className="max-w-6xl mx-auto space-y-6 text-center text-gray-300 font-inter leading-relaxed text-lg text-justify">
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
            <p className="text-[#D4AF37] text-2xl lg:text-3xl font-inter mt-12 text-center max-w-2xl mx-auto">
              “Excellence is our standard, not our goal.”
            </p>
          </div>
        </section>

        {/* 6. Leadership Grid */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-oswald font-bold text-center text-gray-900 mb-16">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-inter">
              {leadershipData.map((leader) => (
                <div key={leader.id} className="bg-white border border-gray-200 shadow-md overflow-hidden flex flex-col transition-shadow hover:shadow-xl">
                  <div className="relative w-full aspect bg-gray-200"> {/* Placeholder bg if image fails */}
                    <img
                      src={leader.imageUrl}
                      alt={`Portrait of ${leader.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className='absolute inset-0 justify-end items-center text-center flex flex-col bg-gradient-to-r from-black/60 to-transparent'> 
                      <h4 className=" text-2xl font-sans text-white mb-1">{leader.name}</h4>
                      <p className=" text-2sm font-medium text-[#D4AF37] font-sans mb-3">{leader.role}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 font-sans text-sm leading-relaxed flex-grow">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <a href="/partners" className="text-black font-bold font-sans hover:underline text-lg transition-colors">
                View All Partners →
              </a>
            </div>
          </div>
        </section>

        {/* 8. CTA Banner */}
        <section
          className="bg-white md:py-8"
        >
          {/* <div className="absolute inset-0 bg-white"></div> */}
          <div className='bg-black p-20 max-w-7xl mx-auto mb-20 relative'>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-oswald mb-4">
                Experience the FMC Law Difference
              </h2>
              <p className="text-lg text-gray-200 font-inter mb-10 max-w-2xl mx-auto">
                Partner with a law firm that prioritizes your success. Discover how our expertise can make a tangible impact on your legal outcomes.
              </p>
              <a
                href="/contact"
                className="bg-[#D4AF37] text-black px-10 py-4 font-semibold font-sans text-lg hover:bg-opacity-80 transition-colors"
              >
                Get in Touch Today
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />
    </>
  );
};

export default AboutUsPage;
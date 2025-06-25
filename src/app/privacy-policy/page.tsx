"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage: React.FC = () => {
  const effectiveDate = "06/25/2025";
  const officeAddress = "Guzman-Jesena St, Mandurriao Iloilo City";
  const contactEmail = "admin@fmclaw.com.ph";
  const contactPhone = "(033) 329-28-38";
const firmName = "FMC Law";

  return (
    <>
      <Header />
    <Head>
        <title>Privacy Policy | {firmName}</title>
        <meta
          name="description"
          content={`Read the Privacy Policy for ${firmName}.`}
        />
      </Head>
      <main className="font-inter text-gray-700">
        <div className="bg-white py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold font-oswald text-gray-900 text-center mb-6">
              Privacy Policy
            </h1>
            <div className="text-center text-sm text-gray-600 mb-10 space-y-1">
              <p>Effective Date: {effectiveDate}</p>
              <p>Website: fmclaw.com.ph</p>
              <p>Firm Name: FMC Law</p>
            </div>

            <div className="space-y-10 text-base leading-relaxed">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p>
                  FMC Law (“we”, “us”, or “our”) respects your privacy and is
                  committed to protecting your personal data. This Privacy
                  Policy explains how we collect, use, disclose, and protect
                  your personal information in accordance with the Data Privacy
                  Act of 2012 and its Implementing Rules and Regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  2. What Information We Collect
                </h2>
                <p className="mb-3">
                  We may collect the following personal information when you
                  visit or interact with our website:
                </p>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact number</li>
                  <li>
                    Any personal information you voluntarily submit through our
                    contact forms or emails
                  </li>
                  <li>
                    IP address and browser information (automatically
                    collected)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-3">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>To respond to your legal inquiries</li>
                  <li>To schedule consultations or meetings</li>
                  <li>
                    To communicate updates or legal news (if you opted in)
                  </li>
                  <li>To improve our website performance and security</li>
                  <li>To comply with legal and regulatory obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="mb-3">
                  We do not sell or rent your personal information. We may share
                  your data with:
                </p>
                <ul className="list-disc list-outside space-y-1 pl-6 mb-3">
                  <li>Authorized FMC Law personnel</li>
                  <li>
                    Third-party service providers (e.g. website hosting or
                    email services)
                  </li>
                  <li>
                    Regulatory authorities or courts, if required by law
                  </li>
                </ul>
                <p>
                  All third-party processors are contractually obligated to
                  maintain the confidentiality and security of your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  5. Retention of Data
                </h2>
                <p className="mb-3">
                  We retain your personal data only as long as necessary:
                </p>
                <ul className="list-disc list-outside space-y-1 pl-6 mb-3">
                  <li>To fulfill the purpose for which it was collected</li>
                  <li>
                    To comply with legal, accounting, or regulatory
                    requirements
                  </li>
                </ul>
                <p>
                  When no longer needed, your data is securely deleted or
                  anonymized.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  6. Your Rights as a Data Subject
                </h2>
                <p className="mb-3">
                  Under the Data Privacy Act of 2012, you have the right to:
                </p>
                <ul className="list-disc list-outside space-y-1 pl-6 mb-3">
                  <li>Be informed about how your data is processed</li>
                  <li>Access your personal data</li>
                  <li>Object to processing</li>
                  <li>Request data correction or deletion</li>
                  <li>
                    Lodge a complaint with the National Privacy Commission (NPC)
                  </li>
                </ul>
                <p>
                  To exercise your rights, you may contact us via the details
                  below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  7. Security Measures
                </h2>
                <p className="mb-3">
                  We implement appropriate technical and organizational measures
                  to protect your data against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>
                <p>
                  These include SSL encryption, firewall protections, access
                  controls, and periodic audits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  8. Cookies and Tracking Technologies
                </h2>
                <p>
                  Our website may use cookies to enhance user experience and
                  collect site usage data. You may disable cookies in your
                  browser settings, but some site features may not work
                  properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  9. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to other websites. We are not
                  responsible for their content or privacy practices. Please
                  review their policies separately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  10. Contact Us
                </h2>
                <p className="mb-3">
                  If you have questions or concerns about this Privacy Policy or
                  wish to exercise your data rights, you may contact:
                </p>
                <div className="space-y-1">
                  <p className="font-semibold">FMC Law</p>
                  <p>{officeAddress}</p>
                  <p>Email: {contactEmail}</p>
                  <p>Phone: {contactPhone}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold font-oswald text-gray-900 mb-4">
                  11. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated “Effective Date.”
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
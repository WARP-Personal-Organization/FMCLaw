// src/app/the-authority-that-fades/page.tsx
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// This is a static page for a single article.

// Hardcoded post data for the new article
const post = {
  slug: "the-authority-that-fades",
  title: "The Authority That Fades: A Lesson in Trust and Time",
  summary:
    "A Special Power of Attorney is a temporary grant of authority, not a perpetual one. The Supreme Court recently made a definitive ruling on this matter, reiterating that an SPA automatically becomes void upon the death of the person who granted it.",
  authorName: "FMC Law",
  publishedDate: "2025-09-15", // Example date
};

// Metadata for this specific page.
export async function generateMetadata(): Promise<Metadata> {
  const { title, summary, slug } = post;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fmclaw.com.ph";
  // NOTE: You can create a specific social share image for this article
  const imageUrl = `${siteUrl}/socialshare.png`; 
  const imageAlt = `Featured image for ${title}`;

  return {
    title: `${title} | FMC Law`,
    description: summary,
    openGraph: {
      title: `${title} | FMC Law`,
      description: summary,
      url: `${siteUrl}/blog/${slug}`,
      siteName: "FMC Law",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | FMC Law`,
      description: summary,
      images: [imageUrl],
    },
  };
}

export default function TheAuthorityThatFadesPage() {
  const { title, publishedDate, authorName } = post;
  const imageAlt = `Featured image for ${title}`;

  return (
    <>
      <Header />
      <main className="font-sans text-gray-800">
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#D4AF37] hover:text-black transition-colors mb-8 font-inter"
            >
              ← Back to Blog
            </Link>

            <article>
              <header className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold font-oswald text-gray-900 mb-4">
                  {title}
                </h1>
                <div className="text-gray-600 font-inter">
                  <span>By {authorName}</span>
                  <span className="mx-2">•</span>
                  <span>
                    {new Date(publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </header>

              <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
                <Image
                  src="/assets/background/the-power-that-was.jpg"
                  alt={imageAlt || `Featured image for ${title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="prose prose-lg max-w-none font-inter prose-p:mb-8">
                <p className="lead">
                  You’ve been entrusted with managing a family member&apos;s affairs —
                  perhaps paying bills, selling a property, or handling bank
                  transactions — through a Special Power of Attorney (SPA).
                  It’s a position of trust and responsibility. But what happens
                  to that authority after the person who granted it passes away?
                </p>
                <br />
                <p>
                  Many believe the SPA remains active, or at least that their
                  actions are still legally valid. However, this is a dangerous
                  misconception that can lead to serious legal consequences.
                </p>
                <br />

                <p>
                  A Special Power of Attorney is a temporary grant of
                  authority, not a perpetual one. It is a legal contract with a
                  built-in expiration date that many people are not aware of.
                  The Supreme Court recently made a definitive ruling on this
                  matter, reiterating that with very few exceptions, an SPA
                  automatically becomes void upon the death of the person who
                  granted it. This decision has major implications for families
                  and agents handling assets after a loved one&apos;s passing.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  A Finite Agreement: The Law of Agency and Its Termination
                </h2>
                <br />

                <p>
                  The legal relationship between a principal and an agent is
                  governed by the Civil Code of the Philippines. An agency is
                  created when one person, the principal, authorizes another
                  person, the agent, to act on their behalf in transactions
                  with third parties. A Special Power of Attorney (SPA) is the
                  legal document that formalizes this authority for a specific
                  act or series of acts.
                </p>
                <br />

                <p>
                  The existence of an agency is dependent on the life of both
                  the principal and the agent. The authority granted to the
                  agent is &quot;personal, representative, and derivative,&quot; which
                  means it cannot exist without the principal. According to
                  Article 1919 of the Civil Code, an agency is extinguished:
                </p>
                
                {/* Using a list for better readability of legal points */}
                <ul className="list-disc pl-8 my-8">
                    <li>By its revocation;</li>
                    <li>By the withdrawal of the agent;</li>
                    <li>By the death, civil interdiction, insanity or insolvency of the principal or of the agent;</li>
                    <li>By the dissolution of the firm or corporation which entrusted or accepted the agency;</li>
                    <li>By the accomplishment of the object or purpose of the agency;</li>
                    <li>By the expiration of the period for which the agency was constituted.</li>
                </ul>

                <p>
                  One of the most significant is the death of either the
                  principal or the agent. This termination happens
                  automatically and immediately.
                </p>
                <br />

                <p>
                  While this rule is strict, there are limited exceptions where
                  an agent’s act might still be considered valid after the
                  principal’s death:
                </p>
                <br />

                <ul className="list-disc pl-8 my-8">
                    <li><b>When the agency was for the parties’ common interest:</b> This applies when the agency was not solely for the benefit of the principal but was for the mutual benefit of both the principal and the agent.</li>
                    <li><b>When the agent, unaware of the death, contracts with a third party in good faith:</b> This exception protects innocent third parties who enter into a transaction with an agent who is unaware that the principal has already passed away.</li>
                </ul>

                <p>
                  However, these exceptions are very narrow and difficult to
                  prove. In most cases, the death of the principal means the
                  immediate and automatic death of the SPA.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  A Legal Memento
                </h2>
                <br />

                <p>
                  The Supreme Court, in a decision penned by Associate Justice
                  Henri Jean Paul B. Inting, recently addressed this critical
                  issue in the case of a mortgage that was executed after the
                  principal&apos;s death. The facts of the case are a clear
                  illustration of why understanding the termination of an agency
                  is so important.
                </p>
                <br />

                <p>
                  In 1998, Meliton Alova executed an SPA in favor of his
                  daughter, Jessica Alova Uberas, over a conjugal property he
                  owned with his wife. Meliton died later that year. Despite
                  his death, Jessica used the very same SPA five years later in
                  2003 to mortgage the property for a personal loan she obtained
                  from San Miguel Foods, Inc. (SMFI). When Jessica failed to
                  pay the loan, the property was foreclosed, and SMFI became
                  the winning bidder.
                </p>
                <br />

                <p>
                  Meliton&apos;s wife and his other daughter filed a case to
                  nullify the mortgage and the foreclosure sale. Both the
                  Regional Trial Court (RTC) and the Court of Appeals (CA)
                  determined that Meliton’s death indeed ended the agency.
                  However, their rulings on the validity of the mortgage
                  differed. The RTC found the mortgage valid on the wife&apos;s
                  one-half share, while the CA declared it completely void.
                </p>
                <br />

                <p>
                  The case reached the Supreme Court, which partly ruled in
                  SMFI&apos;s favor but clarified the legal issues with precision.
                  The Court reaffirmed that the SPA was terminated the moment
                  Meliton died. As a result, Jessica had no authority to act on
                  her father’s behalf when she executed the mortgage in 2003.
                  Since the exceptions under the Civil Code did not apply—Jessica
                  was fully aware of her father’s death and the SPA was not for
                  their mutual benefit—her action was void as to her father&apos;s
                  share. The Court also pointed out that for an agent’s act to
                  bind the principal, the deed must be signed and sealed in the
                  principal’s name, which Jessica failed to do as she signed in
                  her personal capacity. The Court also clarified that the
                  marital conformity of the wife did not make her a principal to
                  the SPA.
                </p>
                <br />

                <p>
                  However, the Court also noted a key detail: upon her
                  father&apos;s death, Jessica automatically became a co-owner of
                  the property as one of his heirs. When she signed the mortgage
                  deed, she was not just acting as an agent but also as a
                  co-owner encumbering her own undivided share. Therefore, the
                  mortgage and the subsequent foreclosure were not entirely
                  void. They were valid only with respect to Jessica’s share in
                  the property. The Court remanded the case to the RTC to
                  determine the exact share Jessica held and to annotate the
                  shares of the other heirs and that of SMFI, which acquired
                  Jessica’s interest.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  Taking Control of What&apos;s Left Behind
                </h2>
                <br />

                <p>
                  The Special Power of Attorney is a temporary legal instrument
                  that is automatically terminated upon the principal’s death.
                  Any act performed under it afterward is generally void. This
                  recent jurisprudence underscores the importance of immediate
                  action. Families should not rely on an expired SPA to manage
                  a deceased loved one&apos;s assets. Instead, they should take
                  legal steps to settle the estate, which includes a proper
                  partition of the property, to avoid complicated disputes.
                </p>
                <br />

                <p>
                  Whether you are in Manila or in regions like Western Visayas,
                  seeking legal guidance is a proactive step to protect your
                  interests. For a legal consultation, a skilled attorney in
                  Manila or a trusted Iloilo law firm can help clarify legal

                  concepts and guide you through the process of settling an
                  estate. To properly handle the assets of a deceased family
                  member, you may need to hire a trusted firm or find a
                  professional who offers reliable law services so you can
                  ensure your actions are legally sound and prevent costly
                  battles down the road.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
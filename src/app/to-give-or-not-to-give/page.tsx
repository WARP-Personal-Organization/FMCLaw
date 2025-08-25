// src/app/failed-sale-anatomy/page.tsx
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// This is a static page for a single article.

// Hardcoded post data for the new article
const post = {
  slug: "to-give-or-not-to-give",
  title: "The Anatomy of a Failed Sale",
  summary:
    "The Supreme Court of the Philippines recently clarified that a simple acknowledgment receipt is not enough to constitute a full-fledged contract of sale, highlighting the critical difference between a Contract of Sale and a Contract to Sell.",
  authorName: "FMC Law",
  publishedDate: "2025-08-25", // Example date
};

// Metadata for this specific page.
export async function generateMetadata(): Promise<Metadata> {
  const { title, summary, slug } = post;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fmclaw.com.ph";
  // NOTE: Using the default social share image.
  const imageUrl = `${siteUrl}/socialshare.png`; 
  const imageAlt = `Featured image for ${title}`;

  return {
    title: `${title} | FMC Law`,
    description: summary,
    openGraph: {
      title: `${title} | FMC Law`,
      description: summary,
      url: `${siteUrl}/${slug}`,
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

export default function FailedSaleAnatomyPage() {
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
                  // NOTE: You should replace this with a relevant image for the article.
                  src="/assets/background/themomentoftruth.jpg"
                  alt={imageAlt || `Featured image for ${title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="prose prose-lg max-w-none font-inter prose-p:mb-8">
                <p className="lead">
                  Imagine you&apos;ve been saving up for that dream car or a prime
                  piece of land, a big investment that signifies a huge personal
                  milestone. You finally find the perfect seller, agree on a
                  price, and to secure the item, you hand over a significant
                  down payment. The seller gives you a simple acknowledgment
                  receipt, maybe even a handshake, and you walk away thinking,
                  &quot;It&apos;s mine!&quot; But what if the seller suddenly backs out,
                  claiming the deal was never finalized? Did you have a valid
                  contract, or just a promise?
                </p>
                <br />
                <p>
                  This all-too-common situation, whether for a vehicle, a
                  high-end collector&apos;s item, or a piece of property, brings up
                  an important legal distinction in determining the difference
                  between a Contract of Sale and a Contract to Sell. The Supreme
                  Court of the Philippines recently provided a clarification on
                  this matter, reiterating that a simple acknowledgment
                  receipt, without specific language, is not enough to
                  constitute a full-fledged contract of sale. This decision has
                  significant implications for anyone entering into a
                  transaction.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  Understanding the Legal Weight of Your Contract
                </h2>
                <br />

                <p>
                  To fully appreciate the gravity of the Supreme Court&apos;s
                  decision, it is essential to delve into the legal distinctions
                  that govern transactions. In Philippine law, the difference
                  between a Contract of Sale and a Contract to Sell is not a
                  mere technicality but a fundamental difference in the nature
                  of the agreement and the rights and obligations that arise
                  from it.
                </p>
                <br />

                <p>
                  The New Civil Code of the Philippines defines a Contract of
                  Sale as an agreement where one party obligates themselves to
                  transfer the ownership and to deliver a specific item, and the
                  other party obligates themselves to pay a definite price. By
                  its very nature, a Contract of Sale is a consensual contract
                  because it is perfected by the simple meeting of the minds on
                  three essential elements: consent (the agreement to transfer
                  ownership for a price), a determinate subject matter, and a
                  price certain in money or its equivalent . Under this
                  framework, the legal title and ownership of the item pass to
                  the buyer the moment the contract is perfected, even if the
                  actual payment or delivery happens later.
                </p>
                <br />

                <p>
                  In a Contract to Sell, the seller keeps ownership of the
                  property and only agrees to sell it once a specific condition
                  is met, typically the full payment of the purchase price. The
                  Supreme Court, in <em>Coronel vs. Court of Appeals</em>, called this
                  a positive suspensive condition. If the buyer fails to meet
                  this condition, the seller&apos;s obligation to sell the property
                  never begins, so it&apos;s not a breach of contract.
                </p>
                <br />

                <p>
                  This is critical if the seller sells the property to a third
                  party. Since ownership was never transferred, the initial
                  buyer can&apos;t force the sale or get the property back; their only
                  option is to sue the seller for damages. In a conditional
                  Contract of Sale, however, ownership automatically transfers
                  to the first buyer once the condition is met. If the seller
                  then tries to sell the property to someone else, that second
                  buyer cannot be considered a buyer in good faith, and the
                  first buyer can demand the property back.
                </p>
                <br />

                <p>
                  Ultimately, the nature of your agreement depends on whether
                  the seller immediately consents to transfer ownership or if
                  they reserve it until a condition is fulfilled.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  When the Deal is Not a Done Deal
                </h2>
                <br />

                <p>
                  The Supreme Court&apos;s ruling on the case of{' '}
                  <em>Chavez vs. Gopez</em> provides a definitive and educational
                  lesson on the legal weight of a simple acknowledgment
                  receipt. The decision, penned by Associate Justice Maria
                  Filomena D. Singh, addressed a dispute between the Chavez
                  family, who were selling two properties for a total price of
                  PHP 31.5 million, and Spouses Joselito and Adriana Gopez, who
                  were buying them.
                </p>
                <br />

                <p>
                  A key condition of the agreement was that the spouses would
                  make a PHP 5 million down payment. The only evidence of their
                  agreement was a handwritten acknowledgment receipt for an
                  initial payment of PHP 200,000, which was described as
                  &quot;earnest money.&quot; The receipt also stipulated that the
                  spouses needed to prepare a &quot;Contract to Sell, Deed of
                  Absolute Sale &amp; Extrajudicial Settlement of Estate.&quot;
                </p>
                <br />

                <p>
                  The Chavez family eventually terminated the deal, claiming the
                  spouses failed to pay the full down payment and delayed the
                  preparation of the necessary documents. In response, the
                  Spouses Gopez filed a case to compel the Chavez family to
                  proceed with the sale.
                </p>
                <br />

                <p>
                  The Supreme Court examined the acknowledgment receipt to
                  determine the true nature of the agreement. The Court ruled
                  that the transaction was a contract to sell, not a contract of
                  sale. Its reasoning centered on the fact that the receipt
                  lacked a clear and express promise from the Chavez family to
                  transfer ownership of the properties. The document merely
                  showed that the spouses were required to meet specific
                  suspensive conditions before a formal sale could be finalized.
                </p>
                <br />
                
                <p>
                  Since the Spouses Gopez did not fulfill these conditions, most
                  notably the full payment of the down payment, the Chavez
                  family&apos;s obligation to sell the property never materialized. The
                  Court clarified that this was not a matter of a breach of
                  contract, but a simple failure of a condition. As a result,
                  the Chavez family was within its rights to terminate the
                  agreement and retain ownership of the properties. The Court
                  further noted that the money paid was considered earnest money
                  within the context of a contract to sell, which serves as an
                  assurance of a party&apos;s intent and not as a guarantee of a
                  perfected sale.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  Bottom Line for Buyers and Sellers
                </h2>
                <br />

                <p>
                  This decision has significant implications for anyone involved
                  in a transaction, whether it is for a car, a piece of art, or
                  a multi-million-peso property. The Court made it clear that a
                  simple acknowledgment receipt is not a substitute for a
                  formal contract of sale.
                </p>
                <br />

                <p>
                  As a buyer, you must always ensure the document explicitly
                  states the seller’s intent to transfer ownership. This simple
                  step can prevent a deal from falling apart. On the other hand,
                  as a seller, you must understand the power you hold with a
                  Contract to Sell. You retain ownership of the property until
                  the buyer fulfills all conditions, giving you a strong
                  position if the buyer fails to follow through. The title of a
                  document — whether it&apos;s called an &quot;acknowledgment
                  receipt&quot; or &quot;earnest money receipt&quot;— is not as important
                  as its content. What truly matters is whether the document
                  demonstrates a clear and immediate intent to transfer
                  ownership.
                </p>
                <br />

                <p>
                  To protect your interests and avoid future disputes, always
                  consult with a legal professional. An expert can help you
                  draft or review documents to ensure you are fully protected in
                  your transaction. For those in Western Visayas, finding
                  experienced lawyers in Iloilo City is a good place to start. A
                  reliable Iloilo law firm can provide the legal consultation
                  and law services you need. If you need to hire a litigation
                  firm in Western Visayas or are looking for an attorney near
                  you in Iloilo, legal professionals can guide you through the
                  process and help you secure your deal.
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
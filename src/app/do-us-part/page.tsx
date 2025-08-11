// src/app/do-us-part/page.tsx
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// This is a static page for a single article.

// Hardcoded post data
const post = {
  slug: "do-us-part",
  title: "Till Death Do Us Part, Or a Secret Does",
  summary:
    "The Supreme Court's latest decision sheds light on the legal implications of withholding one's sexual orientation before marriage.",
  authorName: "FMC Law",
  publishedDate: "2025-08-11", // Example date
};

// Metadata for this specific page.
export async function generateMetadata(): Promise<Metadata> {
  const { title, summary, slug } = post;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fmclaw.com.ph";
  // FIX: Reverted to the original social share image for metadata
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

export default function DoUsPartPage() {
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
                  // The image displayed on the page remains brokenvow.jpg
                  src="/assets/background/brokenvow.jpg"
                  alt={imageAlt || `Featured image for ${title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="prose prose-lg max-w-none font-inter prose-p:mb-8">
                <p className="lead">
                  The Supreme Court&apos;s latest decision sheds light on the legal
                  implications of withholding one&apos;s sexual orientation before
                  marriage.
                </p>
                <br />
                <p>
                  Marriage is built on a foundation of trust, honesty, and
                  mutual respect. But what happens when that foundation is built
                  on a lie? In the Philippines, the law recognizes that genuine
                  consent is the cornerstone of a valid marriage. When one
                  party’s consent is obtained through deceit, the legal
                  integrity of the union can be called into question. The
                  concealment of a partner&apos;s true identity, particularly their
                  sexuality, can be a profound betrayal that not only breaks a
                  person&apos;s heart but also a serious legal matter.
                </p>
                <br />

                <p>
                  The Supreme Court recently brought this issue to the forefront
                  in a significant decision. The Court&apos;s ruling clarifies a
                  long-standing principle, highlighting that hiding one&apos;s
                  homosexuality from a spouse constitutes a form of fraud that
                  can be used as a valid reason to annul a marriage. This
                  decision provides a clear path for those who discover their
                  spouse has concealed their sexuality and affirms the
                  importance of truth in a marital relationship.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  Understanding Annulment in the Philippines
                </h2>
                <br />

                <p>
                  The Family Code of the Philippines points out the importance
                  of understanding the distinction between the different ways a
                  marriage can be terminated. Unlike in many other countries,
                  divorce is not a legal option here. Instead, couples can seek
                  a declaration of nullity for marriages that were void from the
                  beginning (e.g., due to bigamy or psychological incapacity) or
                  an annulment for marriages that are considered &quot;voidable.&quot;
                </p>
                <br />

                <p>
                  An annulment is a legal process that voids a marriage that was
                  initially valid but had a defect at its inception. One of the
                  primary defects recognized by the Family Code is when one
                  party’s consent to the marriage was obtained through force,
                  intimidation, or, as in this case, fraud.
                </p>
                <br />

                <p>
                  Article 45 of the Family Code specifically lists the exclusive
                  grounds for annulment. More importantly, Article 46
                  explicitly outlines what constitutes fraud for this purpose.
                  This includes the concealment of serious health issues, a
                  prior criminal conviction, or pregnancy by another man. The
                  law also singles out a particularly sensitive form of
                  deception: the concealment of homosexuality or lesbianism. The
                  law acknowledges that this kind of secret is so fundamental
                  that if it were known, the other party would likely never have
                  agreed to the marriage.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  A Story of Concealment and Discovery
                </h2>
                <br />

                <p>
                  The recent Supreme Court decision, penned by Associate Justice
                  Antonio T. Kho, Jr., brought these principles to life. The
                  case stemmed from a Petition for Annulment of Marriage filed
                  by Jaaziel M. Salva-Roldan against her husband, Lory O. Roldan,
                  on the ground of fraudulent concealment of homosexuality.
                  Despite being properly served with a summons, Lory never filed
                  a response, effectively waiving his right to present a
                  defense.
                </p>
                <br />

                <p>
                  Jaaziel testified that she and Lory began a long-distance
                  relationship in 2011 after meeting on social media while Lory
                  was working in Saudi Arabia. When Lory returned to the
                  Philippines for vacation in 2012, their first date was marked
                  by his distant behavior. Jaaziel noted a lack of intimacy,
                  with Lory avoiding physical contact and even sitting apart
                  from her. When she confronted him, Lory explained his behavior
                  as a result of timidity and a lack of confidence, and Jaaziel
                  learned he was 31 years old and she was his first girlfriend.
                </p>
                <br />

                <p>
                  The couple married in 2013, but the unusual behavior
                  continued. Jaaziel alleged that their honeymoon was anything
                  but normal, with Lory consistently making excuses to avoid
                  intimacy. He would initiate arguments and often sleep in a
                  separate room. Just two months after their wedding, Lory
                  returned to Saudi Arabia and ceased all communication. After a
                  brief, strange exchange on their first anniversary, Lory&apos;s
                  silence resumed.
                </p>
                <br />

                <p>
                  The truth finally emerged in June 2015 when Jaaziel discovered
                  magazines of half-naked and naked male models in Lory&apos;s
                  belongings. When confronted, Lory admitted his homosexuality.
                  This discovery, Jaaziel explained, was a devastating
                  revelation that not only ended their marriage but also made
                  her understand Lory&apos;s peculiar behavior before and after the
                  wedding. She promptly left the conjugal home and filed for
                  annulment in 2017.
                </p>
                <br />

                <p>
                  Jaaziel’s father, Francisco Salva, corroborated her testimony.
                  He described Lory as <em>&quot;medyo malambot&quot;</em> or somewhat
                  effeminate, and <em>&quot;not romantic&quot;</em> or{' '}
                  <em>&quot;man enough,&quot;</em> noting that Lory never wooed
                  Jaaziel properly or showed public affection typical of a
                  newlywed. Francisco also attested that Jaaziel confided in him
                  about Lory&apos;s homosexuality and her devastation upon the
                  discovery.
                </p>
                <br />

                <p>
                  Both the Regional Trial Court (RTC) and the Court of Appeals
                  (CA) initially denied Jaaziel&apos;s petition. The RTC ruled that
                  Jaaziel failed to establish Lory&apos;s homosexuality, dismissing
                  her and her father&apos;s testimonies as &quot;self-serving.&quot; The
                  CA affirmed this decision, holding that the evidence was not
                  convincing enough to prove that Lory had fraudulently
                  concealed his sexuality to obtain Jaaziel&apos;s consent.
                </p>
                <br />

                <p>
                  The central issue brought before the Supreme Court was whether
                  the lower courts were correct in disregarding the woman&apos;s
                  testimony and evidence and, in turn, if fraudulent concealment
                  of homosexuality could be proven to annul a marriage.
                </p>
                <br />

                <p>
                  The Supreme Court, in a clear and decisive ruling, reversed
                  the decisions of the lower courts and annulled the marriage.
                  The Court gave full credence to Jaaziel’s allegations, finding
                  that the circumstances and Lory&apos;s actions—or lack
                  thereof—provided more than enough evidence to prove his
                  fraudulent concealment.
                </p>
                <br />

                <p>
                  The Court held that the husband&apos;s admission of
                  homosexuality, coupled with his pattern of avoiding intimacy,
                  his distant behavior, and his unexplained silence during
                  periods of questioning about his sexuality, could not be
                  ignored. It determined that Lory intentionally hid his true
                  sexual orientation to persuade Jaaziel to marry him and to
                  maintain the relationship.
                </p>
                <br />

                <p>
                  By doing so, the Court directly applied Article 45(3) in
                  relation to Article 46(4) of the Family Code. Article 45
                  states that a marriage can be annulled if one party&apos;s consent
                  was obtained through fraud. Article 46 explicitly defines the
                  concealment of homosexuality as a form of fraud that is
                  serious enough to annul a marriage.
                </p>
                <br />

                <p>
                  This ruling stands as a powerful reminder that consent to
                  marriage must be based on a genuine understanding of a
                  spouse&apos;s identity. The Court found that Jaaziel’s consent was
                  fundamentally vitiated by Lory’s deliberate concealment, and
                  had she known the truth, she would not have entered into the
                  marriage.
                </p>
                <br />

                <h2 className="font-bold text-2xl">
                  What This Means for Marital Integrity
                </h2>
                <br />

                <p>
                  This Supreme Court decision is a powerful statement about the
                  importance of truth and honesty in marriage. It tells us that
                  a marriage cannot be legally sustained if it is based on a
                  foundational lie about one&apos;s identity. The ruling protects a
                  spouse who, without their knowledge, is betrayed by a partner
                  who intentionally hides a fundamental part of themselves.
                </p>
                <br />

                <p>
                  For those who find themselves in a similar heartbreaking
                  situation, this ruling offers a clear legal recourse. If you
                  have reason to believe your spouse fraudulently concealed
                  their homosexuality or another serious matter at the time of
                  your marriage, you may have grounds for annulment.
                </p>
                <br />

                <p>
                  Navigating the legal process of annulment requires careful
                  attention to the facts and evidence. It is crucial to prove
                  that the concealment was intentional and that you would not
                  have married had you known the truth. This is where legal
                  counsel becomes invaluable.
                </p>
                <br />

                <p>
                  We believe that every person deserves to enter into a marriage
                  with full knowledge and genuine consent. It is a ruling that
                  helps uphold the integrity of marital unions in the
                  Philippines.
                </p>
                <br />

                <p>
                  If you have questions about annulment or other family law
                  matters, seeking legal guidance is a next step. Finding a
                  qualified legal professional is essential to understanding
                  your rights and options. A good family law lawyer or
-                  litigation attorney in Iloilo can provide the legal advice and
                  assistance you need to move forward. For those in Western
                  Visayas, finding experienced lawyers in Iloilo City is a good
                  place to start. For legal consultations, reach out to trusted
                  law services that can guide you through this difficult
                  process.
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
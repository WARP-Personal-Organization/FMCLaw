import React from "react";

// --- PARTNER DATA AND TYPES ---
interface PartnerInfoGroup {
  heading: string;
  items: string[];
}

interface Partner {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  specialties: string[];
  infoGroups: PartnerInfoGroup[];
}

// Partner Card Component
interface PartnerCardProps {
  partner: Partner;
  imageSide: "left" | "right";
}

const GoldCheckIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4AF37"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

function AboutPartnerCard(AboutPartnerCardProps: Readonly<PartnerCardProps>) {
  const { partner } = AboutPartnerCardProps;
  const { name, role, imageUrl, specialties, infoGroups } = partner;

  return (
    <article className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden font-inter">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-0">
        <div className={`md:col-span-5  bg-gray-100`}>
          <div className="aspect-[3/2] w-full  h-full">
            <img
              src={imageUrl}
              alt={`Portrait of ${name}`}
              className="w-full h-full object-cover md:rounded-l-md md:rounded-r-none" // Adjust rounding based on side if needed, but usually image is flush
            />
          </div>
        </div>

        {/* Content Section */}
        <div className={`md:col-span-7 p-6 `}>
          {" "}
          {/* 24px padding */}
          <h4 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-1">
            {name}
          </h4>
          <p className="text-sm font-medium text-[#D4AF37] font-sans mb-4 tracking-wide">
            {role}
          </p>
          {specialties && specialties.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-full font-sans"
                >
                  {specialty}
                </span>
              ))}
            </div>
          )}
          <div className="space-y-5">
            {infoGroups.map((group) => (
              <div key={group.heading}>
                <div className="flex items-center gap-2 align-middle">
                  <img
                    src={`assets/${group.heading}.png`}
                    alt=""
                    className="aspect-square object-contain "
                  />
                  <h5 className=" font-bold font-sans text-gray-800">
                    {group.heading}
                  </h5>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-600 font-sans leading-relaxed"
                    >
                      <GoldCheckIcon className="w-4 h-4 mr-2.5 mt-[3px] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default AboutPartnerCard;

import React from "react";

interface DetailsType {
  label: string;
  value: string;
}

interface PartnersType {
  id: number;
  name: string;
  imageUrl: string;
  role: string;
  details: Array<DetailsType>;
}

interface PartnersCardPropType {
  partner: PartnersType;
}

function PartnersCard(partnersCardProps: Readonly<PartnersCardPropType>) {
  const { partner } = partnersCardProps;
  return (
    <div
      key={partner.id}
      className="bg-white border border-[#E5E7EB] rounded-[6px] shadow-sm overflow-hidden flex flex-col transition-shadow hover:shadow-lg"
    >
      <div
        className="relative w-full aspect-square bg-no-repeat bg-amber-50 overflow-hidden bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('${partner.imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>
        <div className="m-4 absolute z-10 ">
          <h4 className="text-xl font-bold font-sans text-white mb-1">
            {partner.name}
          </h4>
          <p className="text-md font-semibold text-[#DAA520] font-sans mb-4">
            {partner.role}
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="space-y-3 flex-grow">
          {partner.details.map((detailBlock) => (
            <div key={detailBlock.label}>
              <p className="text-sm font-semibold font-sans text-gray-800 mb-0.5">
                {detailBlock.label}
              </p>
              <p className="text-sm font-sans text-gray-600 leading-relaxed">
                {detailBlock.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnersCard;

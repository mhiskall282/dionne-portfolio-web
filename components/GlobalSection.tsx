import Image from "next/image";

const imgMap = "https://www.figma.com/api/mcp/asset/4accfc8b-6c31-4f08-9c4c-d74c33461de8";

export default function GlobalSection() {
  return (
    <div className="bg-white w-full px-[141px] py-[120px]">
      <div className="flex flex-col gap-[34px] items-start w-full mb-[35px]">
        <p className="font-bold text-[#2e2e2e] text-[77px] w-full" style={{ fontFamily: 'Playfair Display, serif' }}>
          Leaving my mark all around the globe!
        </p>
        <p className="font-medium text-[#a2a2a2] text-[48px] w-full">
          I've touched USA, Europe and Africa wit my presence, I'm coming to your continent next.
        </p>
      </div>
      
      <div className="relative h-[1077px] w-full">
        <div className="rounded-lg overflow-hidden w-[1722px] h-[1077px] relative">
          <Image src={imgMap} alt="World Map" fill className="object-cover" sizes="(max-width: 1722px) 100vw, 1722px" />
        </div>
        
        {/* USA Marker */}
        <div className="absolute left-[405px] top-[354px] flex flex-col gap-[12px] items-center w-[145px]">
          <div className="relative w-[41px] h-[41px]">
            <div className="absolute inset-0 rounded-full border-4 border-[#9b2430]" />
            <div className="absolute inset-[11px] rounded-full bg-[#9b2430]" />
          </div>
          <p className="font-bold text-[#2e2e2e] text-[48px] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            USA
          </p>
        </div>
        
        {/* Europe Marker */}
        <div className="absolute left-[1138px] top-[398px] flex flex-col gap-[12px] items-center w-[209px]">
          <div className="relative w-[41px] h-[41px]">
            <div className="absolute inset-0 rounded-full border-4 border-[#9b2430]" />
            <div className="absolute inset-[11px] rounded-full bg-[#9b2430]" />
          </div>
          <p className="font-bold text-[#2e2e2e] text-[48px] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Europe
          </p>
        </div>
        
        {/* Africa Marker */}
        <div className="absolute left-[583px] top-[726px] flex flex-col gap-[12px] items-center w-[145px]">
          <div className="relative w-[41px] h-[41px]">
            <div className="absolute inset-0 rounded-full border-4 border-[#9b2430]" />
            <div className="absolute inset-[11px] rounded-full bg-[#9b2430]" />
          </div>
          <p className="font-bold text-[#2e2e2e] text-[48px] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Africa
          </p>
        </div>
      </div>
    </div>
  );
}

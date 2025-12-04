import Image from "next/image";

const imgLogo = "https://www.figma.com/api/mcp/asset/21e899c0-177c-4f86-8fc8-3a1c0db539fe";
const imgSocial1 = "https://www.figma.com/api/mcp/asset/c4811afe-1bb2-4abd-a368-a929284c8515";
const imgSocial2 = "https://www.figma.com/api/mcp/asset/4705ab7f-c2cd-4010-9430-056990f8f831";
const imgSocial3 = "https://www.figma.com/api/mcp/asset/5391722f-983c-46b5-a5f2-94aff3792359";
const imgSocial4 = "https://www.figma.com/api/mcp/asset/41da653e-f5d4-49d3-ab31-628b2337af3f";
const imgUnderline = "https://www.figma.com/api/mcp/asset/06adf05a-dad7-45e6-85c4-7619b26e6395";

export default function Footer() {
  return (
    <footer className="bg-black box-border flex flex-col gap-2.5 items-center justify-center p-16 w-full">
      <div className="flex flex-col gap-[43px] items-center w-full">
        <div className="flex items-start justify-between w-full">
          <div className="w-[298px] h-[39px] relative">
            <Image src={imgLogo} alt="Dionne Logo" fill className="object-contain" sizes="298px" />
          </div>
          
          <div className="flex flex-col gap-4 items-start justify-center w-[295px]">
            {["Home", "About", "Books", "Speaking", "Blogs", "Resources"].map((item) => (
              <div key={item} className="box-border flex gap-2.5 items-center justify-center px-2.5 py-2">
                <p className="font-medium text-2xl text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-8 items-end justify-end">
            <div className="flex h-[368px] items-start justify-between w-[975px]">
              <div className="h-[368px] relative w-[235px]">
                <Image src={imgSocial1} alt="Social 1" fill className="object-cover" sizes="235px" />
              </div>
              <div className="h-[368px] relative w-[235px]">
                <Image src={imgSocial2} alt="Social 2" fill className="object-cover" sizes="235px" />
              </div>
              <div className="h-[368px] relative w-[235px]">
                <Image src={imgSocial3} alt="Social 3" fill className="object-cover" sizes="235px" />
              </div>
              <div className="h-[368px] relative w-[235px]">
                <Image src={imgSocial4} alt="Social 4" fill className="object-cover" sizes="235px" />
              </div>
            </div>
            
            <div className="flex flex-col gap-[13px] h-[111px] items-start w-[366px]">
              <p className="font-italic italic leading-[49px] text-[32px] text-center text-white w-full" style={{ fontFamily: 'Bad Script, cursive' }}>
                Connect with me on social
              </p>
              <div className="flex items-center justify-center w-full">
                <div className="rotate-180 h-[49px] relative w-[370px]">
                  <Image src={imgUnderline} alt="" fill sizes="370px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="h-0 w-full border-t border-gray-700" />
          <div className="flex gap-1 items-center">
            <div className="relative w-[16.667px] h-[16.667px]">
              <svg viewBox="0 0 17 17" fill="none">
                <path d="M8.333 1.417A6.917 6.917 0 1 0 15.25 8.333 6.925 6.925 0 0 0 8.333 1.417zm0 12.5a5.583 5.583 0 1 1 0-11.167 5.583 5.583 0 0 1 0 11.167z" fill="white"/>
              </svg>
            </div>
            <p className="font-medium text-2xl text-center text-white">
              2025 Dionne  Akom Tweneboah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

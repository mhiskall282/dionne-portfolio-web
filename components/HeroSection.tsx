import Image from "next/image";

const imgRich8810Jpeg2 = "https://www.figma.com/api/mcp/asset/4cf300c0-fef8-41a7-aae9-7b7110bd2903";
const imgGray = "https://www.figma.com/api/mcp/asset/0623171e-5374-404a-a357-b5037232a1a8";
const imgLightGray = "https://www.figma.com/api/mcp/asset/b52ff97b-40de-4172-a001-7894b241ea46";
const imgBlack = "https://www.figma.com/api/mcp/asset/73bf1d4a-9e2f-4ebd-9240-f9d3e11beda8";
const imgLightGray1 = "https://www.figma.com/api/mcp/asset/c23f92bd-0642-427e-9f91-6a1df6a99a39";
const imgBlack1 = "https://www.figma.com/api/mcp/asset/0c503b4c-4224-40df-b9eb-a3c548dbcc37";
const imgLightGray2 = "https://www.figma.com/api/mcp/asset/9fc01459-f871-477f-9606-4593f1562465";

export default function HeroSection() {
  return (
    <div className="bg-white relative w-full h-[992px]">
      <div className="absolute flex items-center justify-between left-[205px] top-[379px] w-[1505px]">
        <p className="font-medium text-[#a2a2a2] text-[32px] w-[467px] whitespace-pre-wrap">
          Blending law, leadership, and mentorship to shape a just and purpose-driven world.
        </p>
        <div className="flex gap-[35px] items-center">
          <div className="bg-[#9b2430] flex gap-2.5 h-[60px] items-center justify-center px-2.5 py-2 rounded-[32px] w-[209px]">
            <p className="font-semibold text-[32px] text-white">
              Book Me
            </p>
          </div>
          <div className="border-2 border-neutral-700 flex gap-2.5 h-[60px] items-center justify-center px-2.5 py-2 rounded-[32px] w-[209px]">
            <p className="font-semibold text-[32px] text-neutral-700">
              About Me
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute h-[986px] left-1/2 top-0 -translate-x-1/2 w-[805px]">
        <div className="absolute inset-0 overflow-hidden relative">
          <Image 
            src={imgRich8810Jpeg2} 
            alt="Dionne Tweneboah" 
            fill
            className="object-cover"
            sizes="(max-width: 820px) 100vw, 805px"
            priority
          />
        </div>
      </div>
      
      <div className="absolute bg-[#9b2430] h-[401px] left-0 overflow-clip top-[594px] w-full">
        {/* Decorative images */}
        <div className="absolute flex items-center justify-center left-[1632px] w-[523.822px] h-[523.822px] top-[23px]">
          <div className="rotate-[336.393deg]">
            <div className="overflow-clip relative w-[397.805px] h-[397.805px]">
              <Image src={imgGray} alt="" fill className="scale-y-[-1]" sizes="398px" />
              <Image src={imgLightGray} alt="" fill className="scale-y-[-1]" sizes="398px" />
            </div>
          </div>
        </div>
        
        <div className="absolute flex h-[396.766px] items-center justify-center left-[-114px] top-[85px] w-[402.652px]">
          <div className="rotate-[30deg]">
            <div className="h-[284.567px] overflow-clip relative w-[300.648px]">
              <Image src={imgBlack} alt="" fill className="scale-y-[-1]" sizes="301px" />
              <Image src={imgLightGray1} alt="" fill className="scale-y-[-1]" sizes="301px" />
            </div>
          </div>
        </div>
        
        <div className="absolute h-[188px] left-[1689px] overflow-clip top-[-30px] w-[283px] relative">
          <Image src={imgBlack1} alt="" fill className="scale-y-[-1]" sizes="283px" />
          <Image src={imgLightGray2} alt="" fill className="scale-y-[-1]" sizes="283px" />
        </div>
        
        <div className="absolute flex flex-col h-[358px] items-center left-1/2 text-[#fcfcfb] text-center top-[25px] -translate-x-1/2 w-[783px]">
          <p className="font-semibold text-[48px] w-full whitespace-pre-wrap">
            Hi, I'm
          </p>
          <div className="font-bold text-[120px] w-full whitespace-pre-wrap" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '85.08%' }}>
            <p className="mb-0">Dionne </p>
            <p>Tweneboah</p>
          </div>
        </div>
      </div>
    </div>
  );
}

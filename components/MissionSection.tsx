import Image from "next/image";

const imgRectangle19 = "https://www.figma.com/api/mcp/asset/4accfc8b-6c31-4f08-9c4c-d74c33461de8";
const imgVector = "https://www.figma.com/api/mcp/asset/28e792dd-2884-45b6-ab2c-f6fa6267cd9e";
const imgVector1 = "https://www.figma.com/api/mcp/asset/a121c503-f527-496e-b953-284b2ee2a476";
const imgVector2 = "https://www.figma.com/api/mcp/asset/891a4b09-5699-4fb2-876f-3abd76cdfe9e";

export default function MissionSection() {
  return (
    <div className="bg-[#9b2430] box-border flex flex-col gap-[60px] items-center justify-center px-[141px] py-[120px] w-full">
      <div className="flex gap-[83px] items-end w-full">
        <div className="flex flex-col gap-[84px] items-start w-[950px]">
          <p className="font-bold text-[#fcfcfb] text-[84px] w-full whitespace-pre-wrap">
            I'm on a Mission
          </p>
          <div className="flex flex-col gap-[64px] items-start w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col h-[55px] items-center relative w-[175px]">
                <div className="w-full aspect-[175/16] relative">
                  <Image src={imgVector} alt="" fill sizes="175px" />
                </div>
                <p className="absolute font-semibold leading-[49px] left-1/2 text-[32px] text-black text-center top-1/2 -translate-x-1/2 -translate-y-1/2 w-[227px] whitespace-pre-wrap">
                  For a Purpose
                </p>
              </div>
              <p className="font-medium leading-[49px] text-[#fcfcfb] text-[32px] w-full whitespace-pre-wrap">
                Awakening purpose in others — inspiring people to rise above fear and live lives aligned with who they're truly meant to be.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col h-[55px] items-center relative w-[175px]">
                <div className="w-full aspect-[175/16] relative">
                  <Image src={imgVector} alt="" fill sizes="175px" />
                </div>
                <p className="absolute font-semibold leading-[49px] left-1/2 text-[32px] text-black text-center top-1/2 -translate-x-1/2 -translate-y-1/2 w-[227px] whitespace-pre-wrap">
                  For a People
                </p>
              </div>
              <p className="font-medium leading-[49px] text-[#fcfcfb] text-[32px] w-full whitespace-pre-wrap">
                Empowering women and youth through storytelling, mentorship, and authentic connection reminding them of their worth and potential.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col h-[55px] items-center relative w-[452px]">
                <div className="h-[35.84px] relative w-[392px]">
                  <Image src={imgVector1} alt="" fill sizes="392px" />
                </div>
                <p className="absolute font-semibold leading-[49px] left-1/2 text-[32px] text-black text-center top-1/2 -translate-x-1/2 -translate-y-1/2 w-[442px] whitespace-pre-wrap">
                  The Passion That Drives Me
                </p>
              </div>
              <p className="font-medium leading-[49px] text-[#fcfcfb] text-[32px] w-full whitespace-pre-wrap">
                Merging creativity, courage, and faith to build projects, platforms, and messages that spark transformation and lasting impact.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col h-[55px] items-center relative w-[564px]">
                <div className="h-[49px] relative w-[538px]">
                  <Image src={imgVector2} alt="" fill sizes="538px" />
                </div>
                <p className="absolute font-semibold leading-[49px] left-1/2 text-[32px] text-black text-center top-1/2 -translate-x-1/2 -translate-y-1/2 w-[554px] whitespace-pre-wrap">
                  The Legacy I want to leave on earth  
                </p>
              </div>
              <p className="font-medium leading-[49px] text-[#fcfcfb] text-[32px] w-full whitespace-pre-wrap">
                Creating meaningful work that transcends time , a legacy of purpose, empowerment, and hope for generations to come.
              </p>
            </div>
          </div>
        </div>
        
        <div className="h-[1071px] relative w-[605.475px]">
          <div className="inset-0 overflow-hidden relative">
            <Image src={imgRectangle19} alt="Dionne" fill className="object-cover" sizes="(max-width: 640px) 100vw, 605px" />
          </div>
        </div>
      </div>
      
      <div className="box-border flex items-start justify-between pl-3 pr-[33px] relative w-[1029px]">
        <p className="flex-1 font-italic italic text-[#fcfcfb] text-[40px] text-center whitespace-pre-wrap">
          True success isn't about recognition or wealth; it's about the lives you touch and the change you inspire while you're here , and  long after you're gone
        </p>
        <p className="absolute font-['Fjord_One'] text-[#fcfcfb] text-[154px] left-[-45px] top-[-21px]">
          "
        </p>
        <div className="absolute flex h-[106px] items-center justify-center left-[1029px] top-[57px] w-[56px]">
          <div className="rotate-180 scale-y-[-1]">
            <p className="font-['Fjord_One'] text-[#fcfcfb] text-[154px]">
              "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

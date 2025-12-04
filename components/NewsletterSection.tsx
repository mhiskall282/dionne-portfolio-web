import Image from "next/image";

const imgRectangle11 = "https://www.figma.com/api/mcp/asset/1c230b37-76fa-462a-9644-e41b7babc2a5";
const imgLine2 = "https://www.figma.com/api/mcp/asset/be24c75b-7aa6-446a-a3bf-796e52573441";
const imgEllipse = "https://www.figma.com/api/mcp/asset/64cadf5e-57cd-4b4a-8b08-fe535824c5e2";

export default function NewsletterSection() {
  return (
    <div className="bg-white relative w-full h-[1145px]">
      <div className="absolute h-[1111px] left-0 top-0 w-[1273px]">
          <div className="absolute h-[1304px] left-0 top-0 w-[1273px] relative">
            <Image src={imgRectangle11} alt="" fill className="object-cover" sizes="(max-width: 1273px) 100vw, 1273px" />
        </div>
        <div className="absolute bg-gradient-to-b from-transparent to-[#737373] h-[1417px] left-0 top-0 w-[1273px]" />
        
        <div className="absolute flex flex-col gap-12 items-start left-[90px] text-[#f6f6f6] top-[652px] w-[1022px]">
          <p className="font-bold text-[61px] w-full" style={{ fontFamily: 'Playfair Display, serif' }}>
            It's Your Time to Shine
          </p>
          <p className="font-medium text-[48px] w-full">
            Join my newsletter for honest conversations on growth, purpose, and becoming your best self. Every message is crafted to inspire you to rise above ordinary and step boldly into your calling.
          </p>
        </div>
      </div>
      
      <div className="absolute box-border flex gap-2.5 h-[1145px] items-center right-[141px] px-[66px] py-[148px] top-0">
        <div className="flex flex-col gap-[123px] h-[963px] items-end w-[515px]">
          <div className="flex flex-col gap-16 items-start w-full">
            <p className="font-extrabold text-[#9b2430] text-[70px] w-full" style={{ fontFamily: 'Playfair, serif' }}>
              Sign up to my weekly newsletter
            </p>
            <p className="font-medium text-[36px] text-neutral-500 tracking-[0.72px] w-full">
              Don't miss your chance. Sign Up today!
            </p>
          </div>
          
          <div className="flex flex-col gap-[81px] items-end w-full">
            <div className="flex flex-col gap-12 items-center w-full">
              <div className="border border-[#a2a2a2] box-border flex gap-2.5 h-[86px] items-center justify-center px-8 py-2 rounded-[32px] w-full">
                <p className="flex-1 font-medium text-[#a2a2a2] text-[32px]">
                  Your email
                </p>
              </div>
              
              <div className="flex gap-6 items-center w-full">
                <div className="h-0 w-[219px] border-t border-gray-300" />
                <div className="w-[17px] h-[17px] rounded-full bg-[#9b2430]" />
                <div className="h-0 w-[219px] border-t border-gray-300" />
              </div>
            </div>
            
            <div className="flex flex-col gap-8 items-start w-full">
              <div className="bg-[#7b1e23] box-border flex gap-2.5 h-[87px] items-center justify-center p-2.5 rounded-[32px] w-full">
                <p className="font-semibold text-[32px] text-white">
                  Sign me Up!
                </p>
              </div>
              <p className="font-medium text-[26px] text-center text-neutral-500 tracking-[0.52px] w-full">
                No spam, just real talk in your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="absolute font-bold left-[90px] text-[#f6f6f6] text-[48px] top-[98px] w-[566px]" style={{ fontFamily: 'Playfair, serif' }}>
        Dionne Tweneboah
      </p>
    </div>
  );
}

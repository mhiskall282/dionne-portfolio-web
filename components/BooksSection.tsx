import Image from "next/image";

const imgRectangle8 = "https://www.figma.com/api/mcp/asset/e1102c85-aedd-4bf4-80a8-071b228c3d25";

export default function BooksSection() {
  return (
    <div id="books" className="bg-[#fcfcfb] box-border flex flex-col gap-10 items-center justify-center px-[162px] py-[120px] w-full">
      <div className="flex items-center w-[1596px]">
        <div className="flex flex-col gap-8 items-start w-[950px]">
          <div className="flex flex-col gap-12 items-start w-full whitespace-pre-wrap">
            <p className="font-bold text-[#2e2e2e] text-[64px] w-[587px]" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Tyranny of The Ordinary
            </p>
            <p className="font-medium leading-[49px] text-[#a2a2a2] text-[32px] w-full">
              The Tyranny of Ordinary is a bold call to break free from mediocrity. It challenges readers to rise above fear, embrace purpose, and live courageously beyond the ordinary
            </p>
          </div>
          <div className="bg-[#7b1e23] flex gap-2.5 h-[60px] items-center justify-center p-2.5 rounded-[32px] w-[283px]">
            <p className="font-semibold text-[32px] text-white">
              Get Your Copy
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="h-[756px] rounded-lg relative w-[646px]">
            <Image src={imgRectangle8} alt="The Tyranny of The Ordinary book cover" fill className="object-cover rounded-lg" sizes="(max-width: 680px) 100vw, 646px" />
          </div>
          <div className="bg-[#eaeaea] h-[629px] absolute right-0 top-[71px] w-[64px]" />
        </div>
      </div>
      
      <div className="border-2 border-[#7b1e23] flex gap-2.5 h-[60px] items-center justify-center p-2.5 rounded-[32px] w-[376px]">
        <p className="font-semibold text-[#7b1e23] text-[32px] text-center w-[332px] whitespace-pre-wrap">
          Discover more books
        </p>
      </div>
    </div>
  );
}

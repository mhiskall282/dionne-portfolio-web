import Image from "next/image";

const logoUrl = "https://www.figma.com/api/mcp/asset/930cf5e9-9ff5-47dd-be3b-5a4ee744dc03";

export default function Navigation() {
  return (
    <nav className="bg-white box-border flex items-center justify-between px-16 py-2 shadow-[0px_4px_30px_0px_rgba(46,46,46,0.08)] w-full">
      <div className="h-[39px] relative w-[298px]">
        <Image 
          src={logoUrl} 
          alt="Dionne Tweneboah Logo" 
          fill
          className="object-cover object-center"
          sizes="298px"
          priority
        />
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex gap-2.5 items-center justify-center px-2.5 py-2">
          <p className="font-medium text-[#9b2430] text-2xl">
            Home
          </p>
        </div>
        <a href="#about" className="flex gap-2.5 items-center justify-center px-2.5 py-2 cursor-pointer">
          <p className="font-medium text-[#2e2e2e] text-2xl">
            About
          </p>
        </a>
        <a href="#books" className="flex gap-2.5 items-center justify-center px-2.5 py-2 cursor-pointer">
          <p className="font-medium text-[#2e2e2e] text-2xl">
            Books
          </p>
        </a>
        <a href="#speaking" className="flex gap-2.5 items-center justify-center px-2.5 py-2 cursor-pointer">
          <p className="font-medium text-[#2e2e2e] text-2xl">
            Speaking
          </p>
        </a>
        <a href="#blogs" className="flex gap-2.5 items-center justify-center px-2.5 py-2 cursor-pointer">
          <p className="font-medium text-[#2e2e2e] text-2xl">
            Blogs
          </p>
        </a>
        <div className="flex gap-2.5 items-center justify-center px-2.5 py-2">
          <p className="font-medium text-[#2e2e2e] text-2xl">
            Resources
          </p>
        </div>
      </div>
      <div className="bg-[#9b2430] flex gap-2.5 h-[60px] items-center justify-center px-2.5 py-2 rounded-[32px] w-[274px]">
        <p className="font-semibold text-2xl text-white">
          Book Consultation
        </p>
      </div>
    </nav>
  );
}

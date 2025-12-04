export default function AboutSection() {
  const roles = [
    { title: "Lawyer", image: "" },
    { title: "Speaker", image: "" },
    { title: "Author", image: "" },
    { title: "Humanitarian", image: "" },
    { title: "Leader", image: "" },
    { title: "Creator", image: "" }
  ];

  return (
    <div id="about" className="bg-white w-full py-[60px]">
      <p className="font-bold text-[#2e2e2e] text-[96px] text-center w-full mb-[14px]" style={{ fontFamily: 'Playfair Display, serif' }}>
        My life in a Nutshell...
      </p>
      
      <div className="grid grid-cols-6 gap-0 w-full">
        {roles.map((role, index) => (
          <div key={index} className="flex flex-col items-center h-[467px] border-r border-gray-200 last:border-r-0">
            <div className="flex items-center justify-center h-[62px] mt-2">
              <p className="font-semibold text-[32px] text-[#2e2e2e] text-center px-2.5 py-2">
                {role.title}
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg mt-[16px] w-full h-[403px] flex-1">
              {/* Placeholder for images */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

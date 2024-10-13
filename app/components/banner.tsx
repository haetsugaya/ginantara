import { Nav } from "./nav";

export const Banner = () => {
  return (
    <div className="banner  sm:min-h-[300px] sm:max-h-[720px] flex flex-col border-b border-black">
      <Nav />
      <div className="px-[16px] pt-[32px] overflow-hidden">
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-[14px] sm:text-[16px] font-medium">
            <span className="opacity-40">FREELANCE</span> FULL-STACK DEVELOPER
          </h1>
          <p className="text-[36px] sm:text-[56px] font-bold text-center">
            Bring your ideas online
          </p>
        </div>
        <div className="flex justify-center px-4 max-h-[550px]">
          <img src="/arya-anjar.png" alt="Banner" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

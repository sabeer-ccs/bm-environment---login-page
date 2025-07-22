import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

export const NavbarSection = () => {
  return (
    <header className="flex w-full items-start justify-between px-6 py-2 bg-[#ffffff66] border-b border-white shadow-[0px_8px_30px_#29324333] backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)]">
      {/* Logo and company name */}
      <div className="inline-flex items-center gap-2 px-2 py-0 relative rounded-[var(--spacing-radius-radius-button)] overflow-hidden">
        <img
          className="relative w-[42.47px] h-10"
          alt="Outer circle"
          src="https://c.animaapp.com/bfz8XdiT/img/outer-circle-4@2x.png"
        />

        <div className="inline-flex flex-col items-start">
          <div className="relative self-stretch mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[#293243] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
            Benchmark One
          </div>

          <div className="relative self-stretch [font-family:'Geist',Helvetica] font-medium text-[#293243bf] text-xs tracking-[0] leading-4">
            Master Admin
          </div>
        </div>
      </div>

      {/* SearchIcon and icons */}
      <div className="inline-flex items-center gap-6">
        <div className="flex items-center relative rounded-2xl backdrop-blur-[14px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14px)_brightness(100%)] bg-[linear-gradient(269deg,rgba(41,50,67,0.4)_0%,rgba(17,23,34,0.4)_100%)]">
          <div className="relative flex w-[255px] items-center">
            <SearchIcon className="absolute left-3 h-[22px] w-[22px] text-BM-learning-colors-background-bgnd-2" />
            <Input
              className="pl-10 pr-14 py-2 h-auto bg-transparent border-none text-BM-learning-colors-background-bgnd-2 placeholder:text-BM-learning-colors-background-bgnd-2 [font-family:'Inter',Helvetica] font-normal text-sm leading-6"
              placeholder="SearchIcon for features"
            />
          </div>
        </div>

        <img
          className="relative mt-[-1.00px] mb-[-1.00px] mr-[-1.00px]"
          alt="Frame"
          src="https://c.animaapp.com/bfz8XdiT/img/frame-1686555912-3.svg"
        />
      </div>
    </header>
  );
};

import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

export const NavbarSection = () => {
  return (
    <header className="flex items-start justify-between px-6 py-2 w-full bg-white/40 border-b border-white shadow-[0px_8px_30px_#29324333] backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)]">
      {/* Company Logo and Name */}
      <div className="inline-flex items-center gap-2 px-2 py-0 relative rounded-[var(--spacing-radius-radius-button)]">
        <img
          className="relative w-[42.47px] h-10"
          alt="Benchmark One Logo"
          src="https://c.animaapp.com/bfz8XdiT/img/outer-circle-4@2x.png"
        />

        <div className="inline-flex flex-col items-start">
          <div className="font-text-sm-font-semibold text-[#293243] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
            Benchmark One
          </div>

          <div className="[font-family:'Geist',Helvetica] font-medium text-[#293243bf] text-xs tracking-[0] leading-4">
            Master Admin
          </div>
        </div>
      </div>

      {/* SearchIcon and User Actions */}
      <div className="inline-flex items-center gap-6">
        {/* SearchIcon Bar */}
        <div className="relative flex items-center w-[257px]">
          <div className="absolute left-3 pointer-events-none">
            <SearchIcon className="h-[22px] w-[22px] text-[#1c222e]" />
          </div>
          <Input
            className="pl-10 pr-14 py-2 h-10 bg-[#e9edf0] rounded-2xl border-none text-sm text-[#1c222e] font-normal [font-family:'Inter',Helvetica] leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(124deg,rgba(5,108,189,1)_0%,rgba(2,50,87,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            type="text"
            placeholder="SearchIcon for features"
          />
        </div>

        {/* User Actions */}
        <img
          className="relative"
          alt="User actions"
          src="https://c.animaapp.com/bfz8XdiT/img/frame-1686555912.svg"
        />
      </div>
    </header>
  );
};

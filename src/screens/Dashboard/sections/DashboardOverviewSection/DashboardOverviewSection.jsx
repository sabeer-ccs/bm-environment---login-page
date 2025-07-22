import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

export const DashboardOverviewSection = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-2 bg-[#ffffff66] border-b border-white shadow-[0px_8px_30px_#29324333] backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)]">
      <div className="flex items-center gap-2 px-2 py-0 rounded-[var(--spacing-radius-radius-button)]">
        <img
          className="w-[42.47px] h-10"
          alt="Benchmark One logo"
          src="https://c.animaapp.com/bfz8XdiT/img/outer-circle-3@2x.png"
        />

        <div className="flex flex-col items-start">
          <h1 className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[#293243] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
            Benchmark One
          </h1>

          <span className="[font-family:'Geist',Helvetica] font-medium text-[#293243bf] text-xs tracking-[0] leading-4">
            Master Admin
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-[257px]">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1c222e] z-10">
            <SearchIcon className="h-[22px] w-[22px]" />
          </div>
          <Input
            className="pl-10 pr-14 py-2 h-auto bg-[#e9edf0] border-[none] text-[#1c222e] text-sm rounded-2xl font-['Inter',Helvetica] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(124deg,rgba(5,108,189,1)_0%,rgba(2,50,87,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            placeholder="SearchIcon for features"
          />
        </div>

        <img
          className="flex-[0_0_auto]"
          alt="User notifications"
          src="https://c.animaapp.com/bfz8XdiT/img/frame-1686555912-2.svg"
        />
      </div>
    </header>
  );
};

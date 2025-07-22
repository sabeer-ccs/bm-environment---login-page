import { SearchIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-2 bg-[#ffffff66] border-b border-white shadow-[0px_8px_30px_#29324333] backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)]">
      <div className="inline-flex items-center gap-2 px-2 py-0 rounded-[var(--spacing-radius-radius-button)] overflow-hidden">
        <Avatar className="w-[42.47px] h-10">
          <AvatarImage
            src="https://c.animaapp.com/bfz8XdiT/img/outer-circle-2@2x.png"
            alt="Outer circle"
          />
          <AvatarFallback>BO</AvatarFallback>
        </Avatar>

        <div className="inline-flex flex-col items-start">
          <div className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[#293243] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
            Benchmark One
          </div>

          <div className="[font-family:'Geist',Helvetica] font-medium text-[#293243bf] text-xs tracking-[0] leading-4">
            Master Admin
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-6">
        <div className="flex w-[255px] items-center gap-[var(--tailwind-primitives-gap-gap-2)] pl-3 pr-14 py-2 rounded-2xl backdrop-blur-[14px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14px)_brightness(100%)] bg-[linear-gradient(269deg,rgba(41,50,67,0.4)_0%,rgba(17,23,34,0.4)_100%)] relative">
          <SearchIcon className="w-[22px] h-[22px] text-BM-learning-colors-background-bgnd-2" />
          <Input
            className="border-0 bg-transparent p-0 [font-family:'Inter',Helvetica] font-normal text-BM-learning-colors-background-bgnd-2 text-sm tracking-[0] leading-6 placeholder:text-BM-learning-colors-background-bgnd-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="SearchIcon for features"
            defaultValue=""
          />
        </div>

        <img
          className="flex-shrink-0"
          alt="Frame"
          src="https://c.animaapp.com/bfz8XdiT/img/frame-1686555912-1.svg"
        />
      </div>
    </header>
  );
};

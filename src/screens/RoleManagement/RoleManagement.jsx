import { HelpCircleIcon } from "lucide-react";
import React from "react";
import { NavbarSection } from "../Screen4/sections/NavbarSection";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { SidebarSection } from "./sections/SidebarSection";

export const RoleManagement = () => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="6:25708"
    >
      <div className="bg-white bg-[linear-gradient(259deg,rgba(229,230,252,1)_0%,rgba(234,230,244,1)_50%,rgba(190,216,248,1)_100%)] w-full min-h-screen relative flex flex-col">
        <NavbarSection />
        <div className="flex flex-1">
          <SidebarSection />
          <ContentSection />
        </div>
        <div className="flex items-center gap-[13px] p-4 self-end">
          <div className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-[#1c222e33] text-sm tracking-[-0.07px]">
            SCR-BME-001
          </div>
          <HelpCircleIcon className="text-[#1c222e33] w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

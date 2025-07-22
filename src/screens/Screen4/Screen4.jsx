import { HelpCircleIcon } from "lucide-react";
import React from "react";
import { IconSection } from "./sections/IconSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavbarSection } from "./sections/NavbarSection";
import { SidebarSection } from "./sections/SidebarSection";

export const Screen4 = () => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="6:26186"
    >
      <div className="bg-white bg-[linear-gradient(259deg,rgba(229,230,252,1)_0%,rgba(234,230,244,1)_50%,rgba(190,216,248,1)_100%)] w-full min-h-screen">
        <div className="relative w-full">
          <NavbarSection />
          <div className="flex">
            <SidebarSection />
            <MainContentSection />
          </div>
          <IconSection />

          <div className="flex items-end gap-[13px] fixed bottom-4 right-6">
            <div className="relative w-fit font-medium text-[#1c222e33] text-sm tracking-[-0.07px]">
              SCR-BME-001
            </div>
            <HelpCircleIcon className="text-[#1c222e33] w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

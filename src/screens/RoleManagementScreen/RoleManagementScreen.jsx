import { HelpCircleIcon } from "lucide-react";
import React from "react";
import { ActionIconSection } from "./sections/ActionIconSection";
import { CardContainerSection } from "./sections/CardContainerSection/CardContainerSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainLayoutSection } from "./sections/MainLayoutSection";

export const RoleManagementScreen = () => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="6:25914"
    >
      <div className="bg-white bg-[linear-gradient(259deg,rgba(229,230,252,1)_0%,rgba(234,230,244,1)_50%,rgba(190,216,248,1)_100%)] w-full">
        <div className="relative w-full">
          <HeaderSection />

          <div className="flex flex-row relative">
            <MainLayoutSection />
            <div className="flex-1 relative">
              <CardContainerSection />
            </div>
            <div className="absolute top-0 right-0 w-[42%] h-full">
              <ActionIconSection />
            </div>
          </div>

          <div className="flex items-end gap-[13px] p-4 justify-end">
            <div className="relative w-fit font-medium text-[#1c222e33] text-sm tracking-[-0.07px]">
              SCR-BME-001
            </div>

            <HelpCircleIcon className="text-gray-400" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

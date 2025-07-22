import { HelpCircleIcon } from "lucide-react";
import React from "react";
import { ActiveInstitutionsSection } from "./sections/ActiveInstitutionsSection";
import { DashboardOverviewSection } from "./sections/DashboardOverviewSection";
import { QuickActionsSection } from "./sections/QuickActionsSection/QuickActionsSection";

export const Dashboard = () => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="6:26519"
    >
      <div className="bg-white overflow-hidden w-full bg-[linear-gradient(259deg,rgba(229,230,252,1)_0%,rgba(234,230,244,1)_50%,rgba(190,216,248,1)_100%)] relative">
        {/* Top section */}
        <DashboardOverviewSection />

        {/* Main content layout */}
        <div className="flex">
          {/* Left sidebar */}
          <ActiveInstitutionsSection />

          {/* Main content area */}
          <div className="flex-1 p-4">
            <QuickActionsSection />

            {/* Screen identifier with help icon */}
            <div className="flex items-end gap-[13px] justify-end mt-8">
              <div className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-[#1c222e33] text-sm tracking-[-0.07px] leading-[normal]">
                SCR-BME-001
              </div>
              <HelpCircleIcon className="text-[#1c222e33] w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

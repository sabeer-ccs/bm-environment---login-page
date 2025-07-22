import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import { Separator } from "../../../../components/ui/separator";

export const SidebarSection = () => {
  // Navigation menu data for BM Environment section
  const environmentItems = [
    {
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-109.svg",
      label: "Dashboard",
      path: "/dashboard",
      isActive: false,
    },
    {
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-110.svg",
      label: "Institution Management",
      path: null,
      isActive: false,
    },
    {
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-111.svg",
      label: "Role Management",
      path: "/role-management",
      isActive: true,
    },
    {
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-112.svg",
      label: "Employee Management",
      path: null,
      isActive: false,
    },
  ];

  // Course settings submenu items
  const courseSettingsItems = [
    { label: "Academic Year" },
    { label: "Curriculum" },
    { label: "Session" },
    { label: "Class" },
    { label: "Batch" },
    { label: "Subjects" },
  ];

  // Platform section items
  const platformItems = [
    {
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-114.svg",
      label: "Settings",
    },
    {
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-115.svg",
      label: "Theme",
    },
  ];

  return (
    <aside className="flex flex-col h-[745px] w-[260px] justify-between px-3 py-6 border-r border-white bg-[linear-gradient(180deg,rgba(41,50,67,1)_0%,rgba(17,23,34,1)_100%)] backdrop-blur-[22.5px] backdrop-brightness-[100%]">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="h-8 flex items-center w-full">
            <div className="flex-1 text-[#e2c6f7] font-medium text-sm leading-4 font-['Geist',Helvetica]">
              BM Environment
            </div>
          </div>

          {environmentItems.map((item, index) =>
            item.path ? (
              <Link
                key={index}
                to={item.path}
                className={`flex w-full items-center gap-2 p-2 rounded-md ${
                  item.isActive
                    ? "bg-[linear-gradient(90deg,rgba(163,176,199,0.4)_0%,rgba(255,255,255,0.4)_100%)] shadow-[0px_8px_30px_#00000069]"
                    : "opacity-40"
                }`}
              >
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-3 h-3 top-0.5 left-0.5"
                    alt="Icon"
                    src={item.icon}
                  />
                </div>
                <div className="flex-1 mt-[-1.00px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis font-['Geist',Helvetica]">
                  {item.label}
                </div>
              </Link>
            ) : (
              <div
                key={index}
                className="flex w-full items-center gap-2 p-2 rounded-md opacity-40"
              >
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[15px] h-[13px] top-px left-0"
                    alt="Icon"
                    src={item.icon}
                  />
                </div>
                <div className="flex-1 mt-[-1.00px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis font-['Geist',Helvetica]">
                  {item.label}
                </div>
              </div>
            ),
          )}

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex w-full items-center justify-between p-2 rounded-md opacity-40">
              <div className="inline-flex items-center gap-2">
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-3 h-3 top-0.5 left-0.5"
                    alt="Icon"
                    src="https://c.animaapp.com/bfz8XdiT/img/vector-113.svg"
                  />
                </div>
                <div className="w-fit mt-[-1.00px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis font-['Geist',Helvetica]">
                  Course SettingsIcon
                </div>
              </div>
              <ChevronRightIcon className="w-4 h-4" />
            </CollapsibleTrigger>

            <CollapsibleContent className="flex w-full items-start gap-5">
              <Separator orientation="vertical" className="flex-1 h-auto" />

              <div className="flex flex-col w-[203px] items-start">
                {courseSettingsItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="flex w-full items-center justify-start p-2 rounded-md opacity-40 h-auto"
                  >
                    <div className="font-normal text-white text-sm leading-5 overflow-hidden text-ellipsis font-['Geist',Helvetica]">
                      {item.label}
                    </div>
                  </Button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <div className="h-8 flex items-center w-full">
          <div className="w-fit text-[#e3c7f7] whitespace-nowrap font-medium text-sm leading-4 font-['Geist',Helvetica]">
            Platform
          </div>
        </div>

        {platformItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex w-full items-center justify-start gap-2 p-2 rounded-md opacity-40 h-auto"
          >
            <div className="relative w-4 h-4">
              <img
                className="absolute w-[13px] h-[13px] top-px left-px"
                alt="Icon"
                src={item.icon}
              />
            </div>
            <div className="flex-1 mt-[-1.00px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis font-['Geist',Helvetica]">
              {item.label}
            </div>
          </Button>
        ))}
      </div>
    </aside>
  );
};

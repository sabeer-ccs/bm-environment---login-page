import {
  BookOpenIcon,
  Building2Icon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  PaletteIcon,
  SettingsIcon,
  UserCogIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import { ScrollArea } from "../../../../components/ui/scroll-area";

export const SidebarSection = () => {
  // Navigation menu data for BM Environment section
  const bmEnvironmentItems = [
    {
      icon: <LayoutDashboardIcon className="w-3 h-3" />,
      label: "Dashboard",
      link: "/dashboard",
      isActive: false,
    },
    {
      icon: <Building2Icon className="w-[15px] h-[13px]" />,
      label: "Institution Management",
      isActive: false,
    },
    {
      icon: <UserCogIcon className="w-[13px] h-3" />,
      label: "Role Management",
      isActive: true,
    },
    {
      icon: <UsersIcon className="w-[13px] h-[13px]" />,
      label: "Employee Management",
      isActive: false,
    },
  ];

  // Course SettingsIcon submenu items
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
      icon: <SettingsIcon className="w-[13px] h-[13px]" />,
      label: "Settings",
    },
    {
      icon: <PaletteIcon className="w-[13px] h-3" />,
      label: "Theme",
    },
  ];

  return (
    <aside className="flex flex-col h-[745px] w-[260px] border-r border-white bg-[linear-gradient(180deg,rgba(41,50,67,1)_0%,rgba(17,23,34,1)_100%)] backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)]">
      <ScrollArea className="flex-1">
        <div className="flex flex-col items-start gap-8 p-3 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            {/* BM Environment Header */}
            <div className="h-8 flex items-center w-full">
              <h3 className="flex-1 text-[#e2c6f7] font-medium text-sm leading-4 [font-family:'Geist',Helvetica]">
                BM Environment
              </h3>
            </div>

            {/* Navigation Items */}
            {bmEnvironmentItems.map((item, index) =>
              item.link ? (
                <Link
                  key={index}
                  to={item.link}
                  className={`flex w-full items-center gap-2 p-2 rounded-md ${
                    item.isActive
                      ? "bg-[linear-gradient(90deg,rgba(163,176,199,0.4)_0%,rgba(255,255,255,0.4)_100%)] shadow-[0px_8px_30px_#00000069]"
                      : "opacity-40"
                  }`}
                >
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="flex-1 mt-[-1px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis [font-family:'Geist',Helvetica]">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <div
                  key={index}
                  className={`flex w-full items-center gap-2 p-2 rounded-md ${
                    item.isActive
                      ? "bg-[linear-gradient(90deg,rgba(163,176,199,0.4)_0%,rgba(255,255,255,0.4)_100%)] shadow-[0px_8px_30px_#00000069]"
                      : "opacity-40"
                  }`}
                >
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="flex-1 mt-[-1px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis [font-family:'Geist',Helvetica]">
                    {item.label}
                  </span>
                </div>
              ),
            )}

            {/* Course SettingsIcon Collapsible */}
            <Collapsible className="w-full">
              <CollapsibleTrigger className="flex w-full items-center justify-between p-2 rounded-md opacity-40">
                <div className="inline-flex items-center gap-2">
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <BookOpenIcon className="w-3 h-3" />
                  </div>
                  <span className="mt-[-1px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis [font-family:'Geist',Helvetica]">
                    Course SettingsIcon
                  </span>
                </div>
                <ChevronRightIcon className="w-4 h-4" />
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="flex w-full items-start gap-5">
                  <div className="border-l border-gray-600 h-full ml-2"></div>
                  <div className="flex flex-col w-full">
                    {courseSettingsItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 rounded-md opacity-40"
                      >
                        <span className="flex-1 mt-[-1px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis [font-family:'Geist',Helvetica]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </ScrollArea>

      {/* Platform Section */}
      <div className="flex flex-col p-3 w-full">
        <div className="h-8 flex items-center w-full">
          <h3 className="text-[#e3c7f7] font-medium text-sm leading-4 [font-family:'Geist',Helvetica]">
            Platform
          </h3>
        </div>

        {platformItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 rounded-md opacity-40 w-full"
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="flex-1 mt-[-1px] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis [font-family:'Geist',Helvetica]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

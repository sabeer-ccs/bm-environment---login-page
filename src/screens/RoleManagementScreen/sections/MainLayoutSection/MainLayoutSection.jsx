import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const MainLayoutSection = () => {
  // Navigation menu data for BM Environment section
  const bmEnvironmentItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-109.svg",
      active: false,
    },
    {
      name: "Institution Management",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-74.svg",
      active: false,
    },
    {
      name: "Role Management",
      path: "/role-management",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-111.svg",
      active: true,
    },
    {
      name: "Employee Management",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-112.svg",
      active: false,
    },
  ];

  // Course Settings submenu items
  const courseSettingsItems = [
    { name: "Academic Year" },
    { name: "Curriculum" },
    { name: "Session" },
    { name: "Class" },
    { name: "Batch" },
    { name: "Subjects" },
  ];

  // Platform section items
  const platformItems = [
    {
      name: "Settings",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-114.svg",
    },
    {
      name: "Theme",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-115.svg",
    },
  ];

  return (
    <aside className="flex flex-col h-[745px] w-[260px] justify-between px-3 py-6 border-r border-white backdrop-blur-[22.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.5px)_brightness(100%)] bg-[linear-gradient(180deg,rgba(41,50,67,1)_0%,rgba(17,23,34,1)_100%)]">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          {/* BM Environment Section Header */}
          <div className="h-8 flex items-center w-full">
            <div className="flex-1 text-[#e2c6f7] [font-family:'Geist',Helvetica] font-medium text-sm tracking-[0] leading-4">
              BM Environment
            </div>
          </div>

          {/* Navigation Items */}
          <NavigationMenu className="w-full max-w-none">
            <NavigationMenuList className="flex flex-col space-y-0 w-full">
              {bmEnvironmentItems.map((item, index) => (
                <NavigationMenuItem key={index} className="w-full">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`flex w-full items-center gap-2 p-2 rounded-md overflow-hidden ${
                        item.active
                          ? "shadow-[0px_8px_30px_#00000069] bg-[linear-gradient(90deg,rgba(163,176,199,0.4)_0%,rgba(255,255,255,0.4)_100%)]"
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
                      <div className="flex-1 mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.name}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`flex w-full items-center gap-2 p-2 rounded-md overflow-hidden opacity-40`}
                    >
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-[15px] h-[13px] top-px left-0"
                          alt="Icon"
                          src={item.icon}
                        />
                      </div>
                      <div className="flex-1 mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.name}
                      </div>
                    </div>
                  )}
                </NavigationMenuItem>
              ))}

              {/* Course Settings Collapsible */}
              <NavigationMenuItem className="w-full">
                <Collapsible className="w-full rounded-lg">
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-2 rounded-md overflow-hidden opacity-40">
                    <div className="inline-flex items-center gap-2">
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-3 h-3 top-0.5 left-0.5"
                          alt="Icon"
                          src="https://c.animaapp.com/bfz8XdiT/img/vector-113.svg"
                        />
                      </div>
                      <div className="[font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                        Course Settings
                      </div>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-white" />
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="flex w-56 items-start gap-5">
                      <img
                        className="flex-1 grow self-stretch object-cover"
                        alt="Line"
                        src="https://c.animaapp.com/bfz8XdiT/img/line-427-3.svg"
                      />
                      <div className="flex flex-col w-[203px] items-start">
                        {courseSettingsItems.map((item, index) => (
                          <div
                            key={index}
                            className="flex w-[203px] items-center gap-2 p-2 rounded-md overflow-hidden opacity-40"
                          >
                            <div className="flex-1 mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                              {item.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Platform Section */}
      <div className="flex flex-col items-start w-full">
        <div className="h-8 flex items-center w-full">
          <div className="text-[#e3c7f7] [font-family:'Geist',Helvetica] font-medium text-sm tracking-[0] leading-4">
            Platform
          </div>
        </div>

        {platformItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 w-full rounded-md overflow-hidden opacity-40"
          >
            <div className="relative w-4 h-4">
              <img
                className="absolute w-[13px] h-[13px] top-px left-px"
                alt="Icon"
                src={item.icon}
              />
            </div>
            <div className="flex-1 mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

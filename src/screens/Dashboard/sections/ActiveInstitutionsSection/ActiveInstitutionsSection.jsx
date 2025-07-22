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

export const ActiveInstitutionsSection = () => {
  // Menu items data for BM Environment section
  const environmentMenuItems = [
    {
      name: "Dashboard",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-109.svg",
      link: "/dashboard",
      active: true,
      disabled: false,
    },
    {
      name: "Institution Management",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-74.svg",
      link: "#",
      active: false,
      disabled: true,
    },
    {
      name: "Role Management",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-111.svg",
      link: "/role-management",
      active: false,
      disabled: true,
    },
    {
      name: "Employee Management",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-76.svg",
      link: "#",
      active: false,
      disabled: true,
    },
  ];

  // Course settings submenu items
  const courseSettingsItems = [
    { name: "Academic Year", link: "#" },
    { name: "Curriculum", link: "#" },
    { name: "Session", link: "#" },
    { name: "Class", link: "#" },
    { name: "Batch", link: "#" },
    { name: "Subjects", link: "#" },
  ];

  // Platform section menu items
  const platformMenuItems = [
    {
      name: "Settings",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-78.svg",
      link: "#",
      disabled: true,
    },
    {
      name: "Theme",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-115.svg",
      link: "#",
      disabled: true,
    },
  ];

  return (
    <aside className="flex flex-col h-full w-[260px] justify-between px-3 py-6 border-r border-white bg-[linear-gradient(180deg,rgba(41,50,67,1)_0%,rgba(17,23,34,1)_100%)] backdrop-blur-[22.5px]">
      <div className="flex flex-col items-start gap-8 w-full">
        <NavigationMenu orientation="vertical" className="w-full">
          <div className="h-8 flex items-center w-full mb-2">
            <span className="text-[#e2c6f7] font-medium text-sm leading-4 [font-family:'Geist',Helvetica]">
              BM Environment
            </span>
          </div>

          <NavigationMenuList className="flex flex-col space-y-2 w-full">
            {environmentMenuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="w-full">
                {item.disabled ? (
                  <div
                    className={`flex w-full items-center gap-2 p-2 rounded-md overflow-hidden ${item.active ? "" : "opacity-40"}`}
                  >
                    <div className="relative w-4 h-4">
                      <img
                        className="absolute w-3 h-3 top-0.5 left-0.5"
                        alt={`${item.name} icon`}
                        src={item.icon}
                      />
                    </div>
                    <span className="flex-1 self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.name}
                    </span>
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className={`flex w-full items-center gap-2 p-2 rounded-md overflow-hidden ${
                      item.active
                        ? "bg-[linear-gradient(90deg,rgba(163,176,199,0.4)_0%,rgba(255,255,255,0.4)_100%)] shadow-[0px_8px_30px_#00000069]"
                        : "opacity-40"
                    }`}
                  >
                    <div className="relative w-4 h-4">
                      <img
                        className="absolute w-3 h-3 top-0.5 left-0.5"
                        alt={`${item.name} icon`}
                        src={item.icon}
                      />
                    </div>
                    <span className="flex-1 self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm leading-5 whitespace-nowrap">
                      {item.name}
                    </span>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem className="w-full">
              <Collapsible className="w-full">
                <CollapsibleTrigger className="flex w-full items-center justify-between p-2 rounded-md overflow-hidden opacity-40">
                  <div className="inline-flex items-center gap-2">
                    <div className="relative w-4 h-4">
                      <img
                        className="absolute w-3 h-3 top-0.5 left-0.5"
                        alt="Course Settings icon"
                        src="https://c.animaapp.com/bfz8XdiT/img/vector-113.svg"
                      />
                    </div>
                    <span className="w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                      Course Settings
                    </span>
                  </div>
                  <ChevronRightIcon className="w-4 h-4 text-white" />
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="flex w-full items-start gap-5 mt-1">
                    <div className="flex-1 grow relative self-stretch">
                      <img
                        className="w-full h-full object-cover"
                        alt="Line"
                        src="https://c.animaapp.com/bfz8XdiT/img/line-427-2.svg"
                      />
                    </div>

                    <div className="flex flex-col w-[203px] items-start gap-0">
                      {courseSettingsItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex w-full items-center gap-2 p-2 rounded-md overflow-hidden opacity-40"
                        >
                          <span className="flex-1 [font-family:'Geist',Helvetica] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                            {item.name}
                          </span>
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

      <div className="flex flex-col items-start w-full">
        <div className="h-8 flex items-center w-full mb-2">
          <span className="text-[#e3c7f7] font-medium text-sm leading-4 [font-family:'Geist',Helvetica]">
            Platform
          </span>
        </div>

        <NavigationMenu orientation="vertical" className="w-full">
          <NavigationMenuList className="flex flex-col space-y-2 w-full">
            {platformMenuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="w-full">
                <div className="flex w-full items-center gap-2 p-2 rounded-md overflow-hidden opacity-40">
                  <div className="relative w-4 h-4">
                    <img
                      className="absolute w-[13px] h-[13px] top-px left-px"
                      alt={`${item.name} icon`}
                      src={item.icon}
                    />
                  </div>
                  <span className="flex-1 self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-white text-sm leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.name}
                  </span>
                </div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </aside>
  );
};

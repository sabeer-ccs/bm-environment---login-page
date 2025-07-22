import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const ContentSection = () => {
  // Role data for mapping
  const roles = [
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "/role-management3",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-1.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-140.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-2.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: true,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-3.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-4.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-140.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-5.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: true,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-6.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-7.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-140.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-8.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: true,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-9.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      category: "Administrative Staff",
      iconSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-36.svg",
      lineSrc: "https://c.animaapp.com/bfz8XdiT/img/line-428-10.svg",
      vectorSrc: "https://c.animaapp.com/bfz8XdiT/img/vector-141.svg",
      isSpecial: false,
      link: "",
    },
  ];

  // Group roles into rows of 3
  const roleRows = [];
  for (let i = 0; i < roles.length; i += 3) {
    roleRows.push(roles.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col w-full items-end gap-4 p-6">
      {/* Header section with breadcrumb and add button */}
      <div className="flex items-center justify-between relative self-stretch w-full">
        <div className="flex flex-col items-start gap-2">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/dashboard"
                className="[font-family:'Geist',Helvetica] font-normal text-3-shadcn-ui-colors-UI-muted-muted-foreground text-sm"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="[font-family:'Geist',Helvetica] font-normal text-3-shadcn-ui-colors-UI-foreground text-sm">
                Role Management
              </span>
            </BreadcrumbItem>
          </Breadcrumb>

          <h1 className="self-stretch bg-[linear-gradient(270deg,rgba(41,50,67,1)_0%,rgba(17,23,34,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-semibold text-transparent text-2xl tracking-[-0.34px] leading-6">
            Role Management
          </h1>
        </div>

        <Button
          asChild
          className="h-12 gap-2.5 px-4 py-2 rounded-lg overflow-hidden shadow-[inset_0px_0px_12px_#ffffff08,0px_8px_30px_#29324333] backdrop-blur-[100px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(100px)_brightness(100%)] bg-[linear-gradient(124deg,rgba(5,108,189,1)_0%,rgba(2,50,87,1)_100%)]"
        >
          <Link to="/role-management2">
            <span className="[font-family:'Geist',Helvetica] font-medium text-white text-sm tracking-[-0.07px]">
              Add Role
            </span>
            <div className="relative w-6 h-6">
              <img
                className="absolute w-[18px] h-[18px] top-[3px] left-[3px]"
                alt="Vector"
                src="https://c.animaapp.com/bfz8XdiT/img/vector-116.svg"
              />
            </div>
          </Link>
        </Button>
      </div>

      {/* Search and filter section */}
      <div className="flex items-center justify-between relative self-stretch w-full">
        <div className="relative w-[273px]">
          <Input
            className="h-10 p-2.5 bg-[#ffffff80] rounded-[10px] border border-solid border-[#efefef] shadow-[0px_8px_30px_#29324333] [font-family:'Geist',Helvetica] font-normal text-[#1c222e4c] text-sm"
            placeholder="Search"
          />
          <div className="absolute right-2.5 top-2.5 w-5 h-5 rotate-90">
            <div className="relative w-[17px] h-4 top-0.5 left-0.5">
              <img
                className="absolute w-[15px] h-[15px] top-0 left-0 -rotate-90"
                alt="Vector"
                src="https://c.animaapp.com/bfz8XdiT/img/vector-117.svg"
              />
              <img
                className="absolute w-[5px] h-[5px] top-[11px] left-[11px] -rotate-90"
                alt="Vector"
                src="https://c.animaapp.com/bfz8XdiT/img/vector-118.svg"
              />
            </div>
          </div>
        </div>

        <div className="shadow-[0px_8px_30px_#29324333]">
          <Select>
            <SelectTrigger className="w-[161px] h-10 px-4 py-2 bg-[#ffffff80] rounded-lg overflow-hidden border-[0.5px] border-solid border-[#ffffffcc] [font-family:'Geist',Helvetica] font-normal text-[#1c222e] text-sm">
              <SelectValue placeholder="All Status" />
              <div className="absolute right-4 top-2 w-6 h-6">
                <img
                  className="absolute w-3.5 h-2 top-2 left-[5px]"
                  alt="Vector"
                  src="https://c.animaapp.com/bfz8XdiT/img/vector-119.svg"
                />
              </div>
            </SelectTrigger>
          </Select>
        </div>
      </div>

      {/* Role cards grid */}
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
        {roleRows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex items-start gap-2 relative self-stretch w-full"
          >
            {row.map((role, colIndex) => {
              const CardComponent = role.link ? Link : "div";
              const cardProps = role.link ? { to: role.link } : {};

              return (
                <CardComponent
                  key={`role-${rowIndex}-${colIndex}`}
                  {...cardProps}
                  className={`flex flex-col max-w-[372px] items-start gap-2 p-4 relative flex-1 grow bg-white rounded-2xl border border-solid border-[#6c6c7f33] shadow-[0px_8px_30px_#29324333] backdrop-blur-[43px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(43px)_brightness(100%)] opacity-80 ${colIndex === 0 ? "ml-[-1.00px]" : ""} ${colIndex === 2 ? "mr-[-1.00px]" : ""}`}
                >
                  <CardContent className="p-0 w-full">
                    <div className="flex items-center gap-2 relative self-stretch w-full">
                      <div className="inline-flex items-center justify-center gap-2 p-2 relative rounded-2xl backdrop-blur-[14px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14px)_brightness(100%)] bg-[linear-gradient(143deg,rgba(252,69,231,1)_0%,rgba(252,150,72,1)_100%)]">
                        <div className="relative w-8 h-8">
                          <img
                            className="absolute w-[27px] h-[27px] top-px left-1"
                            alt="Vector"
                            src={role.iconSrc}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-start relative flex-1 grow">
                        <div className="flex items-center justify-between relative self-stretch w-full">
                          <div className="relative w-fit [font-family:'Geist',Helvetica] font-normal text-[#d722a1] text-xs tracking-[0] leading-[21px] whitespace-nowrap">
                            {role.id}
                          </div>

                          <Badge className="px-2 py-0.5 bg-[#0084001a] text-[#008500] rounded-2xl [font-family:'Geist',Helvetica] font-medium text-xs">
                            {role.status}
                          </Badge>
                        </div>

                        <div className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-[#111722] text-base tracking-[0] leading-[21px] whitespace-nowrap">
                          {role.title}
                        </div>
                      </div>
                    </div>

                    <img
                      className="w-full h-px relative self-stretch object-cover my-2"
                      alt="Line"
                      src={role.lineSrc}
                    />

                    <div className="inline-flex items-center justify-center gap-0.5 relative">
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-3 h-[13px] top-px left-0.5"
                          alt="Vector"
                          src={role.vectorSrc}
                        />
                      </div>

                      <div className="relative w-fit mt-[-1.00px] [font-family:'Geist',Helvetica] font-normal text-[#293243] text-xs tracking-[0] leading-[21px] whitespace-nowrap">
                        {role.category}
                      </div>
                    </div>
                  </CardContent>
                </CardComponent>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

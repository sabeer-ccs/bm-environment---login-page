import { PlusIcon, SearchIcon } from "lucide-react";
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
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

export const CardContainerSection = () => {
  // Role card data for mapping
  const roleCards = [
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
    {
      id: "ROL001",
      title: "Administrator",
      status: "Active",
      description: "Administrative Staff",
    },
  ];

  return (
    <section className="flex flex-col w-full items-end gap-4 p-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-2">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                to="/dashboard"
                className="font-normal text-3-shadcn-ui-colors-UI-muted-muted-foreground text-sm"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="font-normal text-3-shadcn-ui-colors-UI-foreground text-sm">
                Role Management
              </span>
            </BreadcrumbItem>
          </Breadcrumb>

          <h1 className="bg-[linear-gradient(270deg,rgba(41,50,67,1)_0%,rgba(17,23,34,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-2xl tracking-[-0.34px] leading-6 [font-family:'Geist',Helvetica]">
            Role Management
          </h1>
        </div>

        <Button className="h-12 gap-2.5 px-4 py-2 rounded-lg shadow-[inset_0px_0px_12px_#ffffff08,0px_8px_30px_#29324333] backdrop-blur-[100px] bg-[linear-gradient(124deg,rgba(5,108,189,1)_0%,rgba(2,50,87,1)_100%)]">
          <span className="font-medium text-white text-sm tracking-[-0.07px]">
            Add New Role
          </span>
          <PlusIcon className="w-[18px] h-[18px]" />
        </Button>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center w-[273px] h-10 relative bg-[#ffffff80] rounded-[10px] border border-[#efefef] shadow-[0px_8px_30px_#29324333]">
          <Input
            className="h-10 border-none bg-transparent text-[#1c222e4c] text-sm font-normal"
            placeholder="Search"
          />
          <SearchIcon className="absolute right-2.5 w-5 h-5 text-[#1c222e4c]" />
        </div>

        <div className="shadow-[0px_8px_30px_#29324333]">
          <Select>
            <SelectTrigger className="w-[161px] h-10 px-4 py-2 bg-[#ffffff80] rounded-lg border-[0.5px] border-[#ffffffcc]">
              <SelectValue
                placeholder="All Status"
                className="text-[#1c222e] text-sm font-normal"
              />
            </SelectTrigger>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        {roleCards.map((role, index) => (
          <Card
            key={`role-card-${index}`}
            className="flex flex-col items-start gap-2 p-4 bg-white rounded-2xl border border-[#6c6c7f33] shadow-[0px_8px_30px_#29324333] backdrop-blur-[43px] opacity-80"
          >
            <CardContent className="p-0 w-full">
              <div className="flex items-center gap-2 w-full">
                <div className="inline-flex items-center justify-center p-2 rounded-2xl backdrop-blur-[14px] bg-[linear-gradient(143deg,rgba(252,69,231,1)_0%,rgba(252,150,72,1)_100%)]">
                  <div className="relative w-8 h-8">
                    <img
                      className="absolute w-[27px] h-[27px] top-px left-1"
                      alt="Vector"
                      src="https://c.animaapp.com/bfz8XdiT/img/vector-140.svg"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start flex-1">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-normal text-[#d722a1] text-xs leading-[21px]">
                      {role.id}
                    </span>
                    <Badge className="bg-[#0084001a] text-[#008500] font-medium text-xs px-2 py-0.5 rounded-2xl">
                      {role.status}
                    </Badge>
                  </div>
                  <h3 className="font-medium text-[#111722] text-base leading-[21px]">
                    {role.title}
                  </h3>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="flex items-center gap-0.5">
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-3 h-[13px] top-px left-0.5"
                    alt="Vector"
                    src="https://c.animaapp.com/bfz8XdiT/img/vector-141.svg"
                  />
                </div>
                <span className="font-normal text-[#293243] text-xs leading-[21px]">
                  {role.description}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

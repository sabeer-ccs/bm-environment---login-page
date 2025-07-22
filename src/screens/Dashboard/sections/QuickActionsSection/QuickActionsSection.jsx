import { PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const QuickActionsSection = () => {
  // Data for the stats cards
  const statsCards = [
    {
      title: "Total Instutions",
      value: "04",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-84.svg",
    },
    {
      title: "Total Classes",
      value: "04",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-84.svg",
    },
    {
      title: "Total Batches",
      value: "04",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-84.svg",
    },
    {
      title: "Total Subjects",
      value: "04",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-84.svg",
    },
  ];

  // Data for institutions
  const institutions = [
    {
      name: "NIMS Dubai",
      id: "INS001",
      address: "123 Education Street, City Center",
      email: "central@educorp.com",
      phone: "+1 234 567 8900",
      tags: ["2025-2025", "CBSE", "ICSE"],
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-93.svg",
      locationIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-94.svg",
      emailIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-95.svg",
      phoneIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-96.svg",
      divider: "https://c.animaapp.com/bfz8XdiT/img/line-428-22.svg",
    },
    {
      name: "NIMS Sharjah",
      id: "INS001",
      address: "123 Education Street, City Center",
      email: "central@educorp.com",
      phone: "+1 234 567 8900",
      tags: ["2025-2025", "CBSE", "ICSE"],
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-97.svg",
      locationIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-98.svg",
      emailIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-99.svg",
      phoneIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-100.svg",
      divider: "https://c.animaapp.com/bfz8XdiT/img/line-428-23.svg",
    },
    {
      name: "TCS",
      id: "INS001",
      address: "123 Education Street, City Center",
      email: "central@educorp.com",
      phone: "+1 234 567 8900",
      tags: ["2025-2025", "CBSE", "ICSE"],
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-93.svg",
      locationIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-94.svg",
      emailIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-95.svg",
      phoneIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-96.svg",
      divider: "https://c.animaapp.com/bfz8XdiT/img/line-428-24.svg",
    },
    {
      name: "NIMS Abudhabi",
      id: "INS001",
      address: "123 Education Street, City Center",
      email: "central@educorp.com",
      phone: "+1 234 567 8900",
      tags: ["2025-2025", "CBSE", "ICSE"],
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-97.svg",
      locationIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-98.svg",
      emailIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-99.svg",
      phoneIcon: "https://c.animaapp.com/bfz8XdiT/img/vector-100.svg",
      divider: "https://c.animaapp.com/bfz8XdiT/img/line-428-25.svg",
    },
  ];

  // Data for quick actions
  const quickActions = [
    {
      title: "Academic Year",
      description: "Create new Employee",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-107.svg",
      gradient:
        "bg-[linear-gradient(143deg,rgba(252,69,69,1)_0%,rgba(150,72,252,1)_100%)]",
      link: "#",
    },
    {
      title: "Role Settings",
      description: "Register new staff member",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-140.svg",
      gradient:
        "bg-[linear-gradient(143deg,rgba(252,69,231,1)_0%,rgba(252,150,72,1)_100%)]",
      link: "/role-management",
    },
    {
      title: "Session Settings",
      description: "Start academic session",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-105.svg",
      gradient:
        "bg-[linear-gradient(143deg,rgba(69,97,252,1)_0%,rgba(252,126,72,1)_100%)]",
      link: "#",
    },
    {
      title: "Curriculum Settings",
      description: "Create course subject",
      icon: "https://c.animaapp.com/bfz8XdiT/img/vector-107.svg",
      gradient:
        "bg-[linear-gradient(143deg,rgba(69,252,109,1)_0%,rgba(81,72,252,1)_100%)]",
      link: "#",
    },
  ];

  // Data for donut chart legend
  const donutLegendItems = [
    { color: "bg-[#eb50f5]", label: "Nims Dubai" },
    { color: "bg-[#4bafff]", label: "Nims Sharjah" },
    { color: "bg-[#bc92ff]", label: "Nims Sharjah" },
    { color: "bg-[#14b854]", label: "Nims Sharjah" },
    { color: "bg-[#d7b600]", label: "Nims Sharjah" },
  ];

  // Data for line chart legend
  const lineLegendItems = [
    { color: "bg-[#2bf502]", label: "Nims Dubai" },
    { color: "bg-[#fafa9c]", label: "Nims Sharjah" },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-4">
      <header className="flex flex-col items-start gap-2 w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-semibold tracking-[-0.34px] leading-6 bg-[linear-gradient(270deg,rgba(41,50,67,1)_0%,rgba(17,23,34,1)_100%)] bg-clip-text text-transparent [font-family:'Geist',Helvetica]">
            Dashboard
          </h1>

          <Button className="h-12 px-4 py-2 rounded-lg shadow-[inset_0px_0px_12px_#ffffff08,0px_8px_30px_#29324333] backdrop-blur-[100px] bg-[linear-gradient(124deg,rgba(5,108,189,1)_0%,rgba(2,50,87,1)_100%)]">
            <span className="font-medium text-white text-sm tracking-[-0.07px] mr-2">
              Add Employee
            </span>
            <PlusIcon className="w-[18px] h-[18px]" />
          </Button>
        </div>
      </header>

      <div className="flex items-start gap-4 w-full">
        {/* Employee Stats Card */}
        <Card className="w-full md:w-[432px] h-[241px] shadow-[0px_8px_30px_#29324333] rounded-2xl bg-[linear-gradient(124deg,rgba(4,123,217,1)_0%,rgba(2,50,87,1)_100%)] border-none">
          <CardContent className="flex flex-col h-full items-center justify-end gap-7 pl-[46px] pr-4 py-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start gap-1.5">
                <img
                  className="w-[82px] h-[82px] object-cover"
                  alt="Employee icon"
                  src="https://c.animaapp.com/bfz8XdiT/img/image-548@2x.png"
                />

                <div className="flex flex-col items-start w-full">
                  <h2 className="mt-[-1.00px] font-semibold text-white text-2xl tracking-[-0.12px] leading-normal">
                    1234
                  </h2>
                  <p className="font-medium text-white text-sm tracking-[-0.07px] leading-normal">
                    Total Employees
                  </p>
                </div>
              </div>

              <div className="relative w-36 h-[140px] -left-1">
                <img
                  className="absolute w-[78px] h-[98px] top-0 left-0"
                  alt="Segment"
                  src="https://c.animaapp.com/bfz8XdiT/img/segment-5.svg"
                />
                <img
                  className="absolute w-10 h-11 top-[83px] left-[7px]"
                  alt="Segment"
                  src="https://c.animaapp.com/bfz8XdiT/img/segment-4.svg"
                />
                <img
                  className="absolute w-[82px] h-[33px] top-[107px] left-[34px]"
                  alt="Segment"
                  src="https://c.animaapp.com/bfz8XdiT/img/segment-3.svg"
                />
                <img
                  className="absolute w-[43px] h-[78px] top-12 left-[101px]"
                  alt="Segment"
                  src="https://c.animaapp.com/bfz8XdiT/img/segment-2.svg"
                />
                <img
                  className="absolute w-[67px] h-14 top-0 left-[74px]"
                  alt="Segment"
                  src="https://c.animaapp.com/bfz8XdiT/img/segment-1.svg"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-[14.28px]">
              <div className="flex items-center gap-3.5">
                {donutLegendItems.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center gap-[5.71px]">
                    <div
                      className={`w-[11.43px] h-[8.57px] rounded-[22.85px] ${item.color}`}
                    />
                    <span className="font-normal text-white text-[10px] leading-[13.2px] whitespace-nowrap [font-family:'Geist',Helvetica]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3.5">
                {donutLegendItems.slice(3, 5).map((item, index) => (
                  <div key={index} className="flex items-center gap-[5.71px]">
                    <div
                      className={`w-[11.43px] h-[8.57px] rounded-[22.85px] ${item.color}`}
                    />
                    <span className="font-normal text-white text-[10px] leading-[13.2px] whitespace-nowrap [font-family:'Geist',Helvetica]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart Card */}
        <Card className="flex-1 h-[241px] rounded-2xl overflow-hidden shadow-[0px_8px_30px_#29324333] bg-[linear-gradient(124deg,rgba(4,123,217,1)_0%,rgba(2,50,87,1)_100%)] border-none">
          <CardContent className="flex items-center justify-around gap-4 p-4 h-full">
            <div className="relative w-full h-full rounded-[14.28px] overflow-hidden bg-[url(https://c.animaapp.com/bfz8XdiT/img/chart.png)] bg-cover bg-[50%_50%]">
              <div className="relative w-full h-[215px] top-[17px] left-[3px]">
                <div className="absolute w-full h-[178px] top-0 left-0">
                  <div className="relative w-full h-[184px]">
                    <div className="absolute w-full h-[184px] top-0 left-0">
                      <img
                        className="absolute w-[628px] h-[163px] top-[5px] left-6"
                        alt="Chart line"
                        src="https://c.animaapp.com/bfz8XdiT/img/chart--line.png"
                      />

                      <div className="flex w-[618px] items-center justify-between absolute top-[172px] left-[33px]">
                        {Array(12)
                          .fill(0)
                          .map((_, index) => (
                            <div
                              key={index}
                              className="flex w-[45px] h-3 items-center justify-center p-[2.86px]"
                            >
                              <div className="mt-[-1.07px] font-normal text-white text-[10px] leading-[14.3px] whitespace-nowrap">
                                2024
                              </div>
                            </div>
                          ))}
                      </div>

                      <div className="inline-flex flex-col h-[171px] items-end justify-between absolute top-0 left-0">
                        {[12, 10, 8, 6, 4, 2, 0].map((value, index) => (
                          <div
                            key={index}
                            className="flex w-[20.71px] h-[12.14px] items-center justify-end gap-[2.86px] px-[2.14px] py-[2.86px]"
                          >
                            <div className="mt-[-1.00px] font-normal text-white text-[10px] leading-[14.3px] whitespace-nowrap">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <img
                      className="absolute w-[618px] h-[162px] top-[5px] left-[34px]"
                      alt="Frame"
                      src="https://c.animaapp.com/bfz8XdiT/img/frame-17739.svg"
                    />
                  </div>
                </div>

                <div className="inline-flex flex-col items-center justify-center gap-[2.86px] px-[5.71px] py-0 absolute top-[206px] left-[241px]">
                  <div className="flex items-start gap-[14.28px]">
                    {lineLegendItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-[5.71px]"
                      >
                        <div
                          className={`w-[11.43px] h-[8.57px] rounded-[22.85px] ${item.color}`}
                        />
                        <span className="font-normal text-white text-[10px] leading-[13.2px] whitespace-nowrap [font-family:'Geist',Helvetica]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Cards Row */}
      <div className="flex items-start gap-2 w-full">
        {statsCards.map((card, index) => (
          <Card
            key={index}
            className="flex-1 bg-[#ffffff80] rounded-2xl backdrop-blur-[43px]"
          >
            <CardContent className="flex flex-col items-end justify-center p-4">
              <div className="flex flex-col items-start gap-4 w-full">
                <p className="opacity-80 font-normal text-[#000000cc] text-base leading-4 whitespace-nowrap">
                  {card.title}
                </p>
                <h3 className="bg-[linear-gradient(143deg,rgba(139,69,252,1)_0%,rgba(72,111,252,1)_100%)] bg-clip-text text-transparent font-medium text-5xl leading-9 whitespace-nowrap">
                  {card.value}
                </h3>
              </div>

              <div className="inline-flex items-center justify-end gap-4 -mt-8">
                <div className="p-4 bg-[linear-gradient(143deg,rgba(139,69,252,1)_0%,rgba(72,111,252,1)_100%)] rounded-2xl">
                  <div className="relative w-8 h-8">
                    <img
                      className="absolute w-6 h-6 top-1 left-1"
                      alt="Vector"
                      src={card.icon}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Institutions and Quick Actions Row */}
      <div className="flex items-start gap-2 w-full">
        {/* Active Institutions */}
        <Card className="flex-1 bg-[#ffffff80] rounded-2xl backdrop-blur-[43px]">
          <CardContent className="p-4">
            <h3 className="font-medium text-black text-base tracking-[-0.08px] mb-2.5">
              Active Institutions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {institutions.map((institution, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl border border-solid border-[#6c6c7f33] shadow-[0px_8px_30px_#29324333] backdrop-blur-[43px] opacity-80"
                >
                  <CardContent className="flex flex-col items-start justify-between p-4">
                    <div className="flex items-center gap-2 w-full">
                      <div className="p-2 bg-[linear-gradient(143deg,rgba(139,69,252,1)_0%,rgba(72,111,252,1)_100%)] rounded-2xl backdrop-blur-[14px]">
                        <div className="relative w-8 h-8">
                          <img
                            className="absolute w-[30px] h-[26px] top-0.5 left-px"
                            alt="Institution icon"
                            src={institution.icon}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-start flex-1">
                        <div className="flex items-center justify-between w-full">
                          <h4 className="font-medium text-[#111722] text-base leading-[21px] whitespace-nowrap">
                            {institution.name}
                          </h4>
                          <span className="font-normal text-[#6106fe] text-xs leading-[21px] whitespace-nowrap">
                            {institution.id}
                          </span>
                        </div>

                        <div className="flex items-center gap-0.5">
                          <div className="relative w-4 h-4">
                            <img
                              className="absolute w-[11px] h-3.5 top-px left-0.5"
                              alt="Location"
                              src={institution.locationIcon}
                            />
                          </div>
                          <span className="font-normal text-[#293243] text-xs leading-[21px] whitespace-nowrap">
                            {institution.address}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-2" />

                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-start gap-1">
                        <div className="relative w-4 h-4">
                          <img
                            className="absolute w-[13px] h-2.5 top-[3px] left-0.5"
                            alt="Email"
                            src={institution.emailIcon}
                          />
                        </div>
                        <span className="font-normal text-[#293243] text-xs leading-normal">
                          {institution.email}
                        </span>
                      </div>

                      <div className="flex items-start gap-1">
                        <div className="relative w-4 h-4">
                          <img
                            className="absolute w-3 h-3 top-0.5 left-0.5"
                            alt="Phone"
                            src={institution.phoneIcon}
                          />
                        </div>
                        <span className="font-normal text-[#293243] text-xs leading-normal">
                          {institution.phone}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1 mt-2">
                      {institution.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="bg-[#6005fe1a] text-[#6106fe] font-medium text-xs rounded-2xl px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="w-full md:w-[425px] bg-[#ffffff80] rounded-2xl backdrop-blur-[43px]">
          <CardContent className="p-4">
            <h3 className="font-medium text-black text-base tracking-[-0.08px] mb-2.5">
              Quick Actions
            </h3>

            {quickActions.map((action, index) => (
              <Card
                key={index}
                className={`mb-2.5 ${index === 3 ? "border border-solid border-[#0000001a]" : "border-none"} bg-white rounded-2xl overflow-hidden`}
              >
                <CardContent className="p-4">
                  {action.link === "/role-management" ? (
                    <Link
                      to={action.link}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 ${action.gradient} rounded-2xl backdrop-blur-[14px]`}
                        >
                          <div className="relative w-8 h-8">
                            <img
                              className="absolute w-[27px] h-[27px] top-px left-1"
                              alt="Action icon"
                              src={action.icon}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-1">
                          <h4 className="font-medium text-[#171214] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                            {action.title}
                          </h4>
                          <p className="opacity-50 font-normal text-[#171214] text-xs tracking-[-0.12px] leading-normal">
                            {action.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative w-6 h-6">
                        <img
                          className="absolute w-[9px] h-[17px] top-1 left-2"
                          alt="Arrow"
                          src="https://c.animaapp.com/bfz8XdiT/img/vector-108.svg"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-2 ${action.gradient} rounded-2xl backdrop-blur-[14px]`}
                        >
                          <div className="relative w-8 h-8">
                            <img
                              className="absolute w-6 h-[25px] top-[3px] left-[5px]"
                              alt="Action icon"
                              src={action.icon}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-1">
                          <h4
                            className={`font-medium text-[#171214] text-sm tracking-[-0.14px] leading-5 whitespace-nowrap ${index === 2 ? "[font-family:'Figtree',Helvetica]" : "[font-family:'Geist',Helvetica]"}`}
                          >
                            {action.title}
                          </h4>
                          <p
                            className={`opacity-50 font-normal text-[#171214] text-xs tracking-[-0.12px] leading-normal ${index >= 2 ? "[font-family:'Figtree',Helvetica] whitespace-nowrap" : ""}`}
                          >
                            {action.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative w-6 h-6">
                        <img
                          className="absolute w-[9px] h-[17px] top-1 left-2"
                          alt="Arrow"
                          src="https://c.animaapp.com/bfz8XdiT/img/vector-108.svg"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

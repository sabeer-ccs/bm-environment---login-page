import { EyeIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const LoginPage = () => {
  return (
    <div
      className="bg-[#c4c9d4] flex flex-row justify-center w-full min-h-screen"
      data-model-id="6:26458"
    >
      <div className="bg-[#c4c9d4] overflow-hidden w-full max-w-[1440px] relative">
        <div className="relative">
          {/* Background images */}
          <img
            className="w-[490px] h-[492px] absolute object-cover right-0 bottom-0"
            alt="Decorative background element"
            src="https://c.animaapp.com/bfz8XdiT/img/image-517.png"
          />

          <img
            className="w-[868px] h-[804px] object-cover absolute left-0"
            alt="Decorative background element"
            src="https://c.animaapp.com/bfz8XdiT/img/image-10.png"
          />

          {/* Login card */}
          <Card className="flex flex-col w-[623px] items-center justify-center gap-8 px-10 py-20 absolute right-0 top-0 rounded-3xl overflow-hidden border border-solid border-white shadow-[0px_4px_84px_#0000001a] backdrop-blur-[75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(75px)_brightness(100%)] bg-[linear-gradient(259deg,rgba(229,230,252,0.8)_0%,rgba(234,230,244,0.8)_50%,rgba(190,216,248,0.8)_100%)]">
            <CardContent className="p-0 w-full flex flex-col items-center gap-8">
              {/* Logo */}
              <img
                className="w-[93.44px] h-[88px]"
                alt="Logo"
                src="https://c.animaapp.com/bfz8XdiT/img/outer-circle@2x.png"
              />

              <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex flex-col w-[350px] items-center justify-center gap-6">
                  {/* Header */}
                  <div className="flex flex-col w-full items-center gap-1">
                    <h1 className="bg-[linear-gradient(90deg,rgba(182,70,255,1)_0%,rgba(250,85,96,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-semibold text-transparent text-[32px] tracking-[0] leading-8">
                      Welcome Back
                    </h1>
                    <p className="[font-family:'Geist',Helvetica] font-normal text-[#c549db80] text-sm tracking-[0] leading-4">
                      Enter your email below to create your account
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="flex flex-col items-start gap-3 w-full">
                    {/* Email field */}
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <label className="font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#1c222e] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)]">
                        Email Id
                      </label>
                      <Input
                        className="h-[52px] bg-white rounded-xl border border-solid border-[#e14f9b80] shadow-box-shadow-shadow-sm [font-family:'Inter',Helvetica] text-xs tracking-[-0.48px]"
                        placeholder="Enter Email Address"
                      />
                    </div>

                    {/* Password field */}
                    <div className="flex flex-col items-end gap-1.5 w-full">
                      <label className="self-start font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#1c222e] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)]">
                        Password
                      </label>
                      <div className="relative w-full">
                        <Input
                          type="password"
                          className="h-[52px] bg-white rounded-xl border border-solid border-[#e14f9b80] shadow-box-shadow-shadow-sm [font-family:'Inter',Helvetica] text-xs tracking-[-0.48px]"
                          placeholder="Enter Password"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5">
                          <EyeIcon className="w-5 h-5 text-[#1c222e4c]" />
                        </div>
                      </div>
                      <button className="[font-family:'Inter',Helvetica] font-normal text-[#1c222e4c] text-xs tracking-[-0.48px]">
                        Forgot password?
                      </button>
                    </div>
                  </div>

                  {/* Login button */}
                  <Button
                    asChild
                    className="w-full h-[52px] rounded-xl bg-[linear-gradient(90deg,rgba(182,70,255,1)_0%,rgba(250,85,96,1)_100%)] [font-family:'Geist',Helvetica] font-semibold text-neutral-50 text-base"
                  >
                    <Link to="/dashboard">Log In</Link>
                  </Button>

                  {/* Divider */}
                  <div className="flex items-center gap-1.5 w-full">
                    <Separator className="flex-1" />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#1c222e4c] text-xs tracking-[-0.48px]">
                      or login with
                    </span>
                    <Separator className="flex-1" />
                  </div>
                </div>

                {/* Social login options */}
                <div className="flex items-start gap-4">
                  <button className="relative flex-[0_0_auto] bg-white rounded-[70.89px] border-[0.72px] border-solid border-[#bbbdc1] p-3">
                    <img
                      className="w-5 h-5"
                      alt="Google login"
                      src="https://c.animaapp.com/bfz8XdiT/img/image-538@2x.png"
                    />
                  </button>
                  <button className="relative flex-[0_0_auto] bg-white rounded-[67.83px] border-[0.69px] border-solid border-[#bbbdc1] p-3">
                    <img
                      className="w-5 h-5"
                      alt="Microsoft login"
                      src="https://c.animaapp.com/bfz8XdiT/img/image-540@2x.png"
                    />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

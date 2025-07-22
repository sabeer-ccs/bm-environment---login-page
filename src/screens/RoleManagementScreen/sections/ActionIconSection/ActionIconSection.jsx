import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Switch } from "../../../../components/ui/switch";
import { Textarea } from "../../../../components/ui/textarea";

export const ActionIconSection = () => {
  return (
    <Card className="w-full max-w-[600px] rounded-2xl shadow-[0px_8px_90px_#00000066] bg-[linear-gradient(259deg,rgba(229,230,252,0.6)_0%,rgba(234,230,244,0.6)_50%,rgba(190,216,248,0.6)_100%),linear-gradient(0deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] backdrop-blur-[100px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(100px)_brightness(100%)] overflow-hidden">
      <CardHeader className="p-6 space-y-0">
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-1">
            <img
              className="w-[35px] h-[37px]"
              alt="Role icon"
              src="https://c.animaapp.com/bfz8XdiT/img/image-544-1@2x.png"
            />
            <span className="font-medium text-[#077fed] text-base tracking-[-0.34px] leading-4 [font-family:'Geist',Helvetica]">
              Add Role
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="inline-flex p-2 rounded-[15px] shadow-[0px_8px_30px_#00000069,inset_0px_0px_12px_#ffffff08] bg-[linear-gradient(180deg,rgba(41,50,67,0.6)_0%,rgba(17,23,34,0.6)_100%)] backdrop-blur-[100px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(100px)_brightness(100%)] h-auto"
            asChild
          >
            <Link to="/role-management">
              <XIcon className="w-6 h-6 text-white" />
            </Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6 pt-0">
        <Card className="p-4 bg-[#ffffff80] rounded-2xl border border-solid border-white shadow-[0px_8px_30px_#29324333]">
          <div className="flex flex-col gap-4">
            {/* Role ID Field */}
            <div className="w-48">
              <div className="flex flex-col gap-1">
                <Label className="font-medium text-[#1c222e] text-xs leading-5 [font-family:'Geist',Helvetica]">
                  Role ID
                </Label>
                <div className="h-10 flex items-center px-3.5 py-3 bg-[#ffffff66] rounded-lg">
                  <span className="text-[#1c222ecc] text-xs [font-family:'Geist',Helvetica] font-normal leading-5">
                    RID 085
                  </span>
                </div>
              </div>
            </div>

            {/* Role Field */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-1">
                <Label className="font-medium text-[#1c222e] text-xs leading-5 [font-family:'Geist',Helvetica]">
                  Role
                </Label>
                <span className="font-medium text-semantic-colors-color-text-error text-sm leading-5 [font-family:'Geist',Helvetica]">
                  *
                </span>
              </div>
              <Input
                className="h-11 px-3.5 py-3 bg-white rounded-lg border border-solid border-[#087fee80] text-xs [font-family:'Geist',Helvetica]"
                placeholder="Enter Role"
              />
            </div>

            {/* Description Field */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-1">
                <Label className="font-medium text-[#1c222e] text-xs leading-5 [font-family:'Geist',Helvetica]">
                  Description
                </Label>
                <span className="font-medium text-semantic-colors-color-text-error text-sm leading-5 [font-family:'Geist',Helvetica]">
                  *
                </span>
              </div>
              <Textarea
                className="h-[101px] px-3.5 py-3 bg-white rounded-lg border border-solid border-[#087fee80] text-xs [font-family:'Geist',Helvetica]"
                placeholder="Enter Description"
              />
            </div>

            {/* Active Status Toggle */}
            <div className="flex items-center gap-2">
              <Switch
                defaultChecked={true}
                className="w-11 h-6 bg-[#349755] data-[state=checked]:bg-[#349755]"
              />
              <span className="font-medium text-3-shadcn-ui-colors-UI-foreground text-sm [font-family:'Geist',Helvetica]">
                Active Status
              </span>
            </div>
          </div>
        </Card>
      </CardContent>

      <CardFooter className="flex justify-end gap-3 p-6 border-t border-[#0000001a] shadow-[0px_8px_30px_#29324333] bg-[linear-gradient(130deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
        <Button
          variant="outline"
          className="w-[120px] h-12 font-medium text-[#1c222e] text-sm [font-family:'Geist',Helvetica] bg-white border-[#1c222e33] rounded-[10px]"
          asChild
        >
          <Link to="/role-management">Cancel</Link>
        </Button>

        <Button
          className="w-[120px] h-12 font-medium text-white text-sm [font-family:'Geist',Helvetica] bg-[linear-gradient(124deg,rgba(5,108,189,1)_0%,rgba(2,50,87,1)_100%)] rounded-[10px]"
          asChild
        >
          <Link to="/role-management">Save Role</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

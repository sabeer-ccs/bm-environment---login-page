import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Switch } from "../../../../components/ui/switch";
import { Textarea } from "../../../../components/ui/textarea";

export const IconSection = () => {
  return (
    <div className="flex flex-col w-full max-w-[600px] rounded-2xl shadow-[0px_8px_90px_#00000066] bg-[linear-gradient(259deg,rgba(229,230,252,0.6)_0%,rgba(234,230,244,0.6)_50%,rgba(190,216,248,0.6)_100%),linear-gradient(0deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] overflow-hidden backdrop-blur-[100px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(100px)_brightness(100%)]">
      <div className="flex flex-col gap-6 p-6 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <img
              className="w-[35px] h-[37px]"
              alt="Role icon"
              src="https://c.animaapp.com/bfz8XdiT/img/image-544-1@2x.png"
            />
            <span className="font-medium text-[#077fed] text-base tracking-[-0.34px] leading-4 font-['Geist',Helvetica]">
              Add Role
            </span>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="w-6 h-6 p-0 rounded-[15px] shadow-[0px_8px_30px_#00000069,inset_0px_0px_12px_#ffffff08] bg-[linear-gradient(180deg,rgba(41,50,67,0.6)_0%,rgba(17,23,34,0.6)_100%)] border-none backdrop-blur-[100px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(100px)_brightness(100%)]"
          >
            <XIcon className="h-3.5 w-3.5 text-white" />
          </Button>
        </div>

        <Card className="bg-[#ffffff80] border border-white shadow-[0px_8px_30px_#29324333] rounded-2xl">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4">
              <div className="w-48">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="role-id"
                    className="font-medium text-[#1c222e] text-xs leading-5"
                  >
                    Role ID
                  </Label>
                  <div className="h-10 flex items-center px-3.5 py-3 bg-[#ffffff66] rounded-lg">
                    <span className="font-normal text-[#1c222ecc] text-xs leading-5 font-['Geist',Helvetica]">
                      RID 085
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-1">
                  <Label
                    htmlFor="role"
                    className="font-medium text-[#1c222e] text-xs leading-5"
                  >
                    Role
                  </Label>
                  <span className="font-medium text-semantic-colors-color-text-error text-sm leading-5">
                    *
                  </span>
                </div>
                <Input
                  id="role"
                  defaultValue="Administrator"
                  className="h-11 px-3.5 py-3 bg-white rounded-lg border border-[#087fee80] font-medium text-[#111722] text-base leading-[21px] font-['Geist',Helvetica]"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-1">
                  <Label
                    htmlFor="description"
                    className="font-medium text-[#1c222e] text-xs leading-5"
                  >
                    Description
                  </Label>
                  <span className="font-medium text-semantic-colors-color-text-error text-sm leading-5">
                    *
                  </span>
                </div>
                <Textarea
                  id="description"
                  defaultValue="Administrative Staff"
                  className="h-[101px] px-3.5 py-3 bg-white rounded-lg border border-[#087fee80] font-medium text-[#111722] text-base leading-[21px] font-['Geist',Helvetica]"
                />
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  id="active-status"
                  defaultChecked={true}
                  className="w-11 h-6 bg-[#349755] data-[state=checked]:bg-[#349755]"
                />
                <Label
                  htmlFor="active-status"
                  className="font-medium text-3-shadcn-ui-colors-UI-foreground text-sm leading-5"
                >
                  Active Status
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-end gap-3 p-6 w-full border-t border-[#0000001a] shadow-[0px_8px_30px_#29324333] bg-[linear-gradient(130deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)]">
        <Button
          variant="outline"
          asChild
          className="w-[120px] h-12 font-medium text-[#1c222e] text-sm rounded-[10px] border border-[#1c222e33]"
        >
          <Link to="/role-management">Cancel</Link>
        </Button>

        <Button
          asChild
          className="w-[120px] h-12 font-medium text-white text-sm rounded-[10px] bg-[linear-gradient(124deg,rgba(5,108,189,1)_0%,rgba(2,50,87,1)_100%)]"
        >
          <Link to="/role-management">Save Role</Link>
        </Button>
      </div>
    </div>
  );
};

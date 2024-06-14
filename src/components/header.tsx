import { Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";

import goTaskIcon from "../../public/faviconIcon.svg";
import profilePic from "../assets/profilePic.webp";

export function Header() {
  return (
    <div className="w-screen h-16 bg-slate-800 flex items-center justify-center absolute top-0 left-0">
      <div className="w-full max-w-7xl h-full flex flex-row items-center justify-between px-16 max-md:px-4">
        <div className="flex flex-row justify-start items-center w-full h-full max-md:w-2/6">
          <div className="flex flex-row justify-start items-center max-md:justify-center">
            <img src={goTaskIcon} className="w-10" />

            <Typography
              variant="h1"
              className="text-xl text-slate-100 font-semibold"
            >
              GoTask
            </Typography>
          </div>

          <div className="w-[1px] h-5/6 bg-slate-500 ml-4 mr-4 max-md:hidden" />

          <div className="text-slate-100 max-md:hidden">
            <Typography className="text-xl font-semibold">Olá, John</Typography>

            <Typography className="text-xs font-extralight">
              Pariatur ipsum labore consequat magna magna duis do qui.
            </Typography>
          </div>
        </div>

        <div className="flex flex-row items-center justify-end gap-4 w-full h-full cursor-pointer max-md:w-4/6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <img src={profilePic} className="w-full h-full object-cover" />
          </div>

          <div className="text-slate-100">
            <Typography className="text-xl font-semibold">
              John White S.
            </Typography>

            <Typography className="text-xs font-extralight">Perfil</Typography>
          </div>

          <ChevronRight className="size-4" color="#f1f5f9" />
        </div>
      </div>
    </div>
  );
}

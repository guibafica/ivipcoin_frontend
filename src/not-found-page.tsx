import { useRouteError } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import notFoundIcon from "../src/assets/not-found-icon.svg";
import { useCallback } from "react";

interface IHeaderButtonProps {
  bgColor: string;
}

function HeaderButton({ bgColor }: IHeaderButtonProps) {
  return (
    <div className={twMerge("h-3 w-3 bg-green-500 rounded-full", bgColor)} />
  );
}

// [] - responsive

export function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(".");
  console.error("ERROR: ", error);
  console.error(".");

  const handleNavigateToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-900 text-slate-50 antialiased">
      <div className="w-[800px] h-[480px] bg-slate-500 rounded-lg overflow-hidden flex flex-col items-center justify-between border-4 border-slate-500 max-sm:h-5/6 max-sm:w-5/6">
        <div className="w-full h-10 flex flex-row items-center justify-start p-4 gap-3">
          <HeaderButton bgColor="bg-rose-500" />
          <HeaderButton bgColor="bg-yellow-300" />
          <HeaderButton bgColor="bg-green-500" />
        </div>

        <div className="w-full h-full flex bg-slate-200 items-center justify-between flex-row p-8 max-sm:flex-col max-sm:justify-center max-sm:gap-40">
          <img src={notFoundIcon} className="w-3/5 max-sm:w-full" />

          <div className="w-2/5 flex flex-col items-center justify-center gap-1 max-sm:w-full">
            <Typography
              variant="h1"
              component="h1"
              className="text-5xl text-slate-800 font-extrabold max-sm:text-6xl"
            >
              404
            </Typography>

            <Typography
              variant="h3"
              className="text-slate-600 text-lg max-sm:text-xl"
            >
              página não encontrada :(
            </Typography>

            <Button
              variant="contained"
              onClick={handleNavigateToHome}
              className="mt-6 px-5 py-2 bg-main-yellow text-slate-800 font-semibold rounded-md cursor-pointer transition-all ease-in-out hover:bg-yellow-400 max-sm:w-full"
            >
              VOLTAR PARA HOME
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

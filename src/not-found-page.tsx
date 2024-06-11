import { useRouteError } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

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
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[800px] h-[480px] bg-slate-200 rounded-lg overflow-hidden flex flex-col items-center justify-between">
        <div className="w-full h-10 bg-slate-500 flex flex-row items-center justify-start p-4 gap-3">
          <HeaderButton bgColor="bg-rose-500" />
          <HeaderButton bgColor="bg-yellow-300" />
          <HeaderButton bgColor="bg-green-500" />
        </div>

        <div className="w-full h-full flex items-center justify-between flex-row p-8">
          <img src={notFoundIcon} className="w-2/5" />

          <div className="w-3/5 flex flex-col items-center justify-center gap-1">
            <h1 className="text-5xl text-slate-800 font-extrabold">404</h1>
            <p className="text-slate-600 text-lg">página não encontrada :(</p>

            <button
              onClick={handleNavigateToHome}
              className="mt-6 px-5 py-2 bg-main-yellow text-slate-800 font-semibold rounded-md cursor-pointer transition-all ease-in-out hover:bg-yellow-400"
            >
              VOLTAR PARA HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Typography } from "@mui/material";

import { Header } from "../components/header";

export function Dashboard() {
  return (
    <>
      <Header />

      <div className="h-screen w-screen flex justify-center items-center bg-slate-900 text-slate-50 antialiased">
        <Typography
          variant="h3"
          className="text-slate-20000 text-lg max-sm:text-xl"
        >
          Hello World
        </Typography>
      </div>
    </>
  );
}

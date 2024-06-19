import CircularProgress from "@mui/material/CircularProgress";

import { colors } from "../utils/colors";

interface ILoadingComponentProps {
  isLoading: boolean;
}

export function LoadingComponent({ isLoading }: ILoadingComponentProps) {
  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen bg-slate-900/90 z-50 flex items-center justify-center absolute top-0 left-0">
          <CircularProgress
            sx={{ color: colors.primary.yellow }}
            size={40}
            thickness={4}
          />
        </div>
      ) : null}
    </>
  );
}

import TextField from "@material-ui/core/TextField";
import { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { twMerge } from "tailwind-merge";

import { colors } from "../utils/colors";

interface IInputProps {
  isOnError?: boolean;
  errorMessage?: string;
  title: string;
  defaultValue?: string;
  value?: string;
  onChange?: (text: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "#64748b",
      fontWeight: 600,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.primary.yellow,
      },
    },
    "&  .MuiFormHelperText-root.Mui-error": {
      background: "#f1f5f9",
      margin: 0,
      paddingLeft: 10,
    },
  },
}));

export function Input({
  isOnError = false,
  title,
  defaultValue,
  errorMessage = "Verifique o campo",
  value,
  onChange,
}: IInputProps) {
  const classes = useStyles();

  return (
    <TextField
      id={title}
      error={isOnError}
      label={title}
      defaultValue={defaultValue}
      helperText={isOnError ? errorMessage : null}
      variant="outlined"
      className={twMerge("w-full bg-white rounded-lg mt-1", classes.root)}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange ? onChange(e.target.value) : () => {};
      }}
      // FormHelperTextProps={{ style: { background: "#000" } }}
    />
  );
}

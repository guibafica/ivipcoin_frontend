import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";

interface IInputProps {
  isOnError?: boolean;
  errorMessage?: string;
  title: string;
  defaultValue?: string;
  value?: string;
  onChange?: (text: string) => void;
}

export function Input({
  isOnError = false,
  title,
  defaultValue,
  errorMessage = "Verifique o campo",
  value,
  onChange,
}: IInputProps) {
  return (
    <TextField
      id={title}
      error={isOnError}
      label={title}
      defaultValue={defaultValue}
      helperText={isOnError ? errorMessage : null}
      variant="outlined"
      className="w-full bg-white rounded-lg mt-1"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange ? onChange(e.target.value) : () => {};
      }}
    />
  );
}

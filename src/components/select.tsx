import { useState, useCallback } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface IOptionsProps {
  key: string;
  label: string;
}

interface ISelectProps {
  title: string;
  options: IOptionsProps[];
  // isOnError?: boolean;
  // errorMessage?: string;
  // title: string;
  // defaultValue?: string;
  // value?: string;
  // onChange?: (text: string) => void;
}

export function SelectComponent({ title, options }: ISelectProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = useCallback(() => {}, []);

  return (
    <FormControl
      variant="standard"
      className="w-full"
      sx={{
        "& .MuiSelect-select": {
          borderBottom: "1px solid #cbd5e1",
        },
        "& .MuiSvgIcon-root": {
          color: "#cbd5e1",
        },
      }}
    >
      <InputLabel color="success" sx={{ color: "#cbd5e1" }}>
        {title}
      </InputLabel>

      <Select
        value={selectedOption}
        onChange={handleChange}
        label={title}
        MenuProps={{
          style: { zIndex: 99999999 },
        }}
      >
        <MenuItem value="">
          <em>Selecione</em>
        </MenuItem>

        {options.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

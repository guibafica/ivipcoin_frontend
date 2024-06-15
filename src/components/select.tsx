import { useState, useCallback } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// interface ISelectProps {
// isOnError?: boolean;
// errorMessage?: string;
// title: string;
// defaultValue?: string;
// value?: string;
// onChange?: (text: string) => void;
// }

export function SelectComponent() {
  const [age, setAge] = useState("");

  const handleChange = useCallback(() => {}, []);

  return (
    <FormControl variant="standard" className="w-full z-50">
      <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>

      <Select value={age} onChange={handleChange} label="Age">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const EMTradeDropdown = ({ value, onChange }) => {
  const emTradeOptions = [
    {
      label: "Electrician (Departmental)",
      value: "Electrician (Departmental)",
    },
    { label: "Mechanical Fitter", value: "Mechanical Fitter" },
    { label: "Electrical Supervisor", value: "Electrical Supervisor" },
    { label: "Welder", value: "Welder" },
    { label: "Auto Electrician", value: "Auto Electrician" },
    { label: "Sub-station Attendant", value: "Sub-station Attendant" },
    { label: "Electrician (Contractual)", value: "Electrician (Contractual)" },
    { label: "Continuous Miner Operator", value: "Continuous Miner Operator" },
    { label: "Conveyor Operator (UG)", value: "Conveyor Operator (UG)" },
    { label: "Cable man (UG)", value: "Cable man (UG)" },
    { label: "Crusher Operator", value: "Crusher Operator" },
  ];

  return (
    <>
      <InputLabel htmlFor="emTrade" sx={{ mb: 1 }}>
        E&M Trade
      </InputLabel>
      <FormControl fullWidth margin="normal" variant="outlined">
        <Select
          name="emTrade"
          value={value}
          onChange={onChange}
          displayEmpty
          id="emTrade"
        >
          {emTradeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default EMTradeDropdown;

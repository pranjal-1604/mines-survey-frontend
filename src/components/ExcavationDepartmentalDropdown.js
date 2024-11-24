import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ExcavationDepartmentalDropdown = ({ value, onChange }) => {
  const excavationDepartmentalOptions = [
    { label: "Shovel Operator", value: "Shovel Operator" },
    { label: "Drill Operator", value: "Drill Operator" },
    { label: "Dozer Operator", value: "Dozer Operator" },
    { label: "Dumper Operator", value: "Dumper Operator" },
    { label: "Mechanical Fitter", value: "Mechanical Fitter" },
    { label: "Foreman/Foreman Incharge", value: "Foreman/Foreman Incharge" },
    { label: "Payloader Operator", value: "Payloader Operator" },
    { label: "Electrician", value: "Electrician" },
    { label: "Crane Operator", value: "Crane Operator" },
    { label: "Surface Miner Operator", value: "Surface Miner Operator" },
    { label: "Cable Man", value: "Cable Man" },
  ];

  return (
    <>
      <InputLabel htmlFor="excavationDepartmentalTrade" sx={{ mb: 1 }}>
        Excavation (Departmental) Trade
      </InputLabel>
      <FormControl fullWidth margin="normal" variant="outlined">
        <Select
          name="excavationDepartmentalTrade"
          value={value}
          onChange={onChange}
          displayEmpty
          id="excavationDepartmentalTrade"
        >
          {excavationDepartmentalOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default ExcavationDepartmentalDropdown;

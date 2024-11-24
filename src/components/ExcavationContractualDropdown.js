import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ExcavationContractualDropdown = ({ value, onChange }) => {
  const excavationContractualOptions = [
    { label: "Excavator Operator", value: "Excavator Operator" },
    { label: "Tipper/Dumper Operator", value: "Tipper/Dumper Operator" },
    { label: "Payloader Operator", value: "Payloader Operator" },
    { label: "Dozer Operator", value: "Dozer Operator" },
    { label: "Drill Operator", value: "Drill Operator" },
    { label: "Crane Operator", value: "Crane Operator" },
    { label: "Surface Miner Operator", value: "Surface Miner Operator" },
    { label: "Cable Man", value: "Cable Man" },
  ];

  return (
    <>
      <InputLabel htmlFor="excavationContractualTrade" sx={{ mb: 1 }}>
        Excavation (Contractual) Trade
      </InputLabel>
      <FormControl fullWidth margin="normal" variant="outlined">
        <Select
          name="excavationContractualTrade"
          value={value}
          onChange={onChange}
          displayEmpty
          id="excavationContractualTrade"
        >
          {excavationContractualOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default ExcavationContractualDropdown;

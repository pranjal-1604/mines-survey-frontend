import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MiningTradeDropdown = ({ value, onChange }) => {
  const miningTradeOptions = [
    { label: "Support", value: "Support" },
    { label: "Mining Supervisor OC", value: "Mining Supervisor OC" },
    { label: "Mining Supervisor UG", value: "Mining Supervisor UG" },
    { label: "Shot-Firer OC", value: "Shot-Firer OC" },
    { label: "Shot-Firer UG", value: "Shot-Firer UG" },
    { label: "Line Mistry", value: "Line Mistry" },
    { label: "Dresser", value: "Dresser" },
    { label: "Drill Operator UG", value: "Drill Operator UG" },
    { label: "SDL/LHD Operator", value: "SDL/LHD Operator" },
    { label: "Haulage Khalasi", value: "Haulage Khalasi" },
    {
      label: "Explosive Carrier/Blasting Mazdoor",
      value: "Explosive Carrier/Blasting Mazdoor",
    },
    { label: "Explosive Van Driver", value: "Explosive Van Driver" },
    { label: "Magazine Incharge", value: "Magazine Incharge" },
  ];

  return (
    <>
      <InputLabel htmlFor="miningTrade" sx={{ mb: 1 }}>
        Mining Trade
      </InputLabel>
      <FormControl fullWidth margin="normal" variant="outlined">
        <Select
          name="miningTrade"
          value={value}
          onChange={onChange}
          displayEmpty
          id="miningTrade"
        >
          {miningTradeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MiningTradeDropdown;

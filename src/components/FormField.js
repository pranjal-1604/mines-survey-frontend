// src/FormField.js
import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const FormField = ({
  label,
  name,
  value,
  onChange,
  required,
  isNumeric,
  max,
  type = "text",
}) => {
  if (isNumeric) {
    return (
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={onChange}
          displayEmpty
          required={required}
        >
          {Array.from({ length: max }, (_, i) => i + 1).map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
      margin="normal"
      variant="outlined"
      required={required}
    />
  );
};

export default FormField;

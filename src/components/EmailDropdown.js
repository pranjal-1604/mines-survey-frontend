import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const EmailDropdown = ({ value, onChange }) => {
  const emailOptions = [
    { label: "R.P. Sharan, GM(E&M)", value: "R.P. Sharan, GM(E&M)" },
    { label: "Amrendra Kumar, GM(E&M)", value: "Amrendra Kumar, GM(E&M)" },
    {
      label: "Rohit Kumar Choudhary, Dy. Manager (Mining)",
      value: "Rohit Kumar Choudhary, Dy. Manager (Mining)",
    },
    {
      label: "Priyanka Prasad, Manager (Excavation)",
      value: "Priyanka Prasad, Manager (Excavation)",
    },
    {
      label: "Parsu Ram Singh, Sr. Manager (Mining)",
      value: "Parsu Ram Singh, Sr. Manager (Mining)",
    },
    {
      label: "C.S. Singh, GM(Excavation)",
      value: "C.S. Singh, GM(Excavation)",
    },
    {
      label: "B.P. Singh, Sr. Manager (Mining)",
      value: "B.P. Singh, Sr. Manager (Mining)",
    },
    {
      label: "Sumit Kumar, Sr. Manager (E&M)",
      value: "Sumit Kumar, Sr. Manager (E&M)",
    },
  ];

  return (
    <>
      <InputLabel htmlFor="email" sx={{ mb: 1 }}>
        Name of Examiner <span style={{ color: "red" }}>*</span>
      </InputLabel>
      <FormControl fullWidth margin="normal" variant="outlined">
        <Select name="email" value={value} onChange={onChange} required>
          {emailOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default EmailDropdown;

{
  /* <InputLabel htmlFor="oralTest" sx={{ mb: 1 }}>
                Oral Test (F.M. 50) <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="oralTest"
                  value={formData.oralTest}
                  onChange={handleChange}
                  required
                >
                  {createNumericOptions(50).map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */
}

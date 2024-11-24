import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkPasswordValidity } from "../utilities/passWordUtils";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"; // Import the password utility

import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import MiningTradeDropdown from "./MiningTradeDropDown";
import EMTradeDropdown from "./EMTradeDropDown";
import ExcavationDepartmentalDropdown from "./ExcavationDepartmentalDropdown";
import ExcavationContractualDropdown from "./ExcavationContractualDropdown";
import EmailDropdown from "./EmailDropdown";

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    miningTrade: "",
    emTrade: "",
    excavationDepartmentalTrade: "",
    excavationContractualTrade: "",
    nameOfEmployee: "",
    designation: "",
    areaOrProject: "",
    generalQualification: 0,
    experience: 0,
    basicKnowledgeOfFirstAidAndFireFighting: 0,
    oralTest: 0,
    password: "",
  });

  const [totalScore, setTotalScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;

    // Clear all other dropdowns if a new one is selected
    if (name === "miningTrade") {
      setFormData({
        ...formData,
        miningTrade: value,
        emTrade: "",
        excavationDepartmentalTrade: "",
        excavationContractualTrade: "",
      });
    } else if (name === "emTrade") {
      setFormData({
        ...formData,
        miningTrade: "",
        emTrade: value,
        excavationDepartmentalTrade: "",
        excavationContractualTrade: "",
      });
    } else if (name === "excavationDepartmentalTrade") {
      setFormData({
        ...formData,
        miningTrade: "",
        emTrade: "",
        excavationDepartmentalTrade: value,
        excavationContractualTrade: "",
      });
    } else if (name === "excavationContractualTrade") {
      setFormData({
        ...formData,
        miningTrade: "",
        emTrade: "",
        excavationDepartmentalTrade: "",
        excavationContractualTrade: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkPasswordValidity(formData.password)) {
      setResponseMessage("Invalid password. Please try again.");
      setOpenErrorModal(true);
      return;
    }

    const requiredFields = [
      "email",
      "nameOfEmployee",
      "designation",
      "areaOrProject",
      "generalQualification",
      "technicalQualification",
      "experience",
      "basicKnowledgeOfFirstAidAndFireFighting",
      "oralTest",
      "password",
    ];

    // Check if all required fields are filled
    for (const field of requiredFields) {
      if (!formData[field]) {
        setResponseMessage(`Please fill in the required field: ${field}`);
        setOpenErrorModal(true);
        return;
      }
    }

    try {
      setIsSubmitting(true);
      await axios.post(
        `${process.env.REACT_APP_API_URL}/submit-form`,
        formData
      );

      setResponseMessage("Form submitted successfully!");
      navigate("/success");
    } catch (error) {
      setResponseMessage("Error submitting form.");
      setOpenErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Numeric dropdown options for General Qualification, Experience, First-Aid & Fire Fighting, and Oral Test
  const createNumericOptions = (maxValue) => {
    const options = [];
    for (let i = 1; i <= maxValue; i++) {
      options.push(i);
    }
    return options;
  };

  // Calculate Total Score whenever the values change
  useEffect(() => {
    const calculateTotalScore = () => {
      const score =
        (Number(formData.generalQualification) || 0) +
        (Number(formData.technicalQualification) || 0) +
        (Number(formData.experience) || 0) +
        (Number(formData.basicKnowledgeOfFirstAidAndFireFighting) || 0) +
        (Number(formData.oralTest) || 0);
      setTotalScore(score);
    };

    calculateTotalScore();
  }, [formData]);

  return (
    <Container maxWidth="lg" style={{ backgroundColor: "lightcyan" }}>
      <Box sx={{ mt: 0 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Row 1: Email, Mining Trade, E&M Trade */}
            <Grid item xs={12} sm={6} md={4}>
              <EmailDropdown value={formData.email} onChange={handleChange} />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <MiningTradeDropdown
                name="miningTrade"
                value={formData.miningTrade}
                onChange={handleDropdownChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <EMTradeDropdown
                name="emTrade"
                value={formData.emTrade}
                onChange={handleDropdownChange}
              />
            </Grid>

            {/* Row 2: Excavation Departmental and Excavation Contractual Trades */}
            <Grid item xs={12} sm={6} md={4}>
              <ExcavationDepartmentalDropdown
                name="excavationDepartmentalTrade"
                value={formData.excavationDepartmentalTrade}
                onChange={handleDropdownChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <ExcavationContractualDropdown
                value={formData.excavationContractualTrade}
                onChange={handleDropdownChange}
              />
            </Grid>

            {/* Row 3: Name of Employee, Designation, Area/Project */}
            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="nameOfEmployee" sx={{ mb: 1 }}>
                Name of Employee <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <TextField
                fullWidth
                margin="normal"
                name="nameOfEmployee"
                value={formData.nameOfEmployee}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="designation" sx={{ mb: 1 }}>
                Designation <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <TextField
                fullWidth
                margin="normal"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="areaOrProject" sx={{ mb: 1 }}>
                Area/Project <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <TextField
                fullWidth
                margin="normal"
                name="areaOrProject"
                value={formData.areaOrProject}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            {/* Row 4: General Qualification, Experience */}
            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="generalQualification" sx={{ mb: 1 }}>
                General Qualification (F.M. 10){" "}
                <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="generalQualification"
                  value={formData.generalQualification}
                  onChange={handleChange}
                  required
                >
                  {createNumericOptions(10).map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="technicalQualification" sx={{ mb: 1 }}>
                Technical Qualification (F.M. 10){" "}
                <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="technicalQualification"
                  value={formData.technicalQualification}
                  onChange={handleChange}
                  required
                >
                  {createNumericOptions(10).map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="experience" sx={{ mb: 1 }}>
                Experience (F.M. 20) <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  {createNumericOptions(20).map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Row 5: Basic Knowledge of First-aid, Oral Test */}
            <Grid item xs={12} sm={6} md={4}>
              <InputLabel
                htmlFor="basicKnowledgeOfFirstAidAndFireFighting"
                sx={{ mb: 1 }}
              >
                Basic knowledge of First-aid and Fire Fighting (F.M. 10){" "}
                <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="basicKnowledgeOfFirstAidAndFireFighting"
                  value={formData.basicKnowledgeOfFirstAidAndFireFighting}
                  onChange={handleChange}
                  required
                >
                  {createNumericOptions(10).map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="oralTest" sx={{ mb: 1 }}>
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
              </FormControl>
            </Grid>

            {/* Password Field */}
            <Grid item xs={12} sm={6} md={4}>
              <InputLabel htmlFor="password" sx={{ mb: 1 }}>
                Password <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <TextField
                fullWidth
                margin="normal"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            {/* Total Score */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Total Score: </strong> {totalScore}
              </Typography>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium" // Medium size for the button
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Dialog open={openErrorModal} onClose={() => setOpenErrorModal(false)}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <Typography>{responseMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenErrorModal(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Form;

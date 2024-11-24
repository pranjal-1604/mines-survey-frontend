import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import Form from "./Form";

const FormHeader = () => {
  const formRef = useRef(null); // Reference to the Form component

  const handleStartClick = () => {
    // Scroll to the Form component smoothly when the button is clicked
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={{ backgroundColor: "lightcyan" }}>
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/dgms.png')", // Replace with your image file name
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
          zIndex: 1,
          ":before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker semi-transparent overlay
            zIndex: -1,
          },
        }}
      >
        <div style={{ marginTop: "75px" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Annual Mines Safety Week-2024
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.5rem !important",
              mb: 3,
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            Trade Test Marksheet (Ranchi, Koderma, and Chaibasa Regions)
            <br />
            MINING / E&M / Excavation
            <br />
            Maximum Marks: 100
          </Typography>
        </div>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "purple",
            px: 4,
            py: 1,
            borderRadius: "20px",
            ":hover": {
              backgroundColor: "darkviolet",
            },
          }}
          onClick={handleStartClick} // Trigger scroll on click
        >
          START
        </Button>
      </Box>

      {/* The Form section will be below, and we can reference it with `formRef` */}
      <Box ref={formRef} sx={{ marginTop: "50px", width: "100%" }}>
        <Form /> {/* This is the Form component */}
      </Box>
    </div>
  );
};

export default FormHeader;

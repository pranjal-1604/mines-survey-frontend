import React from "react";
import { useNavigate } from "react-router-dom"; // Importing the hook for navigation
import { Box, Button, Typography } from "@mui/material";

const SuccessPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleRedirect = () => {
    navigate("/"); // Redirect back to the form page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <img
        src="/thankyou.png" // Path to the image in the public folder
        alt="Success"
        style={{
          width: "60%", // 60% width for desktop
          height: "auto", // Maintain aspect ratio
          maxHeight: "500px", // Increase height for prominence
          marginBottom: "20px",
          objectFit: "contain", // Maintain image aspect ratio within container
        }}
      />
      <Button variant="contained" color="primary" onClick={handleRedirect}>
        Submit another response
      </Button>
    </Box>
  );
};

export default SuccessPage;

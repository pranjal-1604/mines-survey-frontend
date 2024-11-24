import React from "react";
import { Container } from "@mui/material";
import FormHeader from "./FormHeader"; // Import the header component
import Form from "./Form"; // Import the form component

const Survey = () => {
  return (
    <Container maxWidth="lg">
      {/* Render the header */}
      <FormHeader />
      {/* Render the form */}
      <Form />
    </Container>
  );
};

export default Survey;

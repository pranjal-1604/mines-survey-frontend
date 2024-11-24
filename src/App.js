import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuccessPage from "./components/SuccessPage"; // SuccessPage component
import FormHeader from "./components/FormHeader";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormHeader />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;

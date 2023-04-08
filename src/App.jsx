import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import Calculator from "./Calculator";
import FAQSection from "./FAQSection";
import SRBCalculator from "./SRBCalculator";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Reenlistment Bonus Calculator
          </Typography>
          <Routes>
            <Route path="/faq" element={<FAQSection />} />
            <Route path="/" element={<Calculator />} />
            <Route path="/srb-calculator" element={<SRBCalculator />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;

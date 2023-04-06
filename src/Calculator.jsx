import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  const [bonus, setBonus] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [years, setYears] = useState(4);
  const [basePay, setBasePay] = useState(0.0);

  const calculateBonus = () => {
    const cleanedBasePay = basePay.replace(/,/g, "");

    const parsedBasePay = parseFloat(cleanedBasePay);

    const result = multiplier * years * parsedBasePay;
    setBonus(result);
  };

  return (
    <Container maxWidth="sm" sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="What is your current base pay?"
              type="text"
              value={basePay}
              onChange={(e) => setBasePay(e.target.value)}
              inputProps={{ pattern: "\\d*(\\.\\d{0,2})?" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="What is your SRB multiplier?"
              type="number"
              value={multiplier}
              onChange={(e) => setMultiplier(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="How many years are you going to reenlist for?"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateBonus}
          sx={{ mt: 3 }}
        >
          Calculate
        </Button>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          {" "}
          Reenlistment Bonus: $
          {new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(bonus)}
        </Typography>
      </Box>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Link to="/faq">FAQ</Link>
      </Box>
    </Container>
  );
}

export default App;

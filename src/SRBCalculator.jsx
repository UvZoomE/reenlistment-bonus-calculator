import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import { Link } from "react-router-dom";

function SRBCalculator() {
  const [job, setJob] = useState("");
  const [branch, setBranch] = useState("");
  const [years, setYears] = useState(0);
  const [multiplier, setMultiplier] = useState("0");
  const [helperText, setHelperText] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setHelperText(
      "Place this multiplier value in the previous calculator that calculates your reenlistment bonus"
    );
    setTimeout(() => {
      setHelperText("");
    }, 5000);
  }, [multiplier]);

  const handleChange = (event) => {
    setBranch(event.target.value);
  };
  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const calculateSRB = () => {
    if ((years === 6 && answer.toLowerCase() === "yes") || years < 6) {
      if (job.includes("5CXXXX")) {
        setMultiplier("1.5");
      } else if (job.includes("5I0X1")) {
        setMultiplier("0");
      } else if (job.includes("5I2X1X")) {
        setMultiplier("0.5");
      } else if (job.includes("5S0X1")) {
        setMultiplier("1");
      }
    } else if ((years === 10 && answer.toLowerCase() === "yes") || years < 10) {
      if (job.includes("5S0X1")) {
        setMultiplier("1.5");
      } else {
        setMultiplier("2");
      }
    } else if ((years === 14 && answer.toLowerCase() === "yes") || years < 14) {
      setMultiplier("1");
    } else {
      setMultiplier("0");
    }
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
              value={branch}
              onChange={handleChange}
              label="
              Which branch are you currently in?"
              select
            >
              <MenuItem value="option1">Air Force (Coming soon)</MenuItem>
              <MenuItem value="option2">Space Force</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={job}
              onChange={handleJobChange}
              label="Select your Space Force Identifier"
              select
            >
              <MenuItem value="5CXXXX (Cyber Operations)">
                5CXXXX (Cyber Operations)
              </MenuItem>
              <MenuItem value="5I0X1 (All Source Intelligence Analyst)">
                5I0X1 (All Source Intelligence Analyst)
              </MenuItem>
              <MenuItem value="5I2X1X (Signals Intelligence Analyst)">
                5I2X1X (Signals Intelligence Analyst)
              </MenuItem>
              <MenuItem value="5S0X1 (Space Systems Operations)">
                5S0X1 (Space Systems Operations)
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="How many years have you served so far?"
              type="number"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
            />
          </Grid>
          {years > 0 ? (
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                select // tell TextField to render select
                label={`${years} year(s) EXACTLY? (${years} year(s), 0 months and 0 days)`}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </Grid>
          ) : (
            ""
          )}
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateSRB}
          sx={{ mt: 3 }}
        >
          Calculate
        </Button>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          {" "}
          SRB Multiplier: {parseFloat(multiplier)}
        </Typography>
        {helperText && years > 0 && multiplier !== 0 ? (
          <Typography>{helperText}</Typography>
        ) : (
          ""
        )}
      </Box>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Link to="/faq">FAQ</Link>
      </Box>
    </Container>
  );
}

export default SRBCalculator;

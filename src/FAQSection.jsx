import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const FAQSection = () => {
  return (
    <Container maxWidth="md" sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          How do I find what my base pay is?
        </Typography>
        <Typography>
          You can find your base pay by referring to the latest military pay
          chart, which is updated annually. Your base pay depends on your rank
          and years of service. Check the official Department of Defense (DoD)
          website for the most up-to-date information.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          How do I determine my SRB multiplier?
        </Typography>
        <Typography>
          Your SRB (Selective Retention Bonus) multiplier is determined by your
          service branch, Military Occupational Specialty (MOS), and current
          reenlistment zone. For Air Force and Space Force, the 2023 SRB
          listings are available via this link: <br />
          <a
            href="https://myfss.us.af.mil/USAFCommunity/s/knowledge-detail?pid=kA0t0000000LHyYCAW"
            target="_blank"
            rel="noopener noreferrer"
          >
            SRB Listings for Air Force and Space Force
          </a>
          <br />
          <br />
          Air Force, click on{" "}
          <Box component="span" sx={{ textDecoration: "underline" }}>
            USAF FY23 Selective Retention Bonus Listing
          </Box>{" "}
          <br />
          <br />
          Space Force, click on{" "}
          <Box component="span" sx={{ textDecoration: "underline" }}>
            USSF FY23 Selective Retention Bonus Listing
          </Box>{" "}
          <br />
          <br />
          For other branches, contact your unit's career counselor or personnel
          office for more information on your specific SRB multiplier.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          What is the basic formula for measuring a reenlistment bonus?
        </Typography>
        <Typography>
          The basic formula for calculating a reenlistment bonus is: Base Pay x
          SRB Multiplier x Reenlistment Years. The final amount is subject to
          change based on various factors such as caps and limits set by the
          Department of Defense.
        </Typography>
      </Box>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Link to="/">Go back to calculator</Link>
      </Box>
    </Container>
  );
};

export default FAQSection;

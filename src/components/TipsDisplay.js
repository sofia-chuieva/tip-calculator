import React from "react";
import { Box, Typography } from "@mui/material";

const TipsDisplay = ({ heading, subHeading, value }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Roboto Mono,monospace",
              fontSize: "18px",
              fontWeight: 700,
              color: "white",
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Roboto Mono,monospace",
              fontSize: "11px",
              fontWeight: 700,
              color: "#90A4AE",
            }}
          >
            {subHeading}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "Roboto Mono,monospace",
            fontSize: 36,
            fontWeight: 500,
            color: "white",
          }}
        >
          ${value}
        </Typography>
      </Box>
    </>
  );
};

export default TipsDisplay;

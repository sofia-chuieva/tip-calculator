import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import TipsDisplay from "./components/TipsDisplay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          borderRadius: 4,
          width: 800,
          height: 400,
          bgcolor: "white",
          display: "flex",
          p: 4,
          boxShadow: 4,
        }}
      >
        <Box
          sx={{
            width: "50%",
            pr: 4,
          }}
        ></Box>
        <Box
          sx={{
            width: "50%",
            // bgcolor: "#576490",
            bgcolor: "#284b63",
            borderRadius: 4,
            p: 4,
            flexDirection: "column",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Box>
            <TipsDisplay
              heading="Tips Amount"
              subHeading="/ person"
              value="10.00"
            />
            <TipsDisplay heading="Total" subHeading="/ person" value="10.00" />
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4DD0E1",
              color: "#284b63",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;

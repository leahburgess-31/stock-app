// CustomStockContainer.jsx

import React, { useRef, useState, forwardRef } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

import MinimizeIcon from "@material-ui/icons/Minimize";

const Calculator = () => {
  return (
    <div style={{ width: "50%" }}>
      <Card
        className="calculator"
        style={{ margin: 16, borderRadius: 16, background: "#2B394E" }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight="bold" color="white">
              Stock Portfolio Diversity
            </Typography>
          }
        />
        <Box style={{ margin: 16 }}>
          <Grid container spacing={2}></Grid>
        </Box>
      </Card>
    </div>
  );
};

export default Calculator;

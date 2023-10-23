// CustomStockContainer.jsx

import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const SelectedStocks = () => {
  return (
    <div style={{ width: "50%" }}>
      <Card style={{ margin: 16, borderRadius: 16, background: "#2B394E" }}>
        <CardHeader
          title={
            <Typography variant="h5" fontWeight="bold" color="white">
              Selected Stocks
            </Typography>
          }
        />
        <Box style={{ margin: 16 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
          </Grid>
          <Typography variant="body1" align="center" color="white">
            Drag and drop stocks to select stocks to add to your portfolio
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default SelectedStocks;

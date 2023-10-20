import React from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

interface Stock {
  ticker: string;
  value: number;
  name: string;
}

const AllStocks = ({ stocks }: { stocks: Stock[] }) => {
  return (
    <Card style={{ margin: 16, borderRadius: 16, background: "#2B394E" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight="bold" color="white">
            All Stocks
          </Typography>
        }
      />
      <Box style={{ margin: 16 }}>
        <Grid container spacing={2}>
          {stocks.map((stock) => (
            <Grid item key={stock.ticker} xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  height: "100%",
                  background: "#34455E",
                }}
              >
                <CardContent>
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Typography
                        variant="h6"
                        style={{ fontWeight: "bold", color: "white" }}
                      >
                        {stock.ticker}
                      </Typography>
                      <Typography variant="body2" color="white">
                        {stock.name}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="body2" color="white">
                        {stock.value}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default AllStocks;

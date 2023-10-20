import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface Stock {
  ticker: string;
  value: number;
}

const AllStocks = ({
  stocks,
}: {
  stocks: { ticker: string; value: number }[];
}) => {
  return (
    <Card style={{ margin: 16 }}>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            All Stocks
          </Typography>
        }
      />
      <Box style={{ margin: 16 }}>
        <Grid container spacing={2}>
          {stocks.map((stock) => (
            <Grid item key={stock.ticker} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardHeader
                  title={<Typography variant="h6">{stock.ticker}</Typography>}
                  subheader={`Value: ${stock.value}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default AllStocks;

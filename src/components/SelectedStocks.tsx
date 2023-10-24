import React from "react";
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

const SelectedStocks = ({
  selectedStocks,
  onDragOver,
  onDrop,
  removeStock,
  addStockToAllStocks,
}: {
  selectedStocks: {
    ticker: string;
    value: number;
    name: string;
    sector: string;
  }[];
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  removeStock: (ticker: string) => void;
  addStockToAllStocks: (stock: {
    ticker: string;
    value: number;
    name: string;
    sector: string;
  }) => void;
}) => {
  const handleRemoveStock = (stock: {
    ticker: string;
    value: number;
    name: string;
    sector: string;
  }) => {
    removeStock(stock.ticker);
    addStockToAllStocks(stock);
  };

  //sort stocks by alphabetical order
  const sortedSelectedStocks = [...selectedStocks].sort((a, b) =>
    a.ticker.localeCompare(b.ticker)
  );

  return (
    <div style={{ width: "50%" }}>
      <Card
        onDragOver={onDragOver}
        onDrop={onDrop}
        className="selected-stocks"
        style={{ margin: 16, borderRadius: 16, background: "#2B394E" }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight="bold" color="white">
              Selected Stocks
            </Typography>
          }
        />
        <Box style={{ margin: 16 }}>
          <Grid container spacing={2}>
            {sortedSelectedStocks.map((stock) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    height: "100%",
                    background: "#34455E",
                  }}
                >
                  <IconButton
                    onClick={() => handleRemoveStock(stock)}
                    style={{
                      color: "white",
                      paddingLeft: 12,
                    }}
                  >
                    <MinimizeIcon />
                  </IconButton>
                  <CardContent>
                    <Grid container justifyContent="space-between">
                      <Grid item container justifyContent="space-between">
                        <Typography
                          variant="h6"
                          style={{ fontWeight: "bold", color: "white" }}
                        >
                          {stock.ticker}
                        </Typography>
                        <Typography variant="body2" color="white">
                          {stock.value}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="white">
                          {stock.name}
                        </Typography>
                        <Typography variant="body2" color="white">
                          {stock.sector}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {selectedStocks.length === 0 && (
            <Typography variant="body1" align="center" color="white">
              Drag and drop stocks to select stocks to add to your portfolio
            </Typography>
          )}
        </Box>
      </Card>
    </div>
  );
};

export default SelectedStocks;

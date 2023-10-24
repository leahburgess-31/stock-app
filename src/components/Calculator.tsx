import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const Calculator = ({
  selectedStocks,
}: {
  selectedStocks: {
    ticker: string;
    value: number;
    name: string;
    sector: string;
  }[];
}) => {
  //get total value of portfolio
  const totalValue = selectedStocks.reduce(
    (acc, stock) => acc + stock.value,
    0
  );

  //calculate weight of each sector in portfolio
  const calculateSectorWeights = () => {
    const sectorWeights: Record<string, number> = {};

    selectedStocks.forEach((stock) => {
      if (sectorWeights[stock.sector]) {
        sectorWeights[stock.sector] += stock.value;
      } else {
        sectorWeights[stock.sector] = stock.value;
      }
    });

    for (const sector in sectorWeights) {
      sectorWeights[sector] = (sectorWeights[sector] / totalValue) * 100;
    }

    return sectorWeights;
  };

  const sectorWeights = calculateSectorWeights();

  //calculate portfolio diversity
  const calculateSquaredWeights = () => {
    const squaredWeights: Record<string, number> = {};

    selectedStocks.forEach((stock) => {
      const weight = (stock.value / totalValue) * 100;
      squaredWeights[stock.ticker] = Math.pow(weight, 2);
    });

    return squaredWeights;
  };

  const squaredWeights = calculateSquaredWeights();

  const sumSquaredWeights = Object.values(squaredWeights).reduce(
    (acc, squaredWeight) => acc + squaredWeight,
    0
  );

  const portfolioDiversity = 1 - sumSquaredWeights / 10000;

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
        <CardContent>
          <Typography variant="h6" color="white">
            Portfolio Total: {totalValue.toFixed(2)}
          </Typography>
          <div style={{ marginTop: 10 }}>
            <Typography variant="h6" color="white">
              Sector Weights:
            </Typography>
            {Object.entries(sectorWeights).map(([sector, weight]) => (
              <Typography key={sector} variant="body2" color="white">
                {sector}: {weight.toFixed(2)}%
              </Typography>
            ))}
          </div>
          <div style={{ marginTop: 10 }}>
            <Typography variant="h6" color="white">
              Diversity Score (D):
            </Typography>
            <Typography variant="body2" color="white">
              {portfolioDiversity.toFixed(2)}
            </Typography>
          </div>
        </CardContent>
        <Box style={{ margin: 16 }}>
          <Grid container spacing={2}></Grid>
        </Box>
      </Card>
    </div>
  );
};

export default Calculator;

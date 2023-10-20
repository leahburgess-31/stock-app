import React, { useState, useEffect } from "react";

const StockList = () => {
  const dowTickers = [
    "AXP",
    "AMGN",
    "AAPL",
    "BA",
    "CAT",
    "CSCO",
    "CVX",
    "GS",
    "HD",
    "HON",
    "IBM",
    "INTC",
    "JNJ",
    "KO",
    "JPM",
    "MCD",
    "MMM",
    "MRK",
    "MSFT",
    "NKE",
    "PG",
    "TRV",
    "UNH",
    "CRM",
    "VZ",
    "V",
    "WBA",
    "WMT",
    "DIS",
    "DOW",
  ];

  const key = "ckp2nk9r01qlsp909ojgckp2nk9r01qlsp909ok0";
  const basePath = "https://finnhub.io/api/v1";

  const [stocks, setStocks] = useState<{ ticker: string; value: number }[]>([]);

  const fetchData = async () => {
    try {
      const promises = dowTickers.map(async (ticker) => {
        const response = await fetch(
          `${basePath}/quote?symbol=${ticker}&token=${key}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { ticker, value: data.c };
      });
      const results = await Promise.all(promises);
      setStocks(results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Stock Data</h1>
      <ul>
        {stocks.map((result, index) => (
          <li key={index}>
            Ticker: {result.ticker}, Value: {result.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;

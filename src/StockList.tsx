import React, { useState, useEffect } from "react";
import axios from "axios";

interface StockData {
  name: string;
  ticker: string;
  price: number;
  sector: string;
}
const StockList = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const dowTickers = [
    "AAPL",
    "MSFT",
    "GS",
    "IBM",
    "HD",
    "CAT",
    "TRV",
    "DIS",
    "JPM",
    "AMZN",
    "MCD",
    "V",
    "NKE",
    "CSCO",
    "AXP",
    "BA",
    "UTX",
    "INTC",
    "WMT",
    "CVX",
    "KO",
    "PG",
    "JNJ",
    "MRK",
    "VZ",
    "XOM",
    "UNH",
    "MMM",
    "PFE",
  ];

  return (
    <div>
      <h1>Stock Data</h1>
    </div>
  );
};

export default StockList;

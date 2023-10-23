import React, { useState, useEffect } from "react";
import AllStocks from "./AllStocks";
import SelectedStocks from "./SelectedStocks";

const StockList = () => {
  //list of Dow 30
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

  //api variables
  const key = "ckp2nk9r01qlsp909ojgckp2nk9r01qlsp909ok0";
  const basePath = "https://finnhub.io/api/v1";

  //stock data
  const [stocks, setStocks] = useState<
    { ticker: string; value: number; name: string }[]
  >([]);

  //fetching from the api and then storing the stock data
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
        const nameResponse = await fetch(
          `${basePath}/stock/profile2?symbol=${ticker}&token=${key}`
        );
        if (!nameResponse.ok) {
          throw new Error(`HTTP error! status: ${nameResponse.status}`);
        }
        const nameData = await nameResponse.json();

        return { ticker, value: data.c, name: nameData.name };
      });
      const results = await Promise.all(promises);
      setStocks(results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [selectedStocks, setSelectedStocks] = useState<
    { ticker: string; value: number; name: string }[]
  >([]);

  // Function to handle dragging stock
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    stock: { ticker: string; value: number; name: string }
  ) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(stock));
  };

  // Function to handle dropping stock
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedStock = JSON.parse(data);
    setSelectedStocks([...selectedStocks, draggedStock]);
  };

  // Prevent default behavior for the drop target
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  //Function to handle removal of a stock from selected stocks
  const removeStock = (ticker: string) => {
    setSelectedStocks((prevSelectedStocks) =>
      prevSelectedStocks.filter((stock) => stock.ticker !== ticker)
    );
  };

  //Function to handle removal of a stock from all stocks
  const removeStockFromAllStocks = (ticker: string) => {
    setStocks((prevStocks) =>
      prevStocks.filter((stock) => stock.ticker !== ticker)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        background: "rgb(28,37,54)",
        minHeight: "100vh",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      <h1 style={{ margin: 16 }}>Dashboard</h1>
      <SelectedStocks
        selectedStocks={selectedStocks}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        removeStock={removeStock}
      ></SelectedStocks>
      <AllStocks
        stocks={stocks}
        onDragStart={handleDragStart}
        removeStockFromAllStocks={removeStockFromAllStocks}
      />
    </div>
  );
};

export default StockList;

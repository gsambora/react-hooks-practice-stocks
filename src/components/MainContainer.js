import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [display, setDisplay] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");

  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then((r)=>r.json())
    .then((stocks)=>setStocks(stocks))
  },[])

  useEffect(()=>{
    setDisplay(allStocks)
  },[allStocks])

  function handleSort(sortType){
    console.log(sortType)
    const sortedStocks = [...display].sort((stock1, stock2) => {
      if (sortType === "Alphabetically") {
        if(stock1.name < stock2.name){
          return -1
        } else {
          return 1
        }
      } else {
        if(stock1.price < stock2.price){
          return -1
        } else{
          return 1
        }
      }
    });
    
    setDisplay(sortedStocks);
    setSortBy(sortType);
  }

  function addPortfolio(stockId){
    let newPortStock={};
    allStocks.map((stock)=>{
      if( parseInt(stock.id)===parseInt(stockId)){
        newPortStock=stock
      }})
    setPortfolio([...portfolio, newPortStock])
  }

  function removePortfolio(stockId){
    const filteredPortfolio = portfolio.filter((stock)=>{
      return(parseInt(stock.id)!==parseInt(stockId))
    })
    setPortfolio(filteredPortfolio);
  }

  function handleFilterChange(event){
    //console.log(event.target.value)
    const filteredStocks = allStocks.filter((stock)=>{
      return(stock.type === event.target.value)
    })
    setDisplay(filteredStocks);
  }

  return (
    <div>
      <SearchBar sortBy={sortBy} handleSort={handleSort} filterChange={handleFilterChange}/>
      <div className="row">
        <div className="col-8">
          {allStocks.length > 0 && <StockContainer processClick={addPortfolio} allStocks={display}/>}
        </div>
        <div className="col-4">
          <PortfolioContainer processClick={removePortfolio} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

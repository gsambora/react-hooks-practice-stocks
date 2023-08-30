import React from "react";
import Stock from "./Stock";

function StockContainer({allStocks, processClick}) {
  function handleClick(event){
    //console.log(event.target)
    processClick(event.target.id)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {allStocks && allStocks.map((stock)=>{
        return(
        <Stock 
          handleClick={handleClick}
          key={stock.id}
          ticker={stock.ticker}
          name={stock.name}
          id={stock.id}
          price={stock.price}/>
        )
      })}
    </div>
  );
}

export default StockContainer;

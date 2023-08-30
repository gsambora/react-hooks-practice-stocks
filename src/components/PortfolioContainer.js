import React from "react";
import Stock from "./Stock";

function PortfolioContainer({processClick, portfolio}) {
  function handleClick(event){
    //console.log(event.target)
    processClick(event.target.id)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio && portfolio.map((stock)=>{
          //console.log("stock: ", stock)
          return(
            <Stock 
              handleClick={handleClick}
              key={stock.id}
              ticker={stock.ticker}
              name={stock.name}
              id={stock.id}
              price={stock.price}/>
            )
        })
      }
    </div>
  );
}

export default PortfolioContainer;

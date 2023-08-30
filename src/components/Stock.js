import React from "react";

function Stock({id, ticker, name, price, handleClick}) {
  return (
    <div >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p id={id} onClick={handleClick} className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

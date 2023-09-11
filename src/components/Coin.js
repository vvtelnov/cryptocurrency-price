import React from 'react'
import './Coin.css';

function Coin({image, name, price, volume, pricechange, marketcap}) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </div>
        <div className="coin-data">
          <p className="coin-price">$ {price.toLocaleString()}</p>
          {pricechange < 0 ? (
              <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
            ):(
              <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
            )
          }
          <p className="coin-marketcap">
            Mkt Cap: $ {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
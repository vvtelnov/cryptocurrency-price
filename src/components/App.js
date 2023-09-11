import {useState, useEffect} from 'react';
import axios from 'axios'
import Coin from './Coin';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.error(error));
  }, []);



  function handleCoinInputChange(evt) {
    setSearch(evt.target.value)
  }

  const filteredCoins = coins.filter(coin=> {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form action="">
          <input
            type="text" 
            className="coin-input" 
            placeholder="Provide the coin name"
            onChange={handleCoinInputChange}
          />
        </form>
      </div>
      {filteredCoins.map(coin => (
        <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
          // volume={coin.total_volume}
        />
      ))}
    </div>
  )
}

export default App;

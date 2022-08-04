import { useState } from "react";
import { useEffect } from "react";

function App() {
  // 로딩을 위한 것 & 코인 리스트를 위한 것
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
    },[])

  return (
    <div>
      <h1>The Coins! {loading ? "" : `${coins.length}`}</h1>
      {loading ? <strong>Loading....</strong> : 
      <select>
      {coins.map((coin) => 
      <option>
        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}USD
      </option>)}
    </select>
    }
    </div>
  )
}

{/* <ul> */}
{/* {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}USD</li>)} */}
{/* </ul> */}
export default App; 
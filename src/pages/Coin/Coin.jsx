import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPrice } from '../../redux/priceslice';

function Coin() {

  // const fetchgraph = ()
  const { id } = useParams();
  const dispatch = useDispatch();
  const { price, loading, error, currency } = useSelector(state => state.storeprice);

  useEffect(() => {
    if (price.length === 0) {
      dispatch(fetchPrice(currency));
    }
  }, [dispatch, price.length, currency]);

  const coin = price.find((item) => item.id === id);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!coin) return <p className="text-center text-red-500">Coin not found.</p>;

return (
  <div className="p-6 max-w-4xl">
    <div className="bg-gray-200 rounded-2xl shadow-lg p-12 ml-30 w-full max-w-md text-left">
      <h1 className="text-3xl font-bold mb-4">{coin.name}</h1>
      <img src={coin.image} alt={coin.name} className="w-20 h-20 mb-4" />
      <p className="text-lg mb-2">Symbol: {coin.symbol}</p>
      <p className="text-lg mb-2">Current Price: ${coin.current_price}</p>
      <p className="text-lg mb-2">Market Cap: ${coin.market_cap}</p>
      <p className="text-lg mb-4">24h Change: {coin.price_change_percentage_24h}%</p>
      <button
        type="submit"
        className="bg-blue-400 text-black font-bold rounded-md px-4 py-2 hover:bg-blue-700 hover:text-white"
      >
        + Add to Watchlist
      </button>
    </div>
  </div>
);


}

export default Coin;

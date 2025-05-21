import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPrice } from '../../redux/priceslice';

function Coin() {
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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{coin.name}</h1>
      <img src={coin.image} alt={coin.name} className="w-20 h-20" />
      <p className="text-lg">Symbol: {coin.symbol}</p>
      <p className="text-lg">Current Price: ${coin.current_price}</p>
      <p className="text-lg">Market Cap: ${coin.market_cap}</p>
      <p className="text-lg">24h Change: {coin.price_change_percentage_24h}%</p>
    </div>
  );
}

export default Coin;

import React ,{useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPrice } from '../redux/priceslice';
import { Link } from 'react-router-dom';

function Trending() {
const { price, loading, error, currency } = useSelector(
    (state) => state.storeprice
  );
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchPrice(currency));
 
     
   }, [currency, dispatch]);
 

  return (
    <div className="p-4">
      <div className="text-lg font-bold mb-4 text-gray-800">
        Here you will see the trending cryptocurrencies with their price, 24h high, low, and more.
      </div>

      {/* Table header */}
      <div className="grid grid-cols-6 gap-3 text-center font-semibold text-gray-700 border-b pb-2 mb-2">
        <p>Rank</p>
        <p>Image</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h High</p>
        <p>24h Low</p>
      </div>

       <div>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          price.slice(0,10).map((coin, index) => (
            <Link 
              to={`/coin/${coin.id}`}
              key={coin.id}
              className="hover:bg-gray-100 transition duration-200">

            <div
              key={coin.id}
              className="grid grid-cols-6 gap-3 text-center py-2 border-b bg-amber-100 shadow-sm"
            >
              <p>{index + 1}</p>
              <img
                src={coin.image}
                alt={coin.name}
                className="w-8 h-8 mx-auto"
              />
              <p>{coin.name}</p>
              <p>{coin.current_price} {currency}</p>
              <p>{coin.price_change_percentage_24h?.toFixed(2)}%</p>
              <p>{coin.market_cap} {currency}</p>
            </div>
            </Link>
          ))
        )
        }
      </div>
    </div>
  );
}

export default Trending;

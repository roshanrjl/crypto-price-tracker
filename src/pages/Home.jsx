import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setcurrency, fetchPrice } from "../redux/priceslice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  const { price, loading, error, currency } = useSelector(
    (state) => state.storeprice
  );
  //   console.log(price);

  useEffect(() => {
    dispatch(fetchPrice(currency));

    
  }, [currency, dispatch]);

  
  const filteredCoins = searchData.trim() === ""
    ? price
    : price.filter((coin) =>
        coin.name.toLowerCase().includes(searchData.toLowerCase())
      );

  // ✅ Prevent form reload
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Largest Crypto-Price-Tracker Platform
        </h2>
        <p className="text-gray-600">
          Welcome to the largest crypto price tracker. Here you can track your
          favorite cryptocurrencies in real time.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <form
          className="flex gap-2 w-full max-w-md"
          onSubmit={handleSearchSubmit}
        >
          <input
            onChange={(e) => setSearchData(e.target.value)}
            value={searchData}
            type="text"
            placeholder="Search your Favorite crypto"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-3 text-center font-semibold text-gray-700 border-b pb-2">
        <p>#</p>
        <p>Image</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h Change</p>
        <p>Market Cap</p>
      </div>

      {/* Table Body */}
      <div>
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          filteredCoins.map((coin, index) => (
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
        )}
      </div>
    </div>
  );
}

export default Home;

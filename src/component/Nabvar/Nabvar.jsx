import React from "react";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react"; 
import { setcurrency } from "../../redux/priceslice";
import Button from "../Button"


function Nabvar() {
  const dispatch = useDispatch();
  const [currency , setcurrencys] = useState("usd");
  const handleCurrencyChange = (e) => {
    const currency = e.target.value;
    setcurrencys(currency);
    dispatch(setcurrency(currency));
  }
  


  return (
    <div className="w-full shadow-md">
      <nav className="bg-blue-300 px-4 md:px-8 py-4 flex items-center justify-between shadow-lg rounded-b-lg">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800">
            crypto-price-tracker
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-white hover:text-blue-600 font-medium transition"
          >
           Trending
          </Link>
          <Link
            to="/watchlist"
            className="text-white hover:text-blue-600 font-medium transition"
          >
           Watchlist
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-blue-600 font-medium transition"
          >
           Trade
          </Link>
        </div>

        <div>
          <select
            name="currency"
            id="currency"
            onChange={handleCurrencyChange}
            value={currency}
            className="block w-full md:w-auto px-4 py-2 text-white bg-blue-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="usd">USD</option>
            <option value="eur">EURO</option>
            <option value="npr">NPR</option>
          </select>
        </div>

        <div className="hidden md:block">
          < Button
           Childern="login"
           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" 
           />
            
          
        </div>

        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Links (always shown here for demo purposes) */}
      <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          About
        </a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          Services
        </a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          Contact
        </a>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
export default Nabvar;

import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Button from '../component/Button'
import { removeFromWatchlist } from '../redux/watchlistSlice';

function Watchlist() {
  const watchListData = useSelector((state) => state.watchlist);
  const dispatch = useDispatch()


  const list = watchListData?.watchlist || [];

  const handleRemove =(id)=>{
    dispatch(removeFromWatchlist({id}))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Watchlist</h2>
      
      {list.length === 0 ? (
        <p className="text-center text-gray-500">No coins in your watchlist.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {list.map((item, index) => (
            <li
              key={index}
              className="bg-blue-300 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
              <img src={item.image} alt={item.name} className="w-20 h-20 mb-3" />
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-lg font-bold text-green-600">${item.current_price}</p>
              <Button
               label={'Remove'}
               type='button'
               onClick={()=>handleRemove(item.id)}
               className='bg-red-300 font-bold text-black hover:text-white hover:bg-red-600'
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Watchlist;

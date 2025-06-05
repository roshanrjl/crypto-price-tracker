
//fetching data from CoinGecko API using React

const {loading, setLoading} = useState(true);
useEffect({
  const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-pro-api-key": "CG-cd7XWFdCgQfr5nyHCaq72Nx5",
      },
    };  
const fetchData = await fetch(
      "https://pro-api.coingecko.com/api/v3/coins/bitcoin/market_chart?{currency}d&days=1",
      options
    ) 
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setData(response);
    })
    .catch((err) => console.error(err));
  setLoading(false);
},[ currency,]);

  return (
    <div className="App">
      <h1>CoinGecko API Data Fetching</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Data for {currency} over {days} days</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

displaying navbar with loop 

 const navItems =[
    {
      name:"Home",
      slug:"/",
      active:true,
    },
    {
      name:"Trending",
      slug:"/features",
      active:true,
    },
    {
      name:"watchlist",
      slug:"/watchlist",
      active:true,
    },
  
  ]
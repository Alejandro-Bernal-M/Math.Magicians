import { useEffect, useState } from 'react';

function ApiCall() {
  const [dataFromApi, setDataFromApi] = useState([{ quote: 'Loading...' }]);
  const [quote, setQuote] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
        const config = {
          method: 'GET',
          headers: { 'x-api-key': 'v1SFgNiM7hRi9P4FfbnlTg==27vKzitcK7adQddc' },
        };
        const response = await fetch(url, config);
        const data = await response.json();
        setDataFromApi(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [quote]);

  const changeQuote = () => {
    setQuote(quote + 1);
  };

  if (hasError) {
    return (
      <div className="quote-div">
        Upps, ¡Something went wrong! try pressing refresh button.
        <button className="quote-btn" type="button" onClick={changeQuote}>Refresh</button>
      </div>
    );
  }
  if (isLoading) return <div className="quote-div">Loading your awesome quote...</div>;
  return (
    <div className="quote-div">
      <span>
        &quot;
        {dataFromApi[0].quote}
        &quot;
      </span>
      <button className="quote-btn" type="button" onClick={changeQuote}>Change quote</button>
    </div>
  );
}
export default ApiCall;

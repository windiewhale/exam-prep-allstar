import React, { useEffect, useState } from "react";
import LoadingMask from './components/LoadingMask';
import Characters from './components/Characters';
import Subscription from './components/Subscription';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [inputLoading, setInputLoading] = useState(false);

  async function fetchSeries(){
    const response = await fetch("https://demoapi.com/api/series/howimetyourmother");
    const responseJSON = await response.json();
    setCharacters(responseJSON);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchSeries();
    setTimeout(() => {
      setInputLoading(true)
    }, 10000)
  }, []);


  return (
    <div>
      <h1>Series Api</h1>
      {loading ? <LoadingMask /> : 
      characters.map( ({ name, details }, index) => (<Characters name={name} details={details} key={index} />) )}
      {inputLoading ? <Subscription /> : false}

    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

async function fetchQuote() {
  let response = await axios.get(`https://raw.githubusercontent.com/akshaykhale1992/quotes-api/master/quotes/${getRandomInt(1, 100)}.json`)
  return response.data
}



function App() {
  const backgrounds = [
    'andrea-cau-nV7GJmSq3zc-unsplash.jpg',
    'bing-hao-_wqj9tC0WSE-unsplash.jpg',
    'denys-nevozhai-duo-xV0TU7s-unsplash.jpg',
    'devin-avery-bx1G9db3FjA-unsplash.jpg',
    'john-towner-3Kv48NS4WUU-unsplash.jpg',
    'juan-davila-P8PlK2nGwqA-unsplash.jpg',
    'sebastian-unrau-sp-p7uuT0tw-unsplash.jpg',
    'sergei-akulich--heLWtuAN3c-unsplash.jpg'
  ]
  const [background, setBackground] = useState(0)

  const [quote, setQuote] = useState("Welcome... great to have you here!!!")
  const [author, setAuthor] = useState("Akshay Khale")

  useEffect(() => {
    const fetchData = async () => {
      const quoteData = await fetchQuote()
      setQuote(quoteData.message)
      setAuthor(quoteData.author)
    }
    setBackground(getRandomInt(0, 8))
    fetchData()
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(img/${backgrounds[background]})` }}>
      <header className="App-header">
        <h1>{quote}</h1>
        <span>- {author} -</span>
      </header>
    </div >
  );
}

export default App;

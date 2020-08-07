import React from "react";
import "./App.css";
const api = {
  key: "e6a26bc310d78bbdc3bb206571447366",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  let date = String(new window.Date());
  date = date.slice(3, 15);

  return (
    <div className='App'>
      <main>
        <h1>Weather App</h1>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='...' />
        </div>
        <div className='location-box'>
          <div className='location'>Cracow, PL</div>
          <div className='date'>{date}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>15C</div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;

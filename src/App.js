import React, {useState} from 'react';
import axios from 'axios';


function App() {
 
  const url="https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=312eff72f790313dee856b028b91820d";
  // const url="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=312eff72f790313dee856b028b91820d";




  return (
    <div className="app">
      <div className="search">
        <input 
        value=""
        onChange =""
        placeholder="Enter Location"
        onKeyPress=""
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>10&#8451;</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">10&#8451;</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
          <p className="bold">75%</p>
          <p>Humidity</p>
          </div>
          <div className="wind">
          <p className="bold">12 MPH</p>
          <p>Wind</p>
          </div>
        </div>

      </div>
     

    </div>
  );
}

export default App;

import React, {useState} from 'react';
import axios from 'axios';


function App() {
  // const url="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=312eff72f790313dee856b028b91820d";




  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>10℃</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>10℃</p>
          </div>
          <div className="humidity">
          <p>75%</p>
          </div>
          <div className="wind">
          <p>12 MPH</p>
          </div>
        </div>

      </div>
     

    </div>
  );
}

export default App;

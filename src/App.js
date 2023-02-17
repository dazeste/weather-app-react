import React, {useState} from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=312eff72f790313dee856b028b91820d`


  const searchLocation = (event) => {
    if (event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange ={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        onKeyPress={searchLocation}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}</h1> : null}
           
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">10°C</p>
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

import React, { useState } from 'react';

const API = {
  key: "d911abcff80d2344f9d5e0a9ca3d3682",
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);

          setQuery('');
          console.log(result)

        })
    }

  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    return ` ${day} ${date} ${month} ${year}`;
  }

  let Degrees_F_or_C = 'metric';
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Enter City Name"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div className="info">
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country} </div>
              <div className="date"> {dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">


              (<div className="temp">{Number((weather.main.temp)).toFixed(0)}℃</div>

              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : null}


      </main>
    </div>
  );
}

export default App;

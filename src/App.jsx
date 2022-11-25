import "./App.css";
import Weather from "./Weather";

import React, { useEffect, useState } from "react";
console.log(process.env.REACT_APP_WEATHER_API_KEY)
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  let city = 'Helsinki';

  const fetchData = async () => {
try {
	    setIsLoading(true);
	
	    const response = await fetch(
	      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${key}&contentType=json`,
	      {
	        method: "GET",
	        headers: {},
	      }
	    )
	      .then((response) => response.json())
	    setWeatherData(response);
	    setIsLoading(false);
} catch (error) {
	console.log('Error occured while fetching data : ',error);
}
  };

  useEffect(() => {

    fetchData();

  }, []);


  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>{weatherData && weatherData.resolvedAddress}

          </h2>
          <p>current Temp:{weatherData?.currentConditions.temp}&#x2109; ::: Feels Like :  {weatherData?.currentConditions.feelslike}&#x2109;</p>
          <p>uvindex : {weatherData?.currentConditions?.uvindex}</p>
          {weatherData &&
            weatherData.days.map((day) => (
              <Weather
                key={day.datetimeEpoch}
                date={day.datetime}
                uvindex={day.uvindex}
                tempmax={day.tempmax}
                description={day.description}
                tempmin={day.tempmin}
                currentTemp={day.temp}
              />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default App;

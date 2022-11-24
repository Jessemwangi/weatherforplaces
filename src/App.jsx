import "./App.css";
import Weather from "./Weather";

import React, { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const key = "8WZRHWN5ZRVL5C9375RBFJZFJ";
  let city = 'Helsinki';

  const fetchData = async () => {
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

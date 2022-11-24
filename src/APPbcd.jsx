import "./App.css";
import Weather from "./Weather";

import React, { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const key = "8WZRHWN5ZRVL5C9375RBFJZFJ";

  const fetchData = () => {
    setIsLoading(true);

    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=${key}&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
      setIsLoading(true);
  };


  useEffect(() => {
    console.log(weatherData);
     fetchData();
     setIsLoading(false);
  }, []);

  // console.log(weatherData);

  // const processWeatherData = () => {
  //   console.log(weatherData);

  //   let day = weatherData?.days;
  //   let location = weatherData.resolvedAddress;

  //   return (
  //     <div>
  //       <h1>{location}</h1>
  //       <span>UV Index : {weatherData?.currentConditions?.uvindex}</span>
  //       <Weather
  //         key={day.datetimeEpoch}
  //         date={day.datetime}
  //         uvindex={day.uvindex}
  //         tempmax={day.tempmax}
  //         description={day.description}
  //         tempmin={day.tempmin}
  //         currentTemp={day.temp}
  //       />
  //     </div>
  //   );
  // };
  console.log(weatherData);

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>data{weatherData.resolvedAddress}</h2>
          {/* {
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
        } */}
        </div>
      )}
    </div>
  );
}

export default App;

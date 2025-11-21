import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature?.current,
      humidity: response.data.temperature?.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition?.description,
      iconURL: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      date: "Wednesday 07:00",
    });
  }
  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{WeatherData.city}</h1>
        <ul>
          <li>{WeatherData.date}</li>
          <li className="text-capitalize">{WeatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div class="weather-info">
                <img
                  src={WeatherData.iconURL}
                  alt={WeatherData.description}
                  className="float-left"
                />
                <span className="temperature">
                  {Math.round(WeatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{WeatherData.humidity}</li>
              <li>Wind: {WeatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3bf4acef0b2d93f6ft3fo21d4644d34a";

    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.City}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }
}

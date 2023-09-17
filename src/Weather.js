import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            city: response.data.city,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            feels_like: response.data.temperature.feels_like
        });
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <div className="row space-arround-center">
                    <div className="row start-center weather-conditions-container">
                        <div className="weather-left-side">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="weather-image"></img>
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="degrees">°C|°F</span>
                        </div>
                        <div className="weather-conditions">
                            <ul>
                                <li>Humidity: {weatherData.humidity}%</li>
                                <li>Wind: {weatherData.wind} km/h</li>
                                <li>Feels Like: {Math.round(weatherData.feels_like)}°C</li>
                            </ul>
                        </div>

                    </div>
                    <div className="custom-column center-end today">
                        <h1>{weatherData.city}</h1>
                        <ul>
                            <li>Wednesday 07:00</li>
                            <li>Mostly Cloudy</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "f3t5b36ab43852690f35359144ebo9d6";
        let city = "Lisbon";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}
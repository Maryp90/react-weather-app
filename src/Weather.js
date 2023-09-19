import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            coordinates: response.data.coordinates,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            feels_like: response.data.temperature.feels_like
        });
    }

    function search() {
        const apiKey = "f3t5b36ab43852690f35359144ebo9d6";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit = {handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-outline-info w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}
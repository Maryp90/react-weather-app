import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png",
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            feels_like: response.data.temperature.feels_like
        });
        setReady(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleCityChange(event) {

    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form on submit = {handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
            </div>
        );
    } else {
        const apiKey = "f3t5b36ab43852690f35359144ebo9d6";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}
import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forecastReady, setForecastReady] = useState(false);
    let [forecastData, setForecastData] = useState(false);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setForecastReady(true);
    }


    if (forecastReady) {
        console.log(forecastData);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecastData[0]}/>
                    </div>
                </div>
            </div>
        );
        
    } else {
        let apiKey = "f3t5b36ab43852690f35359144ebo9d6";
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
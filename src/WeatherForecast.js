import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forecastReady, setForecastReady] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setForecastReady(false);
    }, [props.coordinates]);


    function handleResponse(response) {
        setForecastData(response.data.daily);
        setForecastReady(true);
    }

    function load() {
        let apiKey = "f3t5b36ab43852690f35359144ebo9d6";
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }
    

    if (forecastReady) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecastData.map(function (dailyforecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyforecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );

    } else {
        load();

        return null;
    }
}
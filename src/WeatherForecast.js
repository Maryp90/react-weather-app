import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [forecastReady, setForecastReady] = useState(false);
    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);


    if (forecastReady) {
        let apiKey = "f3t5b36ab43852690f35359144ebo9d6";
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;

    } else {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">Wed</div>
                        <WeatherIcon code="clear-sky-day" size={34} />
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperatures-max">19°</span>
                            <span className="WeatherForecast-temperatures-min">10°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
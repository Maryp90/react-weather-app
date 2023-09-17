import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="custom-row space-arround-center">
                <div className="custom-row start-center weather-conditions-container">
                    <div className="custom-row center-center weather-left-side">
                        <div className="weather-image">
                            <WeatherIcon code={props.data.icon} />
                        </div>
                        <span className="temperature">{Math.round(props.data.temperature)}</span>
                        <span className="degrees">°C|°F</span>
                    </div>
                    <div className="weather-conditions">
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                            <li>Feels Like: {Math.round(props.data.feels_like)}°C</li>
                        </ul>
                    </div>

                </div>
                <div className="custom-column center-end today">
                    <h1>{props.data.city}</h1>
                    <ul>
                        <li>
                            <FormattedDate date={props.data.date} />
                        </li>
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
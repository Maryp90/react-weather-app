import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="custom-row space-arround-center">
                <div className="custom-row start-center weather-conditions-container">
                    <div className="custom-row center-center weather-left-side">
                        <div className="weather-image">
                            <WeatherIcon code={props.data.icon} size={56}/>
                        </div>
                        <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                    <div className="weather-conditions">
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
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
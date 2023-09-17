import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row space-arround-center">
                <div className="row start-center props.dconditions-container">
                    <div className="props.dleft-side">
                        <img src="https://ssl.gstatic.com/onebox/props.d64/partly_cloudy.png" alt="Mostly Cloudy" className="props.dimage"></img>
                        <span className="temperature">{Math.round(props.data.temperature)}</span>
                        <span className="degrees">°C|°F</span>
                    </div>
                    <div className="props.dconditions">
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
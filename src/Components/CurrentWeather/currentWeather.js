import "./currentWeather.css"

import React from 'react'
import { useState } from 'react'

export default function CurrentWeather({ response,func }) {
    // const [city, setCity] = useState("Belgium");
    // const [weatherConditions, setWeatherConditions] = useState("Sunny")
    // const [temperature, setTemperature] = useState(26)
    func(response); 
    return (
        
        <div className="weather">
            <div className="top"> 
                <div>
                    <p className="city">{response.city}</p>
                    <p className="weatherConditions">{response.weather[0].description}</p>
                </div>
                <img src={`icons/${response.weather[0].icon}.png`}/*Use {} Now */ className="weatherIcon" alt="" />

            </div>
            <div className="bottom">
                <p className="temperature">{`${response.main.temp}°C`}</p>

                <div className="details">
                    <div className="row">
                        <span className="label">Details</span>
                    </div>
                    <div className="row">
                    <span className="label">Feels like</span>
                        <span className="value">
                            {response.main.feels_like}°C
                        </span>
                    </div>
                    <div className="row">
                        <span className="label">Wind</span>
                        <span className="value">{response.wind.speed} m/s</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity </span>
                        <span className="value">{response.main.humidity}%</span>
                    </div>
                    <div className="row">
                        <span className="label">Pressure</span>
                        <span className="value">{response.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

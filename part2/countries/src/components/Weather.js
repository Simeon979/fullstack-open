import React, {useState, useEffect} from "react"

import axios from "axios"

const Weather = ({name}) => {

  const [weather, setWeather] = useState({ loaded: false })

  useEffect(() => {
    axios
      .get(`https://api.apixu.com/v1/current.json?key=fb887bbd32cd492880b233455191508&q=${name}`)
      .then(response => setWeather({ loaded: true, ...response.data}))
  }, [name])

  return (
    weather.loaded && (
      <div>
        <h2>Weather in {name}</h2>
        <p>temperature: {weather.current.temp_c} celsius</p>
        <img src={weather.current.condition.icon} alt="current weather condition icon" />
        <p>wind: {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>
      </div>
    )
  )
}

export default Weather

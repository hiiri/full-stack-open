import { React, useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(
    {
      temperature: 0,
      conditionIcon: '',
      windKph: 0,
      windDir: 0
    })
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
    ).then(resp => {
      console.log(resp.data)
      setWeatherData(
        {
          temperature: resp.data.current.temp_c,
          conditionIcon: resp.data.current.condition.icon,
          windKph: resp.data.current.windK_kph,
          windDir: resp.data.current.wind_dir
        }
      )
    }
    )
  }, [api_key, city])


  return (
    <div>
      Temperature: {weatherData.temperature} °C <br />
      <img src={"https:" + weatherData.conditionIcon} alt="Weather condition icon"></img> <br />
      Wind: {weatherData.windKph} km/h direction {weatherData.windDir}
    </div>
  )
}

export default Weather

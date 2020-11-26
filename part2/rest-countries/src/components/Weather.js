import { React, useState } from 'react'
import axios from 'axios'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(
    {
      temperature: 0
    })
  const api_key = process.env.REACT_APP_API_KEY

  axios.get(
      `http://api.weatherstack.com/current?access_key=${api_key}&query=Helsinki`
    ).then(resp => {
      setWeatherData(
        {temperature: resp.data.current.temperature}
        )
      console.log(resp.data.current.temperature)
    }
  )

  return (
    <div>
      Temperature: {weatherData.temperature} °C
    </div>
  )
}

export default Weather

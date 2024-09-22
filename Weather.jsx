import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
  const [City, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const fetchWeather = async () => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${`50ed4ea80a6462702da03918478b71a8`}`)
     setWeather(response)
    }
    catch(error){
      console.log("Error fetching error data", error)
    }
  }
  console.log(weather, 'weather')
  const handleClick = () =>{
    fetchWeather()
  }
  return (
    <div className='weather-container'>
      <input type="text" placeholder='Enter City Name' value={City} onChange={handleCityChange} />
      <button onClick={handleClick}>Get Waether</button>

      {weather && <>
        <div className='weather-info'>
        <h3>{weather.data.name}</h3>
        <p>Temperature is{weather.data.main.temp}</p>
        <p>{weather.data.weather[0].description}</p>
        </div>
      </>}
    </div>
  )
}


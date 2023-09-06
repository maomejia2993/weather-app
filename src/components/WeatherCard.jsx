import { useState } from "react"

const WeatherCard = ({ weather, temp }) => {

    console.log(weather)

    const [isCelsius, setCelsius] = useState(true)
    
    const  handleChangeTemp = () => setCelsius(!isCelsius)

  return (
    <article>
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div className="countainer">
        <div>
        <img className="image"
          src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt="" 
        />
        </div>
        <section className="countainer_description">
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span>Wind Speed</span><span> {weather?.wind.speed} m/s</span></li>
          <li><span>Clouds</span><span> {weather?.clouds.all} %</span></li>
          <li><span>Presure</span><span> {weather?.main.pressure} hPa</span></li>
        </ul>
      </section>
      </div>
    <h2>{isCelsius ? `${temp?.celcius} °C` : `${temp?.farenheit} °F`}</h2>
    <button onClick={handleChangeTemp}>{isCelsius ? 'Change to °F'  : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherCard
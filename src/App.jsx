import { useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const success = pos => {
       const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const apikey = 'f2cc5b2485592e3996878cad4d60cf06'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj ={
          celcius: (res.data.main.temp - 273.15).toFixed(1) ,
          farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
        
        setTemp(obj)
      })
      .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div>
     <h1></h1>
      <WeatherCard
        weather={weather}
        temp={temp}
      />
    </div>
  )
}

export default App

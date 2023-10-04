import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { useState } from "react"
import WeatherContainer from './components/WeatherContainer'

function App() {
  const [weather, setWeather] = useState(null)

 const success = (pos) => {
   const lat = pos.coords.latitude
   const lon = pos.coords.longitude
   const API_KEY = "c04a0737cd65b8c4e9423171ba552ec0"
   
   axios
   .get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    .then(({ data }) => setWeather(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
  <main className='font-["Lato"] flex justify-center items-center min-h-screen bg-black text-white px-2'>
    {weather === null ?  (
      <h3>Cargando...</h3>
      ) : (
      <WeatherContainer weather={weather} />
      )}
    </main>
  )
}

export default App

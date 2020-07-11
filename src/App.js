import React,{useState} from 'react';
import './App.css';
import Form from './Form'
import Weather from './Weather'

function App() {
  const [weather,setWeather] = useState([])
  const APIKEY = '6dfeaea71729edbdc3dd4c9b621c8280'

  const fetchData = async (e) => {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
    .then(res => res.json())
    .then(data => data)
    if(city && country){
      setWeather({
        data: apiData,
        city:apiData.name,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temp: Math.round(apiData.main.temp * 9/5 - 459.67),
        error: ''
      })

    }
    else{
      setWeather({
        data: '',
        city:'',
        country: '',
        description: '',
        temp: '',
        error: 'Please type in city and country'
      })
    }
  }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData}/>
      <Weather 
        city={weather.city}
        country={weather.country}
        description={weather.description}
        temp={weather.temp}
        error={weather.error}
      />
      {console.log('weather',weather.data)}
    </div>
  );
}

export default App;

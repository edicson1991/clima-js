// import weather from '../data/current-weather.js'
import {formatDate, formatTemp } from './utils/fortmat-data.js'
import {weatherConditionsCodes} from './constants.js'
import {getLatLon} from './geolocation.js'
import {getCurrentWeather} from './services/weather.js' 

//Funcion de ciudad
function setCurrentCity ($el, city){
$el.textContent = city
}
//fi¡oncion de fecha
function setCurrentDate ($el){
  const date = new Date ();
  const formattedDate = formatDate(date)
  $el.textContent = formattedDate
  }
//Funcion de Temp
// weatherConditionsCodes []

  function setCurrentTemp($el,  temp){
    $el.textContent= formatTemp (temp)
  }

  //funcion background
function solarStatus (sunriseTime, sunsetTime ){
  const currentHours = new Date().getHours()
  const sunsetHours = sunsetTime .getHours()
  const sunriseHours = sunriseTime.getHours()

  if (currentHours > sunsetHours || currentHours < sunsetHours) {
    return 'night'
  }
    return 'morning'
  }

  function  setBaackground ($el, conditionCode, solarStatus){
    const weatherTyoe = weatherConditionsCodes[conditionCode]
    const size = window.matchMedia('(-webkit-min-device-pixel-ratio:2)').matches ? '@2x' : ''
    $el.style.backgroundImage = `url(./images/${solarStatus}-${weatherTyoe}${size}.jpg)`
  }

  function showCurrentWeather($app, $loader){
  $app.hidden = false
  $loader.hidden = true
  }

  //Funcion General
    function configCurrentWeather(weather){
      const $app = document.querySelector('#app')
      const $loading = document.querySelector('#loading')

      //loader
      showCurrentWeather($app, $loading )
    //Date
    const $currentWeatherDate = document.querySelector('#current-weather-date')
    setCurrentDate($currentWeatherDate)
    //city
    const $currentWeatherCity = document.querySelector('#current-weather-city')
    const city = weather.name
    setCurrentCity($currentWeatherCity, city)
    //Temperature
    const $currentWeatherTemp = document.querySelector('#current-weather-temp')
    const temp = weather.main.temp
    setCurrentTemp($currentWeatherTemp, temp )

      //metodo background
      const sunriseTime = new Date(weather.sys.sunrise * 1000) 
      const sunsetTime =  new Date(weather.sys.sunset * 1000 ) 
      const conditionCode = String(weather.weather[0].id).charAt(0)
      setBaackground($app, conditionCode, solarStatus(sunriseTime, sunsetTime ))  
}

export default async  function currentWeather() {
  // GEO - API . WEATHER CONFIG
  //  console.log('Esto pasa ANTES de getCurrentPosition')
    const {lat, lon, isError} = await getLatLon ()
    if (isError) return console.log('Ha ocurrido iun error en tu ubicación')
    //  
   
   
    // getCurrentPosition()
    // .then((data)=>{
    //   console.log('Hemos triunfado')
    // })
    // .catch((message)=>{
    //   console.log(message)

    // })
    // console.log('Esto pasa DESPUES de getCurrentPosition')
    const {isError: currentWeatherError , data: weather} = await getCurrentWeather(lat, lon)
    if(currentWeatherError) return console.log('Ha ocurrido un error trayendo la data' )
    configCurrentWeather(weather)
    // console.log(weather)
}
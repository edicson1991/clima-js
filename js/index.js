import currentWeather from './current-weather.js'
import weeklyWeather from './utils/weekly-weather.js'
import {ViewPortSize} from './utils/viewport.js'
import './tabs.js'

const $app = document.querySelector('#app')
const $loading = document.querySelector('#loading')

ViewPortSize($app)
ViewPortSize($loading)
currentWeather()
weeklyWeather()
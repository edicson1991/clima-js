import {getWeeklyWeather} from '../services/weather.js '
import {getLatLon} from '../geolocation.js'
import {formatWeekList} from './fortmat-data.js'
import {createDOM} from './dom.js'


function tabPanelTemplate(id){
    return`
    <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
          <div class="dayWeather" id="dayWeather-${id}">
            <ul style ="color:white" class="dayWeather-list" id="dayWeather-list-${id}">
            Tab Panel ${id}
            </ul>
          </div>
        </div>`

}

function createTapPanel(id){
    const $panel = createDOM(tabPanelTemplate(id))
    
    if (id > 0){
        $panel.hidden = true

    }
       return $panel    
    

 
}



function configWeeklytWeather (weeklist){
    const $container = document.querySelector('.weeklyWeather')
    weeklist.forEach((day, index) => {
        const $panel = createTapPanel(index)
        $container.append($panel)
    });

}


export default async function weeklyWeather (){
    const {lat, lon, isError} = await getLatLon ()
    if (isError) return console.log('Ha ocurrido iun error en tu ubicación')
    const {isError: weeklyWeatherError , data: weather} =  await getWeeklyWeather(lat, lon)
    if(weeklyWeatherError) return console.log('Ha ocurrido un error trayendo la data del pronostico del clima'  )
    const weeklist =  formatWeekList(weather.list)

    configWeeklytWeather(weeklist)

}

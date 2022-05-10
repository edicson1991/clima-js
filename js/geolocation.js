
function geolocationSupport (){
    // if ('geolocation' in navigator ){
    //     return true
    // } else {
    //     return false      
    // }
    return 'geolocation' in navigator 
}

const defaultOptions = {
    enableHignAccuracy: true,
    timeout: 5000,
    maximumAge:1000000,

}

export function getCurrentPosition (options = defaultOptions) {
if (!geolocationSupport()) throw new Error('No hay soporte de geolocalización de tu navegagor')

 return new Promise ((resolve, reject)=>{

    navigator.geolocation.getCurrentPosition((position)=> {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    resolve(position)
    // console.log(lat, lon)
    // console.log('Esto es  getCurrentPosition')
}, ()=>{
    reject ('No hemos podido tener tu localzacion')
}, options)
 })
}

export async function getLatLon (options = defaultOptions ){
try{
    const {coords: {latitude:lat, longitude:lon}} = await getCurrentPosition(options)
  return {lat, lon, isError:false}
} catch {
 return { isError: true, lat: null, lon:null }
}

  
}
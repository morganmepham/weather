import { useContext } from 'react';
import HourBar from '../HourBar/HourBar';
import { WeatherContext } from '../../App';
import Overview from '../Overview/Overview';
import Stats from '../Stats/Stats';

import rain from '../../images/rain.png'
import sun from '../../images/sun.png'
import snow from '../../images/snow.png'
import thunder from '../../images/thunder.png'
import fog from '../../images/fog.png'

import rain_small from '../../images/rain_small.png'
import sun_small from '../../images/sun_small.png'
import snow_small from '../../images/snow_small.png'
import thunder_small from '../../images/thunder_small.png'
import fog_small from '../../images/fog_small.png'

const Day6 = (props) => {
    const isLoaded = props.loaded
    const weather = useContext(WeatherContext)
    const celsius = weather.hourly_units?.temperature_2m

    const temps = weather.hourly?.temperature_2m
    const sendTemps = temps?.slice(120, 144)
    console.log(sendTemps)
    
    const codes = weather.hourly?.weathercode
    const sendCodes = codes?.slice(120, 144)
    
    const times = weather.hourly?.time
    const sendTimes = times?.slice(120, 144)


    return (
        <div className="day-div">
            {isLoaded ? <>
            <Overview code={weather?.daily?.weathercode[5]} times = {weather?.hourly?.time} celsius={celsius} icons={[rain, sun, snow, thunder, fog]} max_wind={weather?.daily?.windspeed_10m_max[5]}/>

            <Stats sunrise = {weather?.daily?.sunrise[5]} sunset = {weather?.daily?.sunset[5]} max_temp = {weather?.daily?.temperature_2m_max[5]} min_temp = {weather?.daily?.temperature_2m_min[5]} celsius={celsius}/>

            <HourBar icons={[rain_small, sun_small, snow_small, thunder_small, fog_small]} temps={sendTemps} codes={sendCodes} times={sendTimes} celsius={celsius}/>


            </> : <p>Loading...</p>}
        </div>
    );
}
 
export default Day6;
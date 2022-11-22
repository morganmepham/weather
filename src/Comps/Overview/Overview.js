import { useContext } from 'react'
import { WeatherContext } from '../../App'
import './Overview.css'

const Overview = (props) => {
    const weather = useContext(WeatherContext)

    const code = props.code
    const temps = props.temps
    const times = props.times
    const windSpeed = props.max_wind

    const [rain, sun, snow, thunder, fog] = props.icons

    let todayDate = new Date()
    todayDate = todayDate.toISOString();
    todayDate = todayDate.substring(0, 14)
    todayDate = todayDate + '00'

    
    const timeIndex = times?.indexOf(todayDate)

    let icon;
    switch(code){
        case 0: case 1: case 2: case 3:
            icon = sun;
            break;
        case 45: case 48:
            icon = fog
            break;
        case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82:
            icon = rain;
            break;
        case 71: case 73: case 75: case 77: case 85: case 86:
            icon = snow;
            break;
        case 95: case 96: case 99:
            icon = thunder
            break;
        default:
            icon = sun
    }

    let currentWeatherText;
    switch(code){
        case 0: 
            currentWeatherText = 'Clear Sky'
            break;
        case 1: 
            currentWeatherText = 'Mostly Clear'
            break;
        case 2: 
            currentWeatherText = 'Partly Cloudy'
            break;
        case 3:
            currentWeatherText = 'Overcast'
            break;
        case 45: case 48:
            currentWeatherText = 'Foggy'
            break;
        case 51: 
            currentWeatherText = 'Light Drizzle'
            break;
        case 53: 
            currentWeatherText = 'Moderate Drizzle'
            break;
        case 55: 
            currentWeatherText = 'Heavy Drizzle'
            break;
        case 56: case 57:
            currentWeatherText = 'Freezing Drizzle'
            break;
         case 61: 
            currentWeatherText = 'Light Rain'
            break;
         case 63: 
            currentWeatherText = 'Moderate Rain'
            break;
         case 65: 
            currentWeatherText = 'Heavy Rain'
            break;
         case 66: case 67: 
            currentWeatherText = 'Freezing Rain'
            break;
        case 71: case 77: case 85:
            currentWeatherText = 'Light Snow'
            break;
        case 73:
            currentWeatherText = 'Moderate Rain'
            break; 
        case 75: case 86:
            currentWeatherText = 'Heavy Snow'
            break;
        case 80: 
            currentWeatherText = 'Light Showers'
            break;
        case 81: 
            currentWeatherText = 'Moderate Showers'
            break;
        case 82:
            currentWeatherText = 'Violent Showers'
            break;
        case 95: case 96: case 99:
            currentWeatherText = 'Thunder Storms'
            break;
        default:
            currentWeatherText = 'Clear Sky'
            
    }

    return (
        <div className="overview-div">
            <img src={icon} alt="weather icon" className='overview-icon'/>
            <p className="current-weather-text">{currentWeatherText}</p>
            <p className='wind-speed'>{`Wind Speed: ${windSpeed} km/h`}</p>
            {temps && <p className='current-temp'>{`${temps[timeIndex]} ${props.celsius}`}</p>}

        </div>
    );
}
 
export default Overview;
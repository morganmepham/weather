import './HourItem.css'

const HourItem = (props) => {
    const [rain_small, sun_small, snow_small, thunder_small, fog_small] = props.icons

    const celsius = props.celsius
    const temp = props.temp
    const code = props.code
    const time = props.time
    const displayTime = time.substring(11)

    let icon;
    switch(code){
        case 0: case 1: case 2: case 3:
            icon = sun_small;
            break;
        case 45: case 48:
            icon = fog_small
            break;
        case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82:
            icon = rain_small;
            break;
        case 71: case 73: case 75: case 77: case 85: case 86:
            icon = snow_small;
            break;
        case 95: case 96: case 99:
            icon = thunder_small
        default:
            icon = sun_small
    }

    return (
        <div className="hour-item">
            <p className="hourly-time">{displayTime}</p>
            <img src={icon} alt="Weather Icon" className='hourly-icon'/>
            <p className="hourly-temp">{`${temp}${celsius}`}</p>
        </div>
    );
}
 
export default HourItem;
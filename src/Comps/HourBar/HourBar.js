import HourItem from '../HourItem/HourItem'
import './HourBar.css'

const HourBar = (props) => {
    const temps = props.temps
    const codes = props.codes
    const times = props.times
    const celsius = props.celsius

    const [rain_small, sun_small, snow_small, thunder_small, fog_small] = props.icons

    let hourItems = []
    for(let i = 0; i < 24; i++){
        hourItems.push(<HourItem key={i} temp={temps[i]} code={codes[i]} time={times[i]} icons={props.icons} celsius={celsius}/>)
    }
    return (
        <div className="hour-bar-div">
            {hourItems}
        </div>
    );
}
 
export default HourBar;
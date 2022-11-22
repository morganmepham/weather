import './Stats.css'

const Stats = (props) => {
    const celsius = props.celsius

    const max_temp = props?.max_temp
    const min_temp = props?.min_temp

    let sunrise = props?.sunrise
    sunrise = sunrise.slice(-5)

    let sunset = props?.sunset
    sunset = sunset.slice(-5)
    return (
        <div className="stats-div">
            <p className='stat-text'>{`Max Temp: ${max_temp}${celsius}`}</p>
            <p className='stat-text'>{`Min Temp: ${min_temp}${celsius}`}</p>
            <p className='stat-text'>{`Sunrise: ${sunrise} AM`}</p>
            <p className='stat-text'>{`Sunset: ${sunset} PM`}</p>
        </div>
    );
}
 
export default Stats;
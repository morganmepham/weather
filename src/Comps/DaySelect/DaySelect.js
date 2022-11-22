import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WeatherContext } from '../../App';
import './DaySelect.css'

const DaySelect = (props) => {
    const dates = props.dates

    const [day1Active, setDay1Active] = useState(true)
    const [day2Active, setDay2Active] = useState(false)
    const [day3Active, setDay3Active] = useState(false)
    const [day4Active, setDay4Active] = useState(false)
    const [day5Active, setDay5Active] = useState(false)
    const [day6Active, setDay6Active] = useState(false)
    const [day7Active, setDay7Active] = useState(false)

    const resetAll = () => {
        setDay1Active(false)
        setDay2Active(false)
        setDay3Active(false)
        setDay4Active(false)
        setDay5Active(false)
        setDay6Active(false)
        setDay7Active(false)
    }


    return (
        <div className="day-select-div">
            <Link to='/' className='day-select-link'>
                {day1Active ? <p className="day-select-text active-day">Today</p> : <p className="day-select-text" onClick = {() => {
                    resetAll()
                    setDay1Active(true)
                }}>Today</p> }
            </Link>

            <Link to='/day2' className='day-select-link'>
                {day2Active ? <p className="day-select-text active-day">Tomorrow</p> :<p className="day-select-text" onClick = {() => {
                    resetAll()
                    setDay2Active(true)
                }}>Tomorrow</p>}
            </Link>

            <Link to='/day3' className='day-select-link'>
                {day3Active ? <p className="day-select-text active-day">{props?.dates?.[2]}</p> :<p className="day-select-text" onClick = {() => {
                    resetAll()
                    setDay3Active(true)
                }}>{props?.dates?.[2]}</p>}
            </Link>

            <Link to='/day4' className='day-select-link'>
                {day4Active ? <p className="day-select-text active-day">{props?.dates?.[3]}</p> :<p className="day-select-text" onClick = {() => {
                    resetAll()
                    setDay4Active(true)
                }}>{props?.dates?.[3]}</p>}
            </Link>

            <Link to='/day5' className='day-select-link'>
                {day5Active ? <p className="day-select-text active-day">{props?.dates?.[4]}</p> :<p className="day-select-text" onClick = {() => {
                    resetAll()
                    setDay5Active(true)
                }}>{props?.dates?.[4]}</p>}
            </Link>

            <Link to='/day6' className='day-select-link'>
                {day6Active ? <p className="day-select-text active-day">{props?.dates?.[5]}</p> :<p className="day-select-text" onClick = {() => {
                    resetAll()
                    setDay6Active(true)
                }}>{props?.dates?.[5]}</p>}
            </Link>

            <Link to='/day7' className='day-select-link'>
                {day7Active ? <p className="day-select-text active-day">{props?.dates?.[6]}</p> :<p className="day-select-text" onClick = {() => {
                    resetAll()
                    setDay7Active(true)
                }}>{props?.dates?.[6]}</p>}
            </Link>
        </div>
    );
}
 
export default DaySelect;
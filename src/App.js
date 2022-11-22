import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Day1 from './Comps/Day1/Day1';
import Day2 from './Comps/Day2/Day2';
import Day3 from './Comps/Day3/Day3';
import Day4 from './Comps/Day4/Day4';
import Day5 from './Comps/Day5/Day5';
import Day6 from './Comps/Day6/Day6';
import Day7 from './Comps/Day7/Day7';
import DaySelect from './Comps/DaySelect/DaySelect';

export const WeatherContext = createContext()

function App() {
  const [weather, setWeather] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [fetchToggle, setFetchToggle] = useState(0)
  
  // setInterval(() => {
  //   if(fetchToggle === 0){
  //     setFetchToggle(1)
  //   }else{
  //     setFetchToggle(0)
  //   }
  // }, 10000)
  
  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=51.48&longitude=-3.18&hourly=temperature_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=auto`)
        .then((response) => response.json())
        .then((data) => {
                setWeather(data)
                setTimeout(() => {
                  setIsLoaded(true)
                }, 1000)
        });
  }, [])

  const newDates = weather?.daily?.time.map((day) => {
    console.log(day)
    const dayStamp = day.substring(8, 10)
    console.log(dayStamp)
    const monthStamp = day.substring(5, 7)
    console.log(monthStamp)
    const d = `${dayStamp}/${monthStamp}`
    return d
  })

  return (
    <div className="App">
      <DaySelect dates={newDates}/>
      <WeatherContext.Provider value={weather}>
        <Routes>
          <Route path='/'>
            <Route index element={<Day1 loaded={isLoaded}/>} />
            <Route path='day2' element={<Day2 loaded={isLoaded}/>} />
            <Route path='day3' element={<Day3 loaded={isLoaded}/>} />
            <Route path='day4' element={<Day4 loaded={isLoaded}/>} />
            <Route path='day5' element={<Day5 loaded={isLoaded}/>} />
            <Route path='day6' element={<Day6 loaded={isLoaded}/>} />
            <Route path='day7' element={<Day7 loaded={isLoaded}/>} />
          </Route>
        </Routes>
      </WeatherContext.Provider>
    </div>
  );
}

export default App;

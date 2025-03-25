import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
export default function Weatherapp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Kochi",
        feelsLike
: 
39.73,
humidity
: 
63,
maxTemp
: 
33.99,
minTemp
: 
32.73,
temp
: 
32.73,
weather
: 
"clear sky"
    });

    let updateInfo = (newInfo)=>
    {
        setWeatherInfo(newInfo);

    };
    return(
<div><h2>Weather App</h2>
  <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/></div>
    );
}
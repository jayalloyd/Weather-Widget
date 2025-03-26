import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
  let[error,setError]=useState(false);
    let[city,setCity]= useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="f8ccd7596ddc4bc08ad6ab8105bae691";

    let getWeatherInfo= async() =>{
      try{ let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let jsonResponse= await response.json();
      console.log(jsonResponse);
      let result={
       city:city,

       temp:jsonResponse.main.temp,
       minTemp:jsonResponse.main.temp_min,
       maxTemp:jsonResponse.main.temp_max,
       humidity:jsonResponse.main.humidity,
       feelsLike:jsonResponse.main.feels_like,
       weather:jsonResponse.weather[0].description
      }
      console.log(result);
      return result;
   }catch (error){
    throw error;
   }
   };
    
   let handleChange=(event)=>{
    setCity(event.target.value);
  };


  let handleSubmit=async(event)=>
  {
    try{
      event.preventDefault();
      console.log(city);
      setCity("");
     let newInfo= await getWeatherInfo();
     updateInfo(newInfo);}
     catch(error){
      setError(true);
     }
         };
    return(<div className="searchBox">
    <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required value={city} 
    onChange={handleChange}/>
   <br />
    <Button variant="contained" type="submit" >
        Search
      </Button>
      {error && <p>No such place exists in our API</p>}
    </form>
    </div>);
}
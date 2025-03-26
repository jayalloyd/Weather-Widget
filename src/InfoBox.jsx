import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import { Construction } from '@mui/icons-material';

export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1622278647429-71bc97e904e8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    const  HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return <div className='InfoBox'>
        {/* <h1>weather information={info.weather}</h1> */}
      <div className="cardcontainer">
      
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={info.humidity>80 ? RAIN_URL: (info.temp>15) ? HOT_URL : COLD_URL}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
    <div>{info.city}</div>
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <div>Temperature={info.temp}&deg;C</div>
        <div>humidity={info.humidity}</div>
        <div>Min Temp={info.minTemp}</div>
        <div>Weather={info.weather}</div>
        <div>the weather feels like={info.feelsLike}</div>
      </Typography>
    </CardContent>

  </Card></div>    </div>
}
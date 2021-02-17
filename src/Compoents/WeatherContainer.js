import React,{ useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
function WeatherContainer(props){
    var currentdate = new Date(); 
    var time = currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    var datetime = currentdate.getDate() + "/"+ (currentdate.getMonth()+1) + "/" + currentdate.getFullYear()+"  "+
    time;    
    var temp = Math.floor(props.weatherData.main.temp -273) ;                             
return(
<>
<div style={{position:'relative',left:'4vh',top:'2vh'}}>
<p style={{color:'red'}}>{datetime}</p>
<h2>{props.weatherData.name}</h2>
</div>
<Row>
<Col span={4}>
<img style={{width:'4rem',position:'relative',top:'3vh'}} src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}/>
</Col>
<Col span={4}>
<h1 style={{position:'relative',top:'4vh',left:'-5vh'}}>{`${temp}  °C`}</h1>
</Col>
</Row>

</>


 );



}
export default WeatherContainer
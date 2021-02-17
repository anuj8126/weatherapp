import React,{ useState, useEffect } from 'react';
import MapContainer from './Compoents/MapContainer';
import WeatherContainer from './Compoents/WeatherContainer';
import Forcast from './Compoents/Forcast';
import 'antd/dist/antd.css';
import {Button, Row, Col } from 'antd';
function App() {
 const [Latitude,setLatitude] = useState(null);
 const [Longitude,setLongitude] = useState(null);
 const [weatherData,setweatherData] = useState(null);
 const [forcastArray,setforcastArray] = useState(null);
 
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

    //Weather API call
   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=20f01d7bcdf5a55869fac523016ab2b5`)
   .then(response => response.json())
   .then(data => setweatherData(data));
      });

     
    }
  }, [])
  console.log("weatherData",weatherData);

  const funcForcast = ()=>{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${Latitude}&lon=${Longitude}&cnt=32&appid=20f01d7bcdf5a55869fac523016ab2b5`)
   .then(response => response.json())
   .then(data =>{
     let arr = [];
     arr.push(data.list[9],data.list[17],data.list[25]);
     setforcastArray(arr);
   });
  }

  return (
    <div style={{margin:'4rem'}}>
      <Row>
    <Col span={12}>
    {weatherData && <WeatherContainer weatherData={weatherData}/>}
     <Button type="primary" style={{marginTop:'4vh'}} onClick={funcForcast}>NEXT 3 DAYS FORCAST</Button>
     {forcastArray && <Forcast forcastArray={forcastArray} />}
    </Col>
    <Col span={12}>
    {Longitude && <MapContainer Latitude={Latitude} Longitude={Longitude}/>} 
    </Col>
  </Row>
  
     
    </div>
  );
}

export default App;



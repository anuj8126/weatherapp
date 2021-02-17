import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

function Forcast(props){
  
return(
<>
{props.forcastArray && props.forcastArray.map(value=>{
   return(
<div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
  <strong style={{position: 'relative',top: '3vh'}}>{value.dt_txt.split(" ")[0]}</strong>
  <div>
  <img style={{width:'4rem'}} src={`http://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}/><strong >{`${Math.floor(value.main.temp_min -273)} / ${Math.floor(value.main.temp_max -273)}`}</strong>
 </div>  
  <div>
      <strong style={{position: 'relative',top: '3vh'}}>{value.weather[0].description}</strong>
  </div>
</div>


   )

})}

</>


)
}
export default Forcast;
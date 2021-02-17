import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    return (
      <Map
      style={{width:'80%' ,height:'20rem'}}
      google={this.props.google}
      zoom={8}      
      initialCenter={{ lat:this.props.Latitude, lng:this.props.Longitude}}
    >
   <Marker onClick={this.onMarkerClick} />
    </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDTs1v1sJqShcqOirO8QgJhD-6-N1xoOU8')
})(MapContainer)
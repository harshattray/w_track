import React , { Component } from 'react';

export default class  GMap extends Component{
     componentDidMount(){
         new google.maps.Map(this.refs.map,{
            zoom:14,
            center:new google.maps.LatLng(this.props.lat,this.props.lon)
         });
         console.log(this.props.lon);
     }
    render(){
        return (
          <div ref="map"/>
        );
    }
}

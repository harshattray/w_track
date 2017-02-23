import React , { Component } from 'react';
import  { connect } from 'react-redux';
import Chart from '../components/spark-chart';


class WeatherList extends Component{
     renderWeather(){
        return  this.props.weather.map((cityData)=>{
            const name = cityData.city.name;
            const temp = cityData.list.map((weather)=>{
                 return weather.main.temp;
            });
            console.log(temp);
             return(
                 <tr key={name}>
                 <td>{name}</td>
                 <td>
                  <Chart data={temp} color="red"/>
                 </td>
                 </tr>
             );
         });
     }
    render(){
        return(
          <table className="table table-hover">
            <thead>
            <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
          </tr>
          </thead>
          <tbody>
           {this.renderWeather()}
          </tbody>
          </table>
        );
    }
}

function mapStateToProps(state){
    return {
        weather : state.weather
    }
}

// function mapStateToProps({weather}){
//     return { weather };
// }


export default connect(mapStateToProps)(WeatherList);

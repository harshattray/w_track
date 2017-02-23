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
            const pressure = cityData.list.map((weather)=>{
                 return weather.main.pressure;
            });
            const humidities = cityData.list.map((weather)=>{
                 return weather.main.humidity;
            });
            const colors_array = ['Blue','Red', 'green','orange'];
            const colors = colors_array[Math.floor(Math.random() * colors_array.length)];

            console.log(temp);
             return(
                 <tr key={name}>
                 <td>{name}</td>
                 <td>
                  <Chart data={temp} color={colors}/>
                  </td>
                  <td>
                  <Chart data={pressure} color={colors}/>
                  </td>
                  <td>
                  <Chart data={humidities} color={colors}/>
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

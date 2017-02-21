import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';



export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term :'' };
        this.onInputChange = this.onInputChange.bind(this); // This is done to make this accessible| else use fat arrow function
    }
    onInputChange(event){
        this.setState({term:event.target.value});
        // console.log(event.target.value);
    }
    onFormSubmit(event){
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit = {this.onFormSubmit}>
            <div className="ui fluid action input">
  <input type="text" placeholder="5 day forecast in any city " value={this.state.term} onChange={this.onInputChange}/>
  <div className="ui button">Search</div>
          </div>
          </form>
        );
    }
}

//Dispatch action fuctions are binded to state to be accessible above
function mapDispatchToProps(dispatch){
    return bindActionCreators({weather:fetchWeather},dispatch);
}

function mapStateToProps(state){
   return{
       weather : weather
   }
}

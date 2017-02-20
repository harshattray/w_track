import React , { Component } from 'react';

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

    render(){
        return(
            <form>
            <div className="ui fluid action input">
  <input type="text" placeholder="5 day forecast in any city " value={this.state.term} onChange={this.onInputChange}/>
  <div className="ui button">Search</div>
          </div>
          </form>
        );
    }
}

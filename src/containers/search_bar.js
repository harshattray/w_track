import React , { Component } from 'react';

export default class SearchBar extends Component{
    render(){
        return(
            <div className="ui fluid action input">
  <input type="text" placeholder="Search..."/>
  <div className="ui button">Search</div>
          </div>
        );
    }
}

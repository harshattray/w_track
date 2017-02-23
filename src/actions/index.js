import axios from 'axios';

const API_KEY = '0f338c0d07a7d0ba0365b737a5cd5138';

export const FETCH_WEATHER ='FETCH_WEATHER';
const  ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;


export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},IN?&units=metric`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER,
        payload : request
    }
}

//AJAX GET REQUEST

import { combineReducers } from 'redux';
import  reducerWeather  from './reducer_weather';

const rootReducer = combineReducers({
    get_weather : reducerWeather
});

export default rootReducer;

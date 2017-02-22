import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){
    switch (action.type){
    case FETCH_WEATHER:
        // return [action.payload.data,...state]; //ES6 syntax state.concat([action.payload.data])
        // console.log([action.payload.data,...state]);
        const RESULT_DATA = [action.payload.data,...state];
        return RESULT_DATA;
    }
    return state;
}

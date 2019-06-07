import { combineReducers } from 'redux';
import temperatureReducers from './temperature';
import mqttReducers from './mqtt';
const rootReducer = combineReducers({
    temp: temperatureReducers,
    mqtt: mqttReducers
})


export default rootReducer;
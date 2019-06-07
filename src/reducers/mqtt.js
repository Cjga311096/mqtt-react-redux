import initialState from './initialState';
import mqttConstants from '../constants/mqtt';

export default function countryReducer(state = initialState.mqtt, action) {
    switch (action.type) {
        case mqttConstants.CREATE_CLIENT:
            var client = action.payload;
            return {
                ...state,
                client: client
            };
        case mqttConstants.MESSAGE_ARRIVED:
            var messages = [];
            state.messages.forEach((item) => {
                messages.push(item);
            })
            messages.push(action.payload);
            return {
                ...state,
                messages: messages
            };
        default:
            return state;
    }
}
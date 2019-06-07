import initialState from './initialState';

export default function countryReducer(state = initialState.temp, action) {
    switch (action.type) {
        case "SET_TEMP":
            var payload = action.payload;
            if (payload !== null) {
                return payload;
            } else {
                return {...state};
            }
        default:
            return state;
    }
}
import temperatureConstants from '../constants/temperature';

export const temperatureActions = {
    set,
};

function set(temp) {
    return { type: temperatureConstants.SET, temp };
}
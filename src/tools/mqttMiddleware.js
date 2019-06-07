import MQTT from 'mqtt';
import mqttActions from '../actions/mqtt';

const reduxMqttMiddleware = config => ({ dispatch }) => {
    const client = MQTT.connect(config);
    client.on('connect', ((topic, message) => {
        dispatch(mqttActions.createClient(client));
        client.subscribe('presence');
    }));

    client.on('message', ((topic, message) => {
        dispatch(mqttActions.messageArrived({ topic: topic, message: message.toString() }));
    }));

    return next => (action) => {
        next(action);
    };
};

export default reduxMqttMiddleware;
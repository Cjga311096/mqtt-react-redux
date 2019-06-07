import mqttConstants from '../constants/mqtt';

const mqttActions = {
    createClient,
    messageArrived
};


function createClient(client) {
    return { type: mqttConstants.CREATE_CLIENT, payload: client };
}

function messageArrived(message) {
    return { type: mqttConstants.MESSAGE_ARRIVED, payload: message };
}

export default mqttActions;
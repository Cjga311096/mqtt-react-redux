import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import mqttMiddleware from '../tools/mqttMiddleware';
import config from '../tools/config';

const loggerMiddleware = createLogger()

export default function configureStore() {
  return createStore(rootReducer,
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware,
      mqttMiddleware(config.mqttUrl)
    ),
  );
}

// ./react-redux-client/src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import PropTypes from 'prop-types';
import AppContainer from './containers/app';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomeComponent from './containers/home';

const App = ({ store }) => (
    <Provider store={store} >
        <Router history={browserHistory} >
            <Route path="/" component={AppContainer} >
                <IndexRoute component={HomeComponent} />
            </Route>
        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default (App);
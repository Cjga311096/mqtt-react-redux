import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/home.component';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSend = this.handleSend.bind(this);
  }
  componentWillMount() {

  }

  componentDidMount() {

  }

  handleSend() {
    const { mqtt } = this.props;
    try {
      mqtt.client.publish('presence', 'Hello mqtt');
    } catch (error) {

    }
  }
  render() {
    return <Home props={this.props}
      state={this.state}
      handleSend={this.handleSend} />;
  }
}

function mapStateToProps(state) {
  return {
    mqtt: state.mqtt,
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
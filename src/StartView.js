import React, { Component } from 'react';
import DirectionsMap from './DirectionsMap';

export default class StartView extends Component {
  render() {
    const buttonStyle = {height: '3rem'};
    return(
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <DirectionsMap tasks={this.props.tasks} />
        <button onClick={() => this.props.onButtonClick()} style={buttonStyle}>Start</button>
      </div>
    )
  }
}

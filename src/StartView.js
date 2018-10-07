import React, { Component } from 'react';
import DirectionsMap from './DirectionsMap';

export default class StartView extends Component {
  render() {
    const buttonStyle = {
      bottom: 20,
      height: '3rem',
      position: 'fixed',
      zIndex: 100
    };
    return(
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <DirectionsMap tasks={this.props.tasks} currentTaskIndex={0} />
        <button onClick={() => this.props.onButtonClick()} style={buttonStyle}>Start</button>
      </div>
    )
  }
}

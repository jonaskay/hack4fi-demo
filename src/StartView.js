import React, { Component } from 'react';
import DirectionsMap from './DirectionsMap';

export default class StartView extends Component {
  render() {
    return(
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <DirectionsMap tasks={this.props.tasks} />
        <button onClick={() => this.props.onButtonClick()}>Start</button>
      </div>
    )
  }
}

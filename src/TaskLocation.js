import React, { Component } from 'react';
import DirectionsMap from './DirectionsMap';

export default class TaskLocation extends Component {
  initMarker(map) {
    const {task} = this.props;

    new window.google.maps.Marker({
      position: new window.google.maps.LatLng(task.lat, task.lng),
      map: map,
      title: task.title
    });
  }

  render() {
    const buttonStyle = {height: '3rem'};

    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div style={{height: '3rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Find this location</div>
        <DirectionsMap tasks={this.props.tasks} currentTaskIndex={this.props.currentTaskIndex} />
        <button onClick={() => this.props.onButtonClick()} style={buttonStyle}>
          I'm here! Let's start
        </button>
      </div>
    );
  }
}

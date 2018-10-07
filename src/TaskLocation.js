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
    const {tasks, currentTaskIndex} = this.props;
    const buttonStyle = {height: '3rem'};

    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div style={{height: '3rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          Next up: {tasks[currentTaskIndex].title}
        </div>
        <DirectionsMap tasks={tasks} currentTaskIndex={currentTaskIndex} />
        <button onClick={() => this.props.onButtonClick()} style={buttonStyle}>
          Start
        </button>
      </div>
    );
  }
}

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
    const headerStyle = {
      background: '#495057',
      borderRadius: '.25rem',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.12),0 2px 4px 0 rgba(0,0,0,0.08)',
      color: '#f1f3f5',
      left: 20,
      padding: '2rem',
      position: 'fixed',
      right: 20,
      textAlign: 'center',
      top: 20,
      zIndex: 100
    }
    const buttonWrapperStyle = {
      bottom: 20,
      display: 'flex',
      justifyContent: 'center',
      left: 0,
      position: 'fixed',
      right: 0
    }
    const buttonStyle = {
      alignItems: 'center',
      background: '#228be6',
      borderRadius: 99999,
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)',
      color: '#e7f5ff',
      display: 'flex',
      height: '3rem',
      padding: '.25rem 5rem',
      zIndex: 100
    };

    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <header style={headerStyle}>
          <span style={{color: '#dee2e6'}}>Next up:</span> {tasks[currentTaskIndex].title}
        </header>
        <DirectionsMap tasks={tasks} currentTaskIndex={currentTaskIndex} />
        <dib style={buttonWrapperStyle}>
          <div onClick={() => this.props.onButtonClick()} style={buttonStyle}>
            Start
          </div>
        </dib>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Map from './Map';

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
        <div style={{width: '100%', flexGrow: 1, position: 'relative'}}>
          <Map onMapChange={map => this.initMarker(map)} lat={this.props.task.lat} lng={this.props.task.lng}  />
        </div>
        <button onClick={() => this.props.onButtonClick()} style={buttonStyle}>
          I'm here! Let's start
        </button>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Map from './Map';

export default class DirectionsMap extends Component {
  initDirections(map) {
    const {tasks} = this.props
    const origin = new window.google.maps.LatLng(tasks[0].lat, tasks[0].lng);
    const destination = new window.google.maps.LatLng(tasks[tasks.length-1].lat, tasks[tasks.length-1].lng);
    const waypoints = tasks.filter((task, index) => {
      return (index !== 0 && index !== tasks.length - 1);
    }).map(task => {
      return {
        location: new window.google.maps.LatLng(task.lat, task.lng),
        stopover: true
      }
    });

    const directionsService = new window.google.maps.DirectionsService;
    const directionsDisplay = new window.google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);

    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: 'WALKING',
      waypoints: waypoints
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render() {
    const lat = this.props.tasks[0].lat;
    const lng = this.props.tasks[0].lng;

    return (
      <div style={{width: '100%', flexGrow: 1, position: 'relative'}}>
        <Map onMapChange={map => this.initDirections(map)} lat={lat} lng={lng} />
      </div>
    );
  }
}

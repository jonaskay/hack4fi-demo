import React, { Component } from 'react';

export default class map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(this.refs.map, {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 15
    });
    this.props.onMapChange(map);
  };

  render() {
    return (
      <div style={{position: 'absolute', bottom: 0, top: 0, left: 0, right: 0}}>
        <div ref="map" style={{height: '100%'}}></div>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class StartView extends Component {
  render() {
    const image = require('./assets/start.jpg');
    const buttonStyle = {
      alignItems: 'center',
      background: '#228be6',
      borderRadius: 99999,
      boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)',
      color: '#e7f5ff',
      display: 'flex',
      fontSize: '1.25rem',
      fontWeight: 600,
      height: '3rem',
      justifyContent: 'center',
      padding: '.25rem 5rem',
    };
    const wrapperStyle = {
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      bottom: 0,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
    };
    const opacityStyle = {
      background: 'rgba(0,0,0,0.4)',
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 0
    };
    return(
      <div style={wrapperStyle}>
        <div style={opacityStyle}>
          <div class="App-brand" style={{color: '#fff', fontSize: '2.75rem', paddingTop: '1rem', position: 'relative', textAlign: 'center', textShadow: '0px 2px 2px rgba(0, 0, 0, 0.87)'}}>Time<br/> Träveller</div>
          <div style={{bottom: 20, left: 20, position: 'fixed', right: 20}}>
            <div onClick={() => this.props.onButtonClick()} style={buttonStyle}>Go!</div>
          </div>
        </div>
      </div>
    )
  }
}

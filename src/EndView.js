import React, { Component } from 'react';

export default class StartView extends Component {
  render() {
    const image = require('./assets/end.jpg');
    const wrapperStyle = {
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      bottom: 0,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0
    }
    const captionStyle = {
      background: '#000',
      color: '#fff',
      display: 'inline-block',
      padding: '3px 5px'
    }

    return(
      <div style={wrapperStyle}>
        <div style={{fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.25, padding: 20, textAlign: 'center'}}>
          <div style={{...captionStyle, fontSize: '1.75rem'}}>Congratulations!</div>
          <br />
          <div style={captionStyle}>You are now 5 steps closer to</div>
          <br />
          <div style={captionStyle}>becoming a Finn!</div>
        </div>
      </div>
    )
  }
}

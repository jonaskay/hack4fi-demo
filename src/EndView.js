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
      background: '#212529',
      color: '#fff',
      display: 'inline-block',
      padding: '3px 5px'
    }
    const buttonStyle = {
      alignItems: 'center',
      background: '#343a40',
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
    return(
      <div style={wrapperStyle}>
        <div style={{fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.25, padding: 20, textAlign: 'center'}}>
          <div style={{...captionStyle, fontSize: '1.75rem'}}>Congratulations!</div>
          <br />
          <div style={captionStyle}>You are now {this.props.stepCount} steps closer to</div>
          <br />
          <div style={captionStyle}>becoming a Finn!</div>
        </div>
        <div style={{bottom: 20, left: 20, position: 'fixed', right: 20}}>
          <div onClick={() => this.props.onButtonClick()} style={buttonStyle}>Return to Start</div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class StartView extends Component {
  render() {
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
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      bottom: 0,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0
    }
    return(
      <div style={wrapperStyle}>
        <div class="App-brand" style={{fontSize: '2.75rem', paddingTop: '1rem', textAlign: 'center'}}>Time<br/> Träveller</div>
        <div style={{bottom: 20, left: 20, position: 'fixed', right: 20}}>
          <div onClick={() => this.props.onButtonClick()} style={buttonStyle}>Go!</div>
        </div>
      </div>
    )
  }
}

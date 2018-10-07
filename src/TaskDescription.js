import React, { Component } from 'react';

export default class TaskDescription extends Component {
  render() {
    const image = require(`../assets/${this.props.task.image.file}`);
    const buttonStyle = {
      alignItems: 'center',
      background: '#228be6',
      borderRadius: 99999,
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.12),0 2px 4px 0 rgba(0,0,0,0.08)',
      color: '#e7f5ff',
      display: 'flex',
      fontWeight: 600,
      height: '3rem',
      justifyContent: 'center',
      marginTop: '3rem',
      padding: '.25rem 5rem',
      textAlign: 'center'
    };
    const footerStyle = {
      background: '#f1f3f5',
      fontSize: '1.125rem',
      lineHeight: 1.5,
      marginTop: '1.5rem',
      padding: '2rem 20px'
    }

    return(
      <div>
        <figure style={{margin: 0}}>
          <img src={image} style={{width: '100%'}} />
          <figcaption style={{color: '#495057', padding: '5px 10px', textAlign: 'right'}}>{this.props.task.image.caption}</figcaption>
        </figure>
        <div style={{fontSize: '1.25rem', padding: 20}}>
          <h1 style={{margin: 0, marginBottom: '1.5rem', textAlign: 'center'}}>{this.props.task.title}</h1>
          <ol style={{lineHeight: 1.25}}>
            {this.props.task.steps.map(step => <li style={{margin: '.5rem 0'}}>{step.body}</li>)}
          </ol>
          <div onClick={() => this.props.onButtonClick()} style={buttonStyle}>Done</div>
        </div>
        <div style={footerStyle}>{this.props.task.description}</div>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class TaskDescription extends Component {
  render() {
    const image = require(`../assets/${this.props.task.image.file}`);
    const buttonStyle = { background: '#000', color: '#FFF', padding: '1rem' };

    return(
      <div>
        <figure style={{margin: 0}}>
          <img src={image} style={{width: '100%'}} />
          <figcaption>{this.props.task.image.caption}</figcaption>
        </figure>

        <h1>{this.props.task.title}</h1>
        <ol>
          {this.props.task.steps.map(step => <li>{step.body}</li>)}
        </ol>
        <button onClick={() => this.props.onButtonClick()} style={buttonStyle}>Done</button>
        <p>{this.props.task.description}</p>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class TaskDescription extends Component {
  render() {
    return(
      <div>
        <p>Description</p>
        <button onClick={() => this.props.onButtonClick()}>Done</button>
      </div>
    )
  }
}

import React, { Component } from 'react';
import TaskDescription from './TaskDescription';
import TaskLocation from './TaskLocation';

export default class TaskView extends Component {
  constructor(props) {
    super(props);

    this.state = {arrived: false}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.task !== prevProps.task) {
      this.setState({arrived: false});
    }
  }

  arrive() {
    this.setState({arrived: true});
  }

  next() {
    this.props.onNext();
  }

  render() {
    return(
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        {this.state.arrived ?
          <TaskDescription task={this.props.task} onButtonClick={() => this.next()} /> :
          <TaskLocation task={this.props.task} onButtonClick={() => this.arrive()} />}
      </div>
    );
  }
}

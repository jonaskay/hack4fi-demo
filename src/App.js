import React, { Component } from 'react';
import StartView from './StartView';
import EndView from './EndView';
import TaskView from './TaskView';
import route from './route';
import './App.css';
import 'normalize.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTaskIndex: -1, ended: false};
  }

  start() {
    this.setState({currentTaskIndex: 0});
  }

  next() {
    const nextTaskIndex = this.state.currentTaskIndex + 1;
    if (nextTaskIndex < route.tasks.length) {
      this.setState({currentTaskIndex: nextTaskIndex});
    } else {
      this.setState({ended: true});
    }
  }

  restart() {
    this.setState({currentTaskIndex: -1, ended: false});
  }

  currentTask() {
    return route.tasks[this.state.currentTaskIndex];
  }

  render() {
    let view;
    if (this.state.ended) {
      view = <EndView onButtonClick={() => this.restart()} stepCount={route.tasks.length} />
    } else {
      if (this.state.currentTaskIndex < 0) {
        view = <StartView tasks={route.tasks} onButtonClick={() => this.start()} />
      } else {
        view = <TaskView tasks={route.tasks} currentTaskIndex={this.state.currentTaskIndex} onNext={() => this.next()} />
      }
    }

    return (
      <div class="App" style={{height: '100%'}}>
        {view}
      </div>
    );
  }
}

export default App;

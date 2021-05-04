import './App.css';
import React, { Component } from 'react';
import tasks from './ejemplos/task.json';
import Tareas from './component/Tareas';




class App extends Component {
  state = {
    tasks: tasks
  }  
  
  render() {
    return (
      /*ME LLEVO las tareas que genero aquí al ficheo Tasks.js con un props(tareas)*/
      <Tareas tareas={this.state.tasks}/>
    )
  }
}

export default App;

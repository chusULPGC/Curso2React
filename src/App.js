import './App.css';
import React, { Component } from 'react';
import tasks from './ejemplos/task.json';
import Tareas from './component/Tareas';
import Cards from './component/Cards';
import TaskForm from './component/TaskForm';
import Post from './component/Post';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    tasks: tasks
  }

  /**Añadimos una nueva tarea */
  addTask = (title, description) => {
    const tareaNueva = {
      title: title,
      description: description,
      done: false,
      id: this.state.tasks.length
    }
    /*CON ESTA INSTRUCCIÓN AÑADIMOS LA TAREA NUEVA A LA TABLA */
    this.setState({
      tasks: [...this.state.tasks, tareaNueva]
    })
  }

  deleteTask = (id) => {
    const nuevasTareas = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: nuevasTareas });
  }

  checkDone = (id) => {
    const nuevasTareas = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done /**si es false cambia a true y si es true cambia a false */
      }
      return task;
    });
    this.setState({ tasks: nuevasTareas })
  }

  
   
  

  render() {
    return (
      /*ME LLEVO las tareas que genero aquí al ficheo Tareas.js con un props(tareas)*/
      <div>
        <Navbar post="http://localhost:3000/posts" nuevatarea="http://localhost:3000/nuevatarea"/>
        
        <Router>
          <Route exact path="/" render={() => {
            return <div>              
              <Cards tareas={this.state.tasks} />
              <Tareas
                tareas={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
                // incompleteas={this.tareasIncompletas}
              />
              <TaskForm addTask={this.addTask} />

            </div>
          }}>
          </Route>
          <Route path="/posts" component={Post}></Route>
          {/* <Route path="/nuevatarea" component={TaskForm } addTask={this.addTask}></Route> */}
          <Route path="/nuevatarea" render = {() => {
            return <div>
              <TaskForm addTask={this.addTask} />
            </div>
          }}>

          </Route>
        </Router>
      </div>
    )
  }
}

export default App;

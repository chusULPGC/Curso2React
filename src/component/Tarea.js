import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tarea extends Component {

    StyleCompleted() {
        return {
            fontSize: '18px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            // <tbody>
                <tr style={this.StyleCompleted()}>
                    <td>{this.props.task.title}</td>
                    <td>{this.props.task.description}</td>
                    <td>{this.props.task.done.toString()}</td>
                    <td>
                        <input 
                        type='checkbox'
                        onChange={this.props.checkDone.bind(this, this.props.task.id)}
                        />
                    </td>
                    <td>
                        <button
                            type="button" onClick={this.props.deleteTask.bind(this, this.props.task.id)}
                            className="btn btn-danger">
                            Eliminar
                             </button>                        
                    </td>                    
                </tr>
            // </tbody>
        )
    }
}

Tarea.propTypes = {
    task: PropTypes.object.isRequired
}

export default Tarea;
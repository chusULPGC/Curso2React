import React, { Component } from 'react';

class Tarea extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.task.title}</td>
                    <td>{this.props.task.description}</td>
                    <td>{this.props.task.done.toString()}</td>
                    <td><input type='checkbox' /></td>
                    <td><button type="button" className="btn btn-danger">Eliminar</button></td>
                </tr>
            </tbody>
        )
    }

}


export default Tarea;
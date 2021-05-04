import React, { Component } from 'react';
import Tarea from './Tarea';

class Tareas extends Component {        
    render() {
        return (
            <div>
                <div className="alert alert-primary" role="alert">
                <h1>Numero de tareas: {this.props.tareas.length}</h1>
                </div>                
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Realizado</th>
                            <th>Cambiar estado</th>
                            <th>Eliminar tarea</th>
                        </tr>
                    </tbody>
                    {this.props.tareas.map(task => <Tarea task={task} key={task.id} />
                    )}
                </table>
            </div>
        )
    }
}

export default Tareas;
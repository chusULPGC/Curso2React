import React, { Component } from 'react';
import Tarea from './Tarea';
import PropTypes from 'prop-types';



class Tareas extends Component {
    render() {
        return (
            <div>
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
                    {this.props.tareas.map(task =>
                        <Tarea
                            task={task}
                            key={task.id}
                            deleteTask={this.props.deleteTask}
                            checkDone={this.props.checkDone}                           
                        />
                    )}

                </table>
            </div>

        )
    }
}
Tareas.propTypes = {
    tareas: PropTypes.array.isRequired
}

export default Tareas;
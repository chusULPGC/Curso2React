import React, { Component } from 'react';

class TaskForm extends Component {
    /**Este estado ahora se lo tenemos que pasar a App.js */
    state = {
        title: '',
        description: ''
    }


    /*El metodo onsubit se encarga de tratar los
      datos una vez que se le de a enviar en el formulario
    */
    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }


    /** El metodo onchange esta escuchando lo que se teclea en los campos del formulario */
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h4>Añade una tarea</h4>
                <div class="form-group">
                    <label>Tarea</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Añade una tarea"
                        onChange={this.onChange}
                        value={this.state.title}
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Descripción</label>
                    <textarea
                        type="textarea"
                        name="description"
                        placeholder="Escribe una descripción"
                        onChange={this.onChange}
                        value={this.state.description}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3">
                    </textarea>
                </div>
                <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block">
                    Añadir
                    </button>
                <br />
            </form>

        )
    }
}

export default TaskForm;
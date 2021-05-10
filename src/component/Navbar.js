import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <a class="navbar-brand" href="localhost:3000">Inicio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="navbar-brand" href={this.props.post}>Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href={this.props.nuevatarea}>Añadir tarea</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="https://www.contactel.es/vfichaje/">Fichaje</a>
                        </li>                        
                    </ul>
                </div>
            </nav>

        )
    }

}

export default Navbar;
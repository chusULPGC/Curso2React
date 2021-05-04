import React, { Component } from 'react';

/*
 
function Helloworld(props) {
     return (
         <div id="hello">
             <h1>{props.texto}</h1>
             <h3>{props.subtitulo}</h3>
         </div>
     )
 }
 
 */

class Helloworld extends Component {
    state = {
        show: true
    }

    cambiarEstado() {
        this.setState({ show: !this.state.show })
    }



render() {
    if (this.state.show) {
        return (
            <div id="hello">
                <h1>{this.props.texto}</h1>
                <h3>{this.props.subtitulo}</h3>
                <button onClick={this.cambiarEstado.bind(this)}>Cambiar estado</button>
            </div>
        )
    } else {
        return (
            <div id="hello">
                <h1>No hay elementos</h1>
                <button
                    onClick={this.cambiarEstado.bind(this)}>
                    Cambiar estado
                     </button>
            </div>

        )
    }
}
}


export default Helloworld;
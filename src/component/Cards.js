import React, { Component } from 'react';



class Cards extends Component {

    
    

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card text-white bg-primary" >
                            <div className="card-header">Nº tareas totales</div>
                            <div className="card-body">
                                <h3 className="card-title">{this.props.tareas.length}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-success" >
                            <div className="card-header">Tareas completas</div>
                            <div className="card-body">
                                <h3 className="card-title">{this.props.tareas.length}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-danger">
                            <div className="card-header">Tareas Incompletas</div>
                            <div className="card-body">
                                <h3 className="card-title">{this.props.tareas.length}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
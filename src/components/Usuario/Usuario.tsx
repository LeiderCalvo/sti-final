import React, { Component } from 'react';
//import { preferencia } from '../../stores/store';

class Usuario extends Component <any, any> {
    constructor(props: any) {
        super(props);
    }

    render(){
        return (
            <div className='usuario'>
                <h3>{this.props.id}</h3>
                <h3>{this.props.nombre}</h3>
                <h3>{this.props.edad}</h3>
                <h3>{this.props.preferencias}</h3>
            </div>
        );
    };
}

export default Usuario;
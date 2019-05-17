import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Usuario.css';
import store from '../../stores/store';

@observer
class Usuario extends Component <any, any> {
    constructor(props: any) {
        super(props);
        this.seleccionar = this.seleccionar.bind(this);

        let selects = store.seleccionados;
    }

    seleccionar(){
        let selects = store.seleccionados;
        console.log(selects);
        selects.push({data: this.props.data, id: selects.length+''});
        console.log(selects);
        store.setSeleccionados(selects);
    }

    render(){
        return (
            <div className='usuario' onClick={this.seleccionar}>
                {/* this.props.data && this.props.data.map((dato: String)=>{
                    return <h3>{dato}</h3>
                }) */}
                <p>{this.props.data && this.props.data[1]}</p>
                <p>{this.props.data && this.props.data[2]}</p>
            </div>
        );
    };
}

export default Usuario;
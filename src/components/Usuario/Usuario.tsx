import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Usuario.css';
import store from '../../stores/store';

@observer
class Usuario extends Component <any, any> {
    constructor(props: any) {
        super(props);
        this.seleccionar = this.seleccionar.bind(this);
    }

    desSeleccionar(selects: String[]){
        var index = selects.indexOf(this.props.id);
        if (index > -1) {
            selects.splice(index, 1);
        }
    }

    seleccionar(){
        let selects = store.seleccionados;

        if(selects && selects.length > 0){
            let exist = selects.find((select)=>{
                return select === this.props.id;
            });
            exist? this.desSeleccionar(selects) : selects = [...selects, this.props.id];
        }else{
            selects = [this.props.id];
        }

        store.setSeleccionados(selects);
    }

    render(){
        return (
                //<p>{this.props.id && this.props.id}</p>
                store.isListaUsuarios?
                <div className={store.seleccionados && store.seleccionados.includes(this.props.id)? 'card usuario selected': 'card usuario'} onClick={this.seleccionar}>
                    <p>{this.props.data && this.props.data[1]}</p>
                    <p>{this.props.data && this.props.data[2]}</p>
                </div>
                :
                <div className={store.seleccionados && store.seleccionados.includes(this.props.id)? 'card usuario selected': 'card usuario'} onClick={this.seleccionar}>
                    <p>{this.props.data && this.props.data}</p>
                </div>
        );
    };
}

export default Usuario;
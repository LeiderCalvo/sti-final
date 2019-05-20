import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import ElementosPrincipales from '../Acciones/ElementosPrincipales';
import CantidadAmigos from '../Acciones/CantidadAmigos';
//import '../Acciones/Acciones.css';

@observer
class Resultados extends Component<any, any>{
    constructor(props: {}) {
        super(props);
    }

    render(){
        return (
            <div className="resultados">
            {
                !store.seleccionados || !(store.seleccionados.length >0)?
                    <p className='msg'>seleccione algo porfavor</p>
            :
                store.resultados.elementosPrincipales.userName !== ''?
                <ElementosPrincipales/>
            :
                store.resultados.cantidadAmigos.userName !== ''?
                <CantidadAmigos/>
            :
                store.resultados.cantidadAmigos.userName !== ''?
                <CantidadAmigos/>
            :
                <div>No</div>
            }
            </div>
        );
    };
}

export default Resultados;
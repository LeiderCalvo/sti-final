import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import ElementosPrincipales from '../Acciones/ElementosPrincipales';
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
                store.seleccionados && store.seleccionados.length >0 && store.resultados.elementosPrincipales.userName !== ''?
                <ElementosPrincipales/>
            :
                store.seleccionados && store.seleccionados.length >0 && store.resultados.cantidadAmigos.userName !== ''?
                <ElementosPrincipales/>
            :
                <div>No</div>
            }
            </div>
        );
    };
}

export default Resultados;
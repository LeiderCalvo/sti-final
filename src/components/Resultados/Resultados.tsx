import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import ElementosPrincipales from '../Acciones/ElementosPrincipales';
import CantidadAmigos from '../Acciones/CantidadAmigos';
//import '../Acciones/Acciones.css';

@observer
class Resultados extends Component<any, any>{

    render(){
        return (
            <div className="resultados">
            {
                !store.seleccionados || !(store.seleccionados.length >0)?
                    <p className='msg'>seleccione algo porfavor</p>
            :
                store.resultados.elementosPrincipales.userName !== ''?
                <ElementosPrincipales who={store.resultados.elementosPrincipales}/>
            :
                store.resultados.cantidadAmigos.userName !== ''?
                <CantidadAmigos who={store.resultados.cantidadAmigos}/>
            :
                store.resultados.elemsFest.userName !== ''?
                <ElementosPrincipales who={store.resultados.elemsFest}/>
            :
                store.resultados.cantidadInvitados.userName !== ''?
                <CantidadAmigos who={store.resultados.cantidadInvitados}/>
            :
                <div>No</div>
            }
            </div>
        );
    };
}

export default Resultados;
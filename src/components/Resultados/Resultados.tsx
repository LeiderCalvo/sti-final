import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import ElementosPrincipales from './ElementosPrincipales';
import CantidadAmigos from './CantidadAmigos';
import '../Resultados/Resultados.css';

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
                store.resultados.tipoComida.userName !== ''?
                <ElementosPrincipales who={store.resultados.tipoComida}/>
            :
                store.resultados.tipoBebida.userName !== ''?
                <ElementosPrincipales who={store.resultados.tipoBebida}/>
            :
                store.resultados.generosCercanos.userName !== ''?
                <ElementosPrincipales who={store.resultados.generosCercanos}/>
            :
                <div className='msg'>No hay resultados para mostrar</div>
            }
            </div>
        );
    };
}

export default Resultados;
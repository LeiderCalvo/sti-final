import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';

@observer
class Resultados extends Component<any, any>{
    constructor(props: {}) {
        super(props);
    }

    render(){
        return (
            <div className="resultados">
            {
            store.resultados.elementosPrincipales.userName !== ''?
                <div>
                    <h4>Nombre de usuario</h4>
                    <p>{store.resultados.elementosPrincipales.userName}</p>
                    <h4>Comida</h4>
                    <p>{store.resultados.elementosPrincipales.food}</p>
                    <h4>Bebida</h4>
                    <p>{store.resultados.elementosPrincipales.drink}</p>
                    <h4>Artista</h4>
                    <p>{store.resultados.elementosPrincipales.artist}</p>
                    <h4>Genero</h4>
                    <p>{store.resultados.elementosPrincipales.genre}</p>
                </div>
            :
                <div>No</div>
            }
            </div>
        );
    };
}

export default Resultados;
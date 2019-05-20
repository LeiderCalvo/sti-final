import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';

@observer
class ElementosPrincipales extends Component<any, any>{

    componentWillUnmount(){
        store.resetAll();
    }

    render(){
        return (
            store.seleccionados && store.seleccionados.length >0 && store.resultados.elementosPrincipales.userName !== ''?
                <div className='ElemPrincipales'>
                    <h4>{store.resultados.elementosPrincipales.userName}</h4>
                    {
                        store.resultados.elementosPrincipales.food &&
                        <div>
                            <h4>Comida</h4>
                            <p>{store.resultados.elementosPrincipales.food}</p>
                        </div>
                    }
                    {
                        store.resultados.elementosPrincipales.drink &&
                        <div>
                            <h4>Bebida</h4>
                            <p>{store.resultados.elementosPrincipales.drink}</p>
                        </div>
                    }

                    {
                        store.resultados.elementosPrincipales.artist && store.resultados.elementosPrincipales.genre &&
                        <div>
                            <h4>Artista</h4>
                            <p>{store.resultados.elementosPrincipales.artist}</p>
                            <h4>Genero</h4>
                            <p>{store.resultados.elementosPrincipales.genre}</p>
                        </div>
                    }
                </div>
            :
                <div>No</div>
        );
    };
}

export default ElementosPrincipales;
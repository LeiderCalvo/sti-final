import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';

@observer
class CantidadAmigos extends Component<any, any>{

    componentWillUnmount(){
        store.resetAll();
    }

    render(){
        return (
                <div className='CanAmigos'>
                    <h4>{store.resultados.cantidadAmigos.userName}</h4>
                    {
                        store.resultados.cantidadAmigos.num>0 &&
                        <div>
                            <h4>Cantidad</h4>
                            <p>{store.resultados.cantidadAmigos.num}</p>
                        </div>
                    }
                    {
                        store.resultados.cantidadAmigos.friends.length>0 &&
                        <div>
                            <h4>Amigos</h4>
                            {store.resultados.cantidadAmigos.friends.map((friend, index)=>{
                                return <p key={index}>{friend.nombre}</p>
                            })}
                        </div>
                    }
                </div>
        );
    };
}

export default CantidadAmigos;
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
                <div className='ElemPrincipales'>
                    {this.props.who.userName === 'Todos los usuarios' || !this.props.who.userName.includes(',')?
                        <h4 className='titulo'>{this.props.who.userName.trim().toLowerCase().charAt(0).toUpperCase()+ this.props.who.userName.trim().toLowerCase().slice(1)}</h4>
                    :
                        <div className="titulo">
                            <h4>Grupo</h4>
                            <p>{this.props.who.userName}</p>
                        </div>
                    }
                    {
                        this.props.who.food &&
                        <div className='comida'>
                            <h4>Comida</h4>
                            <p>{this.props.who.food}</p>
                        </div>
                    }
                    {
                        this.props.who.drink &&
                        <div className='bebida'>
                            <h4>Bebida</h4>
                            <p>{this.props.who.drink}</p>
                        </div>
                    }

                    {
                        this.props.who.artist && this.props.who.genre &&
                        <div className='musica'>
                            <h4>Artista</h4>
                            <p>{this.props.who.artist}</p>
                            <h4>Genero</h4>
                            <p>{this.props.who.genre}</p>
                        </div>
                    }
                </div>
        );
    };
}

export default ElementosPrincipales;
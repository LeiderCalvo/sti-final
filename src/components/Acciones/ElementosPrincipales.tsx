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
                    <h4>{this.props.who.userName}</h4>
                    {
                        this.props.who.food &&
                        <div>
                            <h4>Comida</h4>
                            <p>{this.props.who.food}</p>
                        </div>
                    }
                    {
                        this.props.who.drink &&
                        <div>
                            <h4>Bebida</h4>
                            <p>{this.props.who.drink}</p>
                        </div>
                    }

                    {
                        this.props.who.artist && this.props.who.genre &&
                        <div>
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
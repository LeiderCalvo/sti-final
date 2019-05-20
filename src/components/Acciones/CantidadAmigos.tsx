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
                    <h4>{this.props.who.userName}</h4>
                    {
                        this.props.who.num>0 &&
                        <div>
                            <h4>Cantidad</h4>
                            <p>{this.props.who.num}</p>
                        </div>
                    }
                    {
                        this.props.who.friends.length>0 &&
                        <div>
                            <h4>Amigos</h4>
                            {this.props.who.friends.map((friend: any, index: number)=>{
                                return <p key={index}>{friend.nombre}</p>
                            })}
                        </div>
                    }
                </div>
        );
    };
}

export default CantidadAmigos;
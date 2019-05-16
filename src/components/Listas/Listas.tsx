import React, { Component } from 'react';
import Usuario from '../Usuario/Usuario';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import '../Listas/Listas.css';

@observer
class Listas extends Component <any, any>{
    constructor(props: {}) {
        super(props);
    }

    render(){
        return (
            <div className='listas'>
                {store.dataBase && store.dataBase.map((user, index)=>{
                    return index>0 && <div className='card' key={index}><Usuario data={user}/></div>;
                })} 
            </div>
        );
    };
}

export default Listas;
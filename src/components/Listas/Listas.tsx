import React, { Component } from 'react';
import Usuario from '../Usuario/Usuario';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import '../Listas/Listas.css';

@observer
class Listas extends Component <any, any>{
    render(){
        return (
            <div className='listas'>
                {store.isListaUsuarios?
                    store.dataBase && store.dataBase.map((user, index)=>{
                        return index>0 && <div className='userContainer' key={index+'user'}><Usuario data={user} id={index+''}/></div>;
                    })
                :
                    store.dataBase && store.dataBase[0].map((genero, index)=>{
                        return index>=store.rangos[0].min && index<=store.rangos[0].max && <div className='userContainer' key={index+'genero'}><Usuario data={genero} id={index+''}/></div>;
                    })
                } 
            </div>
        );
    };
}

export default Listas;
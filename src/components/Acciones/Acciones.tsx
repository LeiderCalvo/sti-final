import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import '../Acciones/Acciones.css';

@observer
class Acciones extends Component<any, any>{

    render(){
        return(
            <div className="acciones">
                {!store.seleccionados || store.seleccionados.length<=0?
                    <p className='msg'>selecciona a alguien porfavor</p>
                : 
                store.isListaUsuarios === false && store.seleccionados.length>1?
                    <p className='msg'>no tenemos acciones para varios generos seleccionados</p>
                :
                    store.currentActions.map((action, index)=>{
                        return <div key={index+'accion'} className="card accion">
                            <h4>{action.titulo}</h4>
                            <div className="opciones">
                                {action.opciones.vals && action.opciones.vals.map((val, ind)=>{
                                    return <div key={ind+'val'} className="opcion">
                                        <input type={`${action.opciones.tipo}`} name={`${val}`} id={`${action.opciones.tipo}`}/>
                                        <p>{val==='0'? 'Cantidad' : val}</p>
                                    </div>
                                })}
                            </div>
                            <div className="btn">GO</div>
                        </div>
                    })
                }
            </div>
        );
    };
}

export default Acciones;
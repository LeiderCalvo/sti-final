import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import '../Acciones/Acciones.css';
import algoritmos from '../../utils/algoritmos';

@observer
class Acciones extends Component<any, any>{

    clickGo(titulo: String){
        switch (titulo) {
            case 'Elementos Principales':
                let user = store.dataBase && store.seleccionados && store.dataBase[parseInt(store.seleccionados[0]+'')];
                let vals = store.funciones[0].opciones.values;

                let resp = store.dataBase && user && algoritmos.mainElements(user, store, vals[0]==='true'? true : false, vals[1]==='true'? true : false, vals[2]==='true'? true : false );
                resp? store.setResultados(titulo, resp) : console.log('no hay respuesta');
            break;

            case 'Cantidad Amigos':
                
            break;

            case 'Elementos del Festival':
                
            break;

            case 'Cantidad de invitados':
                
            break;

            case 'Tipo de Bebida':
                
            break;

            case 'Tipo de Comida':
                
            break;

            case 'Generos Cercanos':
                
            break;
        }
    }

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

                            <div className={action.opciones.vals && action.opciones.vals.length>3? "opciones grande" : "opciones"}>
                                {action.opciones.vals && action.opciones.vals.map((val, ind)=>{
                                    return(
                                    <div key={ind+'val'} className="opcion">
                                        {action.opciones.tipo === 'number'?     
                                            <input type='number' name={`${val}`}  id='number' value={`${action.opciones.values[ind]}`}
                                            onChange={(e)=>{
                                                store.setValuesFunciones(e.target.valueAsNumber+'',action.titulo,ind)
                                            }}/>
                                        : 
                                        <input type='checkbox' name={`${val}`} checked={action.opciones.values[ind] === 'true'? true : false}
                                            onChange={(e)=>{
                                                    store.setValuesFunciones(e.target.checked + '',action.titulo,ind)
                                            }}/>
                                        }

                                        <p>{val==='0'? 'Cantidad' : val}</p>
                                    </div>
                                    )
                                })}
                            </div>

                            <div className="btn" onClick={()=>this.clickGo(action.titulo)}>GO</div>
                        </div>
                    })
                }
            </div>
        );
    };
}

export default Acciones;
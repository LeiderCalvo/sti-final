import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import '../Acciones/Acciones.css';

@observer
class Acciones extends Component<any, any>{

    clickGo(titulo: String){
        switch (titulo) {
            case 'Elementos Principales':
                
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
                                    return <div key={ind+'val'} className="opcion">
                                        <input type={`${action.opciones.tipo}`} name={`${val}`} id={`${action.opciones.tipo}`}
                                        onChange={(e)=>{
                                            action.opciones.vals && console.log(action.opciones.vals[ind] +' '+ action.opciones.values[ind]);
                                            console.log(e.target.valueAsNumber);
                                            action.opciones.values[ind] === '0'? 
                                                store.setValuesFunciones(e.target.valueAsNumber+'',action.titulo,ind)
                                            : 
                                                store.setValuesFunciones(e.target.checked + '',action.titulo,ind);
                                        }}/>
                                        <p>{val==='0'? 'Cantidad' : val}</p>
                                    </div>
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
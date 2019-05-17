import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import '../Acciones/Acciones.css';

@observer
class Acciones extends Component<any, any>{

    render(){
        return(
            <div className="acciones">
                {!store.seleccionados || store.seleccionados.length<=0? <p className='msg'>selecciona a alguien porfavor</p>:
            
            <p className='msg'>bien hecho menor</p>}
            <p className='msg'>{store.currentActions}</p>
            </div>
        );
    };
}

export default Acciones;
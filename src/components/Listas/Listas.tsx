import React, { Component } from 'react';
import Usuario from '../Usuario/Usuario';

class Listas extends Component <any, any>{
    constructor(props: {}) {
        super(props);
    }

    render(){
        return (
            <div className='listas'>
                Lista
                <Usuario id='0' nombre='manuela' edad='23' preferencias='fff'/>
            </div>
        );
    };
}

export default Listas;
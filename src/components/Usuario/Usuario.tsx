import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Usuario.css';

@observer
class Usuario extends Component <any, any> {
    constructor(props: any) {
        super(props);
    }

    render(){
        return (
            <div className='usuario'>
                {/* this.props.data && this.props.data.map((dato: String)=>{
                    return <h3>{dato}</h3>
                }) */}
                <p>{this.props.data && this.props.data[1]}</p>
                <p>{this.props.data && this.props.data[2]}</p>
            </div>
        );
    };
}

export default Usuario;
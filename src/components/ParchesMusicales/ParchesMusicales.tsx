import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';

@observer
class ParchesMusicales extends Component<any, any>{

    componentWillUnmount(){
        store.resetAll();
    }

    render(){
        return (
                <div className='parMusicales'>
                    <h4 className='titulo'>Desconocidos</h4>
                    <div className='lista names'>
                        {
                            this.props.who.nombres.split(',').map((name: any)=>{
                                return <p>{name.trim()}</p>
                            })
                        }
                    </div>
                    {
                        this.props.who.lugares.length>0 &&
                        <div className='lugares'>
                        <h4>Lugares</h4>
                            <div className="lista">
                                {
                                    this.props.who.lugares.map((lugar: any, index : number)=>{
                                        return <p key={index}>{lugar}</p>
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        this.props.who.comidas !== '' &&
                        <div className='comidas'>
                            <h4>Comidas</h4>
                            <p>{this.props.who.comidas}</p>
                        </div>
                    }
                </div>
        );
    };
}

export default ParchesMusicales;
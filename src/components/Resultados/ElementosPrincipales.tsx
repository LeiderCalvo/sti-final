import React, { Component } from 'react';
import store, { usuario } from '../../stores/store';
import { observer } from 'mobx-react';
import Grafico from '../Grafico/Grafico';

@observer
class ElementosPrincipales extends Component<any, any>{

    componentWillMount(){
        store.setDatos(this.getDatos());
    }

    componentDidUpdate(){
        store.setDatos(this.getDatos());
    }

    componentWillUnmount(){
        store.resetAll();
    }

    getDatos(){
        let db : usuario[] = [];
        if(store.seleccionados && store.dataBase){
            for (let i = 0; i < store.seleccionados.length; i++) {
                db = [...db, store.dataBase[parseInt(store.seleccionados[i]+'')]];
            }
        }

        let datos : {x: number, y: number, size: number}[] = [];
        if(this.props.who.food) datos = [...datos, ...this.foro(db, datos, 2)];

        if(this.props.who.drink) datos = [...datos, ...this.foro(db, datos, 3)];
        
        if(this.props.who.artist && this.props.who.genre) datos = [...datos, ...this.foro(db, datos, 0)]

        return datos;
    }

    foro(db: usuario[], datos : {x: number, y: number, size: number}[], ind: number){
        for (let i = 0; i < db.length; i++) {
            for (let j = store.rangos[ind].min; j < store.rangos[ind === 0? 1 : ind].max; j++) {
                datos = [...datos,{
                    x: j,
                    y: parseInt(db[i][j]+''),
                    size: parseInt(db[i][j]+'')
                }];
            }
        }
        return datos;
    }

    render(){
        return (
                <div className='ElemPrincipales'>
                    {/*
                    <div>
                        <XYPlot height={200} width= {200}>
                                <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis title="Caracteristicas" tickTotal={8}/>
                            <YAxis title="Valores"/>
                            <MarkSeries data={this.getDatos()} />
                        </XYPlot>
                    </div>
                    */
                    }
                    <div className='cont'>
                        <div className='grafContiner'>
                            <Grafico arrg={store.dataBase && store.dataBase[0]} store={store}/>
                        </div>
                    </div>
                    <p className='grafString'>{store.grafString}</p>
                    
                    {this.props.who.userName === 'Todos los usuarios' || !this.props.who.userName.includes(',')?
                        <h4 className='titulo'>{this.props.who.userName.trim().toLowerCase().charAt(0).toUpperCase()+ this.props.who.userName.trim().toLowerCase().slice(1)}</h4>
                    :
                        <div className="titulo">
                            <h4>Grupo</h4>
                            <p>{this.props.who.userName}</p>
                        </div>
                    }
                    {
                        this.props.who.food &&
                        <div className='comida'>
                            <h4>Comida</h4>
                            <p>{this.props.who.food}</p>
                        </div>
                    }
                    {
                        this.props.who.drink &&
                        <div className='bebida'>
                            <h4>Bebida</h4>
                            <p>{this.props.who.drink}</p>
                        </div>
                    }

                    {
                        this.props.who.artist && this.props.who.genre &&
                        <div className='musica'>
                            <h4>Artista</h4>
                            <p>{this.props.who.artist}</p>
                            <h4>Genero</h4>
                            <p>{this.props.who.genre}</p>
                        </div>
                    }
                </div>
        );
    };
}

export default ElementosPrincipales;
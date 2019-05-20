import React, { Component } from 'react';
import './App.css';
import Listas from '../Listas/Listas';
//import Papa from 'papaparse';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import Acciones from '../Acciones/Acciones';
import Resultados from '../Resultados/Resultados';

@observer
class App extends Component <any, any> {
  /*
  constructor(props: any) {
    super(props);
  }
  */

  componentWillMount() {
    store.loadCsv();
  }

  selectAll(){
    let selecteds: String[] = [];
    !store.isAllSelected && store.dataBase &&
    store.dataBase.map((user, index)=>{
      index>0? selecteds = [...selecteds, index+'']: console.log('no seleccionò el user'+index);
      return true;
    });
    store.setSeleccionados(selecteds);
    store.setAllSelected(!store.isAllSelected);
  }

  disSelectAll(){
    store.resetAll();
  }

  render(){
    return (
      <div className="App">
        <div className="row" id='usuarios'>
          <h3 className='titulo' onClick={()=>{
            this.disSelectAll();
            store.setListaUsuarios(!store.isListaUsuarios)
          }}>{store.isListaUsuarios? 'Usuarios' : 'Generos'}</h3>
          <Listas/>
          <p className='btn'onClick={store.seleccionados && store.seleccionados.length >0? this.disSelectAll : this.selectAll}>{store.seleccionados && store.seleccionados.length >0? 'Diselect All' : 'Selct All'}</p>
        </div>
        <div className="row">
          <h3 className='titulo'>Acciones</h3>
          <Acciones/>
        </div>
        <div className="row">
          <h3 className='titulo'>Resultados</h3>
            <Resultados/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Listas from '../Listas/Listas';
//import Papa from 'papaparse';
import store from '../../stores/store';
import { observer } from 'mobx-react';

@observer
class App extends Component <any, any> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    store.loadCsv();
  }

  selectAll(){
    let selecteds: String[] = [];
    !store.isAllSelected && store.dataBase &&
    store.dataBase.map((user, index)=>{
      index>0? selecteds = [...selecteds, index+'']: console.log('no seleccionò el user'+index);
    });
    store.setSeleccionados(selecteds);
    store.setAllSelected(!store.isAllSelected);
  }

  render(){
    return (
      <div className="App">
        <div className="row" id='usuarios'>
          <h3 className='titulo'>Usuarios</h3>
          <Listas/>
          <p className='btn' onClick={this.selectAll}>{store.isAllSelected? 'Diselect All' : 'Selct All'}</p>
        </div>
        <div className="row">
          <h3 className='titulo'>Acciones</h3>
          
        </div>
        <div className="row">
          <h3 className='titulo'>Resultados</h3>
          
        </div>
      </div>
    );
  }
}

export default App;

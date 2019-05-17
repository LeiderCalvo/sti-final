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

  render(){
    return (
      <div className="App">
        <div className="row" id='usuarios'>
          <h3 className='titulo'>Usuarios</h3>
          <Listas/>
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

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
        <div className="row">
            <Listas/>
        </div>
        <div className="row">
          <input type="file" className='csvFileInput' />
        </div>
        <div className="row">
        
        </div>
      </div>
    );
  }
}

export default App;

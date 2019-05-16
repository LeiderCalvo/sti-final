import React, { Component } from 'react';
import './App.css';
import Listas from '../Listas/Listas';
import Papa from 'papaparse';
import store from '../../stores/store';

class App extends Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getCsvData();
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();
    Papa.parse(csvData, {
        complete: this.getData
    });
  }

  fetchCsv() {
      return fetch('/data/data.csv').then(function (response: any) {
          let reader = response && response.body.getReader();
          let decoder = new TextDecoder('utf-8');

          return reader.read().then(function (result: any) {
            console.log(decoder.decode(result.value));
              return decoder.decode(result.value);
          });
      });
  }

  getData(result: any) {
      this.setState({data: result.data});
      let x = this.state.data[0];
      {console.log(x[0])}
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

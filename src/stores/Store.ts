import { observable, autorun, toJS, action, computed } from 'mobx';
import Papa from 'papaparse'
//export type preferencia = { musica: [], comida: [], bebida: [] };

export type db = usuario[];
export type usuario = String[];

class Store{
    @observable dataBase : db | null = null;

    constructor() {
        this.getData = this.getData.bind(this);
    }

    @action setDataBase(db : db){
        this.dataBase = db;
    }

    loadCsv() {
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
                return decoder.decode(result.value);
            });
        });
    }
    
    getData(result: any) {
        this.setDataBase(result.data);
    }
}

const store = new Store();
export default store;
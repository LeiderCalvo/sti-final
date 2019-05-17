import { observable, autorun, toJS, action, computed } from 'mobx';
import Papa from 'papaparse'
//export type preferencia = { musica: [], comida: [], bebida: [] };

export type db = usuario[];
//export type usuario = String[];
export type usuario = String[];

class Store{
    @observable dataBase : db | null = null;
    @observable seleccionados: String[] | null = null;
    @observable isAllSelected: boolean = false;
    

    constructor() {
        this.getData = this.getData.bind(this);
    }

    @computed get currentActions(){
        let actions = '';
        if(this.seleccionados){
            if (this.seleccionados.length==1) {
                actions = 'just uno'
            }else if (this.seleccionados.length>1) {
                actions = 'varios'
            }else if (this.dataBase && this.seleccionados.length == (this.dataBase.length)) {
                actions = 'todos'
            }if (this.seleccionados.length==0) {
                actions = 'ninguno'
            }
        }else{
            actions = 'seleccionados isFalsy';
        }
        return actions;
    }

    @action setDataBase(db : db){
        this.dataBase = db;
    }

    @action setSeleccionados(selecteds: String[] | null){
        this.seleccionados = selecteds;
    }

    @action setAllSelected(val: boolean){
        this.isAllSelected = val;
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
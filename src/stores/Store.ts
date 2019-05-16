import { observable, autorun, toJS, action, computed } from 'mobx';
import Papa from 'papaparse'
//export type preferencia = { musica: [], comida: [], bebida: [] };

export type db = usuario[];
export type usuario = String[];

class Store{
    @observable dataBase : db | null = null;

    @action setDataBase(db : db){
        this.dataBase = db;
    }
}

const store = new Store();
export default store;
import { observable, autorun, toJS, action, computed } from 'mobx';

export type preferencia = { musica: [], comida: [], bebida: [] };

class Store{

}

const store = new Store();
export default store;
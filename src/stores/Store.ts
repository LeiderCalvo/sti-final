import { observable, autorun, toJS, action, computed } from 'mobx';
import Papa from 'papaparse'
//export type preferencia = { musica: [], comida: [], bebida: [] };

export type db = usuario[];
export type usuario = String[];
export type funcion = {publico:String, titulo:String, descripcion: String, opciones:{tipo:String, vals:String[] | null, values: String[] } }[];

export type results = { elementosPrincipales: elemsPrincipales, cantidadAmigos: cantidadAmigos, elemsFest: elemsPrincipales, cantidadInvitados: cantidadAmigos, tipoComida: elemsPrincipales, tipoBebida: elemsPrincipales, generosCercanos: elemsPrincipales};
export type elemsPrincipales = {userName: String,food: String,drink: String,artist: String,genre: String};
export type cantidadAmigos = {userName: String, num: number, friends: {nombre: String, dist: number}[]};

class Store{
    @observable dataBase : db | null = null;
    @observable seleccionados: usuario | null = null;
    @observable isAllSelected: boolean = false;
    @observable isListaUsuarios: boolean = true;
    @observable resultados: results = this.initResultados();
    @observable funciones: funcion = this.initFuncion();

    @observable rangos: {tipo:String, min:number, max:number}[] = [
        {
            tipo:'genero',
            min: 4,
            max: 19
        },
        {
            tipo:'artistas',
            min: 20,
            max: 65
        },
        {
            tipo:'comida',
            min: 66,
            max: 94
        },
        {
            tipo:'bebidas',
            min: 95,
            max: 110
        }
    ];

    initResultados(){
        return {
            elementosPrincipales: {
                userName: '',
                food: '',
                drink: '',
                artist: '',
                genre: ''
            },
            cantidadAmigos: {
                userName: '',
                num: 0,
                friends: []
            },
            elemsFest: {
                userName: '',
                food: '',
                drink: '',
                artist: '',
                genre: ''
            }, 
            cantidadInvitados: {
                userName: '',
                num: 0,
                friends: []
            },
            tipoComida : {
                userName: '',
                food: '',
                drink: '',
                artist: '',
                genre: ''
            },
            tipoBebida: {
                userName: '',
                food: '',
                drink: '',
                artist: '',
                genre: ''
            },
            generosCercanos: {
                userName: '',
                food: '',
                drink: '',
                artist: '',
                genre: ''
            },
        };
    }

    initFuncion(){
        return [
            {
                publico: 'uno',
                titulo: 'Elementos Principales',
                descripcion: 'Con esta opción usted podrá conocer la comida, bebidao musica, esencial para un usuario',
                opciones: {
                    tipo: 'checkbox',
                    vals: ['comida', 'bebida', 'musica'],
                    values: ['false','false','false']
                },
            },
            {
                publico: 'uno',
                titulo: 'Cantidad Amigos',
                descripcion: 'Hallarás la lista de lsa personas mas cercanas a la seleccionada',
                opciones: {
                    tipo: 'number',
                    vals: ['0'],
                    values: ['0']
                },
            },
            {
                publico: 'varios',
                titulo: 'Elementos del Festival',
                descripcion: 'Hallarás los elementos que deberia tener el festival para un grupo de usuarios',
                opciones: {
                    tipo: 'checkbox',
                    vals: ['maxPla', 'com', 'minMis', 'beb', 'prom', 'mus'],
                    values: ['false','false','false','false','false','false']
                },
            },
            {
                publico: 'musica',
                titulo: 'Cantidad de invitados',
                descripcion: 'Hallarás la cantidad de usuarios que irian a ese festival',
                opciones: {
                    tipo: 'null',
                    vals: null,
                    values: ['']
                },
            },
            {
                publico: 'musica',
                titulo: 'Tipo de Comida',
                descripcion: 'Hallarás la comida que debes vender en ese festival',
                opciones: {
                    tipo: 'null',
                    vals: null,
                    values: ['']
                },
            },
            {
                publico: 'musica',
                titulo: 'Tipo de Bebida',
                descripcion: 'Hallarás la Bebida que debes vender en ese festival',
                opciones: {
                    tipo: 'null',
                    vals: null,
                    values: ['']
                },
            },
            {
                publico: 'musica',
                titulo: 'Generos Cercanos',
                descripcion: 'Hallarás los N generos mas cercanos al seleccionado',
                opciones: {
                    tipo: 'null',
                    vals: null,
                    values: ['']
                },
            }
            ];
    }

    constructor() {
        this.getData = this.getData.bind(this);
    }

    @computed get currentActions(){
        let actions : funcion = [];
        if(this.seleccionados){
            //this.dataBase && console.log(this.seleccionados.length +'  '+ this.dataBase.length);
            if(this.isListaUsuarios){
                for (let i = 0; i < this.funciones.length; i++) {
                    const elem = this.funciones[i];
                    if (this.seleccionados.length===1) {
                        if(elem.publico === 'uno') actions = [...actions, elem];
                    } else if (this.seleccionados.length>1) {
                        if(elem.publico === 'varios') actions = [...actions, elem];
                    }
                }
            }else if(this.isListaUsuarios === false){
                for (let i = 0; i < this.funciones.length; i++) {
                    const elem = this.funciones[i];
                    if(elem.publico === 'musica') actions = [...actions, elem];
                }
            }
            
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

    @action setListaUsuarios(val: boolean){
        this.isListaUsuarios = val;
    }

    @action setValuesFunciones(val: String, idfun: String, index: number){
        for (let i = 0; i < this.funciones.length; i++) {
            if(this.funciones[i].titulo === idfun){
                if(index === 0 || index === 2 || index === 4 ){
                    this.funciones[2].opciones.values[0] = 'false';
                    this.funciones[2].opciones.values[2] = 'false';
                    this.funciones[2].opciones.values[4] = 'false';
                }
                this.funciones[i].opciones.values[index] = val;
            }
        }
    }

    @action setResultados(who: String, val: any){
        this.resultados = this.initResultados();
        switch (who) {
            case 'Elementos Principales':
                this.resultados.elementosPrincipales = val;
                break;

            case 'Cantidad Amigos':
                this.resultados.cantidadAmigos = val;
                break;

            case 'Elementos del Festival':
                this.resultados.elemsFest = val;
                break;

            case 'Cantidad de invitados':
                this.resultados.cantidadInvitados = val;
                break;
            
            case 'Tipo de Comida':
                this.resultados.tipoComida = val;
                break;

            case 'Tipo de Bebida':
                    this.resultados.tipoBebida = val;
                break;

            case 'Generos Cercanos':
                    this.resultados.generosCercanos = val;
                break;
        }
    }

    resetAll(){
        let selecteds: String[] = [];
        this.setSeleccionados(selecteds);
        this.setAllSelected(false);

        this.resultados = this.initResultados();
        this.funciones = this.initFuncion();
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
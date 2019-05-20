import { usuario, elemsPrincipales } from "../stores/store";

class Algoritmos {

    mainElements(user: usuario, store: any, isFood: boolean, isDrink: boolean, isMusic: boolean){
        let response: elemsPrincipales = {
            userName: user[1],
            food: '',
            drink: '',
            artist: '',
            genre: ''
        };

        let max = 0;

        if(isFood){
            for (let i = store.rangos[2].min ; i < store.rangos[2].max; i++) {
                if(parseInt(user[i]+'')>max)max = parseInt(user[i]+'');
            }
            for (let i = store.rangos[2].min ; i < store.rangos[2].max; i++) {
                if(parseInt(user[i]+'')===max)response.food = response.food + store.dataBase[0][i] + ' : ';
            }
        }

        if(isDrink){
            max = 0;
            for (let i = store.rangos[3].min ; i < store.rangos[3].max; i++) {
                if(parseInt(user[i]+'')>max)max = parseInt(user[i]+'');
            }
            for (let i = store.rangos[3].min ; i < store.rangos[3].max; i++) {
                if(parseInt(user[i]+'')===max)response.drink = response.drink + store.dataBase[0][i]  + ' : ';
            }
        }

        if(isMusic){
            max = 0;
            for (let i = store.rangos[0].min ; i < store.rangos[0].max; i++) {
                if(parseInt(user[i]+'')>max)max = parseInt(user[i]+'');;
            }
            for (let i = store.rangos[0].min ; i < store.rangos[0].max; i++) {
                if(parseInt(user[i]+'')===max)response.genre = response.genre + store.dataBase[0][i]  + ' : ';
            }


            max = 0;
            for (let i = store.rangos[1].min ; i < store.rangos[1].max; i++) {
                if(parseInt(user[i]+'')>max)max = parseInt(user[i]+'');
            }
            for (let i = store.rangos[1].min ; i < store.rangos[1].max; i++) {
                if(parseInt(user[i]+'')===max)response.artist = response.artist + store.dataBase[0][i]  + ' : ';
            }
        }
        return response;
    }
}

const algoritmos =  new Algoritmos();
export default algoritmos;
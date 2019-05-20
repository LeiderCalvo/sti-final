import { usuario, elemsPrincipales, cantidadAmigos } from "../stores/store";

class Algoritmos {

    mainElements(user: usuario, store: any, isFood: boolean, isDrink: boolean, isMusic: boolean){
        let response: elemsPrincipales = {
            userName: user[1],
            food: '',
            drink: '',
            artist: '',
            genre: ''
        };

        if(isFood)response.food = this.shearch(user, store, 2, response.food);
        if(isDrink)response.drink = this.shearch(user, store, 3, response.drink);
        if(isMusic){
            response.genre = this.shearch(user, store, 0, response.genre);
            response.artist = this.shearch(user, store, 1, response.artist);
        }
        return response;
    }

    shearch(user: usuario, store: any, index: number, who: String){
        let max = 0;
            for (let i = store.rangos[index].min ; i < store.rangos[index].max; i++) {
                if(parseInt(user[i]+'')>max)max = parseInt(user[i]+'');;
                if(parseInt(user[i]+'')===max)who = who + store.dataBase[0][i]  + ' : ';
            }
        return who;
    }

    howManyFriends(user: usuario, store: any, val: number){
        let response: cantidadAmigos = {
            userName: user[1],
            num: val,
            friends: []
        };

        let amigos : {nombre: String, dist: number}[] = [];

        for (let i = 1; i < store.dataBase.length; i++) {
			if(!(user[1] === store.dataBase[i][1])) {
                amigos = [...amigos, {
                    nombre: store.dataBase[i][1],
                    dist: this.masParecidos(user, store.dataBase[i])
                }]
			}
        }
        console.log(amigos);
        amigos.sort(function(a, b) {
            return a.dist - b.dist;
        });
        response.friends = amigos.slice(0,val);
        console.log(response.friends);

        return response;
    }

    masParecidos(a: usuario, b: usuario) {
		
        let proPunt=0;
        let cuaA=0;
        let cuaB=0;
        
        for (let i = 4; i < a.length; i++) {
            let aC = parseInt(a[i]+'');
            let aB = parseInt(b[i]+'');
            proPunt += (aC*aB);
            cuaA = Math.pow(aC, 2);
            cuaB = Math.pow(aB, 2);
        }
        
        let result = (proPunt / (Math.sqrt(cuaA)*Math.sqrt(cuaB)));
        //console.log(result);
        
        return result;
    }
}

const algoritmos =  new Algoritmos();
export default algoritmos;
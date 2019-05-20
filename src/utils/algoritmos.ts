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

        response = this.applyAggregation(user, store, [isFood, isDrink, isMusic], 'maximoPlacer', response);
        return response;
    }

    applyAggregation(user: usuario, store: any, elmsVals: boolean[], type: String, response: elemsPrincipales){
        if(elmsVals[0])response.food = this.shearch(user, store, 2, response.food, type);
        if(elmsVals[1])response.drink = this.shearch(user, store, 3, response.drink, type);
        if(elmsVals[2]){
            response.genre = this.shearch(user, store, 0, response.genre, type);
            response.artist = this.shearch(user, store, 1, response.artist, type);
        }
        return response;
    }

    shearch(user: usuario, store: any, index: number, who: String, type: String){
        switch (type) {
            case 'maximoPlacer':
                let max = 0;
                    for (let i = store.rangos[index].min ; i < store.rangos[index].max; i++) {
                        if(parseInt(user[i]+'')>max)max = parseInt(user[i]+'');;
                        if(parseInt(user[i]+'')===max)who.includes(store.dataBase[0][i])?  who = who + ' / ' : who = who + store.dataBase[0][i]  + ' : ';
                    }
                return who;

            case 'minimaMiseria':
                for (let i = store.rangos[index].min ; i < store.rangos[index].max; i++) {
                    if(parseInt(user[i]+'')>3)who.includes(store.dataBase[0][i])?  who = who + ' / ' : who = who + store.dataBase[0][i]  + ' : ';
                }
                return who;
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
        amigos.sort(function(a, b) {
            return a.dist - b.dist;
        });
        response.friends = amigos.slice(0,val);
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
        return result;
    }

    festElements(users: usuario[], store: any, vals: String[]){
        let booVals : boolean[]= [];
        vals.map((val)=>{
            let temp = val==='true'? true : false;
            return booVals = [...booVals, temp]
        });

        let nombres = '';
        users.map((user)=>{
            return nombres = nombres + user[1] + ' ';
        });

        let response: elemsPrincipales = {
            userName: 'grupo: '+nombres,
            food: '',
            drink: '',
            artist: '',
            genre: ''
        };
        //'maxPla', 'com', 'minMis', 'beb', 'prom', 'mus'

        if(booVals[0]){
            users.map((user)=>{
                response = this.applyAggregation(user, store, [booVals[1], booVals[3], booVals[5]], 'maximoPlacer', response);
                return true;
            });
        }
        if(booVals[2]){
            users.map((user)=>{
                response = this.applyAggregation(user, store, [booVals[1], booVals[3], booVals[5]], 'minimaMiseria', response);
                return true;
            });
        }
        
        if(booVals[4]){
            let user : usuario = [];
            for (let i = 3; i < store.dataBase[0].length; i++) {
                let sum = 0;
                for (let j = 0; j < users.length; j++) {
                     sum += parseInt(users[j][i]+'') 
                     //console.log('caract: '+store.dataBase[0][i]+' user: ' + j + ' val: ' + users[j][i]);
                }
                let prom = sum / users.length;
                user[i] = prom+'';
                //console.log('sum: '+sum+' prom: '+ prom);
            }
            response = this.applyAggregation(user, store, [booVals[1], booVals[3], booVals[5]], 'maximoPlacer', response);
        }

        //console.log(response);
        return response;
    }
}

const algoritmos =  new Algoritmos();
export default algoritmos;
// Promises

const { text, json } = require('stream/consumers');


/*console.log(4);
const promiseCriada = new Promise(function (resolve, reject) {
    console.log(6);

    //console.log({ resolve }, typeof resolve);
    //console.log({ reject }, typeof reject);

    setTimeout(() => {
        console.log(12);
        resolve(22);
    }, 5000);

    //resolve(10);
   // reject("Mensagem de erro");
});

console.log(20);

console.log({promiseCriada}, typeof promiseCriada);

/*console.log(15);
setTimeout(() => console.log(16), 1000);
console.log(17);

const promiseCriada = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
const trabalhandoComOResultadoDaPromise = promiseCriada.then(function (value) {
    console.log( { value });

    console.log(39, { promiseCriada}, typeof promiseCriada);
});

console.log(42, { promiseCriada }, typeof promiseCriada);

const promiseCriada = new Promise(function (resolve, reject) {
    setTimeout(() => {

        const nome = undefined;

        console.log("Lenght:", nome.length);
        
        resolve(10);
        //reject(new Error("Formatação invalida"));
    }, 1000);
}).then(function (value) {
    console.log( { value });

    console.log(39, { promiseCriada}, typeof promiseCriada);
}).catch(function (reason) {
    console.log("Deu ruim", reason);
});

try {

    const nome = undefined;

    console.log("Lenght:", nome.length);

}catch(erro) {
    console.log("Deu ruim: ", erro.message);
}

const prommiseteste = new Promise(function (resolve, reject) {
    setTimeout(() => {
        try {
            const nome = "Jonas Rocha"

            resolve(nome.length);
        } catch (erro) {
            reject(erro);
        }
    }, 1000);
})
    .then(function(value) {
        console.log({ value });
    }) 
    .catch(function (reason) { 
        console.log("Deu ruim: ", reason.message);
 });*/

//   import fetch from "node-fecht";

//const requisicao = fetch("https://pokeapi.co/api/v2/pokemon")

import fetch from 'node-fetch';

const requisicao = fetch("https://pokeapi.co/api/v2/pokemon");

requisicao.then(response => {
    
    console.log("Requisição finalizada com sucesso");

    //console.log(response);

    const textPromise = response.text();

    textPromise.then(text => {
        const json = JSON.parse(text);
        console.log(json);
    });

});
node
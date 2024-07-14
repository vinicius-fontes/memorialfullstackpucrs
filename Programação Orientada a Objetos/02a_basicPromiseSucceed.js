//02a basicPromiseSucceed.js
//Resolve é utilizado para retornar um resultado de sucesso
//Caso contrário, utilizar o reject para retornar a mesagem de falha
const myFirstPromise = new Promise((resolve,reject) => {

    setTimeout(() => {
            resolve("Sucesso!");
    },2000);
});

let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`)
}

myFirstPromise
    .then(ifSucceed);

console.log("Fim do progama");

//Lembrar sempre de usar o then, sem o then, ele não espera a promessa ser resolvida
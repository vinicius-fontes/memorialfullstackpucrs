somar = (x,y) => x + y;

//05a_arraySome (Função de alta ordem utilizando arrow functions)

array = [4,5,6,7,8,9,10]

regraPar = (item) => item%2 == 0

console.log("Há algum número impar? " + array.some(regraPar))

//05b_arrayEvery (Função de alta ordem utilizando arrow functions)

array = [4,5,6,7,8,9,10]

regraImpar = (item) => item%2 != 0

console.log("Todos os número são impar? " + array.some(regraImpar))
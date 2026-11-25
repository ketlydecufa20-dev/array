//a ordem de um array não é algo importante, esse pode ser substituivel, não é a base principal , se altera facilmente 
// [] - significa um Array
// os valores são separados por virgulas 
let nomes = ["Isa", "Victor", "Pedro", "Samuel", "Geovana"]
console.log(nomes);
console.log(nomes[3]); //consulta de posição (obs. a contagem de array começa em 0)

nomes[4] = "Caleb" //substituindo valor em posição especifica
console.log(nomes);

console.log(nomes.length);  //conta quantas informações eu tenho no meu array

nomes[nomes.length] = "Geovana"

console.log(nomes);

nomes.push("Nicolas") //push adiciona mais um valor ao FINAL do array
console.log(nomes);
nomes.unshift("Ro") //unshift adiciona um valor no COMEÇO do array
console.log(nomes);

//remover valores
// .pop - remove o ULTIMO valor do array
// .shift - removo o PRIMEIRO valor 
// let ultimoNome=nomes.pop() / let primeiroNome=nomes.shift() - se eu quiser extrair (guardar) a informação que eu apagar eu posso colocar dentro de uma variavel 
nomes.pop()
console.log(nomes);
nomes.shift()
console.log(nomes);

//validar se a informação existe em um array: 
console.log(nomes.includes("Saniel"));

//saber a posição (indice)
console.log(nomes.indexOf("Nicolas"));


//contador e linha
nomes.forEach((linha, contador) => {
    console.log("O" + contador + "º é: " + linha)
})





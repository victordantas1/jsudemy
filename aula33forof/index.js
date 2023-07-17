const nome = ['Victor', 'Dantas'];

for(let valor of nome) {
    console.log(valor);
};
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice)
})

// For classico - geralmente com iter´veis (array ou string)
// For in - retorna o índice ou chave ( string, array, objects)
// For of - retorna o valor em si (iteráveis, arrays ou strings)
 
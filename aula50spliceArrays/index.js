const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia'];

// nomes.splice(indice de início, qtdDelete, addE1, addE2...);
// pop

const removidos = nomes.splice(1, 2, 'Victor');

console.log(nomes, removidos);
/*
Object.values retornam em forma de array

Object.entries - retornam em forma de array

Object.assign(des, any)

Object.getOwnPropertyDescriptor (o, 'prop')

(spread)



// Já vimos

Object.keys (retorna as chaves)

Object.freeze (congela o objeto)

Object.defineProperties (define várias propriedades)

Object.defineProperty (define ma propriedade)

*/

const produto = { nome: 'Produto', preco: 1.8 };

console.log(produto);

//

const caneca = Object.assign({}, produto);
console.log(caneca);

//
console.log("Produto sem freeze:");
produto.nome = "Outro nome";
console.log(produto)
console.log('Produto com freeze');
Object.freeze(produto);
produto.nome = "Sem nome";
console.log(produto)


//

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

//

console.log(Object.values(produto));

//

console.log(Object.entries(produto));




/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expessaoAnd = true && true && true && true;
const expressaoOr =   false || false || false || true
console.log(expessaoAnd);
console.log(expressaoOr);
const usuario = 'Luiz';
const senha = '123456';
//                             true                 false 
const vaiLogar = usuario === 'Luiz' && senha === '12345'
console.log(vaiLogar)



function max(x, y){
    if(x > y){
        return x;
    } else{
        return y;
    }
}
console.log(max(10, 1));

function max(x, y){
    if(x > y){
        return x;
    } 
    return y;
}
console.log(max(5, 17));

function max(x, y){
    return x > y? x : y;
 }

console.log(max(20, 25));
 
const max2 = (x, y) => x > y? x:y ;

console.log(max2(20,15));


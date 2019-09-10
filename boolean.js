console.log('Comparators '); 
console.log('1 == 2 -> ', 1 == 2); 

console.log('a != b -> ', 'a' != 'b'); 

console.log('z < x -> ', 'z' < 'x'); 

console.log('Never use == instead you should use === and !=='); 
console.log(`0 === '' -> `, 0 === ''); 

console.log(`0 === '0' -> `, 0 === '0'); 

console.log('null === undefined -> ', null === undefined); 

console.log('0 === false -> ', 0 === false); 


console.log('Operators '); 

console.log('generateSerial() //default 1000 -> ', generateSerial()); 
console.log('generateSerial(10) -> ', generateSerial(10)); 
console.log('generateSerial(100) -> ', generateSerial(100)); 


console.log('Ternary expressions'); 

console.log(`(0) ? 'good' : 'bad' -> `, (0) ? 'good' : 'bad'); 

function generateSerial(max) {
    max = max || 1000;
    return Math.floor(Math.random() * max);
}

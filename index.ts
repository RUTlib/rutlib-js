import { generateRut } from './src/index';
import console = require('console');

console.log(generateRut());
console.log(generateRut(1));
console.log(generateRut(2));
console.log(generateRut(3));
console.log(generateRut(4));
console.log(generateRut(5));
console.log('-------------------');

console.log(generateRut(5,false));
console.log(generateRut());
console.log(generateRut(1,false));
console.log(generateRut(0,false));
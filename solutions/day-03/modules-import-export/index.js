// index.js
// to import the doSomeMath from the math.js with or without extension
import doSomeMath2 from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js' // to import everything remaining

console.log("---->0")
console.log(addTwo(5, 5))
console.log({ addTwo, multiply, subtract });
console.log("---->1")
console.log(doSomeMath2);
console.log(doSomeMath2.addTwo2(5, 5))
console.log("---->2")
console.log(everything)
console.log(everything.addTwo(5, 5))
console.log(everything.default.addTwo2(5, 5))

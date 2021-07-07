const myModule = require('./module');

// module/calc.js의 기능
const result = myModule.calc.add(1, 2);

console.log(result);

// module/print.js의 기능
myModule.print.sayHello();
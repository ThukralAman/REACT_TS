import Person from './Person';

import {add,sub} from './compute';


console.log("Hello World!!!");

let p1 = new Person("Danny", 21);
console.log(p1.getName(), p1.getAge());

console.log(add(4,5));
console.log(sub(14,2));


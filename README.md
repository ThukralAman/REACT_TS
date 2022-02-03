# REACT_TS
React with Typescript


Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT_TS

=========

Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ]

===================================================


JavaScript
==> dynamically typed , loosely typed language

var name = "Smith";


string, number, boolean, undefined, null, object, array

name.toUpperCase();

var age = 24;

age++;

age = "Twenty five";

---

JavaScript runs on JS engine [ V8 {chrome, Nodejs} , SpiderMonkey, Chakra, Nashorn, JavaScriptVM  ]

file.js

var g = 100;

function doTask() {
	var a = 10;
	if( g > a) {
		var b = 20;
		c = 30;
	}

	console.log(g, a, b, c);
}

doTask();

console.log(g, a, b, c);


=============================================================


JS is event based ==> uses Event loop, has a single stack

console.log("Hi");

setInterval(function doTask() {
	console.log("done!!!");
}, 100);

$("#btn").click(function clicked() {
	console.log("clicked!!")
});


console.log("Bye!!!");


====================

Psuedocode for Event loop

pendingTimers:[]
pendingOsTask:[]
pendingCallbacks:[]

while(isStackEmpty && pendingTimers.length && pendingOsTask.length && pendingCallbacks.length) {
	pause();

	while(pendingCallbacks.length > 0) {
		push(pendingCallbacks[i]);
	}

	while(pendingTimers.length > 0) {
		push(pendingTimers[i]);
	}

	while(pendingOsTask.length > 0) {
		push(pendingOsTask[i]);
	}
}

=======================================


NodeJS

-------

is a platform with V8 JavaScript engine to execute JS 

* Server side RESTful aPIs/ GraphQL web services
* Traditional web application [pages are served to client]
* Streaming APIs [ Netflix / Hotstar]
* Realtime Application [ ChatBot]
* Webapplication development platform
	==> 1) Transpile
			Uber application
		Customer module
		Payment Module
		Vehice module
		Driver module

		JS+, TS+ , Dart+, CoffeeScript+

		JS engine understands only JS and not DART, CoffeeScript, TS, ...
		==> transpile ==> transcompile ==> Preprocessor
		TS ==> JS

	==> 2) Static code analysis
	==> 3) unit testing and E2E
	==> 4) Bundle
			30+ files

			without bundling

			<script src="a.js"></script>
			<script src="b.js"></script>
			<script src="c.js"></script>
			<script src="d.js"></script>

			Issues:
			a) Each inclusion is a http call 30+ Network calls to server
			b) order matters
				if "b" depends on "a" then include "a" first and "b" later
			c) lazy loading

			===

			main.chunk.js
			payment.chunk.js
			vendor.chunk.js

=============================================

Sample NodeJS project

folder> npm init --y

Node has:
1) Node Package Manager like PIP, Maven, Gradle
2) YARN is also a node package manager

Node comes with some pre-defined modules like "fs", "http", "crypto", "path", "url",..

Sometimes we may need to install 3rd party modules into project; NPM or YARN can be used

--> need to publish my project into repo ==> NPM or YARN

--
Every node project needs: package.json

* dependencies
	3rd party modules required for my project which is a must in production env.
	Example: jQuery, react, react-dom, lodash, underscore
	npm i lodash
  
  "dependencies": {
    "lodash": "^4.17.21"
  }

   "lodash": "4.17.21" ==> exact version
   "lodash": "~4.17.21" ==> major version has to be "4"
   "lodash": "^4.17.21" ==> min version is 4.17.21


* devDependencies
	3rd party modules which are required only in development stage
	like tesing, static code analysis
	mocha, chai, jest, jasmine, cypress, eslint

	npm i -D mocha chai
	or
	npm i --save-dev mocha chai
	or
	yarn add -D mocha chai

	"devDependencies": {
   		 "chai": "^4.3.6",
   		 "mocha": "^9.2.0"
    }

==> above installed modules are avaialble in "node_modules" folder of "project"


* scripts
"scripts": {
    "test": "mocha --reporter spec",
    "start": "node ./server.js",
    "e2e" : "cypress --open"
  }
  To run the scripts
  npm start
  npm test
  npm run e2e


================

NodeJS by default uses CommonJS module system ; ES6 Module System; AMD

* exports.add 

* var add = require('./convertor').add;

=============

clone the project

sampleapp> npm install

OR

sampleapp> yarn

node ./src/server.js

=======================================
Babel and Tracuer are Traspilers for ECMAScript 2015 (ES6)/ESNext to lower version of JS [ compatabile across browsers]
https://caniuse.com/

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript


TypeScript Compiler [tsc]
write code in TS ==> transcompile to JS

npm install -g typescript 

users/ AppData/Roaming/npm/ ...

require('typescript') wont work

Global install


========================================


TypeScript: ==> superset of JS
* Provide an optional type system for JavaScript ==> Dynamically typed to statically typed
* Types have proven ability to enhance code quality and understandability
* Compiler catchs errors early
* sort of documentation

Basic types:
1) number
2) string
3) boolean

var name:string = "Smith";
name = 24; // tsc error
var age:number = 33;
var status:boolean = true;

Complex types:
1) enum

enum Direction {
	NORTH,
	EAST,
	WEST,
	SOUTH
};
cons direction:Direction = Direction.EAST;

2) Object type
JSON ==> Javascript Object notation

let person: {name: string, age:number} = {name:"Anitha", age:33};

console.log(person.name, person.age);

3) Array type

let person: {name: string, age:number}[]  = [
	{name:"Sunitha", age:33},
	{name:"Anitha", age:23}
]


4) Union Type

let course:string | number  = "React JS";

course = 423;

====================

Type alias:

type Person = {
	name: string, 
	age:number
};

let person:Person;

person = {name:"Anitha", age:33};

let employee:Person;

=============================================


Function type:

function add(a:number, b:number) : number | string {
	return   (a + b);
}

console.log(add(5,6));

=================================================

Special types:

"any" type

let myVar:any = 0;

myVar = "1";

myVar = true;

"unknown" type

let myVar:unknown = 0;

myVar = "1";

myVar = true;


Difference: "any" won;t throw type errors

function invokeAnything(callback:any) {
 callback();
}

invokeAnything(100);

"tsc" allows but runtime errors

------

function invokeAnything(callback:unknown) {
 callback();
}

invokeAnything(100);

"tsc" fails

Solution:
function invokeAnything(callback:unknown) {
 if(typeof callback === 'function') {
   callback();
 }
}

invokeAnything(100);

=====================================

"Optional Properties"

function printName(obj: {firstName:string; lastName?:string}) {
 console.log(firstName + ", " + lastName);
} 

printName({"firstName":"Raj", "lastName": "Kumar"});


printName({"firstName":"RajKumar"});


====================

Interface instead of "type"

* interface as shape
* interface as behaviour contract ==> Realization relationship
* interface is extendable

* As Shape
interface Person  {
	name: string, 
	age?:number
};

function dotask(person:Person) {
	...
}

doTask({"name": "a", "age": 22});

doTask({"name": "anil"});

interface Greeting {
	greet();
}


class EmailGreeting implements Greeting {
	// forces you to have 
	greet() {
		//
	}
}


interface Dance {
	dance();
}

interface Fight extends Dance {
	fight();
}

class Actor implements Fight {
	dance() {

	}
	fight() {

	}
}

===============================

Type Assertions: "as"

// some 3rd party with JS code
function getPerson() {
	return {}
}

interface Person  {
	name: string, 
	age?:number
};

let person = getPerson();

person.name = "" ; // Property "name" does not exist on type {}


Solution:
let person = getPerson() as Person;
person.name = "" ; // OK

Type Assertions: angle-bracket syntax

let person = <Person>getPerson();

<button id="btn"></button>

const btn = document.getElementById("#btn") as HTMLButtonElement;

btn.addEventListener(...);
btn.backgroundColor = 'red';

===============

function someFunc(input: string | number) {
	if(typeof input === "string") {

	}
	if(typeof input ==="number"){

	}
}


Type Narrowing using "in" operator

type Circle = {
	radius:number
}

type Rectangle = {
	width:number;
	height:number
}

function calcuateArea(shape: Circle | Rectangle) {
	if("radius" in shape) {

		} else if("width" in shape) {

		}
}

========


Day 2

JS basics
NodeJS ==> NPM, YARN , package.json
Typescript ==> basic types, object, array, enum, type, interface, ... typeof, "as", "in"

---

TypeScript REST parameters

function getTotal(...numbers:numbers[]) : number {
	let total = 0;
	numbers.forEach(n => total += n);
	return total;
}


console.log(getTotal());
console.log(getTotal(10,20,30));
console.log(getTotal(4,5,1,1,4,66));

without REST parameters:
function getTotal(numbers:numbers[]) : number {


let args:numbers[] = [5,2,5];
getTotal(args);

-------------

Function Types

function add(a:number, b:number) : number | string {
	return   (a + b);
}

can be done as:

let doTask:(data:number[]) => void;

let doTask:(data:number[]) => number;

let doTask:(data:number[]) => any;

let doTask:(data:number[]) => string | number;

let doTask:(data:number[]) => {};



// Declaration
let add:(x: number, y: number) => number | string;

// definition
add = function(a:number, b:number)  {
	return   (a + b);
}


------------

Promise API introduced in ES2015

Asynchronous function which results in "resolve" or "reject" a call

Synchronous call:

let res = doTask();
console.log("line gets executed only on completion of doTask");


Asynchronous function call:

doTask has some async code ==> hit the server and return the result
API call http://server.com/users/5

==> resolve if user exists ==> {"id": 5, "name": "Harry"}
==> reject if user not found "user with id 5 doesn'exist"


doTask().then( function(res) {

},

funtion(rej){

});

console.log("line gets executed before doTask");


==========

interface User {
 id:number,
name:string
}

// Type alias
type fetchData = (id:number) => Promise<User>

function fetchData(id:number) {
	return new Promise<User>( function(resolve, reject) {
		setTimeout( function() {
			resolve({"id": 20, "name" : "Banu"});
		}, 2000);
   });
}


fetchData(20).then( function(data) {
  console.log(data);
},
function(err) {
  console.log("Boom :-(" , err);
});

console.log("non blocking!!");

//tsc --lib ES2015,dom promiseExample.ts


// XMLHttpRequest


===================================

Async and Await ==> simplify usage of promise

fetch('https://jsonplaceholder.typicode.com/users/1')
.then( 
 function(response) {
 	response.json()
 })
 .then(function(result) {
 	console.log(result));
});

using Arrow:
fetch('https://jsonplaceholder.typicode.com/users/1').then( data => data.json()).then(result => console.log(result))

===











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

====================

Typescript Generics


function merge<U,V>(obj1: U, obj2: V) {
  return {	
    ...obj1,
   ...obj2
  }
}


let person = merge(
  {name: "Kim"},
  {age:44}
);

console.log(person.name, person.age); // {name: "Kim", age : 44}

Problem:

let person = merge(
  {name: "Kim"},
  25
);

Solution:

function merge<U extends Object,V extends Object>(obj1: U, obj2: V) {

========================================================


High Order Function:
* function accepts function as arguments
* function returning a function

treat function as first-class member
 
// HOF because it takes action function
function forEach<T>(elems:T[], action:(elem:T) => void): void {
	let i: number;
	for(i = 0; i < elems.length; i++) {
		action(elem[i]);
	}
}

let nos:number[] = [6,2,21,5];
let names:string[] = ["Sita", "geetha", "Radha", "Raja", "Seena"];

forEach<number>(nos, console.log);

forEach<string>(names, console.log);


=======================================

let p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"};

let ref = p ; // reference as in pointer

ref.price = 4444;

p.price would have changed

let clone = {...p}; // copy of p

clone.name ="test"; // wont change p

==

let elems = [6,2,21,6,11,1];

let copy = [...elems]; // copy of elems


// Destructuring

let [x,y, ...data] =  elems;

x will have 6
y will be 2

data will be [ 21,6,11,1];

==================

Closure HOF and Webpack

* Function returning a function

Closure in JS refers to a way inner function can access the data of outer function

function greeting(msg, name) {
	return msg + " " + name;
}

greeting("Good morning" , "Tina");
greeting("Good morning" , "Ria");


function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}


var mGreet = greeting("Good morning");

mGreet("Harish");
mGreet("Yanni");

var eGreet = greeting("Hi");
eGreet("George");

for mGreet ==> greeting() with msg member is a part of Closure

==================

T ==> number R ==> Employee

getEmpId(5); ==> REST call ==> server return JSON

getEmpId(5); ==> check cache ==> if not present REST call ==> server return JSON


T ==> number R ==> number

function fibanocci(no:number) : number {
 return no ===0 || no ===1 ? no : fibanocci(no -1) + fibanocci(no -2);
}

console.time("first");
 console.log( fibanocci(34));
console.timeEnd("first");

console.time("second");
 console.log( fibanocci(34));
console.timeEnd("second");

==============================

JavaScript build tools

* Grunt
* Gulp
* Webpack

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, uglify, bundle, compilation, unit testing, and linting. 

src / ==> n number of "ts" files
dist / ==> all compiled "js"
bundle all "js" into main.js
include this into index.html

Webpack ==> default commig from scaffolding code generators for Angular, React, ...


===============

webpackexample> npm init --y

webpackexample> yarn add webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin -D

webpackexample> tsc --init

creates tsconfig.json

Person.ts
export default class Person {
    private name:string;
    private age:number;
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}

Or
 constructor(private name:string, private age: number) {
  }


 webpack --mode development

asset bundle.js 3.98 KiB [emitted] (name: main)
./src/index.ts 514 bytes [built] [code generated]
./src/Person.ts 429 bytes [built] [code generated]
./src/compute.ts 260 bytes [built] [code generated]
webpack 5.68.0 compiled successfully in 3186 ms

npm run prod          

 
> webpack --mode production

asset bundle.js 892 bytes [emitted] [minimized] (name: main)
./src/index.ts 513 bytes [built] [code generated]
./src/Person.ts 429 bytes [built] [code generated]
./src/compute.ts 260 bytes [built] [code generated]
webpack 5.68.0 compiled successfully in 3715 ms



Minification ==> eliminate white spaces

Uglify ==> shorten names

=================

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. 


webpack-dev-server can be used to quickly develop an application.

Hot re-loading

===========================

Day 3

Webpack ==> build tool

JavaScript in Typescript

Approach 1)
<script src="cdn of loadash"></script> ==> globally lodash librarires are available

my.ts

declare var random:any;

function doTask(): void {
	console.log(random(1,100));
}


Approach 2)


instead of <script src="..."></script>
npm i lodash
this install "js" in node_modules

typings.d.ts
declare module 'lodash' {
	export function random(min:number, max:number): number
}


my.ts
import {random} from 'lodash'; 

function doTask(): void {
	console.log(random(1,100));
}


Approach 3)

no need for typings.d.ts

https://github.com/DefinitelyTyped/DefinitelyTyped

npm i lodash @types/lodash

npm i jquery @types/jquery

import {random} from 'lodash';

console.log("Random : =>" + random(1,100));


================================================

Using css-loader in webpack

yarn add css-loader style-loader -D

styles.css
body {
    background-color: burlywood;
    color:cadetblue
}


css-loader resolves import './styles.css'

style-loader includes css in style tag in html

index.ts
import './styles.css';

====================================================

REACT.js

Rendering ==> data to presentation

Server side Rendering [ SSR ]
	data is converted to presentation and presentation page [HTML , pdf, image ] is served to client
	client is thin
	Tradional Web applicaiton development ==> Servelt & JSP, PHP, ASP.NET, Next.js

	Templates ==> JSP, ASP, ASP.NET, PHP, EJS, PUG, JADE


Client side Rendering [ CSR ]
	data is sent to client and rendered on client machine [ Android, Swift, Web, Standalone]

	Web application client side rendering
	* Templates ==> jQuery, Mustache {{ , HandleBars # , Underscore _name

	SPA ==> Single page applications, modules, dependencies , ..

	* Data binding ==> one way [ React ] or two way [ Angular ]
	* lazy loading modules
	* Routers
			-> different URLS should show different views
				http://amazon.com/mobiles/iPhone
				http://amazon.com/mobiles/Pixel
				http://amazon.com/tvs
				http://amazon.com/cart

				we have only one index.html

				* SEO 
				* Bookmark
				* Navigate between views ==> History API
				* Authorization
					use http://amazon.com/cart only if user is logged in.
				* lazy loading modules
					load cart module only if my url is http://amazon.com/cart

Backbone, Angular.JS, Angular ==> Frameworks for building Web applications
Model, View, controller, state management, HTTP api

React.js ==> view library

===========================================================================

CodePen

JS

Preprocessor : Babel

https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js



ReactElement

let Welcome = React.createElement("h1", {style: {'color':'red'}}, "Welcome to React");

console.log(Welcome)

ReactDOM.render(Welcome, document.getElementById("app"));


* Functional Component
* class Component

function Welcome() {
  return <div>
    <h1>Functional Component</h1>
    <h3>React Example</h3>
   </div>
}
ReactDOM.render(<Welcome />, document.getElementById("app"));

Functional Components
* starts with UpperCase
* returns JSX ==> JavaScript and XML ==> Babel or Typescript understands this and converts to ReactElement

props ==> a mechanism using which parent passes data to child
```

function Welcome(props) {
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.msg}</h3>
   </div>
}
ReactDOM.render(<Welcome title="React" msg ="Using Typescript"/>, document.getElementById("app"));

or

function Welcome({title, msg}) {
  return <div>
    <h1>{title}</h1>
    <h3>{msg}</h3>
   </div>
}
ReactDOM.render(<Welcome title="React" msg ="Using Typescript"/>, document.getElementById("app"));
```

=================

Reconciliation

VDOM ==> DOM

first Reconciliation happens when render() is called

diff algorithim
```

const domElement = document.querySelector(".list");
const diffs = [
	{
		newNode : { <li>2 </li>},
		oldNode: { <li>Two</li>},
		index:1
	},
	{
		newNode: {<li>Four</li>},
		index:3
	}
]

diffs.forEach(diff => {
	if(diff.oldNode) {
		domElement.replaceChild(diff.newNode, diff.index);
	} else {
		domElement.appendChild(diff.newNode);
	}
});
```

=============================

npx create-react-app reactsample --template typescript

=============================
```


let productsData = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

function ProductList({title, products}) {
  return <div>
          <h1>{title}</h1>
          {
            products.map(p => <Product product={p}  key={p.id}/>)
          }
    </div>
}

function Product({product}) {
  return <div>
    Name: {product.name} <br />
    Price : {product.price} <hr />
   </div>
}
ReactDOM.render(<ProductList title="Product List" products={productsData}/>, document.getElementById("app"));

```

==========================

* Class Component

class Welcome extends React.Component {

}


* class components can have state and behaviour
* life cycle methods
	componentDidMount()
	shouldComponentUpdate()
	componentWillUnmount()

```

class ProductList extends React.Component {
	state = {
			"products": [
  					 {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    			...],
    	"isLoading": false
	}
	// return JSX
	render() {
		return <div>
         		 <h1>{title}</h1>
         		 {
           			 this.state.products.map(p => <Product product={p}  key={p.id}/>)
          	}
    		</div>
	}
 // behaviour
	deleteProduct(id) {

	}
}

```

function Product({product}) {
  return <div>
    Name: {product.name} <br />
    Price : {product.price} <hr />
   </div>
}
ReactDOM.render(<ProductList title="Product List" />, document.getElementById("app"));



=======

Welcome.tsx
export default function Welcome({msg}: {msg?:string}):React.ReactElement | null {
    return <h1>Hello {msg} </h1>
}

App.tsx
 <Welcome />
 <Welcome msg="Good Day"  />

 https://notepad.ltd/egrnhgxh
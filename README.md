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





















interface User {
 id:number,
name:string
}

// Type alias
type fetchData = (id:number) => Promise<User>

function fetchData(id:number) {
	return new Promise<User>( (resolve, reject)  => {
		setTimeout( function() {
			resolve({"id": 20, "name" : "Banu"});
		}, 2000);
    	});
}


fetchData(20).then( data => {
  console.log(data);
},
err => {
  console.log("Boom :-(" , err);
});

console.log("non blocking!!");

//tsc --lib ES2015,dom promiseExample.ts
// node promiseExample.js
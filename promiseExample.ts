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
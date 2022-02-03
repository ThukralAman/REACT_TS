interface User {
 id:number,
name:string
}
 

async function fetchData(url:string): Promise<User[]> {
	const response = await fetch(url); // blocks
	return response.json();
	//return json;
 }
 
fetchData("https://jsonplaceholder.typicode.com/users").then( data => console.log(data));


console.log("non blocking!!");

//tsc --lib ES2015,dom asyncExample.ts
// node asyncExample.js
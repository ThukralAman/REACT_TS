// hof takes action function
function forEach<T>(elems:T[], action:(elem:T) => void): void {
	let i: number;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

let nos:number[] = [6,2,21,5];
let names:string[] = ["Sita", "geetha", "Radha", "Raja", "Seena"];

forEach<number>(nos, console.log);

forEach<string>(names, console.log);


// hof takes predicate function
function filter<T>(elems:T[], predicate:(elem:T) => boolean): T[] {
  let res:T[] = []; 
  forEach(elems, elem => {
	if(predicate(elem)) {
		res.push(elem);
	}
 });	
return res;
}

let filteredNos = filter(nos, no => no %2 ==0);
forEach<number>(filteredNos , console.log);


interface Product {
  id: number,
  name: string,
  price:number,
  category: string
}

let products:Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

let mobiles:Product[] = filter(products, p => p.category ==='mobile');
forEach<Product>(mobiles , console.log);


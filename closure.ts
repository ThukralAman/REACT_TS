function fibanocci(no:number) : number {
 return no ===0 || no ===1 ? no : fibanocci(no -1) + fibanocci(no -2);
}

type FunctionType<T,R> = (arg:T) => R;

function memoize<T, R>(fn:FunctionType<T,R>)  {
	var cache:{T?,R?} = {}; // {34: 541111} or { 5: {name:. , age: ...}}
	return function(args) {
		if(!cache[args]) {
		  cache[args] = fn(args);
		}
		return cache[args];
	}
}

var memFib  = memoize(fibanocci); // closure is fn and cache ==>  TypeInference

// React.memo()

console.time("first");
 console.log( memFib (34));
console.timeEnd("first");

console.time("second");
 console.log( memFib (34));
console.timeEnd("second");



function fibanocci(no) {
    return no === 0 || no === 1 ? no : fibanocci(no - 1) + fibanocci(no - 2);
}
function memoize(fn) {
    var cache = {}; // {34: 541111} or { 5: {name:. , age: ...}}
    return function (args) {
        if (!cache[args]) {
            cache[args] = fn(args);
        }
        return cache[args];
    };
}
var memFib = memoize(fibanocci); // closure is fn and cache
console.time("first");
console.log(memFib(34));
console.timeEnd("first");
console.time("second");
console.log(memFib(34));
console.timeEnd("second");

function fetchData(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Not found");
        }, 2000);
    });
}
fetchData(20).then(function (data) {
    console.log(data);
}, function (err) {
    console.log("Boom :-(", err);
});
console.log("non blocking!!");
//tsc --lib ES2015,dom promiseExample.ts

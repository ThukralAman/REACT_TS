function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
var nos = [6, 2, 21, 5];
var names = ["Sita", "geetha", "Radha", "Raja", "Seena"];
forEach(nos, console.log);
forEach(names, console.log);
function filter(elems, predicate) {
    var res = [];
    forEach(elems, function (elem) {
        if (predicate(elem)) {
            res.push(elem);
        }
    });
    return res;
}
var filteredNos = filter(nos, function (no) { return no % 2 == 0; });
forEach(filteredNos, console.log);
var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
var mobiles = filter(products, function (p) { return p.category === 'mobile'; });
forEach(mobiles, console.log);

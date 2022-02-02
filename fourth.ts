interface Person {
firstName:string; 
lastName?:string
}

function printName(obj: Person) {
 console.log(obj.firstName + ", " + obj.lastName);
} 

printName({"firstName":"Raj", "lastName": "Kumar"});


printName({"firstName":"RajKumar"});


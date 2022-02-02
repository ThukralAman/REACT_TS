function printName(obj: {firstName:string; lastName?:string}) {
 console.log(firstName + ", " + lastName);
} 

printName({"firstName":"Raj", "lastName": "Kumar"});


printName({"firstName":"RajKumar"});


// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object



// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

// const person =  {
//                     "name": "Spongebob", 
//                     "age": 30,
//                     "isEmployed": true,
//                     "hobbies": ["Jellyfising", "Karate", "Cooking"]
//                 };

// const people = [{
//                     "name": "Spongebob", 
//                     "age": 30,
//                     "isEmployed": true
//                 },
//                 {
//                     "name": "Patrick", 
//                     "age": 34,
//                     "isEmployed": false
//                 },
//                 {
//                     "name": "Squidward", 
//                     "age": 50,
//                     "isEmployed": true
//                 },
//                 {
//                     "name": "Sandy", 
//                     "age": 27,
//                     "isEmployed": false
//                 }];


// const jsonString = JSON.stringify(names);

// console.log(jsonString);


// fetch("person.json")
//     .then(response => response.json())
//     .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));
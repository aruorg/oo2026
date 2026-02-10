var message = "Hello world";
console.log(message);
var fulltname = "Anette Aruorg";
var age = 22;
console.log("My name is " + fulltname + " my age is " + age);
if (age < 7) {
    console.log("Free");
}
else {
    console.log("Buy a ticket");
    if (age < 16) {
        console.log("Child ticket");
    }
    else {
        console.log("Full ticket");
    }
}
var symbols = []; //empty array
for (var nr = 0; nr < age; nr++) {
    symbols.push("*");
}
console.log(symbols);
console.log(symbols.join(""));

let message: string = "Hello world";
console.log(message);


let fulltname: string = "Anette Aruorg";
let age: number = 22;


console.log("My name is " +fulltname+ " my age is " +age);


if (age<7){
    console.log("Free");
} else{
    console.log("Buy a ticket")
   
    if (age < 16){
    console.log("Child ticket");
    } else{
    console.log("Full ticket")
    }
}




let symbols:string[] =[];//empty array


for(let nr =0; nr <age; nr++){
    symbols.push("*");
}
console.log(symbols);
console.log(symbols.join(""));

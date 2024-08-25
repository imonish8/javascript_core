
// Call
// Apply
// Bind



let printfullname = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
};

let name = {
    firstname: "Monish",
    lastname: "Nule",
};

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
};

// Function borrowing
printfullname.call(name); // Monish Nule from undefined, undefined

// Call `printfullname` using `name2` as `this` context and additional arguments
printfullname.call(name2, "Mumbai", "Maharashtra"); // Sachin Tendulkar from Mumbai, Maharashtra

// Use `apply` method with `name2` and an array of arguments
printfullname.apply(name2, ["Mumbai", "Maharashtra"]); // Sachin Tendulkar from Mumbai, Maharashtra

console.log("Below is example how a Bind Method is Used")
// Use `bind` method to create a new function with a preset `this` and arguments
let printMyName = printfullname.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName); // [Function: bound printfullname]
printMyName(); // Sachin Tendulkar from Mumbai, Maharashtra

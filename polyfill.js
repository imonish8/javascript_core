let name = {
    firstname : "Monish",
    lastname : "Nule"
}

let printName = function() {
 console.log(this.firstname + " " + this.lastname);
}

let printMyName = printName.bind(name);

// Bind Method. not understood yet.
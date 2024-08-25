let multiply = function (x ,y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);
// presetting arguments
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// function currying means doing multiple methods using resetting some arguments using Bind method to the original Method or Function which is returiung Results/
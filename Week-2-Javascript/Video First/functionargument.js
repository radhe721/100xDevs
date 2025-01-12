function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function devide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}
function doOperation(a, b, op){ // op was holding fuction like sum subtract divide multiply
    // a = 5
    // b = 6
    // op is here below subtract
    return op(a,b);
}

const value = doOperation(5,6,subtract);
console.log(value);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// console.log("start counting 5 seconds")
// function afterdone(){
//     console.log("This is appear run after 5 sec");
// }
// setTimeoutPromisified(5000).then(afterdone); // syntactically cleaner

function waitfor3s(resolve){
    setTimeout(resolve, 3000)
}
function main(){
    console.log("main is called")
}
waitfor3s(main);


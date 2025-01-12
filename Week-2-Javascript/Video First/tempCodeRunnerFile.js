function sum(num){
    let ans = 0;
    for(let i = 1; i<=num; i++){
        let ans =  ans + i;
    }
    return ans;
}
const ans = sum(100);
console.log(ans);
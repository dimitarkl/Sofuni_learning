printAndSum(5,10)
function printAndSum(start,end){
    let sum=0;
    let arr=[]
    for(let i=start;i<=end;i++){
        arr.push(i)
        sum+=i;
    }
    let string=arr.join(" ")
    console.log(string)
    console.log(`Sum: ${sum}`)
}
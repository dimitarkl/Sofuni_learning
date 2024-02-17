triangleOfNumbers(3)
function triangleOfNumbers(input){
    for(let i=1;i<=input;i++){
        let arr=[]
        for(let j=1;j<=i;j++)
            arr.push(i)
        let string=arr.join(" ")
        console.log(string)
    }
}
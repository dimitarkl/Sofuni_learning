Division(30);
function Division(num){
    let dividers=[2,3,6,7,10]
    if(num%dividers[4]==0)
        console.log(`The number is divisible by ${dividers[4]}`)
    else if(num%dividers[3]==0)
        console.log(`The number is divisible by ${dividers[3]}`)
    else if(num%dividers[2]==0)
        console.log(`The number is divisible by ${dividers[2]}`)
    else if(num%dividers[1]==0)
        console.log(`The number is divisible by ${dividers[1]}`)
    else if(num%dividers[0]==0)
        console.log(`The number is divisible by ${dividers[0]}`)
    else
        console.log("Not divisible")
}
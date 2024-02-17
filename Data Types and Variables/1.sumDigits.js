SumDigits(245678)
function SumDigits(input)
{
    let arr=(input.toString()).split("");
    let sum=0;
    for(let i=0;i<arr.length;i++)
        sum+=parseInt(arr[i])
    console.log(sum)
     
}
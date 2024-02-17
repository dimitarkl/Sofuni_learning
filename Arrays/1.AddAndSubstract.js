AddAndSubstract([5, 15, 23, 56, 35])
function AddAndSubstract(input){
    let arr=input
    let sumOriginal=0;   
    let sum=0;
    for(let i=0;i<input.length;i++){
        sumOriginal+=input[i];
        if(input[i]%2==0)
            arr[i]=input[i]+i;
        else
            arr[i]=input[i]-i;
        sum+=arr[i]
    }
    console.log(arr)
    console.log(sumOriginal)
 
    console.log(sum)
}
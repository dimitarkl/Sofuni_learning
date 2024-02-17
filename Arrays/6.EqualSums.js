EqualSum([10,5,5,99,3,4,2,5,1,1,4])//11
function EqualSum(arr){
    let output=-1;
    for(let i=0;i<arr.length;i++){
        let leftSide=0;
        let rightSide=0;
        for(let j=0;j<i;j++)
            leftSide+=arr[j]
        for(let k=i+1;k<arr.length;k++)
            rightSide+=arr[k]
        
        //console.log(`leftside ${leftSide} rightSide ${rightSide} output ${output}`)
        
        if(leftSide==rightSide)
                output=i
        if(rightSide==0 && leftSide==0)
            output=0;
    }
    if(output>=0)
        console.log(output)
    else
        console.log("no")
}
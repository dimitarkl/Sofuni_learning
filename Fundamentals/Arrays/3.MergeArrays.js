Merge(['1', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])
function Merge(arr1,arr2){
    let finalArr=[];
    for(let i=0;i<arr1.length;i++){
        if(i%2==0)
            finalArr[i]=Number(arr1[i])+Number(arr2[i])
        else
            finalArr[i]=arr1[i]+arr2[i]
    }
    let string=finalArr.join(" - ")
    console.log(string)
}
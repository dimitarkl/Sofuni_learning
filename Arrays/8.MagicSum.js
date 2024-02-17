Sum([1,2,3,4,5,6],6)
function Sum(arr,num){
    let pairs=[]
    let place=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]==num && arr[i] != arr[j]){
                pairs[place]=arr[i]
                pairs[place+1]=arr[j]
                place+=2
            }
        }
    }
    for(let i=0;i<pairs.length;i+=2){
        console.log(`${pairs[i]} ${pairs[i+1]}`)
    }
}
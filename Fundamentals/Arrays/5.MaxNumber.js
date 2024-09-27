MaxNum([41,41,34,20])
function MaxNum(arr){
    let loop=0;
    let max=[]
    for(let i=0;i<arr.length;i++){
        let peak=true;
        for(let j=i;j<arr.length;j++){
           if(arr[i]<arr[j])
            peak=false;
        }
        if(peak){
            let inside=false
            max.forEach((el)=>arr[i]==el? inside=true :peak=true);
            if(!inside)
                max.push(arr[i])
        }
            
    }
    console.log(max.join(" "))
}
Rotate([2, 4, 15, 31],5)
function Rotate(arr,spaces){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        let arrPoss=i;
        for(let j=0;j<spaces;j++){
            arrPoss--
            if(arrPoss<0)
                arrPoss=arr.length-1
        }
        newArr[arrPoss]=arr[i]
    }
    console.log(newArr.join(" "))
}
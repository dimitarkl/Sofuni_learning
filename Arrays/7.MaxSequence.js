MaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
function MaxSequence(arr){
    let longestStreak=0;
    let streak=0;
    let num=0;
    for(let i=0;i<arr.length;i++){
        if(i>0){
            if(arr[i-1]==arr[i])
                streak++
                else{
                if(streak>longestStreak){
                    longestStreak=streak;
                    num=arr[i-1]
                }
                streak=0;
            }
        }
    }
    let numArr=[]
    for(let i=0;i<=longestStreak;i++)
        numArr[i]=num
    console.log(numArr.join(' '))
}
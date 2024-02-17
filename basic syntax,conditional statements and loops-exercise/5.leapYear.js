leapYear(2000)
function leapYear(input){
    let leapyr=false;
    if(input%400==0)
        leapyr=true;
    else if(input%4==0){
        if(!(input%100==0))
            leapyr=true;
    }
    if(leapyr)
        console.log("yes")
    else
        console.log("no")
}
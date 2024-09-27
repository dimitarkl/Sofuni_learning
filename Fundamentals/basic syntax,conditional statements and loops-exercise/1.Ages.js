Ages(1,2);
function Ages(ages)
{
    if(ages<0)
        console.log("out of bounds")
    else if(ages<3)
        console.log("baby");
    else if(ages<14)
        console.log("child")
    else if(ages<20)
        console.log("teenager")
    else if(ages<66)
        console.log("adult")
    else
        console.log("elder")
    
}
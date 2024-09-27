Spice(99)
function Spice(input){
    let spice=0;
    let days=0;
    for(let i=input;i>=100;i-=10)
    {
        days++
        spice+=i;
        spice-=26
    }
    if(spice>=26)
        spice-=26
    console.log(days)
    console.log(spice)
}
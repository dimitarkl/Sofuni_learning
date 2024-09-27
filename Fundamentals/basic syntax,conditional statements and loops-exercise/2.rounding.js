Rounding(10.50000800,2)
function Rounding(num,dig){
    if(dig>15)
        dig=15;
    num=num.toFixed(dig)   
    console.log(`${parseFloat(num)}`);
}
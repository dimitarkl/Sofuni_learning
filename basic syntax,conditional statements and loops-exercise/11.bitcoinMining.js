bitcoinMining([3124.15,504.212,2511.124])
function bitcoinMining(input){
    let goldPrice=67.51;
    let bitPrice=11949.16;
    let firstDay=0;
    let savings=0;
    let bitSavings=0;
    for(let i=0;i<input.length;i++)
    {
        if((i+1)%3!=0)
            savings+=input[i]*goldPrice;
        else{
            let thirty=(30/100)*(input[i]*goldPrice)
            savings+=(input[i]*goldPrice)-(30/100)*(input[i]*goldPrice)
        }
        for(let j=0;j<savings;j++){
            if(savings>bitPrice){
                savings-=bitPrice;
                bitSavings+=1
            }else
                break;
            if(firstDay==0)
                firstDay=i+1; 
        }
    }
    console.log(`Bought bitcoins: ${bitSavings}`)
    if(bitSavings>0)
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    console.log(`Left money: ${savings.toFixed(2)} lv.`)
}
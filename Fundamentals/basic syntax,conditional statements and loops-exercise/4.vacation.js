Vacation(40,"Regular","Saturday")
function Vacation(people,clas,weekday){
    let stuPrice=[8.45,9.80,10.46]
    let businessPrice=[10.90,15.60,16]
    let regPrice=[15,20,22.5]
    let fullPrice=0;
    let day=0;
    if(weekday=="Saturday")
        day=1
    else if(weekday=="Sunday"){
        day=2
    }
    if(clas=="Students"){
        fullPrice=people*stuPrice[day]
        if(people>=30)
            fullPrice-=(15/100)*(fullPrice)
    }else if(clas=="Business"){
        if(people>=100)
            fullPrice=(people-10)*businessPrice[day]
        else
            fullPrice=people*businessPrice[day]
    }else{
            fullPrice=people*regPrice[day]
            if(people>=10 && people<=20)
                fullPrice-=(5/100)*(fullPrice)
    }
    console.log(`Total price: ${fullPrice.toFixed(2)}`);
}
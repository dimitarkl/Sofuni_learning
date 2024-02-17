GladiatorExpenses(23
    ,12.50
    ,21.50
    ,40
    ,200)
function GladiatorExpenses(lostFights,helm,sword,shield,armor)
{
    let sum=0;
    let shieldBreaking=0;
    for(let i=1;i<=lostFights;i++){
        let broken=[false,false]
        if(i%2==0){
            sum+=helm;
            broken[0]=true;
        }
        if(i%3==0){
            sum+=sword;
            broken[1]=true;
        }
        if(broken[0] && broken[1]){
            sum+=shield
            shieldBreaking++
        }
        if(shieldBreaking%2==0 && shieldBreaking!=0){
            sum+=armor
            shieldBreaking=0
        }
    }
    console.log()
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}
Dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
function Dungeon(input){
    let inv=[100,0]
    let temp=input.join("")
    let arr=temp.split("|")
    for(let i=0;i<arr.length;i++){
        let obstacle=arr[i].split(" ")
        if(obstacle[0]=="potion"){
            if(Number(obstacle[1])+inv[0]>100){
                console.log(`You healed for ${Number(obstacle[1])-(Number(obstacle[1])+inv[0]-100)} hp.`)
                inv[0]+=Number(obstacle[1])-(Number(obstacle[1])+inv[0]-100)
            }else{
                inv[0]+=Number(obstacle[1])
                console.log(`You healed for ${obstacle[1]} hp.`)
            }
            console.log(`Current health: ${inv[0]} hp.`)
        }
        else if(obstacle[0]=="chest"){
            console.log(`You found ${obstacle[1]} coins.`)
            inv[1]+=Number(obstacle[1])
        }else{
            inv[0]-=Number(obstacle[1])
            if(inv[0]>0){
                console.log(`You slayed ${obstacle[0]}.`)
            }else{
                console.log(`You died! Killed by ${obstacle[0]}.`)
                console.log(`Best room: ${i+1}`)
                break;
            }
        }
        if(i+1==arr.length){
            console.log("You've made it!")
            console.log(`Coins: ${inv[1]}`)
            console.log(`Health: ${inv[0]}`)
        }   
    }
}
//90+30=120
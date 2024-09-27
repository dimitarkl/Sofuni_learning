Login(["Acer","login","go","let me in","recAs","sdsdsd"])
function Login(input){
    let pass;
    for(let i=0;i<=4;i++)
    {
        let split=input[i+1].split("")
        split=split.reverse();
        let end =split.join("")
        if(input[0]==end){
            console.log(`User ${end} logged in.`);
            break;
        }else if(i<=2)
            console.log("Incorrect password. Try again.")
        else{
            console.log(`User ${input[0]} blocked!`)
            break;
        }
    }
}

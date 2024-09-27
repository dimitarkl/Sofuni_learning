LadyBugs([1000,`2,147,483,647 -2,147,483,647`,`-2,147,483,647 left 2,147,483,647`])
function LadyBugs(input){
    let Poss=input[1].split(" ")
    let field=[]
    for(let k=0;k<input[0];k++){
        if(Poss.length>=k && Poss[k]<=input[0])
            field[Number(Poss[k])]=1
        if(field[k]!=1)
            field[k]=0
    }
    for(let i=2;i<input.length;i++){
        let commands=input[i].split(" ")
        if(commands[1]=='right' && field[commands[0]]==1 ){
            for(let j=1;j<=input[0]+1;j++){
                if(field[commands[0]+commands[2]*j]!=1){
                    field[Number(commands[0])+Number(commands[2])*j]=1
                    break;
                }
            }
            if(commands[2]!=0)
                field[Number(commands[0])]=0;
        }else if(commands[1]=='left' && field[commands[0]]==1){
            for(let j=1;j<=input[0]+1;j++){
                if(field[commands[0]-commands[2]*j]!=1){
                    field[Number(commands[0])-Number(commands[2])*j]=1
                    break;
                }
            }
            if(commands[2]!=0)
                field[Number(commands[0])]=0;
        }
    }
    field.length=input[0]
    console.log(field.join(" "))
}

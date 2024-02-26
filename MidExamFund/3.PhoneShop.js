PhoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])
function PhoneShop(input) {
    let phones = input[0].split(', ')
    for(let i=1;i<input.length;i++) {
        let temp=input[i].split(' - ')
        switch (temp[0]) {
            case "Add":
                if (!phones.includes(temp[1]))
                    phones.push(temp[1])
                break;
            case "Remove":
                if (phones.includes(temp[1]))
                    phones.splice(phones.indexOf(temp[1]),1)
                break;
            case "Bonus phone":
                let bonus=temp[1].split(":")
                if(phones.includes(bonus[0]))
                    phones.splice(phones.indexOf(bonus[0])+1,0,bonus[1])
                break;
            case "Last":
                if(phones.includes(temp[1])){
                phones.splice(phones.indexOf(temp[1]),1)
                phones.push(temp[1])
                }
                break;
            case "End":
                console.log(phones.join(", "))
                break;
        }
    }
}

FriendList((["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"]))

function FriendList(input) {
    let friends = input[0].split(", ")
    let blacklisted = 0;
    let lost = 0;
    for(let i=1;i<input.length;i++){
        let temp = input[i].split(" ")
        switch (temp[0]) {
            case "Blacklist":
                if (friends.includes(temp[1])) {
                    friends[friends.indexOf(temp[1])] = "Blacklisted"
                    console.log(`${temp[1]} was blacklisted.`)
                    blacklisted++
                } else
                    console.log(`${temp[1]} was not found.`)
                break;
            case "Error":
                let index = parseInt(temp[1]);
                if (index >= 0 && index < friends.length && friends[index] !== "Blacklisted" && friends[index] !== "Lost") {
                    console.log(`${friends[temp[1]]} was lost due to an error.`)
                    friends[temp[1]] = "Lost"
                    lost++
                }
                break;
            case "Change":
                if (temp[1] >=0 && temp[1] < friends.length) {
                    console.log(`${friends[temp[1]]} changed his username to ${temp[2]}.`)
                    friends[temp[1]] = temp[2];
                }
                break;
            case "Report":
                console.log(`Blacklisted names: ${blacklisted} `)
                console.log(`Lost names: ${lost}`)
                console.log(friends.join(' '))
                return;
        }
    }
}

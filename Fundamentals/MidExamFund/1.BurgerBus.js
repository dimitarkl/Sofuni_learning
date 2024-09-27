BurgerBus(["3",
    'Sofia',
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"])
function BurgerBus(input) {
    let sum = 0;
    let j = 0;
    for (let i = 1; i <= input[0] * 3; i += 3) {
        let moneyMade = 0;
        j++
        if (j % 5 == 0)
            moneyMade = ((Number(input[i + 1] - (10 / 100) * Number(input[i + 1])) - Number(input[i + 2])))
        else if (j % 3 == 0)
            moneyMade = (Number(input[i + 1] - (Number(input[i + 2]) + Number(input[i + 2]) * (1 / 2))))
        else
            moneyMade = (Number(input[i + 1] - Number(input[i + 2])))
        console.log(`In ${input[i]} Burger Bus earned ${moneyMade.toFixed(2)} leva.`)
        sum += moneyMade

    }
    console.log(`Burger Bus total profit: ${sum.toFixed(2)} leva.`)
}

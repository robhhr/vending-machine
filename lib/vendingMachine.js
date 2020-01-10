class VendingMachine {
    constructor(inventory) {
        this.inventory = inventory
        this.coins = {
            toonie: '2',
            loonie: '1',
            quarter: '0.25',
            dime: '.10',
            nickel: '.05',
        }
        this.moneyOnMachine = 50
    }

    insertCoins(moneyAdded) {
        this.moneyOnMachine += moneyAdded
    }

    currentInventory(inventory) {
        console.log(this.inventory)
    }
}

// let firstTry = new VendingMachine()

// firstTry.insertCoins(10)
module.exports = VendingMachine

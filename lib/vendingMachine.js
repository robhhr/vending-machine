let inventory = {
    'Product 1': {
        name: 'Coke',
        price: 2.5,
        quantity: 10,
    },
    'Product 2': {
        name: 'Diet Coke',
        price: 3,
        quantity: 10,
    },
    'Product 3': {
        name: 'Gummies',
        price: 4.5,
        quantity: 10,
    },
    'Product 4': {
        name: 'Cookies',
        price: 5,
        quantity: 10,
    },
    'Product 5': {
        name: 'Frozen Pizza',
        price: 4.5,
        quantity: 10,
    },
}

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

const inventory = require('./inventory')

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
        this.userMoney = 8
    }

    insertCoins(moneyAdded) {
        this.moneyOnMachine += moneyAdded
    }

    currentInventory() {
        inventory.forEach(item => console.log(Object.values(item)))
    }
}

// const inventoryAdjustment = inventory => {
//     let productAvailable = product.quantity

//     const newInventory = inventory.map(product => {
//         if (productAvailable > 0) {
//             productAvailable--
//         } else {
//             console.log('not available')
//         }
//         return product
//     })

//     inventory = newInventory
// }

module.exports = VendingMachine

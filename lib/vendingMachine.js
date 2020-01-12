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
    }

    insertCoins(moneyAdded) {
        this.moneyOnMachine += moneyAdded
    }

    currentInventory() {
        inventory.forEach(item => console.log(Object.values(item)))
    }

    itemPurchase(selectedProduct, userMoney) {
        const product = inventory[selectedProduct]
        const price = product.price

        if (price <= [userMoney]) {
            return userMoney - price
        } else {
            return false
        }
    }

    individualInventory(selectedProduct) {
        const product = inventory[selectedProduct]
        const quantity = product.quantity

        return quantity
    }

    itemsForPurchase(selectedProduct, moneyForPurchase) {
        const product = inventory[selectedProduct]
        const name = product.name
        const price = product.price

        switch (true) {
            case [moneyForPurchase] > price:
                console.log(`you can afford ${name}`)
                break
            case [moneyForPurchase] < price:
                console.log(`you need more money for ${name}`)
                break
        }
    }
}

module.exports = VendingMachine

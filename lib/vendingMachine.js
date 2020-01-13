const inventory = require('./inventory')
const coins = require('./coins')

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

    coinsOfThatValue(coinName) {
        const name = coins[coinName]
        const quantity = name.quantity

        if (typeof coinName === 'string') {
            return quantity
        }
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

    coinValue(coinName) {
        const name = coins[coinName]
        const value = name.val

        return value
    }

    returnChange(selectedProduct, coinName, secondCoinName) {
        const name = coins[coinName]
        const value = name.val
        const secondName = coins[secondCoinName]
        const secondValue = secondName.val

        const totalPayment = value + secondValue

        const product = inventory[selectedProduct]
        const price = product.price
        const result = totalPayment - price

        switch (true) {
            case result > 1:
                console.log(`Your change is $${result} dollars`)
                break
            case result === 1:
                console.log(`Your change is $${result} dollar`)
                break
            case result < 1:
                console.log(`Your change is $${result} cents`)
            case result === 0:
                console.log(`Exact payment! Thanks`)
                break
        }
    }

    resupplyChange(selectedProduct, coinName, secondCoinName) {
        const name = coins[coinName]
        const value = name.val
        const secondName = coins[secondCoinName]
        const secondValue = secondName.val

        const totalPayment = value + secondValue

        const product = inventory[selectedProduct]
        const price = product.price
        const result = totalPayment - price

        const adjustedChange = 120 - result

        if (adjustedChange < 120) {
            const changeAdj = result + adjustedChange
            return changeAdj
        }
        console.log(changeAdj)
    }

    refillInventoryAfterPurchase(
        selectedProduct,
        coinName,
        secondCoinName,
    ) {
        const name = coins[coinName]
        const value = name.val
        const secondName = coins[secondCoinName]
        const secondValue = secondName.val

        const totalPayment = value + secondValue

        const product = inventory[selectedProduct]
        const price = product.price
        const result = totalPayment - price
        const quantity = product.quantity

        const adjustedChange = 120 - result

        if (adjustedChange !== 120) {
            const inventoryReduction = quantity - 1
            const inventoryRefill = inventoryReduction + 1

            return inventoryRefill
        }
    }
}

module.exports = VendingMachine

const VendingMachine = require('../lib/vendingMachine')
const inventory = require('../lib/inventory')

describe('vending machine', () => {
    let theVendingMachine = new VendingMachine()

    describe('insert coin to machine', () => {
        it('should return new money on machine', () => {
            theVendingMachine.insertCoins(80)
            const currentMoney = theVendingMachine.moneyOnMachine
            expect(currentMoney).toEqual(130)
            console.log(currentMoney)
        })
    })

    describe('display current inventory', () => {
        it('should return the machines current inventory', () => {
            expect(theVendingMachine.currentInventory())
            console.log(theVendingMachine.currentInventory())
        })
    })

    describe('it should return a successful purchase', () => {
        it('should return a successful purchase', () => {
            expect(theVendingMachine.itemPurchase(1, 25)).toEqual(22)
            console.log(theVendingMachine.itemPurchase(1, 25))
        })
    })

    describe('individual inventory', () => {
        it('should return the inventory of a product, eg: 7', () => {
            expect(theVendingMachine.individualInventory(3)).toEqual(
                7,
            )
            console.log(theVendingMachine.individualInventory(3))
        })
    })

    describe('affordable products', () => {
        it('should return if the product can be bought', () => {
            expect(theVendingMachine.itemsForPurchase(3, 20))
        })
    })

    describe('coin value by coin name', () => {
        it('should return the coin value by writing the name', () => {
            expect(theVendingMachine.coinValue('tenCents')).toBe(0.1)
        })
    })

    describe('return change', () => {
        it('should return the change for two coins payment', () => {
            expect(
                theVendingMachine.returnChange(
                    0,
                    'twoDollars',
                    'twoDollars',
                ),
            ).toEqual(1.5)
        })
    })
})

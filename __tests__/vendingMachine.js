const VendingMachine = require('../lib/vendingMachine')
const inventory = require('../lib/inventory')

describe('vending machine', () => {
    let theVendingMachine = new VendingMachine()

    describe('insert coin to machine', () => {
        it('should return new money on machine', () => {
            theVendingMachine.insertCoins(80)
            expect(theVendingMachine.moneyOnMachine).toEqual(130)
            console.log(theVendingMachine.moneyOnMachine)
        })
    })

    describe('display current inventory', () => {
        it('should return the machines current inventory', () => {
            expect(theVendingMachine.currentInventory()).toEqual(
                inventory,
            )
            console.log(theVendingMachine.currentInventory())
        })
    })
})

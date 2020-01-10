const VendingMachine = require('../lib/vendingMachine')

describe('vending machine', () => {
    theVendingMachine = new VendingMachine()

    describe('insert coin to machine', () => {
        it('should return new money on machine', () => {
            theVendingMachine.insertCoins(80)

            expect(theVendingMachine.moneyOnMachine).toEqual(130)

            console.log(theVendingMachine.moneyOnMachine)
        })
    })

    describe('display current inventory', () => {
        it('should return the machines current inventory', () => {
            theVendingMachine.currentInventory()

            expect(theVendingMachine.inventory).toEqual(inventory)

            console.log(theVendingMachine.inventory)
        })
    })
})

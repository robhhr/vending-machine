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
})

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
            console.log('item bought')
        })
    })

    // describe('it should reduce inventory when purchased', () => {
    //     it('should reduce inventory by 1', () => {
    //         expect(theVendingMachine.inventoryAdjustment())
    //     })
    // })
})

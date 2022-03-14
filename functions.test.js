const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test("returnTwo should equal 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("greeting should print the right message", () => {
    expect(greeting("James")).toEqual(`Hello, James`)
    expect(greeting("Jill")).toEqual("Hello, Jill")
})

describe("math functions", () => {
    test("add function sums are correct", () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })
    test("subtract function differences are correct", () => {
        expect(subtract(10, 5)).toEqual(5)
        expect(subtract(100, 77)).toEqual(23)
    })
    test("multiply function multiple is correct", () => {
        expect(multiply(2, 10)).toEqual(20)
        expect(multiply(500, 100)).toEqual(50000)
    })
    test("divide function quotient is correct", () => {
        expect(divide(10, 2)).toEqual(5)
        expect(divide(19800, 200)).toEqual(99)
    })
})

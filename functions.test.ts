const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const testArr = [1,2,3,4,5]

    test('Shuffled Array returns an array', () => {expect(Array.isArray(shuffleArray(testArr))).toBe(true)
})

//test('Array test tests arrays', () => {expect(Array.isArray(1)).toBe(true);})

    // test("Shuffled Array is the correct length", () => {
    //     expect(shuffleArray(testArr).length).toEqual(testArr.length);
    // })
})
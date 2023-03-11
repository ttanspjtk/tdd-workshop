import {primeFactorsOf} from "../mocks/PrimeFactors";

describe("PrimeFactors",()=> {
  // const primeFactors = new PrimeFactors();
  test("",()=> {
    const expectedResult = [37]

    const actualResult = primeFactorsOf(37)

    expect(expectedResult).toStrictEqual(actualResult)
  })
  test.each([
    {num: 2, expectedResult: [2]},
    {num: 3, expectedResult: [3]},
    {num: 4, expectedResult: [2, 2]},
    {num: 5, expectedResult: [5]},
    {num: 6, expectedResult: [2, 3]},
    {num: 7, expectedResult: [7]},
    {num: 8, expectedResult: [2, 2, 2]},
    {num: 9, expectedResult: [3, 3]},
    {num: 10, expectedResult: [2, 5]},
    {num: 11, expectedResult: [11]},
    {num: 12, expectedResult: [2, 2, 3]},
    {num: 13, expectedResult: [13]},
    {num: 14, expectedResult: [2, 7]},
    {num: 15, expectedResult: [3, 5]},
    {num: 16, expectedResult: [2, 2, 2, 2]},
    {num: 17, expectedResult: [17]},
    {num: 18, expectedResult: [2, 3, 3]},
    {num: 19, expectedResult: [19]},
    {num: 20, expectedResult: [2, 2, 5]},
  ])('Should return $expectedResult when given $num', ({num, expectedResult})=> {
    expect(primeFactorsOf(num)).toStrictEqual(expectedResult)
  })
})
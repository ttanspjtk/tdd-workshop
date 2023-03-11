import { FizzBuzz } from "../mocks/FizzBuzz";

describe("FizzBuzz",()=> {
  //Arrange
  let fizzBuzz;
  beforeAll(()=> {
    fizzBuzz = new FizzBuzz();
  })

  test("Should return 1 when input 1",()=> {
    //Arrange
    const expectedResult = '1'
    //Act
    const actualResult = fizzBuzz.say(1);
    //Assert
    expect(actualResult).toBe(expectedResult)
  })
  test("Should return Fizz when หาร 3 ลงตัว",()=> {
    //Arrange
    const expectedResult = "Fizz"
    //Act
    const actualResult = fizzBuzz.say(9);
    //Assert
    expect(actualResult).toBe(expectedResult)
  })
  test("Should return Buzz when หาร 5 ลงตัว",()=> {
    //Arrange
    const expectedResult = "Buzz"
    //Act
    const actualResult = fizzBuzz.say(10);
    //Assert
    expect(actualResult).toBe(expectedResult)
  })
  test("Should return Fizz when หาร 3 และ 5 ลงตัว",()=> {
    //Arrange
    const expectedResult = "FizzBuzz"
    //Act
    const actualResult = fizzBuzz.say(15);
    //Assert
    expect(actualResult).toBe(expectedResult)
  })
  xtest("",()=> {
    //Arrange
    const array:any[] = []
    const expectedResult = ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']
    //Act
    for(let i=1; i<=15; i++) {
      const item = fizzBuzz.say(i);
      array.push(item)
    }
    //Assert
    expect(array).toEqual(expectedResult)
  })
})
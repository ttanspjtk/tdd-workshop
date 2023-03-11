import { FizzBuzz } from "../mocks/FizzBuzz";

describe('FizzBuzzEach', ()=> {
  const fizzBuzz = new FizzBuzz();
  test.each([
    {num: 1, expected: '1'},
    {num: 2, expected: '2'},
    {num: 3, expected: 'Fizz'},
    {num: 4, expected: '4'},
    {num: 5, expected: 'Buzz'},
    {num: 6, expected: 'Fizz'},
    {num: 7, expected: '7'},
    {num: 8, expected: '8'},
    {num: 9, expected: 'Fizz'},
    {num: 10, expected: 'Buzz'},
    {num: 11, expected: '11'},
    {num: 12, expected: 'Fizz'},
    {num: 13, expected: '13'},
    {num: 14, expected: '14'},
    {num: 15, expected: 'FizzBuzz'},
  ])('.should say $num when given $expected', ({num, expected})=> {
    expect(fizzBuzz.say(num)).toBe(expected)
  })
})
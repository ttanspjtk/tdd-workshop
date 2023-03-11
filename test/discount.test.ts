import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { calculateDiscount } from '../mocks/Discount'

describe("discount", ()=> {
  var mock = new MockAdapter(axios)

  beforeEach(()=> { mock.resetHandlers() })

  test("get discount 10% (stub)", async ()=> {
    //Arrange
    const expectedResult = { productName: 'รองเท้า', qty: 1, price: 1000, discount: 10, netPrice: 900 }
    mock.onGet(`/discount?quantity=1&productName=รองเท้า`).reply(200, {
      discount: 10
    })
    //Act
    const actualResult = await calculateDiscount('รองเท้า', 1, 1000)
    //Assert
    expect(actualResult).toEqual(expectedResult)
  })
})
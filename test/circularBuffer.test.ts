import { CircularBuffer } from '../mocks/CircularBuffer';

describe("Circular Buffer", ()=> {
  test("Should get 1 when put 1",()=> {
    //Arrange
    const circularBuffer = new CircularBuffer();
    const expectedResult = 1;

    //Act
    circularBuffer.put(1);
    const actualResult = circularBuffer.get();

    //Assert
    expect(expectedResult).toEqual(actualResult);
  })
  // test("Should get 1 when put 1,2",()=> {
  //   //Arrange
  //   const circularBuffer = new CircularBuffer();
  //   const expectedResult = 1;

  //   //Act
  //   circularBuffer.put(1);
  //   circularBuffer.put(2);
  //   const actualResult = circularBuffer.get();

  //   //Assert
  //   expect(expectedResult).toEqual(actualResult);
  // })
  
  describe("Should get 1,2 when put 1,2", ()=> {
    test("Should get 1",()=> {
      //Arrange
      const circularBuffer = new CircularBuffer();
      const expectedResult1 = 1;
  
      //Act
      circularBuffer.put(1);
      circularBuffer.put(2);
      const actualResult1 = circularBuffer.get();
      const actualResult2 = circularBuffer.get();
  
      //Assert
      expect(expectedResult1).toEqual(actualResult1);
    })
    test("Should get 2",()=> {
      //Arrange
      const circularBuffer = new CircularBuffer();
      const expectedResult2 = 2;
  
      //Act
      circularBuffer.put(1);
      circularBuffer.put(2);
      const actualResult1 = circularBuffer.get();
      const actualResult2 = circularBuffer.get();
  
      //Assert
      expect(expectedResult2).toEqual(actualResult2);
    })
  })
  
  test("ถ้าหากมีการใส่ข้อมูลเกิน(overflow) ตัวอ่านจะขยับไป 1 ตำแหน่ง",()=> {
    //Arrange
    const circularBuffer = new CircularBuffer();
    const expectedResult = 2;

    //Act
    circularBuffer.put(1);
    circularBuffer.put(2);
    circularBuffer.put(3);
    circularBuffer.put(4);
    const actualResult = circularBuffer.get();

    //Assert
    expect(expectedResult).toEqual(actualResult);
  })
  test("ควรได้ 2 ถ้า buffer ไม่เต็ม แต่ overflow",()=> {
    //Arrange
    const circularBuffer = new CircularBuffer();
    const expectedResult = 2;

    //Act
    circularBuffer.put(1);
    circularBuffer.put(2);
    circularBuffer.put(3);
    circularBuffer.get();
    circularBuffer.put(4);
    const actualResult = circularBuffer.get();

    //Assert
    expect(expectedResult).toEqual(actualResult);
  })
})
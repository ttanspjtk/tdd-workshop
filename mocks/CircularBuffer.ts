export class CircularBuffer {
  buffer:number[] = []
  PointerRead:number = 0 
  PointerWrite:number = 0
  bufferSize: number
  count: number = 0
  /**
   *
   */
  constructor(size:number = 3) {
    this.bufferSize = size
  }

  public put(item:number) {
    // this.buffer[this.writer++] = item
    // this.writer = this.writer % this.size
    // if(this.writer === 0) {
    //   this.reader++
    // }

    this.buffer[this.PointerWrite++] = item
    if(this.count === this.bufferSize) {
      this.PointerRead++
    } else {
      this.PointerWrite %= this.bufferSize
    }
    this.count++
  }

  //เมื่อมีการ get จะเอาตัวนั้นออกจาก array ด้วย
  public get() {
    const result = this.buffer[this.PointerRead++]
    this.PointerRead %= this.bufferSize;
    this.count--
    
    return result
  }
}
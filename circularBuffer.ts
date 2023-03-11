type itemPayload = number | string

const bag: itemPayload[] = []
let item:itemPayload = 1;
let count: number = 1;

function testFifo(item:itemPayload): void {
  if(count <= 7) {
    bag.push(item);
  } else {
    
  }
}

testFifo(5)


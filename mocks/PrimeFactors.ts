// export class PrimeFactors {
//   // result:Number[] = [];
//   // i:number = 2

//   public primeNumber(num:number) {
//     let result:any[] = []
//     if (num <= 1) {
//       return result;
//     }
    
//     let i:number = 2
//     while (num > 1) {
//       while (num % i == 0) {
//         result.push(i);
//         num = num / i;
//       }
//       i++;
//     }
//     return result;
//   }
// }

export const primeFactorsOf = (num:number) => {
  const primeFactors:Number[] = [];
  for(let factor = 2; factor <= num; factor++) {
    while(num % factor === 0) {
      primeFactors.push(factor)
      num = num / factor
    }
  }
  return primeFactors;
}
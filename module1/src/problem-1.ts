function sumArray(numbers: number[]): number {
  return numbers.reduce((num1, num2) => num1 + num2, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

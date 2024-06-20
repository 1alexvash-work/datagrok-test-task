// src/index.ts

const message = "Hello, tsup!";
console.log(message);

const add = (a: number, b: number): number => {
  console.log(`Adding ${a} + ${b}`);
  return a + b;
};

const result = add(2, 30);
console.log(`Result: ${result}`);

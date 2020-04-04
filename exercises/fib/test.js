const fib = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

const cases = [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [10, 55],
  [20, 6765],
  [30, 832040],
  [40, 102334155],
  [50, 12586269025],
  [60, 1548008755920],
];
describe("Fibonacci Sequence,", () => {
  test.each(cases)(
    "when n is %p, then result should be %p",
    (num, result) => {
      const fibResult = fib(num);
      expect(fibResult).toEqual(result);
    }
  );
});
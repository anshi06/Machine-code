//Mock Functions: A mock function (or spy) is a function that allows you to test code by simulating the behavior of real functions.
//Key Features:
/**
 * 1. Capturing calls
 * 2. Return Value
 * 3. Custom Implementation
 * 4. Assertion Expectations (toHaveBeenCalledWith or toHaveBeenCalledTimes.) */
//Mock external dependencies like APIs or database calls to test just the logic of your code.
//Check if a particular function was called, how many times it was called, and with what arguments.

test("Create Mock Function", () => {
  const mockFn = jest.fn();
  mockFn("Hello");
  expect(mockFn).toHaveBeenCalledWith("Hello");
});

test("Custom Implementation of mock function", () => {
  const mockFn = jest.fn().mockImplementation((a, b) => a * b);
  const res = mockFn(2, 3);
  expect(res).toBe(6);
});

// test("Mocking Modules", () => {
//     jest.mock('./mathUtils', () => ({
//         add: jest.fn(() => 10),
//     }));
//     const { add } = require('./mathUtils');
//     expect(add()).toBe(10);
// });

import sortByAge from "../testingFunctions/sortingByAge";

test("Eldest age member should be Varun", () => {
  const users = sortByAge();
  expect(users[users.length - 1].name).toBe("Varun");
});

test("Eldest age numer is 28", () => {
  const users = sortByAge();
  expect(users[users.length - 1].age).toBe(28);
});

test("Total users are 5", () => {
  const users = sortByAge();
  expect(users.length).toBe(5);
});

test("Total users are not 6", () => {
  const users = sortByAge();
  expect(users.length).not.toBe(6);
});

test("users contains Rohan", () => {
  const users = sortByAge();
  expect(users[0]).toHaveProperty("age", 23);
});


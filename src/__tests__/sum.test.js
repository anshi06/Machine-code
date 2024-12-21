//Writing testcase for sum function using jest
import sum from "../testingFunctions/sum";

test("Two number sum should be a number", () => {
   const res =  sum(3,4);
   expect(res).toBe(7);
})

test("Two character sum should be a string", () => {
    const res =  sum('a','b');
    expect(res).toBe('ab');
 })

 test("One number and One character sum should be a string", () => {
    const res =  sum(3,'c');
    expect(res).toBe('3c');
 })

 
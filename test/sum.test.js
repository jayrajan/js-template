import { sum } from "../app/sum";

test("adds two numbers together successfully", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

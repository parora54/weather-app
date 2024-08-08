import { convert } from "./metric";

test("converts f to c correcly", () => {
  expect(convert(32, "c")).toBe(0);
});

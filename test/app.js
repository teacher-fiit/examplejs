import { equal } from 'assert';
import { add } from '../main.js';

describe("add", () => {
  it("should add", () => {
    const res = add(7, 12);
    equal(19, res);
  });
});
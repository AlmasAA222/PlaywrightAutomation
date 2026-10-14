import { sreealmas } from "./myfixture";
import { test, expect } from '@playwright/test';

test("should validate user name", () => {
  expect(sreealmas.name).toBe("Sreealmas");
  console.log(sreealmas.email);
});
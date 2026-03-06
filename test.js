const {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound
} = require('./app.js');

test("3.5 euros should be 3.745 dollars", () => {
  const result = fromEuroToDollar(3.5);
  expect(result).toBe(3.745);
});

test("1 dollar should convert correctly to yen", () => {
  const result = fromDollarToYen(1);
  expect(result).toBe((1 / 1.07) * 156.5);
});

test("1 yen should convert correctly to pound", () => {
  const result = fromYenToPound(1);
  expect(result).toBe((1 / 156.5) * 0.87);
});
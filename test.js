const { 
  fromEuroToDollar, 
  fromDollarToYen, 
  fromYenToPound 
} = require('./app.js');

test("3.5 euros should convert to dollars", () => {
  const euros = 3.5;
  const expected = 3.745;

  const result = fromEuroToDollar(euros);

  expect(result).toBe(expected);
});

test("1 dollar should convert to yen", () => {
  const dollars = 1;
  const expected = (1 / 1.07) * 156.5;

  const result = fromDollarToYen(dollars);

  expect(result).toBe(expected);
});

test("1 yen should convert to pounds", () => {
  const yen = 1;
  const expected = (1 / 156.5) * 0.87;

  const result = fromYenToPound(yen);

  expect(result).toBe(expected);
});
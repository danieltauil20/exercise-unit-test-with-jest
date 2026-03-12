// Conversion rates: 1 Euro equals
const oneEuroIs = {
    JPY: 156.5,
    USD: 1.07,
    GBP: 0.87
};

// Euro → Dollar
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

// Dollar → Yen
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yen = euros * oneEuroIs.JPY;
    return yen;
};

// Yen → Pound
const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
};

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
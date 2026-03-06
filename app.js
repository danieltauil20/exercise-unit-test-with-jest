// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

// Euro → Dollar
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

// Dollar → Yen
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};

// Yen → Pound
const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
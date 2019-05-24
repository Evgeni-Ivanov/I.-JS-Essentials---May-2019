/**
 *
 * @param {String} typeOfFruit
 * @param {Number} weightInGrams
 * @param {Number} pricePerKilogram
 */
function calculatePrice(typeOfFruit, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let totalPrice = weightInKilograms * pricePerKilogram;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`)
}

// Test

// calculatePrice("orange", 2500, 1.80);
// calculatePrice("apple", 1563, 2.35);
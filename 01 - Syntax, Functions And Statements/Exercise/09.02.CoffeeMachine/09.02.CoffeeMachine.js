/**
 *
 * @param {Array} orders
 */
function coffeeMachine(orders) {

    let moneyEarned = 0;

    for (let currentOrder of orders) {
        let currentOrderArgs = currentOrder.split(", ");

        let moneyInserted = currentOrderArgs[0];
        let drink = currentOrderArgs[1];

        let coffeeType = "";

        let drinkPrice = 0;
        let milkPrice = 0;
        let totalDrinkPrice = 0;

        function round(value, precision) {
            let multiplier = Math.pow(10, precision || 0);
            return Math.round(value * multiplier) / multiplier;
        }

        if (drink === "coffee") {
            coffeeType = currentOrderArgs[2];

            if(coffeeType === "caffeine") {
                drinkPrice = 0.80;
                totalDrinkPrice += drinkPrice;
            } else if(coffeeType === "decaf") {
                drinkPrice = 0.90;
                totalDrinkPrice += drinkPrice;
            }

            if (currentOrderArgs.length === 5) {
                milkPrice = round(drinkPrice * 0.1, 1);
                totalDrinkPrice += milkPrice;

                if(Number(currentOrderArgs[4]) !== 0) {
                    totalDrinkPrice += 0.10;
                }
            } else {
                if (Number(currentOrderArgs[3]) !== 0) {
                    totalDrinkPrice += 0.10;
                }
            }
        } else {
            drinkPrice = 0.80;
            totalDrinkPrice += drinkPrice;

            if (currentOrderArgs.length === 4) {
                milkPrice = round(drinkPrice * 0.1, 1);
                totalDrinkPrice += milkPrice;

                if(Number(currentOrderArgs[3]) !== 0) {
                    totalDrinkPrice += 0.10;
                }
            } else {
                if (Number(currentOrderArgs[2]) !== 0)
                    totalDrinkPrice += 0.10;
            }
        }

        if(moneyInserted >= totalDrinkPrice) {
            moneyEarned += totalDrinkPrice;

            console.log(`You ordered ${drink}. Price: $${totalDrinkPrice.toFixed(2)} Change: $${(moneyInserted - totalDrinkPrice).toFixed(2)}`);
        } else {
            console.log(`Not enough money for ${drink}. Need $${(totalDrinkPrice - moneyInserted).toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${moneyEarned.toFixed(2)}`);
}

// Test
//
// coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
//
// coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);
/**
 *
 * @param {Array} input
 */
function populationInTowns(input) {
    let result = {};

    for(let currentTownData of input) {

        let currentTown = currentTownData.split(" <-> ")[0];
        let currentTownPopulation = Number(currentTownData.split(" <-> ")[1]);

        if (!result.hasOwnProperty(currentTown)) {
            result[currentTown] = 0;
        }

        result[currentTown] += currentTownPopulation;
    }

    for (let currentTown of Object.entries(result)) {
        console.log(`${currentTown[0]} : ${currentTown[1]}`);
    }
}

// Test
//
// populationInTowns(["Sofia <-> 1200000",
//                    "Montana <-> 20000",
//                    "New York <-> 10000000",
//                    "Washington <-> 2345000",
//                    "Las Vegas <-> 1000000"]);
//
// populationInTowns(["Istanbul <-> 100000",
//                    "Honk Kong <-> 2100004",
//                    "Jerusalem <-> 2352344",
//                    "Mexico City <-> 23401925",
//                    "Istanbul <-> 1000"]);
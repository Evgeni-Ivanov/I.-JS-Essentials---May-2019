/**
 *
 * @param {Array} towns
 */
function townsToJSON(towns) {
    let result = [];

    for (let i = 1; i < towns.length; i++) {
        let currentTownArgs = towns[i].split("|").filter(arg => arg.length > 0).map(arg => arg.trim());
        result.push({Town:currentTownArgs[0],Latitude:Number(currentTownArgs[1]),Longitude:Number(currentTownArgs[2])});
    }

    return JSON.stringify(result);
}

// Test
//
// console.log(townsToJSON(['| Town | Latitude | Longitude |',
//                          '| Sofia | 42.696552 | 23.32601 |',
//                          '| Beijing | 39.913818 | 116.363625 |']
// ));
//
// console.log(townsToJSON(['| Town | Latitude | Longitude |',
//                          '| Veliko Turnovo | 43.0757 | 25.6172 |',
//                          '| Monatevideo | 34.50 | 56.11 |']
// ));
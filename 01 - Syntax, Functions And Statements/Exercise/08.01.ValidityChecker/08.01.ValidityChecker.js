/**
 *
 * @param {Array} coordinates
 */
function validityChecker(coordinates) {

    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    let distanceFromStartToX1Y1 = Math.sqrt((x1 ** 2) + (y1 ** 2));
    let distanceFromStartToX2Y2 = Math.sqrt((x2 ** 2) + (y2 ** 2));
    let distanceBetweenX1Y1ToX2Y2 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    if (parseInt(distanceFromStartToX1Y1) === distanceFromStartToX1Y1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (parseInt(distanceFromStartToX2Y2) === distanceFromStartToX2Y2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (parseInt(distanceBetweenX1Y1ToX2Y2) === distanceBetweenX1Y1ToX2Y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// Test
//
// validityChecker([3, 0, 0, 4]);
//
// validityChecker([2, 1, 1, 1]);
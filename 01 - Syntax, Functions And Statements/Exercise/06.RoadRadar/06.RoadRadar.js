/**
 *
 * @param {Array} input
 */
function roadRadar(input) {
    let output = "";

    let speed = Number(input[0]);
    let area = input[1];
    let speedLimit = 0;

    if (area === "residential") {
        speedLimit = 20;
    } else if (area === "city") {
        speedLimit = 50;
    } else if (area === "interstate") {
        speedLimit = 90;
    } else if (area === "motorway") {
        speedLimit = 130;
    }

    let differenceInSpeed = speed - speedLimit;

    if (differenceInSpeed >= 1) {
        if (differenceInSpeed <= 20) {
            output = "speeding";
        } else if (differenceInSpeed <= 40) {
            output = "excessive speeding";
        } else {
            output = "reckless driving";
        }
    }

    return output;
}

// Test
//
// console.log(roadRadar([40, 'city']));
//
// console.log(roadRadar([21, 'residential']));
//
// console.log(roadRadar([120, 'interstate']));
//
// console.log(roadRadar([200, 'motorway']));
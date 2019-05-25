/**
 *
 * @param {Number} numberOfSteps
 * @param {Number} footprintInMeters
 * @param {Number} speedInKilometersPerHour
 */
function timeToWalk(numberOfSteps, footprintInMeters, speedInKilometersPerHour) {
    let distanceInMeters = numberOfSteps * footprintInMeters;
    let distanceInKilometers = distanceInMeters / 1000;

    let minutesRest = Math.floor(distanceInMeters / 500);
    let secondsRest = minutesRest * 60;

    let timeToWalkInSeconds = Math.round(distanceInKilometers / speedInKilometersPerHour * 3600);


    let seconds = timeToWalkInSeconds + secondsRest;

    let hours = parseInt(seconds / 3600);
    seconds -= hours * 3600;
    let minutes = parseInt(seconds / 60);
    seconds = seconds % 60;


    let output = "";

    if (hours < 10) {
        output += `0${hours}:`;
    }
    else{
        output += `${hours}:`;
    }

    if (minutes < 10) {
        output += `0${minutes}:`;
    }
    else{
        output += `${minutes}:`;
    }

    if (seconds < 10) {
        output += `0${seconds}`;
    }
    else{
        output += `${seconds}`;
    }

    console.log(output);
}

// Test
//
// timeToWalk(4000, 0.60, 5);
//
// timeToWalk(2564, 0.70, 5.5);
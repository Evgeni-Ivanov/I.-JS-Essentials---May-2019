function circleArea(radius) {
    if (typeof(radius) === "number") {
        let circleArea = Math.PI * Math.pow(radius, 2);

        console.log(circleArea.toFixed(2));
    }
    else {
        console.log(`We cannot calculate the circle area, because we receive a ${typeof(radius)}.`);
    }
}

// Test
// circleArea(2);
// circleArea("name");
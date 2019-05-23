function circleArea(radius) {
    if (typeof(radius) != 'number') {
        console.log(`We cannot calculate the circle area, because we receive a ${typeof(radius)}.`);

        return;
    }

    let circleArea = Math.PI * Math.pow(radius, 2);

    console.log(circleArea.toFixed(2));
}

// Test
// circleArea(2);
// circleArea("name");
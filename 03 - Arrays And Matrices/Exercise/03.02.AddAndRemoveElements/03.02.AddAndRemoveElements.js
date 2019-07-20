/**
 *
 * @param {Array} commands
 */
function addAndRemoveElements(commands) {
    let currentNumber = 1;
    let array = [];

    for (const currentCommand of commands) {

        if (currentCommand === "add") {
            array.push(currentNumber);

        } else if (currentCommand === "remove") {
            array.pop();
        }

        currentNumber++;
    }

    if (array.length > 0) {
        console.log(array.join("\n"));

    } else {
        console.log("Empty");
    }

}

// Test
//
// addAndRemoveElements(['add', 'add', 'add', 'add']);
//
// addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
//
// addAndRemoveElements(['remove', 'remove', 'remove']);
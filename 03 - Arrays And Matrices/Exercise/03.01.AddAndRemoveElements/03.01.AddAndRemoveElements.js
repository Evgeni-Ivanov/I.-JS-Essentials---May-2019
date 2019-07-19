/**
 *
 * @param {Array} commands
 */
function addAndRemoveElements(commands) {
    let currentNumber = 1;
    let array = [];


    for (let currentCommand = 0; currentCommand < commands.length; currentCommand++) {

        if (commands[currentCommand] === "add") {
            array.push(currentNumber);

        } else if (commands[currentCommand] === "remove") {
            array.pop();
        }

        currentNumber++;
    }

    if (array.length > 0) {
        array.forEach((element) => console.log(element));

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
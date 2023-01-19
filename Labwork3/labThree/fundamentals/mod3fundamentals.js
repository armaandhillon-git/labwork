// 1: What are the results of these expressions

// a: "" + 1 + 0 = write-here
// b: "" - 1 + 0 = write-here
// c: true + false = write-here
// d: 6 / "3" = write-here
// e: "2" * "3" = write-here
// f: 4 + 5 + "px" = write-here
// g: "$" + 4 + 5 = write-here
// h: "4" - 2 = write-here
// i: "4px" - 2 = write-here
// j: "   -9   " + 5 = write-here
// k: "   -9   " - 5 = write-here
// l: null + 1 = write-here
// m: undefined + 1 = write-here
// n: "  \t  \n" - 2 = write-here

// 2: here's code that asks the user for two numbers and shows their sum.
//It works incorrectly. The output in the example below is 12 (for default prompt values)
//Why? Fix it. The result should be 3.

function questionTwo() {
    let a = prompt("First Number?", 1);
    let b = prompt("Second Number?", 2);

    alert(a + b); //12
}

// 3: What will be the result for these expressions?

// a: 5 > 4 = write-here
// b: "apple" > "pineapple" = write-here
// c: "2" > "12" = write-here
// d: undefined == null = write-here
// e: undefined === null = write-here
// f: null == "\n0\n" = write-here
// g: null === +"\n0\n" = write-here

/*
    4: Will an alert be shown?
    write-answer-here

    if ("0") {
        alert( 'Hello' );
    }
*/

// 5: Rewrite this if using the conditional operator '?':

function questionFive() {
    let result;
    let a = 5;
    let b = 3;

    if (a + b < 4) {
        result = 'Below';
    } else {
        result = 'Over';
    }

    console.log(result)
}

// 6: Write the delay method with arrow function, delay(func,ms)

function questionSix() {
    //Write delay arrow function here

    const hello = ( who ) => console.log('Hello ' + who);

    const delayHello = delay(hello, 300);

    delayHello('world');
}

// 7: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function questionSeven() {
    //Write isEmpty function here

    let schedule = {};

    alert( isEmpty(schedule) ) // true

    schedule['8:30'] = "get up";

    alert (isEmpty(schedule) ) // false
}

// 8: There's a ladder object that allows you to go up and down

function questionEight() {
    let ladder = {
        step: 0,
        up() {
            this.step++;
        },
        down() {
            this.step--;
        },
        showStep: function() { //shows the current step
            console.log( this.step )
        }
    }

    //Modify the code of up, down, and showStep to make the calls chainable,
    //like this:

    ladder.up().up().down().showStep(); // 1
}

// 9: Create New Accumulator
//Create a constructor function Accumulator(startingValue).
//Object that it creates should:

//  1: Store the "current value" in the property value. The starting value
//  is set to the argument of the constructor startingValue
//
//  2: The read() method should use prompt to read a new number and add it to value

//In other words, the value property is the sum of all user-entered
//values with the initial value startingValue

//Here's the demo of the code:

function questionNine() {
    //Write constructor function here

    let accumulator = new Accumulator(1); //initial value 1

    accumulator.read(); //adds the user-entered value

    accumulator.read(); //adds the user-entered value

    console.log(accumulator.value); // shows the sum of these values
}
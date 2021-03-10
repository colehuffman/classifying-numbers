let number = 0
// when button A is pressed the variable increases by 1
input.onButtonPressed(Button.A, function () {
    number += 1
    // displays the number
    basic.showString("" + (number))
})
// If button A and B are pressed, the if statements are triggered
input.onButtonPressed(Button.AB, function () {
    // If the variable is equal to 0 a Z will be displayed
    // If the variable is greater than or equal to 1 a P will be displayed
    // If the variable is less than 0 a N will be displayed
    if (number == 0) {
        basic.showString("Z")
    } else if (number >= 1) {
        basic.showString("P")
    } else if (number < 0) {
        basic.showString("N")
    }
})
// When button B is pressed the variable decreases by 1
input.onButtonPressed(Button.B, function () {
    number += -1
    // displays the number
    basic.showString("" + (number))
})

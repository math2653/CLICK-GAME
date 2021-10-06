input.onButtonPressed(Button.B, function () {
	
})
let Aenable = 0
let time = 0
let score = 0
basic.showString("START!")
let start = 1
time = 0
let bef = 0
let aft = 0
while (time <= 233000) {
    bef = aft
    if (input.buttonIsPressed(Button.B)) {
        aft = 1
    } else {
        aft = 0
    }
    if (bef == 0 && aft == 1) {
        score += 1
    }
    time += 0.00175
}
basic.forever(function () {
    if (time >= 233000) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showString("SCORE")
        basic.showNumber(score)
        time = 10
        start = 0
        Aenable = 0
    }
})

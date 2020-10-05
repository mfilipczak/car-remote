let stop = false
let wyslijY = false
let wyslijX = false
let y = 0
let x = 0
let instrukcja = 0
let ostatniaInstrukcja = -1
radio.setGroup(24)
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    wyslijX = false
    wyslijY = false
    stop = false
    if (Math.abs(x) > 900 && Math.abs(x) > 500) {
        wyslijX = true
        if (x < 0) {
            instrukcja = 1
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            instrukcja = 2
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
    } else if (Math.abs(y) > 900 && Math.abs(y) > 500) {
        wyslijY = true
        if (y < 0) {
            instrukcja = 3
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else {
            instrukcja = 4
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
    } else {
        instrukcja = 0
        stop = true
        basic.clearScreen()
    }
    if (instrukcja != ostatniaInstrukcja) {
        radio.sendNumber(instrukcja)
        ostatniaInstrukcja = instrukcja
    }
})

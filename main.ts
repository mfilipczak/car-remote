let stop = false
let wyslijY = false
let wyslijX = false
let y = 0
let x = 0
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
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
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
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
    } else {
        stop = true
        basic.clearScreen()
    }
    if (stop) {
        radio.sendNumber(0)
    } else if (wyslijX) {
        if (x < 0) {
            radio.sendNumber(1)
        } else {
            radio.sendNumber(2)
        }
    } else {
        if (y < 0) {
            radio.sendNumber(2)
        } else {
            radio.sendNumber(3)
        }
    }
})

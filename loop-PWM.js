basic.forever(function () {
    for (let i = 9; i < 171; i += 9) {
        basic.pause(300)
        pins.servoWritePin(AnalogPin.P1, i)
    }
    for (let i = 171; i > 9; i += -9) {

        basic.pause(300)
        pins.servoWritePin(AnalogPin.P1, i)
    }

})

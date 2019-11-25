

let i = 0
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, i)
})

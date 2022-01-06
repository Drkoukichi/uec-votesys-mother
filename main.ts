let a = 2
let b = 0
let qsum = 0
pins.digitalWritePin(DigitalPin.P10, 1)


input.onButtonPressed(Button.A,function () {
    a++
})

input.onButtonPressed(Button.B,function(){
    b++
})

function DoSetup () {
    radio.setGroup(50)
    
    while (!input.buttonIsPressed(Button.AB)) {
        if(a == 6){
            a = 2
            qsum = a
        }
        basic.showNumber(a)
    }
    radio.sendNumber(999)
    radio.sendNumber(a)
}

function DoInputVote () {
	
}

DoSetup()
a = 0

pins.digitalWritePin(DigitalPin.P10, 0)
pins.digitalWritePin(DigitalPin.P10, 1)

pins.i2cWriteNumber(0, qsum, NumberFormat.Int8LE, true)
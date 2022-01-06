let a = 2
let b = 0

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
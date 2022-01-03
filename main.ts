let a = 0
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
        basic.showNumber(a)
    }
    
}
function DoInputVote () {
	
}

DoSetup
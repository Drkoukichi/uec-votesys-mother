function DoSetup () {
    while (!(input.buttonIsPressed(Button.B))) {
        if (a == 6) {
            a = 2
            qsum = a
        }
        basic.showNumber(a)
    }
    qsum = a
    radio.sendNumber(a)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
}
input.onButtonPressed(Button.A, function () {
    a += 1
})
function CheckWinVote (votelist: any[]) {
    temp = 0
    ForVote = [
    0,
    0,
    0,
    0,
    0
    ]
    for (let i = 0; i <= votelist.length; i++) {
        if (votelist[i] == 0) {
            ForVote.insertAt(0, ForVote[0] + 1)
        } else if (votelist[i] == 1) {
            ForVote.insertAt(1, ForVote[1] + 1)
        } else if (votelist[i] == 2) {
            ForVote.insertAt(2, ForVote[2] + 1)
        } else if (votelist[i] == 3) {
            ForVote.insertAt(3, ForVote[3] + 1)
        } else if (votelist[i] == 4) {
            ForVote.insertAt(4, ForVote[4] + 1)
        }
    }
    for (let i = 0; i <= 4; i++) {
        let 配列: number[] = []
        if (winner[i] > temp) {
            temp = 配列[i]
            while (winner.length > 0) {
                winner.shift()
            }
            winner.push(i)
        } else if (配列[i] == temp) {
            winner.push(i)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    b += 1
})
radio.onReceivedValue(function (name, value) {
    if (mode == 1) {
        votename.push(name)
        votedate.push(value)
        GetVoteList.push(name)
        radio.sendString(name)
    }
})
function CheckVote (name: any[], vote: any[]) {
    i = 0
    o = 0
    TempVotename = []
    if (vote.length != 0) {
        for (let i = 0; i <= vote.length - 1; i++) {
            if (TempVotename.length != 0) {
                for (let o = 0; o <= TempVotename.length - 1; o++) {
                    if (name[i] == TempVotename[o]) {
                        votename.removeAt(i)
                        votedate.removeAt(i)
                    } else {
                        TempVotename.push(name[i])
                    }
                }
            }
        }
    }
}
let TempVotename: any[] = []
let o = 0
let i = 0
let b = 0
let temp = 0
let ForVote: number[] = []
let qsum = 0
let winner: number[] = []
let votedate: number[] = []
let votename: string[] = []
let GetVoteList: string[] = []
let a = 0
let mode = 0
music.setVolume(31)
mode = 0
a = 2
GetVoteList = []
votename = []
votedate = []
winner = [0]
radio.setGroup(80)
DoSetup()
radio.setGroup(90)
mode = 1
while (input.buttonIsPressed(Button.AB) == false) {
    basic.showNumber(votedate.length)
}
radio.sendNumber(100)
CheckVote(votename, votedate)
basic.clearScreen()
if (votedate.length == 0) {
    basic.showString("ERR NoVoteDate")
} else {
    CheckWinVote(votedate)
}
for (let カウンター1 = 0; カウンター1 <= qsum - 1; カウンター1++) {
    if (カウンター1 == 0) {
        basic.showString("A")
    } else if (カウンター1 == 1) {
        basic.showString("B")
    } else if (カウンター1 == 2) {
        basic.showString("C")
    } else if (カウンター1 == 3) {
        basic.showString("D")
    } else if (カウンター1 == 4) {
        basic.showString("E")
    }
    basic.showNumber(ForVote[カウンター1])
}

input.onPinPressed(TouchPin.P0, function () {
    score += 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    basic.showNumber(score)
})
input.onButtonPressed(Button.A, function () {
    score = 0
    basic.showNumber(score)
})
let score = 0
score = 0
basic.showNumber(score)

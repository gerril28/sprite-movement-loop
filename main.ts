input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.change(LedSpriteProperty.X, -1)
        Sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.change(LedSpriteProperty.Y, 1)
        Sprite.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(4, 0)
basic.forever(function () {
	
})

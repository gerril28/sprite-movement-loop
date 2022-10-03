input.onGesture(Gesture.LogoUp, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        Sprite.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(4, 0)

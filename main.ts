let Sprite = game.createSprite(4, 0)
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.Y, 1)
            Sprite.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.X, -1)
            Sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
    }
})

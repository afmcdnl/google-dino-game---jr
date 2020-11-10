/**
 * Pressing B will make your icon duck, just like in the game. Easy!
 */
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -1)
    Player_2.change(LedSpriteProperty.Y, -1)
    basic.pause(400)
    Player.change(LedSpriteProperty.Y, 1)
    Player_2.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Player_2.change(LedSpriteProperty.Y, 1)
    Player_2.change(LedSpriteProperty.X, 1)
    basic.pause(600)
    Player_2.change(LedSpriteProperty.Y, -1)
    Player_2.change(LedSpriteProperty.X, -1)
})
/**
 * This is my horrible version of the dinosaur jump game (which I'm pretty sure was the choice for 90% of everyone else).
 */
/**
 * All you have to do is press A to jump over the dynamic sprite. Simple, right?
 */
let Spike_2: game.LedSprite = null
let Player_2: game.LedSprite = null
let Player: game.LedSprite = null
let Score = 0
Player = game.createSprite(0, 3)
Player_2 = game.createSprite(0, 2)
let Spike = game.createSprite(5, 3)
basic.forever(function () {
    if (Player.isTouching(Spike)) {
        basic.showString("Game over")
        basic.showString("Score:")
        basic.showString("" + (Score))
        basic.clearScreen()
    } else if (Spike.isTouchingEdge()) {
        Score += 1
        Spike.set(LedSpriteProperty.X, randint(2, 4))
        Spike.set(LedSpriteProperty.Y, 3)
        basic.pause(randint(100, 500))
    } else {
        Spike.change(LedSpriteProperty.X, -1)
        basic.pause(300)
    }
})
basic.forever(function () {
    basic.pause(1000)
    Spike_2 = game.createSprite(5, 2)
    if (Player.isTouching(Spike_2)) {
        basic.showString("Game over")
        basic.showString("Score:")
        basic.showString("" + (Score))
        basic.clearScreen()
    } else if (Spike_2.isTouchingEdge()) {
        Score += 1
        Spike_2.set(LedSpriteProperty.X, randint(2, 4))
        Spike_2.set(LedSpriteProperty.Y, 2)
        Spike_2.delete()
    } else {
        Spike_2.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
})

function doTWO () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
function doFOUR () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
function doSomething (num: number) {
    if (num == 1) {
        doONE()
        soundExpression.giggle.playUntilDone()
    } else if (num == 2) {
        doTWO()
        soundExpression.happy.playUntilDone()
    } else if (num == 3) {
        doTHREE()
        soundExpression.hello.playUntilDone()
    } else if (num == 4) {
        doFOUR()
        music.playMelody("C5 G B A F A C5 B ", 120)
    } else if (num == 5) {
        doFIVE()
        music.playMelody("G B A G C5 B A B ", 200)
    } else {
        strip.clear()
    }
}
function doTHREE () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
function doFIVE () {
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Orange))
}
function doONE () {
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 25, NeoPixelMode.RGB)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
strip.setMatrixWidth(5)
strip.setBrightness(30)
basic.forever(function () {
    strip.clear()
    huskylens.request()
    doSomething(huskylens.readBox_s(Content3.ID))
    // strip.rotate(1)
    strip.show()
    basic.pause(500)
})

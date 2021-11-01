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
function doSomething (num: number) {
    if (num == 0) {
        doONE()
    } else if (num == 1) {
        doTWO()
    } else {
        doTHREE()
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
function doONE () {
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 1, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 3, neopixel.colors(NeoPixelColors.Orange))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Orange))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 25, NeoPixelMode.RGB)
let xval = 0
basic.forever(function () {
    strip.clear()
    strip.setMatrixWidth(5)
    strip.setBrightness(5)
    doSomething(xval % 3)
    // strip.rotate(1)
    strip.show()
    basic.pause(500)
    xval += 1
})

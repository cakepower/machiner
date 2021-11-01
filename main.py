def doTWO():
    strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.ORANGE))
def doFOUR():
    strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.ORANGE))
def doSomething(num: number):
    if num == 0:
        doONE()
    elif num == 1:
        doTWO()
    elif num == 2:
        doTHREE()
    else:
        doFOUR()
def doTHREE():
    strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(3, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.ORANGE))
def doONE():
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))
xval = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P13, 25, NeoPixelMode.RGB)

def on_forever():
    global xval
    strip.clear()
    strip.set_matrix_width(5)
    strip.set_brightness(5)
    doSomething(xval % 4)
    # strip.rotate(1)
    strip.show()
    basic.pause(500)
    xval += 1
basic.forever(on_forever)

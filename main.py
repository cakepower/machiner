xval = 0
strip = neopixel.create(DigitalPin.P13, 25, NeoPixelMode.RGB)

def on_forever():
    global xval
    strip.set_matrix_width(5)
    strip.set_brightness(10)
    strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 1, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 3, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.ORANGE))
    # strip.rotate(1)
    strip.show()
    basic.pause(500)
    xval += 1
basic.forever(on_forever)

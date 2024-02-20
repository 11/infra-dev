import ScreenUitls from './screen-utils.js'
import Grid from './grid.js'
import Mouse from './mouse.js'

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const grid = new Grid(9)
const mouse = new Mouse(canvas)

function run() {
  ScreenUitls.clear(ctx)
  grid.draw(ctx)
  // requestAnimationFrame(run)
}

run()

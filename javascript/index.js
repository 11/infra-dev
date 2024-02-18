import ScreenUitls from './screen-utils.js'
import Grid from './grid.js'

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const grid = new Grid(5)

function run() {
  ScreenUitls.clear(ctx)
  grid.draw(ctx)
  // requestAnimationFrame(run)
}

run()

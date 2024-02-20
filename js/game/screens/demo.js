import ScreenUtils from '../../engine/screens/screen-utils.js'
import Screen from '../../engine/screens/screen.js'

import Grid from '../grid.js'

export default class DemoScreen extends Screen {
  constructor() {
    super()
    this.grid = null
  }

  initialize() {
    this.grid = new Grid(9)
  }

  update() { }

  draw(ctx) {
    // ScreenUtils.clear(ctx)
    this.grid.draw(ctx)
  }
}

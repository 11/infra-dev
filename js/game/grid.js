import Colors from '../engine/graphics/colors.js'
import Utils from '../engine/utils.js'

import Tile from './tile.js'

export default class Grid {
  color = null
  size = null
  grid = null

  /**
   *
   * @param {Number} size
   * @param {String} color
   */
  constructor(size = 10, color = Colors.WHITE) {
    this.color = color

    this.size = Utils.clamp(size, 1, 50)
    this.grid = this.#createGrid(this.size)
    this.grid[0][0].ImageID = 'server'
  }

  /**
   *
   * @param {Number} size
   * @returns [][]Tile
   */
  #createGrid(size) {
    const xOffset = 8
    const yOffset = -2

    const grid = []
    for (let i = 0; i < size; i++) {
      grid[i] = []

      for (let j = 0; j < size; j++) {
        const x = i + xOffset
        const y = j + yOffset
        grid[i][j] = new Tile(x, y)
      }
    }

    return grid
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        const tile = this.grid[i][j]
        tile.draw(ctx)
      }
    }
  }
}

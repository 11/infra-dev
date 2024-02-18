import { Vector2 } from './threejs-math/index.js'
import Colors from './colors.js'

export default class Tile {
  static SIZE = 32

  constructor(x, y, color = Colors.WHITE) {
    this.color = color
    this.pos = new Vector2(x, y)

    this.iHat = new Vector2(1, 0.5).multiplyScalar(Tile.SIZE)
    this.jHat = new Vector2(-1, 0.5).multiplyScalar(Tile.SIZE)
  }

  toIsometric() {
    const i = this.iHat.clone()
    i.multiplyScalar(this.pos.x)

    const j = this.jHat.clone()
    j.multiplyScalar(this.pos.y)

    this.pos.x = i.x + j.x
    this.pos.y = i.y + j.y
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    this.toIsometric()

    const topCorner = new Vector2(this.pos.x, this.pos.y - Tile.SIZE / 2)
    const rightCorner = new Vector2(this.pos.x + Tile.SIZE, this.pos.y)
    const bottomCorner = new Vector2(this.pos.x, this.pos.y + Tile.SIZE / 2)
    const leftCorner = new Vector2(this.pos.x - Tile.SIZE, this.pos.y)
    const center = this.pos

    ctx.strokeStyle = this.color
    ctx.fillStyle = this.color
    ctx.lineWidth = 1
    ctx.beginPath()

    ctx.moveTo(topCorner.x, topCorner.y)
    ctx.lineTo(leftCorner.x, leftCorner.y)

    ctx.moveTo(topCorner.x, topCorner.y)
    ctx.lineTo(rightCorner.x, rightCorner.y)

    ctx.moveTo(bottomCorner.x, bottomCorner.y)
    ctx.lineTo(leftCorner.x, leftCorner.y)

    ctx.moveTo(bottomCorner.x, bottomCorner.y)
    ctx.lineTo(rightCorner.x, rightCorner.y)

    // center point
    ctx.fillRect(center.x - 2, center.y - 2, 4, 4)

    ctx.stroke()
  }
}

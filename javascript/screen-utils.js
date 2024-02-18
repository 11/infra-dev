const canvas = document.querySelector("canvas")

export default class ScreenUtils {
  static WIDTH = canvas.clientWidth
  static HEIGHT = canvas.clientHeight

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  static clear(ctx) {
    ctx.beginPath()
    ctx.fillRect(0, 0, ScreenUtils.WIDTH, ScreenUtils.HEIGHT)
    ctx.stroke()
  }
}

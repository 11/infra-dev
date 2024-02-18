import ScreenUtils from './screen-utils.js'

export default class Utils {
  static clear() {
    ctx.beginPath()
    ctx.fillRect(0, 0, ScreenUtils.WIDTH, ScreenUtils.HEIGHT)
    ctx.stroke()
  }

  static clamp(value, min, max) {
    if (value < min) {
      return min
    } else if (value > max) {
      return max
    }

    return value
  }
}

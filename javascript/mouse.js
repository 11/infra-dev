export default class Mouse {
  static LEFT = 0
  static RIGHT = 1
  static MIDDLE = 2

  get X() {
    return this.x
  }

  get Y() {
    return this.y
  }

  constructor(canvas) {
    this.canvas = canvas
    this.rect = canvas.getBoundingClientRect()

    this.x = 0
    this.y = 0

    this.create()
  }

  create() {
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this))
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this))
  }

  destroy() {
    this.canvas.removeEventListener('mousemove', this.onMouseMove.bind(this))
    this.canvas.removeEventListener('mouseup', this.onMouseUp.bind(this))
    this.canvas.removeEventListener('mousedown', this.onMouseDown.bind(this))
  }

  onMouseMove(event) {
    this.x = Math.floor(event.clientX - this.rect.x)
    this.y = Math.floor(event.clientY - this.rect.y)
  }

  onMouseUp(event) {
    console.log('mouse up')
  }

  onMouseDown(event) {
    console.log('mouse down')
  }
}

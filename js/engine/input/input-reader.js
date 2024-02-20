export default class InputReader {
  constructor(mouse, keyboard, inputProcessor) {
    this.mouse = mouse
    this.keyboard = keyboard
    this.inputProcessor = inputProcessor
  }

  processMouseEvents() {
    if (this.inputProcessor === null) {
      return
    }

    if (this.mouse.events.length <= 1) {
      return
    }

    const head = this.mouse.events[0]
    const prev = this.mouse.events[1]
    if (
      head.type === 'up' &&
      prev.type === 'down' &&
      head.keyCode === prev.keyCode
    ) {
      this.inputProcessor.mousePressed(head.keyCode, head.x, head.y)
    } else if (head.type === 'up') {
      this.inputProcessor.mouseUp(head.keyCode, head.x, head.y)
    } else if (head.type === 'down') {
      this.inputProcessor.mouseDown(head.keyCode, head.x, head.y)
    }
  }

  processKeyboardEvents() {
    if (this.inputProcessor === null) {
      return
    }

    if (this.keyboard.events.length <= 1) {
      return
    }

    const head = this.keyboard.events[0]
    const prev = this.keyboard.events[1]

    if (
      head.type === 'up' &&
      prev.type === 'down' &&
      head.keyCode === prev.keyCode
    ) {
      this.inputProcessor.keyPressed(head.keyCode)
    } else if (head.type === 'up') {
      this.inputProcessor.keyUp(head.keyCode)
    } else if (head.type === 'down') {
      this.inputProcessor.keyDown(head.keyCode)
    }
  }

  poll() {
    this.processMouseEvents()
    this.processKeyboardEvents()
  }
}

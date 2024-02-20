import Keyboard from './input/keyboard.js'
import Mouse from './input/Mouse.js'
import InputReader from './input/input-reader.js'
import InputProcessor from './input/input-processor.js'
import ScreenManager from './screens/screen-manager.js'

export default class Game {
  constructor(canvasId = 'canvas') {
    try {
      this.canvas = document.querySelector(canvasId)
      this.ctx = this.canvas.getContext('2d')
    } catch (error) {
      console.error(`Could not find canvas with id: ${canvasId}`)
    }

    // managing inputs
    this.keyboard = new Keyboard(this.canvas)
    this.mouse = new Mouse(this.canvas)
    this.inputProcessor = null
    this.inputReader = new InputReader(this.mouse, this.keyboard, this.inputProcessor)

    // managing screens
    this.screenManager = new ScreenManager()
  }

  setInputProcessor(newInputProcesor) {
    if (!newInputProcesor) {
      console.error('Input Processor cannot be null')
    }

    this.inputProcessor = newInputProcesor
  }

  addScreen(id, screen) {
    if (typeof id !== 'string') {
      console.error('Screen id must be a string')
    }

    this.screenManager.addScreen(id, screen)
  }

  setScreen(id) {
    if (!this.screenManager.hasScreen(id)) {
      console.error(`Screen with id ${id} does not exist`)
    }

    this.screenManager.setScreen(id)
    this.screenManager.initialize()
  }

  #input() {
    if (!this.inputProcessor) {
      return
    }

    this.inputReader.poll()
  }

  #update() {
    this.screenManager.update()
  }

  #draw() {
    this.screenManager.draw(this.ctx)
  }

  start() {
    this.#input()
    this.#update()
    this.#draw()

    requestAnimationFrame(this.start.bind(this))
  }

  end() {
    this.keyboard.destroy()
    this.mouse.destroy()
  }
}

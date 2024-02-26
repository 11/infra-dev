import DemoScreen from './game/screens/demo.js'
import InputProcessor from './engine/input/input-processor.js'
import Game from './engine/game.js'

window.game = new Game()
game.addImage('dirt-tileset', 'asset-dirt-tileset')
console.log(window.game.AssetManager.toString())

game.InputProcessor = new InputProcessor()
game.addScreen('demo', new DemoScreen())
game.setScreen('demo')

game.start()

import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeIntersection, getSnakeHead} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import {outsideGrid} from "./grid.js";

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false
let gameStarted = false


function main(currentTime) {

  if (gameOver) {
    gameOver = false

    if (confirm('You lost. Press ok to quit.')) {
      // window.location = '/'
      document.getElementById('game-board').style.width = "64px";
      document.getElementById('game-board').style.height = "64px";
    }
    return
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}





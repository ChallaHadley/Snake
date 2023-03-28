import {kept_score, update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, SCORE } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')




const bgMusic = new Audio('bg.mp3')
bgMusic.loop = true // Set the loop property to true to repeat the music

bgMusic.volume = Math.min(1, bgMusic.volume - 0.7)


function main(currentTime) {
    if (lastRenderTime === 0) {
        bgMusic.play()
      }

  if (gameOver) {
    console.log("SCORE: "+SCORE)
    window.location.href = "restart.html"
    //const score_final = document.getElementById("score");
    //score_final.innerText = "SCORE 222";
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
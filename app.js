document.addEventListener('DOMContentLoaded', () => {
const dino = document.querySelector('.dino')
const grid = document.querySelector('.grid')
let isJumping = false
let gravity = 0.9
let position = 0

function control(e){
  if (e.keyCode === 32) {
    if (!isJumping) {
      jump()
    }
  }
}
document.addEventListener('keyup', control)

function jump(){
  let count = 0
  let timerId = setInterval(function() {

    if (count === 15) {
      clearInterval(timerId)
      let downTimerId = setInterval(function () {
        if (count === 0) {
          clearInterval(downTimerId)
          isJumping = false
        }
        position -= 5
        count --
        position = position * gravity
        dino.style.bottom = position + 'px'
      },20)
    }
  
    count ++
    position += 30
    position = position * gravity
    dino.style.bottom = position + 'px'
  },20)
}

function generateObstacles(){
  let obstaclePosition = 1000
  const obstacle = document.createElement('div')
  obstacle.classList.add('obstacle')
  grid.appendChild(obstacle)
  obstacle.style.left = obstaclePosition + 'px'
}
generateObstacles()

})
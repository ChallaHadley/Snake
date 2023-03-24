let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let rotation = 0

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      rotation = 90
      //document.querySelector(".snake_head").style.transform = 'rotate(-90deg)'
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      rotation = -90
      //document.querySelector(".snake_head").style.transform = 'rotate(90deg)'
      break
  }

  document.querySelector(".snake_head").style.transform = `rotate(${rotation * 180/Math.PI}deg)`
  console.log(document.querySelector(".snake_head").style.transform = `rotate(${rotation})`)
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
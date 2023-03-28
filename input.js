let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let color = "red"
let rotation = 0




window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      color = "green"
      rotation = 180
      break
    case 's':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      color = "white"
      rotation = 0
      break
    case 'a':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      color = "yellow"
      rotation = 90
      break
    case 'd':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      color = "red"
      rotation = -90
      break
  }

  
  document.documentElement.style.setProperty('--bgcolor', color);
  document.documentElement.style.setProperty('--rotation', rotation + "deg");

})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}

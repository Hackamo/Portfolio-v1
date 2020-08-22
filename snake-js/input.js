let inputDirection = {x:0,y:0}
let lastinputDirection = {x:0,y:0}

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      e.preventDefault()
      if (lastinputDirection.y !==0) break
      inputDirection = { x:0, y: -1}
      break
    case 'ArrowDown':
      e.preventDefault()
      if (lastinputDirection.y !==0) break
      inputDirection = { x:0, y: 1}
      break
    case 'ArrowLeft':
      e.preventDefault()
      if (lastinputDirection.x !==0) break
      inputDirection = { x:-1, y: 0}
      break
    case 'ArrowRight':
      e.preventDefault()
      if (lastinputDirection.x !==0) break
      inputDirection = { x:1, y: 0}
      break
  }
})

export function getInputDirection(){
  lastinputDirection = inputDirection
  return inputDirection
}

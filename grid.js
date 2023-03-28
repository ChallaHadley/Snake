const GRID_SIZE = 21

export function randomGridPosition() {
    let new_position;
    do{
        new_position = {
            x: Math.floor(Math.random() * GRID_SIZE) + 1,
            y: Math.floor(Math.random() * GRID_SIZE) + 1
        };
    }while(new_position.x === 20 || new_position.x === 19 || new_position.y === 2);
    return new_position;

}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}
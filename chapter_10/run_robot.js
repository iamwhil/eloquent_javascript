function runRobot(state, robot, memory) {
  for (let turn = 0;;turn ++) {
    if(state.parcels.length == 0) {
      // console.log(`Done in ${turn} turns`);
      return turn;
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

module.exports = { runRobot }
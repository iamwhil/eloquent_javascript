// Compare the performance of each of the robots.
// Run each robot 100 times and find the average.

// Thoughts:
// I would like to do this with a loop and reduce.

const {
  roadGraph,
  roads,
  buildGraph,
  VillageState,
  runRobot,
  randomPick,
  mailRoute,
  routeRobot,
  findRoute,
  goalOrientedRobot,
  randomRobot
} = require('./robot_project.js')

runRobot(VillageState.random(), randomRobot);
runRobot(VillageState.random(), routeRobot);
runRobot(VillageState.random(), goalOrientedRobot);

function assessRobots(runCount, robots) {
  robots.forEach((robot) => {
    let runResults = []
    for(let i = 0; i < runCount; i++) {
      runResults.push(runRobot(VillageState.random(), robot))
    }
    console.log(`${robot.name}: ${runResults.reduce(summ) / runCount}`)
  });
}

function summ(total, runResult) { 
  return total + runResult;
}

const runCount = 100;
robots = [randomRobot, routeRobot, goalOrientedRobot]

assessRobots(runCount, robots)
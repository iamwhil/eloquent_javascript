// Can you make a faster robot?

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

// Instead of just pursuing the parcels in order, this attempts to find
// the nearest parcel and get it first, then pursuing the next parcel.
function fasterRobot({place, parcels}, route) {
  if (route == undefined || route.length == 0) {
    let parcel = nearestParcel(place, parcels);
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

// return the nearest parcel
function nearestParcel(place, parcels) {
  let routes = {};
  for (let parcelIndex in parcels) {
    routes[parcelIndex] = findRoute(roadGraph, place, parcels[parcelIndex].place)
  }

  let shortestRoute;
  for(let x in routes) {
    if(shortestRoute == undefined || routes[x].length < routes[shortestRoute].length) {
      shortestRoute = x
    }
  }
  return parcels[shortestRoute];
}

const runCount = 1000;
robots = [randomRobot, routeRobot, goalOrientedRobot, fasterRobot]

assessRobots(runCount, robots)
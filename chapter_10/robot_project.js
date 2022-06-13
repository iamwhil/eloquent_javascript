// Project: A Robot
const { buildGraph } = require('./build_graph')
const { runRobot } = require('./run_robot')

const roads = [
  "Alice's House-Bob's House", 
  "Alice's House-Post Office",
  "Daria's House-Ernie's House",
  "Ernie's House-Grete's House",
  "Grete's House-Shop",
  "Marketplace-Post Office",
  "Alice's House-Cabin",
  "Bob's House-Town Hall",
  "Daria's House-Town Hall",
  "Grete's House-Farm",
  "Marketplace-Farm",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall"
]

const roadGraph = buildGraph(roads)

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if(!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map((parcel) => {
        if(parcel.place != this.place) return parcel;
        return {place: destination, address: parcel.address}
      }).filter((parcel) => parcel.place != parcel.address);
      return new VillageState(destination, parcels);
    }
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i=0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place: place, address: address})
  }
  return new VillageState("Post Office", parcels);
}

// runRobot(VillageState.random(), randomRobot);

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
]

function routeRobot(state, memory) {
  if ( memory == undefined || memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}
// runRobot(VillageState.random(), routeRobot)

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route == undefined || route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

module.exports = {roadGraph, roads, buildGraph, VillageState, runRobot, randomPick, mailRoute, routeRobot, findRoute, goalOrientedRobot, randomRobot};

console.log(runRobot(VillageState.random(), randomRobot));
// console.log(runRobot(VillageState.random(), routeRobot));
// console.log(runRobot(VillageState.random(), goalOrientedRobot));
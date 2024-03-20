const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let {
  players: [array1 = []],
} = game;
let [gk, ...fieldPlayers] = array1;
// console.log(gk, fieldPlayers);
let allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

let players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

let { team1 = 0, x: draw = 0, team2 = 0 } = game.odds;
// console.log(team1,draw, team2);

function printGoals(...players) {
  //   console.log(players.length)
}

printGoals(...game.scored);

// printing the winning team without if else condition and terinary operator
// team1<team2 && console.log('team1 is more likely to win');
// team2< team1 && console.log('team2 is more likely to win');

// coding #challenge2

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// for(var [index,item] of game.scored.entries()){
//     console.log(`Goal ${index+1}: ${item}`)
// }

// for(var item in game.scored){
//     console.log(`Goal ${+item+1}: ${game.scored[item]}`)
// }

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// console.log(game.odds)
let gameOdds = Object.keys(game?.odds);
let sum = 0;
for (var j of gameOdds) {
  sum += game?.odds[j];
}
console.log(sum / gameOdds.length);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names

for (var names in game.odds) {
  console.log(`Odd of victory ${game[names] ?? "draw"}: ${game.odds[names]}`);
}
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }





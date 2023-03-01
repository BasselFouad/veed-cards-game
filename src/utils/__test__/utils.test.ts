import { Card } from "./modules/Card";
import { Player } from "./modules/Player";
import { simulateRound } from "./utils";

it("Validates that per round if a player has a higher card, they will get an extra point to their score", () => {
  const playerOne = new Player("Bassel");
  const playerTwo = new Player("Bien");

  playerOne.recieveCards([new Card(7), new Card(50), new Card(14)]);
  playerTwo.recieveCards([new Card(42), new Card(20), new Card(21)]);

  simulateRound(playerOne, playerTwo);
  simulateRound(playerOne, playerTwo);
  simulateRound(playerOne, playerTwo);

  expect(playerTwo.getScore()).toBeGreaterThan(playerOne.getScore());
  expect(playerOne.getScore()).toEqual(1);
  expect(playerTwo.getScore()).toEqual(2);
});

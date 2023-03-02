import { Deck } from "./modules/Deck";
import { Player } from "./modules/Player";
import { simulateRound } from "./utils/utils";

const startGame = () => {
  const playerOne = new Player("Bassel");
  const playerTwo = new Player("Bien");

  const shuffledDeck = new Deck();

  const { firstHalf, secondHalf } = shuffledDeck.splitInTwo();

  playerOne.recieveCards(firstHalf);
  playerTwo.recieveCards(secondHalf);

  for (let currentRound = 1; currentRound <= 26; currentRound++) {
    console.log("=========================");
    console.log("CURRENT ROUND", currentRound);
    simulateRound(playerOne, playerTwo);
    console.log("----------SCORE----------");
    console.log(`${playerOne.name} score : ${playerOne.getScore()}`);
    console.log(`${playerTwo.name} score : ${playerTwo.getScore()}`);
    console.log("=========================");
  }
  console.log(
    `WINNER ${
      playerOne.getScore() > playerTwo.getScore()
        ? playerOne.name
        : playerTwo.name
    }`
  );
};
startGame();

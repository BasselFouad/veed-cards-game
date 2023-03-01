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
    console.log("PLAYER ONE SCORE", playerOne.getScore());
    console.log("PLAYER TWO SCORE", playerTwo.getScore());
    console.log("=========================");
  }
};
startGame();

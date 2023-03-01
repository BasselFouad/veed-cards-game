import { Deck } from "./modules/Deck";
import { Player } from "./modules/Player";

const startGame = () => {
  const playerOne = new Player("Bassel");
  const playerTwo = new Player("Bien");

  const shuffledDeck = new Deck();

  const { firstHalf, secondHalf } = shuffledDeck.splitInTwo();

  playerOne.recieveCards(firstHalf);
  playerTwo.recieveCards(secondHalf);

  let currentPlayerOneCard = playerOne.playRound();
  let currentPlayerTwoCard = playerTwo.playRound();

  for (let currentRound = 1; currentRound <= 26; currentRound++) {
    console.log("ROUND", currentRound);
    console.log("PLAYER ONE CARD", currentPlayerOneCard?.numericValue);
    console.log("PLAYER TWO CARD", currentPlayerTwoCard?.numericValue);
    if (
      currentPlayerOneCard!.numericValue > currentPlayerTwoCard!.numericValue
    ) {
      playerOne.incrementScore();
    } else {
      playerTwo.incrementScore();
    }
    currentPlayerOneCard = playerOne.playRound();
    currentPlayerTwoCard = playerTwo.playRound();
    console.log("--------SCORE-----------");
    console.log("PLAYER ONE SCORE", playerOne.getScore());
    console.log("PLAYER TWO SCORE", playerTwo.getScore());
    console.log("--------SCORE-----------");
  }
};
startGame();

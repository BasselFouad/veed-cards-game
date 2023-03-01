import { Card } from "../modules/Card";
import { Player } from "../modules/Player";

export function generateDeck(): Array<Card> {
  const cardArray = new Array<Card>(52);
  for (let cardNumber = 1; cardNumber <= 52; cardNumber++) {
    cardArray[cardNumber - 1] = new Card(cardNumber);
  }
  return shuffle(cardArray);
}
export function shuffle(cardArray: Array<Card>): Array<Card> {
  return cardArray.sort(() => Math.random() - 0.5);
}
export const simulateRound = (playerOne: Player, playerTwo: Player) => {
  let currentPlayerOneCard = playerOne.playRound();
  let currentPlayerTwoCard = playerTwo.playRound();

  console.log("PLAYER ONE CARD", currentPlayerOneCard?.numericValue);
  console.log("PLAYER TWO CARD", currentPlayerTwoCard?.numericValue);

  if (currentPlayerOneCard!.numericValue > currentPlayerTwoCard!.numericValue) {
    playerOne.incrementScore();
  } else {
    playerTwo.incrementScore();
  }
};

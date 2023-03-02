import { Deck } from "../Deck";
import { Player } from "../Player";

it("Validates that the deck has 52 unique cards", () => {
  const shuffledDeckCards = new Deck().getDeckCards();

  expect(shuffledDeckCards).toHaveLength(52);
  expect(shuffledDeckCards).toBeDistinct();
});
it("Validates that on split, each player receives 26 cards", () => {
  const playerOne = new Player("Bassel");
  const playerTwo = new Player("Bien");

  const shuffledDeck = new Deck();

  const { firstHalf, secondHalf } = shuffledDeck.splitInTwo();

  playerOne.recieveCards(firstHalf);
  playerTwo.recieveCards(secondHalf);

  expect(playerOne.playerCards).toHaveLength(26);
  expect(playerTwo.playerCards).toHaveLength(26);
});

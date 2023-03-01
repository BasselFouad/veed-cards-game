import { Card } from "./Card";
import { generateDeck } from "../utils/utils";

export class Deck {
  protected deckCards: Array<Card>;
  constructor() {
    this.deckCards = generateDeck();
  }
  splitInTwo() {
    return {
      firstHalf: this.deckCards.slice(0, this.deckCards.length / 2),
      secondHalf: this.deckCards.slice(
        this.deckCards.length / 2,
        this.deckCards.length
      ),
    };
  }
  getDeckCards(): Array<Card> {
    return this.deckCards;
  }
}

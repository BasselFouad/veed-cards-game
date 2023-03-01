import { Card } from "./Card";

export class Player {
  protected name: string;
  protected score: number;
  public playerCards: Array<Card>;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
    this.playerCards = [];
  }
  recieveCards(halfDeck: Array<Card>) {
    this.playerCards = halfDeck;
  }
  incrementScore() {
    this.score++;
  }
  playRound() {
    return this.playerCards.pop();
  }
  getScore() {
    return this.score;
  }
}

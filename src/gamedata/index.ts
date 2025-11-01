import cardData from "./cards.yaml";

export interface SpindlewheelCard {
  // URL path to the image file for the card
  file: string;

  // The human-readable name of the card
  name?: string;

  // The top facing text of the card
  top?: string;

  // The bottom facing text of the card
  bottom?: string;
}

export interface SpindlewheelDeck {
  name: string;
  cards: SpindlewheelCard[];
}

export const decks = cardData.decks.map((deck: SpindlewheelDeck) => deck.name);

export function random(limit: number) {
  return Math.floor(Math.random() * limit);
}

export function randoms(limit: number, count: number) {
  const r = new Set<number>();
  while (r.size < count) {
    r.add(random(limit));
  }
  return [...r.values()];
}

// TODO: restrict cards to a particular deck
export function getCardsForDecks() {
  return (
    cardData.decks
      //.filter((deck: SpindlewheelDeck) => decks.includes(deck.name))
      .reduce(
        (cards: SpindlewheelCard[], deck: SpindlewheelDeck) =>
          cards.concat(deck.cards),
        []
      )
  );
}

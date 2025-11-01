import { getCardsForDecks, random, randoms } from "./gamedata";

import "./App.css";
import { useCallback, useEffect, useState } from "react";
import CardView, { type SpindlewheelCardDisplay } from "./CardView";

const cards = getCardsForDecks();

function cardDraw(limit: number): SpindlewheelCardDisplay[] {
  const indices = randoms(cards.length, limit);
  return indices.map((i) => ({ ...cards[i], flipped: random(2) == 0 }));
}

function App() {
  const [selectedCards, setSelectedCards] = useState<SpindlewheelCardDisplay[]>(
    []
  );

  useEffect(() => {
    setSelectedCards(cardDraw(5));
  }, []);

  const redrawCards = useCallback(() => setSelectedCards(cardDraw(5)), []);

  return (
    <>
      <header className="container">
        <h1>Spindlewheel</h1>
      </header>
      <main className="container">
        <div className="grid">
          {selectedCards.map((card: SpindlewheelCardDisplay) => (
            <div key={card.file}>
              <CardView card={card} />
            </div>
          ))}
        </div>
        <button onClick={redrawCards}>Draw Again</button>
      </main>
    </>
  );
}

export default App;

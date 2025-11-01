import { getCardsForDecks, randoms, type SpindlewheelCard } from "./gamedata";

import "./App.css";
import { useCallback, useEffect, useState } from "react";

const cards = getCardsForDecks();

function cardDraw(limit: number): SpindlewheelCard[] {
  const indices = randoms(cards.length, limit);
  return indices.map((i) => cards[i]);
}

function App() {
  const [selectedCards, setSelectedCards] = useState<SpindlewheelCard[]>([]);

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
          {selectedCards.map((card: SpindlewheelCard) => (
            <div key={card.file}>
              <img src={card.file} />
            </div>
          ))}
        </div>
        <button onClick={redrawCards}>Draw Again</button>
      </main>
    </>
  );
}

export default App;

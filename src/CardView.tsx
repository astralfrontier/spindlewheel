import { type SpindlewheelCard } from "./gamedata";

import styles from "./CardView.module.scss";

export interface SpindlewheelCardDisplay extends SpindlewheelCard {
  flipped: boolean;
}

interface CardViewProps {
  card: SpindlewheelCardDisplay;
}

function CardView(props: CardViewProps) {
  const { card } = props;

  return (
    <>
      <div className={card.flipped ? styles.flipped : styles.unflipped}>
        <img src={card.file} />
      </div>
    </>
  );
}

export default CardView;

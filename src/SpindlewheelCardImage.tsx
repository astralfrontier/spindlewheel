import { type SpindlewheelCard } from "./gamedata";

import styles from "./SpindlewheelCardImage.module.scss";

export interface SpindlewheelCardState extends SpindlewheelCard {
  flipped: boolean;
}

interface SpindlewheelCardImageProps {
  card: SpindlewheelCardState;
}

function SpindlewheelCardImage(props: SpindlewheelCardImageProps) {
  const { card } = props;
  let rotationInDegrees: number = 0;

  if (card.flipped) {
    rotationInDegrees += 180;
  }

  return (
    <>
      <div className={styles.cardframe}>
        <img style={{ rotate: `${rotationInDegrees}deg` }} src={card.file} />
      </div>
    </>
  );
}

export default SpindlewheelCardImage;

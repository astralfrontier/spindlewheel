import type { SpindlewheelCardState } from "./SpindlewheelCardImage";
import SpindlewheelCardImage from "./SpindlewheelCardImage";

import styles from "./SpindlewheelCardSlot.module.scss";

interface SpindlewheelCardSlotProps {
  card: SpindlewheelCardState;
  slot: string;
}

function SpindlewheelCardSlot(props: SpindlewheelCardSlotProps) {
  const { card, slot } = props;

  return (
    <>
      <div>
        <div className={styles.imageframe}>
          <SpindlewheelCardImage card={card} />
        </div>
        <div className={styles.slotname}>{slot.toUpperCase()}</div>
      </div>
    </>
  );
}

export default SpindlewheelCardSlot;

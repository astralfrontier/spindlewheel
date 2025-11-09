import { useEffect, useState } from "react";
import type { SpindlewheelCardState } from "./SpindlewheelCardImage";

import styles from "./SpindlewheelSpread.module.scss";
import { drawCards } from "./gamedata";
import SpindlewheelCardSlot from "./SpindlewheelCardSlot";

interface SpindlewheelSpreadProps {
  spreadname: string;
}

const slotNames = ["core", "crossing", "boon", "bane", "desire", "method"];

function SpindlewheelSpread(props: SpindlewheelSpreadProps) {
  const { spreadname } = props;
  const [slots, setSlots] = useState<Record<string, SpindlewheelCardState>>({});

  useEffect(() => {
    const newSlots: Record<string, SpindlewheelCardState> = {};
    const cards = drawCards(6);
    slotNames.forEach((slot) => {
      const card = cards.pop();
      if (card) {
        newSlots[slot] = { ...card, flipped: false };
        console.dir(newSlots[slot]);
      } else {
        console.error("Card was null while drawing");
      }
    });
    setSlots(newSlots);
  }, [spreadname]);

  return (
    <>
      <div className={styles.spreadgrid}>
        {slotNames.map((slotName) => (
          <div
            className={`${styles[slotName]} ${styles.spreadcell}`}
            key={slotName}
          >
            {slots[slotName] && (
              <SpindlewheelCardSlot
                card={slots[slotName]}
                slot={slotName}
              ></SpindlewheelCardSlot>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default SpindlewheelSpread;

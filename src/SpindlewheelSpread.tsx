import { useCallback, useEffect, useState } from "react";

import styles from "./SpindlewheelSpread.module.scss";
import { drawCards, type SpindlewheelCardState } from "./gamedata";
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
    const cards = drawCards(slotNames.length);
    slotNames.forEach((slot) => {
      const card = cards.pop();
      if (card) {
        newSlots[slot] = { ...card };
        console.dir(newSlots[slot]);
      }
    });
    setSlots(newSlots);
  }, [spreadname]);

  const flipCardAction = useCallback(
    (slotName: string) => () => {
      setSlots((slots) => ({
        ...slots,
        [slotName]: { ...slots[slotName], flipped: !slots[slotName].flipped },
      }));
    },
    []
  );

  const drawCardAction = useCallback(
    (slotName: string) => () => {
      setSlots((slots) => ({
        ...slots,
        [slotName]: { ...drawCards(1)[0] },
      }));
    },
    []
  );

  return (
    <>
      <div className={styles.spreadgrid}>
        {slotNames.map((slotName) => (
          <div
            className={`${styles[slotName]} ${styles.spreadcell}`}
            key={slotName}
          >
            <button onClick={flipCardAction(slotName)}>
              <i className="fa-solid fa-up-down"></i>
            </button>
            <button onClick={drawCardAction(slotName)}>
              <i className="fa-solid fa-rotate"></i>
            </button>
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

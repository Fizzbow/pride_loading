import { useState } from "react";

import "./App.css";
import Wave from "./compontents/Wave";
import {
  PrideColorType,
  Row,
  PRIDE_COLOR,
  // TRANS_COLOR,
} from "./constant/pride.constant";

function App() {
  return (
    <main>
      <header>Pride</header>
      <RowsLoadingGroup colors={PRIDE_COLOR} />
      {/* <RowsLoadingGroup colors={TRANS_COLOR} /> */}
    </main>
  );
}

const RowsLoadingGroup = ({ colors }: { colors: PrideColorType[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pride, _] = useState<Row<PrideColorType>>({
    colors,
    num: 10,
  });
  const [gap, setGap] = useState<number>(2);
  const [size, setSize] = useState<number>(4);
  return (
    <section>
      <label htmlFor="gap" style={{ display: "flex", flexDirection: "row" }}>
        <strong>GAP:</strong>
        <input
          id="gap"
          type="range"
          name="gap"
          max="4"
          min="0"
          value={gap}
          onChange={(event) => {
            if (!event.target.value) return;
            setGap(Number(event.target.value));
          }}
        />
        {gap}
      </label>

      <label htmlFor="size" style={{ display: "flex", flexDirection: "row" }}>
        <strong>SIZE:</strong>
        <input
          id="size"
          type="range"
          name="size"
          value={size}
          max="6"
          min="1"
          onChange={(event) => {
            if (!event.target.value) return;
            setSize(Number(event.target.value));
          }}
        />
        {size}
      </label>
      <Wave size={size} gap={gap} colors={pride.colors} num={pride.num} />
    </section>
  );
};

export default App;

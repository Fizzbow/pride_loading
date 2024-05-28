import { useState } from "react";

import "./App.css";
import Flag from "./compontents/Flag";
import { PrideColorType, Row, pride_color } from "./constant/pride.constant";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pride, _] = useState<Row<PrideColorType>>({
    colors: pride_color,
    num: 10,
  });
  const [gap, setGap] = useState<number>(2);
  const [size, setSize] = useState<number>(4);
  return (
    <main>
      <header>Pride</header>
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
      <Flag size={size} gap={gap} colors={pride.colors} num={pride.num} />
    </main>
  );
}

export default App;

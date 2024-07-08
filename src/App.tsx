import { useState } from "react";

import "./App.css";

import {
  PrideColorType,
  Row,
  PRIDE_COLOR,
  LGBT_COLOR,
  // TRANS_COLOR,
} from "./constant/pride.constant";
import Wave from "./components/Wave";
import Bar from "./components/Bar";
import { MagicRainbowButton } from "./components/RainbowBtn";

function App() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <header>Pride</header>
      <RowsLoadingGroup colors={PRIDE_COLOR} />
      <FlagControlGroup colors={PRIDE_COLOR} />
      {/* <RowsLoadingGroup colors={TRANS_COLOR} /> */}
      <MagicRainbowButton />
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

const FlagControlGroup = ({ colors }: { colors: PrideColorType[] }) => {
  return <Bar num={2} colors={LGBT_COLOR} />;
};

export default App;

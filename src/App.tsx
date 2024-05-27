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
  return (
    <main>
      <header>Pride</header>
      <Flag colors={pride.colors} num={pride.num} />
    </main>
  );
}

export default App;

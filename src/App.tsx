import "./App.css";
import { PrideProgress } from "./components/PrideProgress";

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

      <PrideProgress />
    </main>
  );
}

export default App;

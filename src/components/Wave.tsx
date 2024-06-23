import { Row } from "../constant/pride.constant";

import "./Wave.css";
interface WaveProps {
  gap: number;
  size: number;
}

const Wave = <T,>({ colors, size = 4, gap = 2 }: WaveProps & Row<T>) => {
  const transMatrices = (rows: Row<T>["colors"]) => {
    let currId = 1;
    return [1, 2].map(() =>
      rows.map((color) => {
        return { color, id: currId++ };
      })
    );
  };
  console.log("transMatrices", transMatrices(colors));
  return (
    <div
      style={{
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {transMatrices(colors).map((row, idx) => (
        <div
          className="row base_transition"
          key={idx}
          style={{
            display: "flex",
            gap: `${gap * 0.25}rem`,
            flexDirection: "row",
          }}
        >
          {row.map((color, colorIdx) => (
            <div
              className="row_item"
              key={`${color.id}`}
              style={
                {
                  width: "calc(var(--size) * 1rem)",
                  height: "calc(var(--size) * 1rem)",
                  marginBottom: `${gap * 0.25}rem`,
                  animationDelay: `${(colorIdx + 1) * 0.2}s`,
                  backgroundColor: `${color.color}`,
                  "--size": size * 0.25,
                } as React.CSSProperties
              }
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Wave;

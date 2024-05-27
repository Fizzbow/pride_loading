import { Row } from "../constant/pride.constant";

import "./Flag.css";

const Flag = <T,>({ colors, num }: Row<T>) => {
  const transMatrices = (rows: Row<T>["colors"]): string[][] => {
    return rows.map((color) => new Array(num).fill(color));
  };
  return (
    <div
      style={{
        maxHeight: "400px",
        borderRadius: "3px",
        overflow: "hidden",
      }}
    >
      {transMatrices(colors).map((row, idx) => (
        <div
          className="row"
          key={idx}
          style={{ display: "flex", flexDirection: "row" }}
        >
          {row.map((color, colorIdx) => (
            <div
              className="row_item"
              key={`${idx}_${colorIdx}`}
              style={{
                width: "80px",
                height: "20px",
                // animationDelay: `${(colorIdx + 2) * 5}s`,
                backgroundColor: `${color}`,
              }}
            >
              <span
                style={{
                  border: "solid 1px black",
                }}
              >
                x: {colorIdx}|y:{idx}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Flag;

import { Row } from "../constant/pride.constant";

import "./Flag.css";

const Flag = <T,>({ colors, num }: Row<T>) => {
  const transMatrices = (
    rows: Row<T>["colors"]
  ): { color: string; id: number }[][] => {
    let currId = 1;
    return rows.map((color) =>
      new Array(num).fill(null).map(() => {
        return { color, id: currId++ };
      })
    );
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
          {row.map((color) => (
            <div
              className="row_item"
              key={`${color.id}`}
              style={{
                width: "80px",
                height: "20px",
                animationDelay: `${color.id + 1}s`,
                backgroundColor: `${color.color}`,
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Flag;

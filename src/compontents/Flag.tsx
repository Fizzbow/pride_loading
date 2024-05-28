import { Row } from "../constant/pride.constant";

import "./Flag.css";
interface FlagProps {
  gap: number;
  size: number;
}

const Flag = <T,>({ colors, num, size = 4, gap = 2 }: FlagProps & Row<T>) => {
  //   const transMatrices = (
  //     rows: Row<T>["colors"]
  //   ): { color: string; id: number }[][] => {
  //     let currId = 1;
  //     return rows.map((color) =>
  //       new Array(num).fill(null).map(() => {
  //         return { color, id: currId++ };
  //       })
  //     );
  //   };
  const transMatrices = (rows: Row<T>["colors"]) => {
    let currId = 1;
    return [1, 2].map(() =>
      rows.map((color) => {
        return { color, id: currId++ };
      })
    );
  };
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
          className="row"
          key={idx}
          style={{
            display: "flex",
            gap: `${gap * 0.25}rem`,
            flexDirection: "row",

            transition: "all 1s  cubic-bezier(.5, -1, .5, 2)",
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
                  transition: "all 1s  cubic-bezier(.5, -1, .5, 2)",
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

export default Flag;

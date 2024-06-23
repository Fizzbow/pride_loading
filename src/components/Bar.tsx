import { Row } from "../constant/pride.constant";

const Bar = <T,>({ colors }: Row<T>) => {
  const toLinear = (colors: T[]) => {
    const len = colors.length;
    const linear = colors
      .map((g, idx) => {
        return `rgb(${g}) ${idx * (100 / len)}%`;
      })
      .join(" , ");

    return `linear-gradient(90deg, ${linear})`;
  };

  return (
    <div
      className="pride_bar"
      style={{
        height: "12px",
        background: toLinear(colors),
      }}
    ></div>
  );
};

export default Bar;

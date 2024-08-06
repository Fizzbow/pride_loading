import { LGBT_COLOR } from "../constant/pride.constant";
import "./pride.css";

export const PrideProgress = () => {
  const symmetricColors = (arr: string[]) => {
    const prefixedArray = arr.map((item) => `rgb(${item})`);

    return [...prefixedArray, ...prefixedArray.slice(0, -1).reverse()].join(
      " , "
    );
  };
  return (
    <div
      className="prideProgress"
      style={{
        height: "20px",
        width: "100%",
        background: `
          repeating-linear-gradient(
            to right,${symmetricColors(LGBT_COLOR)}
          )
        `,
      }}
    />
  );
};

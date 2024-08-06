import useRainbow from "./useRainbow";
import "./rainbow.css";
export const MagicRainbowButton = ({ intervalDelay = 700 }) => {
  const colors = useRainbow({ intervalDelay });
  const colorKeys = Object.keys(colors);

  const linearGradient = colorKeys
    .map((_l, idx) => `var(${colorKeys[colorKeys.length - (idx + 1)]})`)
    .join(" , ");

  return (
    <div
      className="animated-gradient"
      style={{
        height: "20px",
        ...colors,
        background: `
          repeating-linear-gradient(
            to right,${linearGradient}
          )
        `,
      }}
    />
  );
};

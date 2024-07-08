import useRainbow from "./useRainbow";
export const MagicRainbowButton = ({ intervalDelay = 1000 }) => {
  const colors = useRainbow({ intervalDelay });
  const colorKeys = Object.keys(colors);

  const transition = colorKeys.map((l) => `${l} 900ms linear`).join(",");

  const linearGradient = colorKeys
    .map((_l, idx) => `var(${colorKeys[colorKeys.length - (idx + 1)]})`)
    .join(" , ");

  return (
    <div
      style={{
        height: "20px",
        width: "100%",
        ...colors,
        transition,
        background: `
          linear-gradient(
            to right,${linearGradient}
          )
        `,
      }}
    />
  );
};

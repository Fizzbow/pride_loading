import useIncrementingNumber from "./useIncrementingNumber";
import { LGBT_COLOR } from "../constant/pride.constant";

const paletteSize = LGBT_COLOR.length;
const useRainbow = ({ intervalDelay = 1000 }) => {
  // Get an ever-incrementing number from another custom hook*
  const intervalCount = useIncrementingNumber(intervalDelay);

  const customVariant = () => {
    const colors: Record<string, string> = {};

    LGBT_COLOR.forEach((_color, idx) => {
      colors[`--magic-rainbow-color-${idx}`] = `rgb(${LGBT_COLOR[idx]})`;
    });

    // requestAnimationFrame(customVariant);

    return colors;
  };

  return customVariant();
};
export default useRainbow;

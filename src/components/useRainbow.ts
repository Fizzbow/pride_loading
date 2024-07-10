import useIncrementingNumber from "./useIncrementingNumber";
import { LGBT_COLOR } from "../constant/pride.constant";
import { useEffect, useState } from "react";

const paletteSize = LGBT_COLOR.length;
const useRainbow = ({ intervalDelay = 1000 }) => {
  // Get an ever-incrementing number from another custom hook*
  const intervalCount = useIncrementingNumber(intervalDelay);

  useEffect(() => {
    const animationId = requestAnimationFrame(customVariant);

    return () => cancelAnimationFrame(animationId);
  }, [intervalCount]);

  const customVariant = () => {
    const colors: Record<string, string> = {};

    LGBT_COLOR.forEach((_color, idx) => {
      colors[`--magic-rainbow-color-${idx}`] = `rgb(${
        LGBT_COLOR[(intervalCount + (idx + 1)) % paletteSize]
      })`;
    });

    requestAnimationFrame(customVariant);

    return colors;
  };

  return customVariant();
};
export default useRainbow;

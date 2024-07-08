import React from "react";
import useIncrementingNumber from "./useIncrementingNumber";
import { LGBT_COLOR } from "../constant/pride.constant";

const paletteSize = LGBT_COLOR.length;
const useRainbow = ({ intervalDelay = 100 }) => {
  // Register all custom properties.
  // This only ever needs to be done once, so there are no dependencies.
  React.useEffect(() => {
    for (let i = 0; i < LGBT_COLOR.length; i++) {
      const propertyName = `--magic-rainbow-color-${i}`;

      // if (CSS.supports(`(${propertyName}: initial)`)) return;
      console.log({ propertyName });
      try {
        CSS.registerProperty({
          name: `${propertyName}`,
          initialValue: `rgb(${LGBT_COLOR[i]})`,
          syntax: "<color>",
          inherits: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  // Get an ever-incrementing number from another custom hook*
  const intervalCount = useIncrementingNumber(intervalDelay);
  // Using that interval count, derive each current color value

  const customVariant = () => {
    const colors: Record<string, string> = {};

    LGBT_COLOR.forEach((_color, idx) => {
      colors[`--magic-rainbow-color-${idx}`] = `rgb(${
        LGBT_COLOR[(intervalCount + (idx + 1)) % paletteSize]
      })`;
    });

    return colors;
  };

  return customVariant();
};
export default useRainbow;

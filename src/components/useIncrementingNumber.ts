import React from "react";

function useIncrementingNumber(delay: number) {
  const [count, setCount] = React.useState(0);

  const savedCallback = React.useRef(() => setCount((c) => c + 1));

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return count;
}

export default useIncrementingNumber;
import { useState, useEffect } from "react";

const useCounter = (forward = true) => {
  const [count, setCounter] = useState(0);
  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      setCounter((previousCount) =>
        forward ? previousCount + 1 : previousCount - 1
      );
    }, 1000);
    return () => clearInterval(timerIdentifier);
  }, [count, forward]);

  return count;
};

export default useCounter;

import React from "react";

export const useRefCallback = (value, deps) => {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, deps ?? [value]);

  const result = React.useCallback((...args) => {
    ref.current;
  }, []);

  return result;
};

import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, fallback: T) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);
    if (item) {
      if (item === "undefined") {
        return undefined;
      }

      return JSON.parse(item);
    }

    return fallback;
  };

  const [value, setValue] = useState<T>(getInitialValue());

  useEffect(() => {
    if (!value) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

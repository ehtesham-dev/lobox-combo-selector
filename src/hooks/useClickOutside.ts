import { useEffect, RefObject } from "react";

export const useClickOutside = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      const current = ref.current;

      if (!target || !current) return;

      if (target instanceof Node && !current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

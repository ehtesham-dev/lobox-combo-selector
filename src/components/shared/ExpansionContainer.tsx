import * as React from "react";
import { ExpansionContainerProp } from "@/types/components/ExpansionContainer.ts";
import "@/assets/style/components/_expansion-container.scss";
import { useEffect, useRef, useState } from "react";

export const ExpansionContainer: React.FC<ExpansionContainerProp> = ({ isExpand = true, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement || !isExpand) {
      setMaxHeight(0);
      return;
    }
    const scrollHeight = containerElement.scrollHeight;
    setMaxHeight(scrollHeight);
  }, [isExpand, children]);

  return (
    <div
      ref={containerRef}
      className={`expansion-container ${isExpand ? "expansion-container--extended" : ""}`}
      style={{ maxHeight: `${maxHeight}px` }}
    >
      {children}
    </div>
  );
};

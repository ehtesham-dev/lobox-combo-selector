import * as React from "react";
import "@/assets/style/components/_icon-loader.scss";
import { useEffect, useMemo, useState } from "react";
import { IconLoaderProp } from "@/types/components/IconLoader.ts";

export const IconLoader: React.FC<IconLoaderProp> = ({ name }) => {
  const [sanitizedName, setSanitizedName] = useState("");

  const toKebabCase = (target: string): string =>
    target
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
      .replace(/\s+/g, "-")
      .toLowerCase();

  useEffect(() => {
    setSanitizedName(toKebabCase(name));
  }, [name]);

  const Icon = useMemo(
    () => React.lazy(() => import(`@/assets/icons/${sanitizedName}.svg?react`)),
    [sanitizedName],
  );
  return (
    <React.Suspense>
      <div className="icon">
        <Icon className="icon__svg" />
      </div>
    </React.Suspense>
  );
};

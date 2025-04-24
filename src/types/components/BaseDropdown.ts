import * as React from "react";

interface ItemsStructure {
  label: string;
  value: any;
  isActive: boolean;
}

export interface BaseDropdownProp {
  children?: React.ReactNode;
  placeholder?: string;
  items: Array<ItemsStructure>;
}

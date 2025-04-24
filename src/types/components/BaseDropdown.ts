import { ReactNode } from "react";

export interface ItemsStructure {
  label: string;
  value: any;
  isActive?: boolean;
}

export interface BaseDropdownProp {
  children?: ReactNode;
  placeholder?: string;
  items: Array<ItemsStructure>;
}

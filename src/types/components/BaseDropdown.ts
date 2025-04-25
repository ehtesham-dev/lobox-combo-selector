import { ReactNode } from "react";

export interface ItemsStructure {
  label: string;
  value: any;
  isActive?: boolean;
}

export interface BaseDropdownProp {
  children?: ReactNode;
  placeholder?: string;
  noItemText?: string;
  items: Array<ItemsStructure>;

  handleSelectItem?: (item: ItemsStructure) => void;
}

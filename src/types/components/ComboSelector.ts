import { ItemsStructure } from "@/types/components/BaseDropdown.ts";

export type SelectionTypes = "single" | "multi";
export interface ComboSelectProp {
  items: Array<ItemsStructure>;
  selectionType?: SelectionTypes;

  handleSelectedItemsUpdate: (items: Array<ItemsStructure>) => void;
}

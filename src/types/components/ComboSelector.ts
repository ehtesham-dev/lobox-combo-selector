import { ItemsStructure } from "@/types/components/BaseDropdown.ts";

export type SelectionTypes = "single" | "multi";
export interface ComboSelectProp {
  items: Array<ItemsStructure>;
  selectionType?: SelectionTypes;
  name: string;
  placeholder?: string;

  handleSelectedItemsUpdate: (items: Array<ItemsStructure>) => void;
}

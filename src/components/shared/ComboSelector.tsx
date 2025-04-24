import { BaseDropdown } from "@/components/shared/BaseDropdown.tsx";
import { ItemsStructure } from "@/types/components/BaseDropdown.ts";
import { TextField } from "@/components/shared/TextField.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import * as React from "react";
import { ComboSelectProp } from "@/types/components/ComboSelector.ts";

export const ComboSelector: React.FC<ComboSelectProp> = ({ items = [], selectionType = "multi" }) => {
  const [searchKey, setSearchKey] = useState("");
  const [selectedItems, setSelectedItems] = useState<Array<ItemsStructure>>([]);
  const [dropdownItems, setDropdownItems] = useState<Array<ItemsStructure>>([]);

  useEffect(() => {
    prepareDropDownItems();
  }, [items, selectedItems]);

  const prepareDropDownItems = () => {
    const preparedItems = items.map((item) => {
      return selectedItems.includes(item.value) ? { ...item, isActive: true } : item;
    });

    setDropdownItems(preparedItems);
  };

  const handleSingleTypeSelection = (item: ItemsStructure) => {
    if (selectedItems.includes(item.value)) {
      setSelectedItems([]);
      return;
    }

    setSelectedItems([item.value]);
  };

  const handleMultiTypeSelection = (item: ItemsStructure) => {
    if (selectedItems.includes(item.value)) {
      setSelectedItems((prev) => prev.filter((alreadySelectedItem) => alreadySelectedItem !== item.value));
      return;
    }

    setSelectedItems((prev) => [...prev, item.value]);
  };

  const handleSelectItem = (item: ItemsStructure) => {
    selectionType === "single" ? handleSingleTypeSelection(item) : handleMultiTypeSelection(item);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <BaseDropdown items={dropdownItems} handleSelectItem={handleSelectItem}>
      <TextField
        name="random"
        appendIcon="arrow-down"
        placeholder="Select From Subjects"
        onInputHandler={handleInputChange}
      />
    </BaseDropdown>
  );
};

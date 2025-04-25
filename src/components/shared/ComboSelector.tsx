import { BaseDropdown } from "@/components/shared/BaseDropdown.tsx";
import { ItemsStructure } from "@/types/components/BaseDropdown.ts";
import { TextField } from "@/components/shared/TextField.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import * as React from "react";
import { ComboSelectProp } from "@/types/components/ComboSelector.ts";
import "@/assets/style/components/_combo-selector.scss";

export const ComboSelector: React.FC<ComboSelectProp> = ({
  items = [],
  name,
  placeholder = "Select from items",
  selectionType = "multi",
  handleSelectedItemsUpdate = () => {},
}) => {
  const [searchKey, setSearchKey] = useState("");
  const [selectedItems, setSelectedItems] = useState<Array<ItemsStructure>>([]);
  const [dropdownItems, setDropdownItems] = useState<Array<ItemsStructure>>([]);
  const [additionalItems, setAdditionalItems] = useState<Array<ItemsStructure>>([]);

  useEffect(() => {
    prepareDropDownItems();
  }, [searchKey, items, selectedItems, additionalItems]);

  useEffect(() => {
    handleSelectedItemsUpdate(selectedItems);
  }, [selectedItems]);

  const filterDropDownItems = (items: ItemsStructure[]): ItemsStructure[] => {
    if (!searchKey.trim()) return items;

    const pattern = searchKey
      .trim()
      .toLowerCase()
      .split("")
      .map((char) => char.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"))
      .join(".*");

    const regex = new RegExp(pattern, "i");

    return items.filter((item) => regex.test(item.label));
  };

  const prepareDropDownItems = () => {
    const aggregatedItems = [...items, ...additionalItems];
    const preparedItems = aggregatedItems.map((item) => {
      return selectedItems.includes(item.value) ? { ...item, isActive: true } : item;
    });

    const filteredSearchKeywordItems = filterDropDownItems(preparedItems);

    setDropdownItems(filteredSearchKeywordItems);
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

  const addAdditionalItem = () => {
    const aggregatedItems = [...items, ...additionalItems];

    if (aggregatedItems.find((item: ItemsStructure) => item.label === searchKey || item.value === searchKey))
      return;

    const targetItem: ItemsStructure = { label: searchKey, value: searchKey };
    setAdditionalItems((perv) => [...perv, targetItem]);

    handleSelectItem(targetItem);
  };

  const handleSelectItem = (item: ItemsStructure) => {
    selectionType === "single" ? handleSingleTypeSelection(item) : handleMultiTypeSelection(item);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <div className="combo-selector">
      <BaseDropdown items={dropdownItems} handleSelectItem={handleSelectItem}>
        <TextField
          model={searchKey}
          name={name}
          appendIcon="arrow-down"
          placeholder={placeholder}
          onInputHandler={handleSearchChange}
          onEnterHandler={addAdditionalItem}
        />
      </BaseDropdown>
    </div>
  );
};

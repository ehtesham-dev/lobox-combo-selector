import { ExpansionContainer } from "@/components/shared/ExpansionContainer.tsx";
import { useRef, useState } from "react";
import * as React from "react";
import { BaseDropdownProp, ItemsStructure } from "@/types/components/BaseDropdown.ts";
import "@/assets/style/components/_base-dropdown.scss";
import { IconLoader } from "@/components/shared/IconLoader.tsx";
import { useClickOutside } from "@/hooks/useClickOutside.ts";

export const BaseDropdown: React.FC<BaseDropdownProp> = ({
  children,
  placeholder = "See Items",
  items = [],
  noItemText = "No item found!",
  handleSelectItem = () => {},
}) => {
  const [isDropDownVisible, setDropDownVisibility] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setDropDownVisibility(false));

  const isActiveItem = (item: ItemsStructure) => (item.isActive ? "list__item--active" : "");

  return (
    <div className="base-dropdown" ref={dropdownRef}>
      <div className="base-dropdown__activator" onClick={() => setDropDownVisibility(true)}>
        {children ?? <span>{placeholder}</span>}
      </div>
      <ExpansionContainer isExpand={isDropDownVisible}>
        <ul className="dropdown__list list">
          {items.length ? (
            items.map((item) => (
              <li
                onClick={() => handleSelectItem(item)}
                className={`list__item ${isActiveItem(item)}`}
                key={item.value}
              >
                <span className="list__item-name">{item.label}</span>
                {isActiveItem(item) && <IconLoader name="tick-square" className="list__item-icon" />}
              </li>
            ))
          ) : (
            <li className="list__item">
              <span className="list__item-name">{noItemText}</span>
            </li>
          )}
        </ul>
      </ExpansionContainer>
    </div>
  );
};

import { ExpansionContainer } from "@/components/shared/ExpansionContainer.tsx";
import { useState } from "react";
import * as React from "react";
import { BaseDropdownProp } from "@/types/components/BaseDropdown.ts";
import "@/assets/style/components/_base-dropdown.scss";
import { IconLoader } from "@/components/shared/IconLoader.tsx";

export const BaseDropdown: React.FC<BaseDropdownProp> = ({
  children,
  placeholder = "See Items",
  items = [],
  noItemText = "No item found!",
}) => {
  const [isDropDownVisible, setDropDownVisibility] = useState(false);

  const ToggleDropDownVisibility = () => {
    setDropDownVisibility(true);
  };

  const isActiveItem = (item) => (item.isActive ? "list__item--active" : "");

  const ListItemViewer = () => {
    return items.length ? (
      items.map((item) => (
        <li className={`list__item ${isActiveItem(item)}`} key={item.value}>
          <span className="list__item-name">{item.label}</span>
          {isActiveItem(item) && <IconLoader name="tick-square" className="list__item-icon" />}
        </li>
      ))
    ) : (
      <li className="list__item">
        <span className="list__item-name">{noItemText}</span>
      </li>
    );
  };

  return (
    <div className="base-dropdown">
      <div className="base-dropdown__activator" onClick={ToggleDropDownVisibility}>
        {children ?? <span>{placeholder}</span>}
      </div>
      <ExpansionContainer isExpand={isDropDownVisible}>
        <ul className="dropdown__list list">{ListItemViewer()}</ul>
      </ExpansionContainer>
    </div>
  );
};
